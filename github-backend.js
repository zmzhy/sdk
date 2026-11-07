/*
 * github-backend.js
 * 以 GitHub 仓库作为后端的轻量层（无服务器架构）
 * 数据全部存放在仓库的 data/ 目录下，通过 GitHub Contents API 读写。
 *
 * 目录结构：
 *   data/leaderboard.json          全球排行榜（单文件，合并式写入）
 *   data/saves/<playerId>.json     每位玩家的云存档
 *   data/workshop/index.json       创意工坊索引
 *   data/workshop/items/<id>.json  创意工坊条目（玩家自创战队）
 */
const GHBackend = (function () {
    'use strict';

    const CFG_KEY = 'vct_gh_config';
    const PLAYER_KEY = 'vct_player_id';
    const API_BASE = 'https://api.github.com';
    const CACHE_TTL = 30000;

    const defaults = { owner: '', repo: '', branch: 'main', token: '' };
    let cfg = Object.assign({}, defaults);
    const memo = new Map();

    /* ---------- 基础工具 ---------- */

    function loadConfig() {
        try {
            const raw = localStorage.getItem(CFG_KEY);
            if (raw) cfg = Object.assign({}, defaults, JSON.parse(raw));
        } catch (e) {
            cfg = Object.assign({}, defaults);
        }
        return cfg;
    }

    function getConfig() {
        return Object.assign({}, cfg);
    }

    function setConfig(next) {
        cfg = Object.assign({}, cfg, next, { branch: (next.branch || cfg.branch || 'main').trim() });
        localStorage.setItem(CFG_KEY, JSON.stringify(cfg));
        memo.clear();
        return getConfig();
    }

    function clearConfig() {
        cfg = Object.assign({}, defaults);
        localStorage.removeItem(CFG_KEY);
        memo.clear();
    }

    function isConfigured() {
        return !!(cfg.owner && cfg.repo);
    }

    function canWrite() {
        return !!(cfg.owner && cfg.repo && cfg.token);
    }

    function playerId() {
        let id = localStorage.getItem(PLAYER_KEY);
        if (!id) {
            id = 'p_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 10);
            localStorage.setItem(PLAYER_KEY, id);
        }
        return id;
    }

    function b64encode(text) {
        const bytes = new TextEncoder().encode(text);
        let bin = '';
        const chunk = 0x8000;
        for (let i = 0; i < bytes.length; i += chunk) {
            bin += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
        }
        return btoa(bin);
    }

    function b64decode(b64) {
        const clean = (b64 || '').replace(/\s/g, '');
        const bin = atob(clean);
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        return new TextDecoder().decode(bytes);
    }

    function apiUrl(path) {
        return API_BASE + path;
    }

    function buildHeaders(hasBody) {
        const h = {
            Accept: 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28'
        };
        if (cfg.token) h.Authorization = 'Bearer ' + cfg.token.trim();
        if (hasBody) h['Content-Type'] = 'application/json';
        return h;
    }

    async function api(path, options) {
        const opts = options || {};
        const hasBody = !!opts.body;
        const resp = await fetch(apiUrl(path), {
            method: opts.method || 'GET',
            headers: buildHeaders(hasBody),
            body: hasBody ? JSON.stringify(opts.body) : undefined
        });
        if (!resp.ok) {
            const err = new Error('GitHub API ' + resp.status + ' ' + (opts.method || 'GET') + ' ' + path);
            err.status = resp.status;
            err.path = path;
            try { err.detail = await resp.json(); } catch (e) { err.detail = null; }
            throw err;
        }
        if (resp.status === 204) return null;
        return resp.json();
    }

    function encodePath(p) {
        return p.split('/').map(encodeURIComponent).join('/');
    }

    /* ---------- 文件读写 ---------- */

    async function getFile(path, opts) {
        const useCache = !(opts && opts.noCache);
        const key = 'file:' + path;
        if (useCache && memo.has(key) && Date.now() - memo.get(key).at < CACHE_TTL) {
            return memo.get(key).value;
        }
        let data;
        try {
            const d = await api('/repos/' + cfg.owner + '/' + cfg.repo + '/contents/' + encodePath(path) + '?ref=' + encodeURIComponent(cfg.branch));
            if (Array.isArray(d)) {
                data = { dir: true, items: d.map(function (it) {
                    return { name: it.name, path: it.path, sha: it.sha, size: it.size, type: it.type };
                }) };
            } else {
                const text = b64decode(d.content);
                let parsed = null;
                try { parsed = JSON.parse(text); } catch (e) { parsed = null; }
                data = { data: parsed, text: text, sha: d.sha, size: d.size };
            }
        } catch (e) {
            if (e.status === 404) return null;
            throw e;
        }
        memo.set(key, { at: Date.now(), value: data });
        return data;
    }

    async function putFile(path, payload, message, opts) {
        const text = typeof payload === 'string' ? payload : JSON.stringify(payload, null, 2);
        const body = {
            message: message || ('update ' + path),
            content: b64encode(text),
            branch: cfg.branch
        };
        for (let attempt = 0; attempt < ((opts && opts.retries) || 2); attempt++) {
            let sha = (opts && opts.sha) || null;
            if (!sha) {
                try {
                    const cur = await api('/repos/' + cfg.owner + '/' + cfg.repo + '/contents/' + encodePath(path) + '?ref=' + encodeURIComponent(cfg.branch));
                    if (cur && !Array.isArray(cur)) sha = cur.sha;
                } catch (e) {
                    if (e.status !== 404) throw e;
                }
            }
            if (sha) body.sha = sha; else delete body.sha;
            try {
                const res = await api('/repos/' + cfg.owner + '/' + cfg.repo + '/contents/' + encodePath(path), { method: 'PUT', body: body });
                memo.delete('file:' + path);
                return res;
            } catch (e) {
                if (e.status === 409 || e.status === 422) {
                    if (opts && opts.throwOnConflict) throw e;
                    await new Promise(function (r) { setTimeout(r, 400 + attempt * 600); });
                    continue;
                }
                throw e;
            }
        }
        throw new Error('写入冲突，请稍后重试');
    }

    async function deleteFile(path, message, opts) {
        let sha = opts && opts.sha;
        if (!sha) {
            const cur = await getFile(path, { noCache: true });
            if (!cur) return true;
            sha = cur.sha;
        }
        await api('/repos/' + cfg.owner + '/' + cfg.repo + '/contents/' + encodePath(path), {
            method: 'DELETE',
            body: { message: message || ('delete ' + path), sha: sha, branch: cfg.branch }
        });
        memo.delete('file:' + path);
        return true;
    }

    async function readPublic(path) {
        if (!isConfigured()) return null;
        const url = 'https://raw.githubusercontent.com/' + cfg.owner + '/' + cfg.repo + '/' + cfg.branch + '/' + path + '?t=' + Date.now();
        try {
            const r = await fetch(url, { cache: 'no-store' });
            if (!r.ok) return null;
            return JSON.parse(await r.text());
        } catch (e) {
            return null;
        }
    }

    /* ---------- 连接与权限 ---------- */

    async function testConnection() {
        if (!isConfigured()) throw new Error('请先填写仓库 owner / repo');
        const repo = await api('/repos/' + cfg.owner + '/' + cfg.repo);
        let user = null;
        if (cfg.token) {
            try { user = await api('/user'); } catch (e) { user = null; }
        }
        return {
            ok: true,
            fullName: repo.full_name,
            private: repo.private,
            defaultBranch: repo.default_branch,
            canPush: !!(repo.permissions && repo.permissions.push),
            tokenValid: !!user,
            user: user ? user.login : null
        };
    }

    /* ---------- 云存档 ---------- */

    const SAVE_VERSION = 2;

    function slimState(state) {
        if (!state) return null;
        const copy = JSON.parse(JSON.stringify(state));
        if (Array.isArray(copy.market) && copy.market.length > 60) {
            copy.market = copy.market.slice(0, 60);
        }
        return copy;
    }

    async function cloudSave(state, meta) {
        requireWrite();
        const pid = playerId();
        const payload = {
            schema: SAVE_VERSION,
            playerId: pid,
            playerName: (meta && meta.name) || (state && state.teamName) || '未命名',
            updatedAt: new Date().toISOString(),
            state: slimState(state)
        };
        await putFile('data/saves/' + pid + '.json', payload, 'cloud save ' + pid.slice(0, 10));
        return payload;
    }

    async function cloudLoad() {
        requireConfig();
        const pid = playerId();
        const file = await getFile('data/saves/' + pid + '.json', { noCache: true });
        if (!file || !file.data) return null;
        return file.data;
    }

    async function cloudSaveExists() {
        if (!isConfigured()) return false;
        const pid = playerId();
        try {
            const file = await getFile('data/saves/' + pid + '.json', { noCache: true });
            return !!(file && file.data);
        } catch (e) {
            return false;
        }
    }

    async function listCloudSaves() {
        requireConfig();
        const dir = await getFile('data/saves', { noCache: true });
        if (!dir || !dir.items) return [];
        return dir.items.filter(function (i) { return i.name.endsWith('.json'); });
    }

    /* ---------- 排行榜 ---------- */

    const LB_PATH = 'data/leaderboard.json';

    function normalizeEntry(raw) {
        const e = raw || {};
        return {
            id: String(e.id || ''),
            name: String(e.name || '匿名经理').slice(0, 24),
            team: String(e.team || '').slice(0, 24),
            tag: String(e.tag || '').slice(0, 8),
            region: String(e.region || '').slice(0, 16),
            season: Number(e.season) || 1,
            week: Number(e.week) || 0,
            wins: Number(e.wins) || 0,
            losses: Number(e.losses) || 0,
            power: Number(e.power) || 0,
            championships: Number(e.championships) || 0,
            mvps: Number(e.mvps) || 0,
            updatedAt: e.updatedAt || new Date().toISOString()
        };
    }

    function better(a, b) {
        if (!a) return b;
        if (!b) return a;
        if (b.championships !== a.championships) return b.championships > a.championships ? b : a;
        if (b.wins !== a.wins) return b.wins > a.wins ? b : a;
        if (b.power !== a.power) return b.power > a.power ? b : a;
        return a;
    }

    function sortEntries(list) {
        return list.slice().sort(function (x, y) {
            if (y.championships !== x.championships) return y.championships - x.championships;
            if (y.wins !== x.wins) return y.wins - x.wins;
            const xr = x.losses ? x.wins / x.losses : x.wins;
            const yr = y.losses ? y.wins / y.losses : y.wins;
            if (yr !== xr) return yr - xr;
            return y.power - x.power;
        }).slice(0, 100);
    }

    async function fetchLeaderboard() {
        const file = await getFile(LB_PATH, { noCache: true });
        if (file && file.data) {
            return { entries: sortEntries((file.data.entries || []).map(normalizeEntry)), updatedAt: file.data.updatedAt || null, source: 'api' };
        }
        const pub = await readPublic(LB_PATH);
        if (pub) return { entries: sortEntries((pub.entries || []).map(normalizeEntry)), updatedAt: pub.updatedAt || null, source: 'cdn' };
        return { entries: [], updatedAt: null, source: 'empty' };
    }

    async function submitScore(entry) {
        requireWrite();
        const fresh = normalizeEntry(Object.assign({}, entry, { id: playerId() }));
        for (let attempt = 0; attempt < 4; attempt++) {
            const file = await getFile(LB_PATH, { noCache: true });
            const existing = file && file.data && Array.isArray(file.data.entries) ? file.data.entries.map(normalizeEntry) : [];
            const idx = existing.findIndex(function (e) { return e.id === fresh.id; });
            if (idx >= 0) existing[idx] = better(existing[idx], fresh);
            else existing.push(fresh);
            const entries = sortEntries(existing);
            try {
                await putFile(LB_PATH, { updatedAt: new Date().toISOString(), entries: entries }, 'leaderboard update', { throwOnConflict: true, retries: 1 });
                return { entries: entries, rank: entries.findIndex(function (e) { return e.id === fresh.id; }) + 1 };
            } catch (e) {
                if (e.status === 409 || e.status === 422) {
                    await new Promise(function (r) { setTimeout(r, 300 + attempt * 500); });
                    continue;
                }
                throw e;
            }
        }
        throw new Error('排行榜更新冲突过多，请稍后重试');
    }

    async function resetLeaderboard() {
        requireWrite();
        await putFile(LB_PATH, { updatedAt: new Date().toISOString(), entries: [] }, 'reset leaderboard');
        return true;
    }

    /* ---------- 创意工坊 ---------- */

    const WS_INDEX = 'data/workshop/index.json';

    async function fetchWorkshopIndex() {
        const file = await getFile(WS_INDEX, { noCache: true });
        if (file && file.data) return file.data.items || [];
        const pub = await readPublic(WS_INDEX);
        return (pub && pub.items) || [];
    }

    async function fetchWorkshopItem(id) {
        const safe = String(id || '').replace(/[^a-zA-Z0-9_-]/g, '');
        if (!safe) throw new Error('无效的工坊 ID');
        const file = await getFile('data/workshop/items/' + safe + '.json', { noCache: true });
        return file && file.data ? file.data : null;
    }

    async function publishWorkshop(item) {
        requireWrite();
        const safe = String(item.id || '').replace(/[^a-zA-Z0-9_-]/g, '') || ('w_' + Date.now().toString(36));
        const payload = {
            schema: 1,
            id: safe,
            author: String(item.author || '匿名').slice(0, 24),
            authorId: playerId(),
            name: String(item.name || '未命名战队').slice(0, 24),
            tag: String(item.tag || '').slice(0, 8),
            color: String(item.color || '#FF4655').slice(0, 16),
            region: String(item.region || '').slice(0, 16),
            description: String(item.description || '').slice(0, 200),
            roster: Array.isArray(item.roster) ? item.roster.slice(0, 10) : [],
            power: Number(item.power) || 0,
            createdAt: item.createdAt || new Date().toISOString(),
            downloads: 0
        };
        await putFile('data/workshop/items/' + safe + '.json', payload, 'publish workshop ' + safe);
        for (let attempt = 0; attempt < 4; attempt++) {
            const file = await getFile(WS_INDEX, { noCache: true });
            const items = (file && file.data && Array.isArray(file.data.items)) ? file.data.items : [];
            const meta = {
                id: payload.id, name: payload.name, tag: payload.tag, author: payload.author,
                color: payload.color, region: payload.region, power: payload.power,
                description: payload.description, createdAt: payload.createdAt, downloads: payload.downloads || 0
            };
            const next = items.filter(function (i) { return i.id !== payload.id; });
            next.unshift(meta);
            try {
                await putFile(WS_INDEX, { updatedAt: new Date().toISOString(), items: next.slice(0, 200) }, 'workshop index update', { throwOnConflict: true, retries: 1 });
                return payload;
            } catch (e) {
                if (e.status === 409 || e.status === 422) {
                    await new Promise(function (r) { setTimeout(r, 300 + attempt * 500); });
                    continue;
                }
                throw e;
            }
        }
        throw new Error('工坊索引更新冲突，请稍后重试');
    }

    async function deleteWorkshop(id) {
        requireWrite();
        const safe = String(id || '').replace(/[^a-zA-Z0-9_-]/g, '');
        await deleteFile('data/workshop/items/' + safe + '.json', 'delete workshop ' + safe);
        for (let attempt = 0; attempt < 3; attempt++) {
            const file = await getFile(WS_INDEX, { noCache: true });
            const items = (file && file.data && Array.isArray(file.data.items)) ? file.data.items : [];
            const next = items.filter(function (i) { return i.id !== safe; });
            try {
                await putFile(WS_INDEX, { updatedAt: new Date().toISOString(), items: next }, 'workshop index delete', { throwOnConflict: true, retries: 1 });
                return true;
            } catch (e) {
                if (e.status === 409) { await new Promise(function (r) { setTimeout(r, 400); }); continue; }
                throw e;
            }
        }
        return true;
    }

    /* ---------- 初始化 ---------- */

    function requireConfig() {
        if (!isConfigured()) throw new Error('尚未配置 GitHub 仓库');
    }

    function requireWrite() {
        requireConfig();
        if (!cfg.token) throw new Error('缺少访问令牌（Token），无法写入云端');
    }

    loadConfig();

    return {
        getConfig: getConfig,
        setConfig: setConfig,
        clearConfig: clearConfig,
        isConfigured: isConfigured,
        canWrite: canWrite,
        playerId: playerId,
        testConnection: testConnection,
        cloudSave: cloudSave,
        cloudLoad: cloudLoad,
        cloudSaveExists: cloudSaveExists,
        listCloudSaves: listCloudSaves,
        fetchLeaderboard: fetchLeaderboard,
        submitScore: submitScore,
        resetLeaderboard: resetLeaderboard,
        fetchWorkshopIndex: fetchWorkshopIndex,
        fetchWorkshopItem: fetchWorkshopItem,
        publishWorkshop: publishWorkshop,
        deleteWorkshop: deleteWorkshop,
        getFile: getFile,
        putFile: putFile,
        deleteFile: deleteFile,
        readPublic: readPublic
    };
})();
