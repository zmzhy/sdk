'use strict';

/* VCT 运营后台 · 渲染进程 */

const api = window.adminApi;

const state = { config: null, stats: null, mails: [], saves: [] };

function $(id) { return document.getElementById(id); }

function esc(text) {
    return String(text == null ? '' : text)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function fmt(n) { return Number(n || 0).toLocaleString('zh-CN'); }

function errMsg(err) {
    return String((err && err.message) || err || '未知错误')
        .replace(/^Error invoking remote method '[^']+':\s*/, '')
        .replace(/^Error:\s*/, '');
}

function toast(msg, ok) {
    const el = $('toast');
    el.textContent = msg;
    el.style.borderLeftColor = ok === false ? '#FF4655' : '#7DDD91';
    el.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove('show'), 2400);
}

function todayKey() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

/* ---------- 标签页 ---------- */

document.querySelectorAll('nav button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        $('panel-' + btn.dataset.tab).classList.add('active');
        if (btn.dataset.tab === 'console') $('console-in').focus();
    });
});

/* ---------- 头部状态 ---------- */

async function refreshHeader() {
    state.config = await api.config();
    const cfg = state.config;
    $('repo-label').textContent = cfg.owner + '/' + cfg.repo + ' @ ' + cfg.branch;
    const dot = $('conn-dot');
    if (cfg.hasToken) {
        $('token-label').textContent = 'Token：已配置 ••••' + cfg.tokenTail;
        dot.className = 'dot';
    } else {
        $('token-label').textContent = 'Token：未配置（无法写入）';
        dot.className = 'dot err';
    }
}

/* ---------- 数据总览 ---------- */

async function loadStats() {
    $('dash-status').textContent = '加载中…';
    try {
        const data = await api.stats();
        state.stats = data;
        $('s-saves').textContent = data.saves === null ? '--' : fmt(data.saves);
        $('s-lb').textContent = data.leaderboard === null ? '--' : fmt(data.leaderboard);
        const v = data.visits || {};
        $('s-pv').textContent = data.visits ? fmt(v.pv) : '0';
        $('s-uv').textContent = data.visits ? fmt(v.uv) : '0';
        const day = todayKey();
        const today = (v.daily && v.daily[day]) || { pv: 0, uv: 0 };
        $('s-today').textContent = fmt(today.pv) + ' / ' + fmt(today.uv);
        $('s-today-date').textContent = day;
        renderTrend(v);
        $('conn-dot').className = 'dot ok';
        $('dash-status').textContent = data.errors && data.errors.length
            ? '部分失败：' + data.errors.join('；')
            : '更新于 ' + new Date().toLocaleTimeString('zh-CN');
        await loadSaves();
    } catch (err) {
        $('conn-dot').className = 'dot err';
        $('dash-status').textContent = '加载失败：' + errMsg(err);
    }
}

function renderTrend(visits) {
    const tbody = $('trend-body');
    const daily = (visits && visits.daily) || {};
    const days = Object.keys(daily).sort().slice(-7);
    if (!days.length) {
        tbody.innerHTML = '<tr><td colspan="4" class="empty">暂无访问数据（需要玩家在已配置云端时进入游戏）</td></tr>';
        return;
    }
    const maxPv = Math.max(1, ...days.map(d => Number((daily[d] || {}).pv || 0)));
    tbody.innerHTML = days.map(d => {
        const row = daily[d] || {};
        const pv = Number(row.pv || 0);
        const uv = Number(row.uv || 0);
        const width = Math.max(2, Math.round(pv / maxPv * 100));
        return '<tr><td>' + esc(d) + '</td><td>' + fmt(pv) + '</td><td>' + fmt(uv) + '</td>' +
            '<td><div class="bar" style="width:' + width + '%"></div></td></tr>';
    }).join('');
}

