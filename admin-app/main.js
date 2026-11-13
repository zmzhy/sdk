'use strict';

const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const fs = require('fs');

const CONFIG_PATH = path.join(__dirname, 'config.json');
const VISITS_PATH = 'data/stats/visits.json';
const BROADCAST_PATH = 'data/mail/broadcast.json';
const API_BASE = 'https://api.github.com';

/* 打包后 __dirname 位于只读 asar，覆盖配置写到用户数据目录 */
function userConfigPath() {
    return path.join(app.getPath('userData'), 'config.json');
}

function readJsonFile(file) {
    try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { return null; }
}

/* ---------- 配置 ---------- */

function loadConfig() {
    const base = readJsonFile(CONFIG_PATH) || {};
    const override = readJsonFile(userConfigPath()) || {};
    const cfg = Object.assign({}, base, override);
    return {
        owner: String(cfg.owner || '').trim(),
        repo: String(cfg.repo || '').trim(),
        branch: String(cfg.branch || 'main').trim(),
        token: String(cfg.token || '').trim()
    };
}

function saveConfig(next) {
    const cfg = Object.assign(loadConfig(), next || {});
    const target = userConfigPath();
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, JSON.stringify(cfg, null, 2), 'utf8');
    return cfg;
}

function publicConfig() {
    const cfg = loadConfig();
    return {
        owner: cfg.owner,
        repo: cfg.repo,
        branch: cfg.branch,
        hasToken: !!cfg.token,
        tokenTail: cfg.token ? cfg.token.slice(-4) : ''
    };
}

/* ---------- GitHub API ---------- */

async function ghFetch(pathname, options) {
    const opts = options || {};
    const cfg = loadConfig();
    if (!cfg.owner || !cfg.repo) throw new Error('尚未配置仓库');
    const headers = {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'vct-admin-console'
    };
    if (cfg.token) headers.Authorization = 'Bearer ' + cfg.token;
    if (opts.body) headers['Content-Type'] = 'application/json';
    const res = await fetch(API_BASE + pathname, {
        method: opts.method || 'GET',
        headers: headers,
        body: opts.body ? JSON.stringify(opts.body) : undefined
    });
    if (!res.ok) {
        let detail = '';
        try {
            const json = await res.json();
            detail = json && json.message ? json.message : '';
        } catch (e) { detail = ''; }
        const err = new Error('GitHub ' + res.status + (detail ? '：' + detail : ''));
        err.status = res.status;
        throw err;
    }
    if (res.status === 204) return null;
    return res.json();
}

function encodePath(p) {
    return p.split('/').map(encodeURIComponent).join('/');
}

function repoPath() {
    const cfg = loadConfig();
    return '/repos/' + cfg.owner + '/' + cfg.repo + '/contents/';
}

async function getFile(p) {
    const cfg = loadConfig();
    try {
        const d = await ghFetch(repoPath() + encodePath(p) + '?ref=' + encodeURIComponent(cfg.branch));
        if (Array.isArray(d)) {
            return { dir: true, items: d.map(i => ({ name: i.name, path: i.path, sha: i.sha, size: i.size, type: i.type })) };
        }
        const text = Buffer.from(d.content || '', 'base64').toString('utf8');
        let data = null;
        try { data = JSON.parse(text); } catch (e) { data = null; }
        return { data: data, text: text, sha: d.sha, size: d.size };
    } catch (e) {
        if (e.status === 404) return null;
        throw e;
    }
}

async function putFile(p, payload, message) {
    const cfg = loadConfig();
    if (!cfg.token) throw new Error('缺少访问令牌，无法写入仓库');
    const text = typeof payload === 'string' ? payload : JSON.stringify(payload, null, 2);
    let sha = null;
    try {
        const cur = await ghFetch(repoPath() + encodePath(p) + '?ref=' + encodeURIComponent(cfg.branch));
        if (cur && !Array.isArray(cur)) sha = cur.sha;
    } catch (e) {
        if (e.status !== 404) throw e;
    }
    const body = {
        message: message || ('update ' + p),
        content: Buffer.from(text, 'utf8').toString('base64'),
        branch: cfg.branch
    };
    if (sha) body.sha = sha;
    return ghFetch(repoPath() + encodePath(p), { method: 'PUT', body: body });
}

/* ---------- 业务数据 ---------- */

