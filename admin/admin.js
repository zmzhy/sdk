'use strict';

/* VCT 战队经理 · 运营后台（独立页面，复用 github-backend.js） */

const VISITS_PATH = 'data/stats/visits.json';
const BROADCAST_PATH = 'data/mail/broadcast.json';

let cachedVisits = null;
let cachedBroadcast = null;

function $(id) { return document.getElementById(id); }

function esc(text) {
    return String(text == null ? '' : text)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function fmt(n) { return Number(n || 0).toLocaleString('zh-CN'); }

function toast(msg, isErr) {
    const el = $('admin-toast');
    if (!el) return;
    el.textContent = msg;
    el.style.borderLeftColor = isErr ? '#FF4655' : '#7DDD91';
    el.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => el.classList.remove('show'), 2600);
}

function setStatus(id, msg, cls) {
    const el = $(id);
    if (!el) return;
    el.textContent = msg || '';
    el.className = 'admin-status' + (cls ? ' ' + cls : '');
}

function todayKey() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

/* ---------- 云端配置 ---------- */

function loadConfigIntoForm() {
    const cfg = GHBackend.getConfig();
    $('cfg-owner').value = cfg.owner || '';
    $('cfg-repo').value = cfg.repo || '';
    $('cfg-branch').value = cfg.branch || 'main';
    $('cfg-token').value = cfg.token || '';
    if (GHBackend.isConfigured()) setStatus('conn-status', '已配置：' + cfg.owner + '/' + cfg.repo, 'ok');
}

function saveAdminConfig() {
    const cfg = {
        owner: $('cfg-owner').value.trim(),
        repo: $('cfg-repo').value.trim(),
        branch: $('cfg-branch').value.trim() || 'main',
        token: $('cfg-token').value.trim()
    };
    if (!cfg.owner || !cfg.repo) return toast('请填写仓库所有者与仓库名', true);
    GHBackend.setConfig(cfg);
    setStatus('conn-status', '已保存：' + cfg.owner + '/' + cfg.repo, 'ok');
    toast('配置已保存');
    refreshAdminData();
}

async function testAdminConn() {
    setStatus('conn-status', '连接中…');
    try {
        const info = await GHBackend.testConnection();
        setStatus('conn-status', '连接成功：' + info.fullName + (info.canPush ? ' · 可写入' : ' · 只读'), 'ok');
    } catch (err) {
        setStatus('conn-status', '连接失败：' + (err && err.message ? err.message : '未知错误'), 'err');
    }
}

/* ---------- 数据统计 ---------- */

async function refreshAdminData() {
    if (!GHBackend.isConfigured()) {
        setStatus('data-status', '请先在上方完成云端配置', 'err');
        return;
    }
    setStatus('data-status', '加载中…');

    const results = await Promise.allSettled([
        GHBackend.listCloudSaves(),
        GHBackend.fetchLeaderboard(),
        GHBackend.getFile(VISITS_PATH, { noCache: true })
    ]);

    const savesRes = results[0];
    const lbRes = results[1];
    const visitsRes = results[2];

    const saves = savesRes.status === 'fulfilled' && Array.isArray(savesRes.value) ? savesRes.value.length : null;
    const lbCount = lbRes.status === 'fulfilled' && lbRes.value && Array.isArray(lbRes.value.entries) ? lbRes.value.entries.length : null;
    cachedVisits = visitsRes.status === 'fulfilled' && visitsRes.value && visitsRes.value.data ? visitsRes.value.data : null;

    $('stat-saves').textContent = saves === null ? '--' : fmt(saves);
    $('stat-lb').textContent = lbCount === null ? '--' : fmt(lbCount);

    const v = cachedVisits || {};
    $('stat-pv').textContent = cachedVisits ? fmt(v.pv) : '0';
    $('stat-uv').textContent = cachedVisits ? fmt(v.uv) : '0';

    const day = todayKey();
    const today = (v.daily && v.daily[day]) || { pv: 0, uv: 0 };
    $('stat-today').textContent = fmt(today.pv) + ' / ' + fmt(today.uv);
    $('stat-today-date').textContent = day;

    renderTrend(v);

    const errors = results.filter(r => r.status === 'rejected');
    if (errors.length) {
        const first = errors[0].reason;
        setStatus('data-status', '部分数据读取失败：' + (first && first.message ? first.message : '网络或权限问题'), 'err');
    } else {
        setStatus('data-status', '更新于 ' + new Date().toLocaleTimeString('zh-CN'), 'ok');
    }

    await loadBroadcastList();
}