async function loadSaves() {
    try {
        const saves = await api.listSaves();
        state.saves = saves;
        $('saves-count').textContent = saves.length + ' 人';
        const box = $('saves-list');
        if (!saves.length) {
            box.className = 'empty';
            box.textContent = '暂无云存档';
            return;
        }
        box.className = '';
        box.innerHTML = '<table><thead><tr><th>玩家 ID</th><th style="width:110px;">存档大小</th></tr></thead><tbody>' +
            saves.slice(0, 50).map(s => '<tr><td>' + esc(s.name) + '</td><td>' + (s.size ? (s.size / 1024).toFixed(1) + ' KB' : '-') + '</td></tr>').join('') +
            '</tbody></table>' +
            (saves.length > 50 ? '<div class="note">仅显示前 50 条，共 ' + saves.length + ' 条</div>' : '');
    } catch (err) {
        $('saves-list').className = 'empty';
        $('saves-list').textContent = '读取失败：' + errMsg(err);
    }
}

/* ---------- 群发邮件 ---------- */

async function loadMails() {
    try {
        const items = await api.listMails();
        state.mails = items;
        $('mails-count').textContent = items.length + ' 条';
        const list = $('mails-list');
        if (!items.length) {
            list.innerHTML = '<div class="empty">暂无公告</div>';
            return;
        }
        list.innerHTML = items.map(item => {
            const when = item.ts ? new Date(Number(item.ts)).toLocaleString('zh-CN') : '';
            const reward = Number(item.reward || 0);
            return '<div class="mail"><div style="flex:1;min-width:0;">' +
                '<h3>' + esc(item.subject || '(无标题)') + '</h3>' +
                '<p>' + esc(item.body || '') + '</p>' +
                '<div class="meta">' + esc(item.from || 'VCT 联盟') + ' · ' + esc(when) + (reward ? ' · 附件 $' + fmt(reward) : '') + '</div>' +
                '</div><button class="del" data-id="' + esc(item.id) + '">删除</button></div>';
        }).join('');
        list.querySelectorAll('.del').forEach(btn => {
            btn.addEventListener('click', () => removeMail(btn.dataset.id));
        });
    } catch (err) {
        $('mails-list').innerHTML = '<div class="empty">读取失败：' + esc(errMsg(err)) + '</div>';
    }
}

async function sendMail() {
    const subject = $('m-subject').value.trim();
    const body = $('m-body').value.trim();
    const from = $('m-from').value.trim() || 'VCT 联盟';
    const reward = Math.max(0, Number($('m-reward').value) || 0);
    if (!subject) { $('mail-status').textContent = '请填写邮件标题'; return; }
    if (!body) { $('mail-status').textContent = '请填写邮件正文'; return; }
    $('mail-status').textContent = '发送中…';
    try {
        await api.sendMail({ from, subject, body, reward });
        $('m-subject').value = '';
        $('m-body').value = '';
        $('m-reward').value = '0';
        $('mail-status').textContent = '已群发，玩家下次进入游戏时收到';
        toast('群发成功');
        await loadMails();
    } catch (err) {
        $('mail-status').textContent = '发送失败：' + errMsg(err);
        toast('发送失败', false);
    }
}

async function removeMail(id) {
    if (!window.confirm('确定删除这条公告？玩家将不再收到。')) return;
    try {
        await api.deleteMail(id);
        toast('已删除');
        await loadMails();
    } catch (err) {
        toast('删除失败：' + errMsg(err), false);
    }
}

/* ---------- 控制台 ---------- */

const out = $('console-out');
const input = $('console-in');
const history = [];
let historyIndex = 0;

function print(text, cls) {
    const div = document.createElement('div');
    if (cls) div.className = cls;
    div.textContent = text;
    out.appendChild(div);
    out.scrollTop = out.scrollHeight;
}

function printBlock(text, cls) {
    String(text).split('\n').forEach(line => print(line, cls));
}

function bootConsole() {
    printBlock([
        'VCT 运营后台 控制台 v1.0.0',
        '仓库：' + (state.config ? state.config.owner + '/' + state.config.repo + ' @ ' + state.config.branch : '未加载'),
        '输入 help 查看指令，↑ ↓ 翻历史。',
        ''
    ].join('\n'), 'ln-dim');
}