async function testConnection() {
    const cfg = loadConfig();
    if (!cfg.owner || !cfg.repo) throw new Error('尚未配置仓库');
    const repo = await ghFetch('/repos/' + cfg.owner + '/' + cfg.repo);
    let user = null;
    if (cfg.token) {
        try { user = await ghFetch('/user'); } catch (e) { user = null; }
    }
    return {
        fullName: repo.full_name,
        private: !!repo.private,
        defaultBranch: repo.default_branch,
        canPush: !!(repo.permissions && repo.permissions.push),
        tokenValid: !!user,
        login: user ? user.login : null
    };
}

async function getStats() {
    const out = {
        saves: null, leaderboard: null, visits: null,
        errors: [], updatedAt: new Date().toISOString()
    };
    const tasks = [
        getFile('data/saves')
            .then(f => { out.saves = f && f.items ? f.items.filter(i => i.name.endsWith('.json')).length : 0; })
            .catch(e => out.errors.push('云存档：' + e.message)),
        getFile('data/leaderboard.json')
            .then(f => { out.leaderboard = f && f.data && Array.isArray(f.data.entries) ? f.data.entries.length : 0; })
            .catch(e => out.errors.push('排行榜：' + e.message)),
        getFile(VISITS_PATH)
            .then(f => { out.visits = f && f.data ? f.data : null; })
            .catch(e => out.errors.push('访问统计：' + e.message))
    ];
    await Promise.all(tasks);
    return out;
}

async function listMails() {
    const f = await getFile(BROADCAST_PATH);
    return f && f.data && Array.isArray(f.data.items) ? f.data.items : [];
}

async function sendMail(payload) {
    const from = String((payload && payload.from) || 'VCT 联盟').slice(0, 24);
    const subject = String((payload && payload.subject) || '').trim();
    const body = String((payload && payload.body) || '').trim();
    const reward = Math.max(0, Number(payload && payload.reward) || 0);
    if (!subject) throw new Error('邮件标题不能为空');
    if (!body) throw new Error('邮件正文不能为空');
    const items = await listMails();
    const id = 'bc_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
    items.unshift({ id: id, from: from, subject: subject, body: body, reward: reward, ts: Date.now() });
    const next = items.slice(0, 100);
    await putFile(BROADCAST_PATH, { updatedAt: new Date().toISOString(), items: next }, 'mail: broadcast ' + subject.slice(0, 20));
    return next;
}

async function deleteMail(id) {
    const items = await listMails();
    const next = items.filter(i => String(i.id) !== String(id));
    await putFile(BROADCAST_PATH, { updatedAt: new Date().toISOString(), items: next }, 'mail: delete broadcast');
    return next;
}

async function listSaves() {
    const f = await getFile('data/saves');
    if (!f || !f.items) return [];
    return f.items
        .filter(i => i.name.endsWith('.json'))
        .map(i => ({ name: i.name.replace(/\.json$/, ''), size: i.size, path: i.path }))
        .sort((a, b) => b.size - a.size);
}

async function listLeaderboard(limit) {
    const f = await getFile('data/leaderboard.json');
    const entries = f && f.data && Array.isArray(f.data.entries) ? f.data.entries : [];
    return entries.slice(0, Math.max(1, Math.min(100, Number(limit) || 10)));
}

/* ---------- 窗口 ---------- */

let mainWindow = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1240,
        height: 860,
        minWidth: 980,
        minHeight: 660,
        backgroundColor: '#0F1923',
        title: 'VCT 运营后台',
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: false
        }
    });
    mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));
    mainWindow.on('closed', () => { mainWindow = null; });
}

/* ---------- IPC ---------- */

ipcMain.handle('app:config', () => publicConfig());
ipcMain.handle('app:set-token', (event, token) => {
    saveConfig({ token: String(token || '').trim() });
    return publicConfig();
});
ipcMain.handle('app:open-external', (event, url) => {
    const target = String(url || '');
    if (!/^https?:\/\//i.test(target)) throw new Error('只允许打开 http/https 链接');
    return shell.openExternal(target);
});
ipcMain.handle('gh:test', () => testConnection());
ipcMain.handle('gh:stats', () => getStats());
ipcMain.handle('gh:mail:list', () => listMails());
ipcMain.handle('gh:mail:send', (event, payload) => sendMail(payload));
ipcMain.handle('gh:mail:delete', (event, id) => deleteMail(id));
ipcMain.handle('gh:saves', () => listSaves());
ipcMain.handle('gh:leaderboard', (event, limit) => listLeaderboard(limit));

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