function renderTrend(visits) {
    const tbody = $('trend-body');
    const daily = (visits && visits.daily) || {};
    const days = Object.keys(daily).sort().slice(-7);
    if (!days.length) {
        tbody.innerHTML = '<tr><td colspan="4" class="admin-empty">暂无访问数据（需要玩家在已配置云端的情况下进入游戏）</td></tr>';
        return;
    }
    const maxPv = Math.max.apply(null, days.map(d => Number((daily[d] || {}).pv || 0)).concat([1]));
    tbody.innerHTML = days.map(d => {
        const row = daily[d] || {};
        const pv = Number(row.pv || 0);
        const uv = Number(row.uv || 0);
        const width = Math.max(2, Math.round(pv / maxPv * 100));
        return '<tr><td>' + esc(d) + '</td><td>' + fmt(pv) + '</td><td>' + fmt(uv) + '</td>' +
            '<td><div class="trend-bar" style="width:' + width + '%"></div></td></tr>';
    }).join('');
}

/* ---------- 群发邮件 ---------- */

async function loadBroadcastList() {
    let payload = null;
    try {
        const file = await GHBackend.getFile(BROADCAST_PATH, { noCache: true });
        if (file && file.data) payload = file.data;
    } catch (e) { payload = null; }
    cachedBroadcast = payload;

    const items = payload && Array.isArray(payload.items) ? payload.items : [];
    $('broadcast-count').textContent = items.length + ' 条';
    const list = $('broadcast-list');
    if (!items.length) {
        list.innerHTML = '<div class="admin-empty">暂无公告</div>';
        return;
    }
    list.innerHTML = items.map(item => {
        const when = item.ts ? new Date(Number(item.ts)).toLocaleString('zh-CN') : '';
        const reward = Number(item.reward || 0);
        return '<div class="mail-item">' +
            '<div style="flex:1;min-width:0;">' +
                '<h3>' + esc(item.subject || '(无标题)') + '</h3>' +
                '<p>' + esc(item.body || '') + '</p>' +
                '<div class="meta">' + esc(item.from || 'VCT 联盟') + ' · ' + esc(when) +
                    (reward ? ' · 附件 $' + fmt(reward) : '') + '</div>' +
            '</div>' +
            '<button class="del" onclick="deleteBroadcast(\'' + esc(item.id) + '\')">删除</button>' +
        '</div>';
    }).join('');
}

async function sendBroadcast() {
    if (!GHBackend.canWrite()) {
        setStatus('mail-status', '需要填写访问令牌才能群发', 'err');
        return;
    }
    const subject = $('mail-subject').value.trim();
    const body = $('mail-body').value.trim();
    const from = $('mail-from').value.trim() || 'VCT 联盟';
    const reward = Math.max(0, Number($('mail-reward').value) || 0);
    if (!subject) return setStatus('mail-status', '请填写邮件标题', 'err');
    if (!body) return setStatus('mail-status', '请填写邮件正文', 'err');

    setStatus('mail-status', '发送中…');
    const items = (cachedBroadcast && Array.isArray(cachedBroadcast.items)) ? cachedBroadcast.items.slice() : [];
    const id = 'bc_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
    items.unshift({ id: id, from: from, subject: subject, body: body, reward: reward, ts: Date.now() });

    try {
        await GHBackend.putFile(BROADCAST_PATH, {
            updatedAt: new Date().toISOString(),
            items: items.slice(0, 100)
        }, 'mail: broadcast ' + subject.slice(0, 20));
        cachedBroadcast = { items: items.slice(0, 100) };
        $('mail-subject').value = '';
        $('mail-body').value = '';
        $('mail-reward').value = '0';
        setStatus('mail-status', '已群发，玩家下次进入游戏时收到', 'ok');
        toast('群发成功');
        await loadBroadcastList();
    } catch (err) {
        setStatus('mail-status', '发送失败：' + (err && err.message ? err.message : '未知错误'), 'err');
    }
}

async function deleteBroadcast(id) {
    if (!GHBackend.canWrite()) return toast('缺少访问令牌，无法删除', true);
    if (!window.confirm('确定删除这条公告？玩家将不再收到。')) return;
    const items = (cachedBroadcast && Array.isArray(cachedBroadcast.items)) ? cachedBroadcast.items.slice() : [];
    const next = items.filter(i => String(i.id) !== String(id));
    try {
        await GHBackend.putFile(BROADCAST_PATH, {
            updatedAt: new Date().toISOString(),
            items: next
        }, 'mail: delete broadcast');
        cachedBroadcast = { items: next };
        toast('已删除');
        await loadBroadcastList();
    } catch (err) {
        toast('删除失败：' + (err && err.message ? err.message : '未知错误'), true);
    }
}

/* ---------- 启动 ---------- */

document.addEventListener('DOMContentLoaded', () => {
    loadConfigIntoForm();
    if (GHBackend.isConfigured()) refreshAdminData();
    else setStatus('data-status', '请先填写仓库信息并保存', '');
});