const COMMANDS = {
    help: { desc: '查看全部指令', run: async () => {
        printBlock([
            '可用指令：',
            '  help                     查看指令列表',
            '  stats                    刷新网站人数统计',
            '  saves [n]                列出云存档玩家（默认 20）',
            '  top [n]                  排行榜前 n 名（默认 10）',
            '  visits                   查看访问统计原始数据',
            '  mail list                查看已发送公告',
            '  mail send 标题 | 正文     群发邮件（可加 --reward 50000 --from 名字）',
            '  mail rm <id>             删除公告',
            '  test                     测试 GitHub 连接',
            '  config                   查看当前配置',
            '  token <令牌>             更新访问令牌',
            '  open repo|pages|<url>    在浏览器打开',
            '  clear                    清屏'
        ].join('\n'), 'ln-accent');
    }},
    stats: { desc: '刷新统计', run: async () => {
        await loadStats();
        const d = state.stats || {};
        const v = d.visits || {};
        const day = todayKey();
        const today = (v.daily && v.daily[day]) || { pv: 0, uv: 0 };
        printBlock([
            '网站人数统计：',
            '  云端存档玩家：' + (d.saves === null ? '--' : fmt(d.saves)),
            '  排行榜玩家：  ' + (d.leaderboard === null ? '--' : fmt(d.leaderboard)),
            '  累计 PV：     ' + fmt(v.pv),
            '  独立 UV：     ' + fmt(v.uv),
            '  今日 PV/UV：  ' + fmt(today.pv) + ' / ' + fmt(today.uv) + '（' + day + '）'
        ].join('\n'), 'ln-accent');
        if (d.errors && d.errors.length) print('警告：' + d.errors.join('；'), 'ln-warn');
    }},
    saves: { desc: '云存档玩家', run: async (args) => {
        const limit = Math.max(1, Math.min(200, Number(args[0]) || 20));
        const list = await api.listSaves();
        if (!list.length) return print('暂无云存档', 'ln-dim');
        print('云存档玩家（' + list.length + ' 人，显示前 ' + Math.min(limit, list.length) + '）：', 'ln-accent');
        list.slice(0, limit).forEach((s, i) => {
            print('  ' + String(i + 1).padStart(2, ' ') + '. ' + s.name + '  ' + (s.size ? (s.size / 1024).toFixed(1) + ' KB' : ''));
        });
    }},
    top: { desc: '排行榜', run: async (args) => {
        const limit = Math.max(1, Math.min(100, Number(args[0]) || 10));
        const entries = await api.leaderboard(limit);
        if (!entries.length) return print('排行榜暂无数据', 'ln-dim');
        print('排行榜前 ' + entries.length + ' 名：', 'ln-accent');
        entries.forEach((e, i) => {
            print('  ' + String(i + 1).padStart(2, ' ') + '. ' + (e.name || '匿名') + '  [' + (e.team || '-') + ']  ' +
                '胜 ' + (e.wins || 0) + ' 负 ' + (e.losses || 0) + '  战力 ' + (e.power || 0) +
                '  冠军 ' + (e.championships || 0));
        });
    }},
    visits: { desc: '访问原始数据', run: async () => {
        const d = await api.stats();
        if (!d.visits) return print('暂无访问数据', 'ln-dim');
        printBlock(JSON.stringify(d.visits, null, 2), 'ln-dim');
    }},
    test: { desc: '测试连接', run: async () => {
        const info = await api.test();
        print('连接成功：' + info.fullName + (info.private ? '（私有）' : '（公开）') +
            ' · 默认分支 ' + info.defaultBranch +
            ' · ' + (info.canPush ? '可写入' : '只读') +
            (info.tokenValid ? ' · 令牌有效（' + info.login + '）' : ' · 令牌未验证'), 'ln-accent');
        $('conn-dot').className = 'dot ok';
    }},
    config: { desc: '查看配置', run: async () => {
        const cfg = await api.config();
        printBlock([
            '仓库：' + cfg.owner + '/' + cfg.repo,
            '分支：' + cfg.branch,
            '令牌：' + (cfg.hasToken ? '已配置（尾号 ' + cfg.tokenTail + '）' : '未配置'),
            '配置文件：admin-app/config.json'
        ].join('\n'), 'ln-accent');
    }},
    token: { desc: '更新令牌', run: async (args) => {
        const token = (args[0] || '').trim();
        if (!token) return print('用法：token <你的 GitHub PAT>', 'ln-warn');
        await api.setToken(token);
        await refreshHeader();
        print('令牌已更新，已写入 config.json', 'ln-accent');
    }},
    open: { desc: '打开网页', run: async (args) => {
        const target = (args[0] || '').toLowerCase();
        const cfg = await api.config();
        let url = args[0] || '';
        if (target === 'repo') url = 'https://github.com/' + cfg.owner + '/' + cfg.repo;
        else if (target === 'pages') url = 'https://' + cfg.owner.toLowerCase() + '.github.io/' + cfg.repo + '/';
        if (!/^https?:\/\//i.test(url)) return print('用法：open repo | pages | <url>', 'ln-warn');
        await api.openExternal(url);
        print('已在浏览器打开：' + url, 'ln-accent');
    }},
    clear: { desc: '清屏', run: async () => { out.innerHTML = ''; }},
    mail: { desc: '邮件管理', run: async (args) => {
        const sub = (args[0] || 'list').toLowerCase();
        if (sub === 'list') {
            const items = await api.listMails();
            if (!items.length) return print('暂无公告', 'ln-dim');
            print('已发送公告（' + items.length + ' 条）：', 'ln-accent');
            items.forEach(item => {
                const when = item.ts ? new Date(Number(item.ts)).toLocaleString('zh-CN') : '';
                print('  [' + item.id + '] ' + (item.subject || '(无标题)') + '  · ' + when +
                    (Number(item.reward) ? '  · 附件 $' + fmt(item.reward) : ''));
            });
            print('删除：mail rm <id>', 'ln-dim');
            return;
        }
        if (sub === 'rm' || sub === 'delete') {
            const id = (args[1] || '').trim();
            if (!id) return print('用法：mail rm <id>', 'ln-warn');
            await api.deleteMail(id);
            print('已删除公告 ' + id, 'ln-accent');
            await loadMails();
            return;
        }
        if (sub === 'send') {
            let raw = args.slice(1).join(' ');
            let reward = 0;
            let from = 'VCT 联盟';
            raw = raw.replace(/--reward\s+(\d+)/gi, (m, n) => { reward = Number(n); return ''; })
                     .replace(/--from\s+(\S+)/gi, (m, n) => { from = n; return ''; })
                     .trim();
            const parts = raw.split('|');
            const subject = (parts[0] || '').trim();
            const body = (parts.slice(1).join('|') || '').trim();
            if (!subject || !body) return print('用法：mail send 标题 | 正文 [--reward 50000] [--from 名字]', 'ln-warn');
            await api.sendMail({ from, subject, body, reward });
            print('已群发：' + subject + (reward ? '（附件 $' + fmt(reward) + '）' : ''), 'ln-accent');
            await loadMails();
            return;
        }
        print('用法：mail list | mail send 标题 | 正文 | mail rm <id>', 'ln-warn');
    }}
};

async function runCommand(line) {
    const text = line.trim();
    if (!text) return;
    print('❯ ' + text, 'ln-cmd');
    history.push(text);
    historyIndex = history.length;
    const parts = text.split(/\s+/);
    const name = parts[0].toLowerCase();
    const args = parts.slice(1);
    const cmd = COMMANDS[name];
    if (!cmd) {
        print('未知指令：' + name + '，输入 help 查看指令列表', 'ln-err');
        return;
    }
    try {
        await cmd.run(args);
    } catch (err) {
        print('执行失败：' + errMsg(err), 'ln-err');
    }
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const value = input.value;
        input.value = '';
        runCommand(value);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (!history.length) return;
        historyIndex = Math.max(0, historyIndex - 1);
        input.value = history[historyIndex] || '';
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (!history.length) return;
        historyIndex = Math.min(history.length, historyIndex + 1);
        input.value = history[historyIndex] || '';
    }
});

/* ---------- 启动 ---------- */

$('btn-refresh').addEventListener('click', loadStats);
$('btn-test').addEventListener('click', async () => {
    $('dash-status').textContent = '测试中…';
    try {
        const info = await api.test();
        $('dash-status').textContent = '连接成功：' + info.fullName + (info.canPush ? ' · 可写入' : ' · 只读');
        $('conn-dot').className = 'dot ok';
    } catch (err) {
        $('dash-status').textContent = '连接失败：' + errMsg(err);
        $('conn-dot').className = 'dot err';
    }
});
$('btn-send').addEventListener('click', sendMail);

document.addEventListener('DOMContentLoaded', async () => {
    await refreshHeader();
    bootConsole();
    await Promise.all([loadStats(), loadMails()]);
});
