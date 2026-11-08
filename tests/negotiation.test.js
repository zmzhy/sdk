/**
 * 转会谈判系统单元测试
 *
 * 覆盖：谈判条款初始化、事件加成、成功率计算、报价成功/失败、
 * 多轮谈判破裂、对方还价、直接签约、资金/人数校验、选手事件、弹窗数据。
 *
 * 运行方式：在项目根目录执行 `node --test "tests/*.test.js"`
 */
'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { createHarness } = require('./game-harness');

let agentSeq = 0;

function makeAgent(overrides = {}) {
    agentSeq += 1;
    return Object.assign({
        uniqueId: 'test_agent_' + agentSeq,
        name: '测试选手' + agentSeq,
        role: 'Duelist',
        avatar: 'TP',
        aim: 78,
        gameSense: 76,
        leadership: 70,
        utility: 74,
        power: 75,
        price: 200000,
        isPro: false,
        isRookie: false,
        rating: 'A',
        country: '🌎',
        bio: '测试用选手',
        wins: 0,
        losses: 0,
        morale: 70,
        trainedWeek: 0
    }, overrides);
}

/**
 * 启动一局新游戏并把状态裁剪成便于谈判测试的形态。
 */
function freshGame() {
    const harness = createHarness();
    const { api, document } = harness;
    api.initGame();
    const state = api.getState();
    state.roster = [];
    state.market = [];
    state.money = 1000000;
    state.currentWeek = 1;
    // 关闭成就奖励，避免解锁成就时发放资金干扰金额断言
    state.achievements = null;

    document.getElementById('neg-fee').value = '100';
    document.getElementById('neg-salary').value = '100';
    document.getElementById('neg-years').value = '2';
    return { api, document, state, setRandom: harness.setRandom };
}

function setOffer(document, feePct, salaryPct, years) {
    document.getElementById('neg-fee').value = String(feePct);
    document.getElementById('neg-salary').value = String(salaryPct);
    document.getElementById('neg-years').value = String(years);
}

function randomSequence(values) {
    let i = 0;
    return () => values[Math.min(i++, values.length - 1)];
}

test('谈判初始化：要价、周薪、情绪与轮次', () => {
    const { api, state, setRandom } = freshGame();
    const agent = makeAgent();
    state.market = [agent];
    setRandom(() => 0.5); // mood = 55 + floor(0.5 * 31) = 70

    const negotiation = api.ensureNegotiation(agent);

    assert.equal(negotiation.rounds, 0);
    assert.equal(negotiation.maxRounds, 3);
    assert.equal(negotiation.status, 'open');
    assert.equal(negotiation.askingFee, 200000);
    assert.equal(negotiation.askingSalary, 1000); // 200000 * 0.5%
    assert.equal(agent.mood, 70);
    assert.equal(negotiation.history.length, 0);
    assert.equal(negotiation.counter, null);
});

test('选手事件会修正谈判要价与周薪要求', () => {
    const { api, state, setRandom } = freshGame();
    const agent = makeAgent({
        event: { key: 'loyal', name: '公开示好', icon: '💬', priceMod: -0.1, salaryMod: 0.2, chanceMod: 8 }
    });
    state.market = [agent];
    setRandom(() => 0.5);

    const negotiation = api.ensureNegotiation(agent);

    assert.equal(negotiation.askingFee, 180000);
    assert.equal(negotiation.askingSalary, 1200);
});

test('转会窗关闭时职业选手含 25% 买断费', () => {
    const { api, state, setRandom } = freshGame();
    state.currentWeek = 5; // 不在 TRANSFER_WINDOW_WEEKS
    const agent = makeAgent({ isPro: true, price: 200000 });
    state.market = [agent];
    setRandom(() => 0.5);

    const negotiation = api.ensureNegotiation(agent);

    assert.equal(api.effectiveTransferPrice(agent), 250000);
    assert.equal(negotiation.askingFee, 250000);
});

test('成功率：报价、周薪、年限、情绪与事件都会影响结果', () => {
    const { api, state, setRandom } = freshGame();
    const agent = makeAgent();
    state.market = [agent];
    setRandom(() => 0.5);
    api.ensureNegotiation(agent);
    agent.mood = 65;

    const base = { fee: 200000, salary: 1000, years: 2 };
    const chance100 = api.negotiationChance(agent, base);
    const chance120 = api.negotiationChance(agent, { fee: 240000, salary: 1200, years: 2 });
    const chanceLong = api.negotiationChance(agent, { fee: 200000, salary: 1000, years: 3 });
    const chanceLowSalary = api.negotiationChance(agent, { fee: 200000, salary: 700, years: 2 });
    const chanceClampMin = api.negotiationChance(agent, { fee: 0, salary: 0, years: 1 });
    const chanceClampMax = api.negotiationChance(agent, { fee: 400000, salary: 2000, years: 3 });

    assert.ok(chance120 > chance100, '更高报价应提高成功率');
    assert.ok(chanceLowSalary < chance100, '压低周薪应降低成功率');
    assert.equal(chanceLong, chance100 + 5, '3 年合同固定 +5%');
    assert.equal(chanceClampMin, 5, '成功率下限为 5%');
    assert.equal(chanceClampMax, 95, '成功率上限为 95%');

    agent.event = { chanceMod: 12 };
    assert.equal(api.negotiationChance(agent, base), chance100 + 12);

    agent.mood = 85;
    assert.ok(api.negotiationChance(agent, base) > chance100);
});

test('报价成功：扣除转会费并写入周薪、合同年限', () => {
    const { api, document, state, setRandom } = freshGame();
    const agent = makeAgent();
    state.market = [agent];
    setRandom(() => 0.5);
    api.ensureNegotiation(agent);
    setOffer(document, 130, 130, 3);
    setRandom(() => 0); // 必然成功

    const moneyBefore = state.money;
    api.submitNegotiationOffer(agent.uniqueId);

    assert.equal(state.roster.length, 1);
    assert.equal(state.market.length, 0);
    assert.equal(state.money, moneyBefore - 260000);
    const signed = state.roster[0];
    assert.equal(signed.salary, 1300);
    assert.equal(signed.contractYears, 3);
    assert.equal(signed.negotiation, null);
});

test('报价失败：轮次增加、情绪下降、要价上涨并记录历史', () => {
    const { api, document, state, setRandom } = freshGame();
    const agent = makeAgent();
    state.market = [agent];
    setRandom(() => 0.5);
    api.ensureNegotiation(agent);
    agent.mood = 65;
    setOffer(document, 100, 100, 2);
    setRandom(() => 0.99); // 必然失败，且不触发对方还价

    api.submitNegotiationOffer(agent.uniqueId);

    const n = agent.negotiation;
    assert.equal(n.rounds, 1);
    assert.equal(n.status, 'open');
    assert.equal(agent.mood, 48); // 65 - (8 + floor(0.99 * 10))
    assert.ok(n.askingFee > 200000);
    assert.ok(n.askingSalary > 1000);
    assert.equal(n.history.length, 1);
    assert.equal(n.history[0].success, false);
    assert.equal(n.counter, null);
    assert.equal(state.roster.length, 0, '失败不应签约');
    assert.equal(state.money, 1000000, '失败不应扣款');
});

test('连续失败 3 轮后谈判破裂，之后无法继续报价', () => {
    const { api, document, state, setRandom } = freshGame();
    const agent = makeAgent();
    state.market = [agent];
    setRandom(() => 0.5);
    api.ensureNegotiation(agent);
    setOffer(document, 100, 100, 2);
    setRandom(() => 0.99);

    for (let i = 0; i < 3; i++) api.submitNegotiationOffer(agent.uniqueId);
    const roundsAfterCollapse = agent.negotiation.rounds;

    api.submitNegotiationOffer(agent.uniqueId); // 破裂后不应继续

    assert.equal(agent.negotiation.status, 'collapsed');
    assert.equal(agent.negotiation.rounds, 3);
    assert.equal(roundsAfterCollapse, 3);
    assert.equal(agent.negotiation.history.length, 3);
    assert.equal(state.roster.length, 0);
});

test('对方还价：接受后按还价条款签约', () => {
    const { api, document, state, setRandom } = freshGame();
    const agent = makeAgent();
    state.market = [agent];
    // ensureNegotiation 消耗第 1 个随机数；失败后第 3 个随机数 < 0.45 触发还价
    setRandom(randomSequence([0.5, 0.99, 0, 0, 0]));
    api.ensureNegotiation(agent);
    agent.mood = 65;
    setOffer(document, 100, 100, 2);

    api.submitNegotiationOffer(agent.uniqueId);

    const counter = agent.negotiation.counter;
    assert.ok(counter, '失败后应生成对方还价');
    assert.equal(counter.fee, 210000);
    assert.equal(counter.salary, 1010);
    assert.equal(counter.years, 2);

    const moneyBefore = state.money;
    api.acceptNegotiationCounter(agent.uniqueId);

    assert.equal(state.roster.length, 1);
    assert.equal(state.market.length, 0);
    assert.equal(state.money, moneyBefore - 210000);
    assert.equal(state.roster[0].salary, 1010);
    assert.equal(state.roster[0].contractYears, 2);
});

test('直接签约：按当前要价与标准 2 年合同完成交易', () => {
    const { api, state, setRandom } = freshGame();
    const agent = makeAgent();
    state.market = [agent];
    setRandom(() => 0.5);
    api.ensureNegotiation(agent);

    const moneyBefore = state.money;
    api.signAgent(agent.uniqueId);

    assert.equal(state.roster.length, 1);
    assert.equal(state.market.length, 0);
    assert.equal(state.money, moneyBefore - 200000);
    assert.equal(state.roster[0].salary, 1000);
    assert.equal(state.roster[0].contractYears, 2);
});

test('资金不足时拒绝签约且不改变状态', () => {
    const { api, state } = freshGame();
    const agent = makeAgent();
    state.market = [agent];
    state.money = 100;

    api.completeSigning(agent, { fee: 200000, salary: 1000, years: 2 }, '测试');

    assert.equal(state.money, 100);
    assert.equal(state.roster.length, 0);
    assert.equal(state.market.length, 1);
});

test('战队满员时拒绝签约', () => {
    const { api, state } = freshGame();
    const agent = makeAgent();
    state.market = [agent];
    state.roster = Array.from({ length: api.MAX_ROSTER }, (_, i) => ({
        uniqueId: 'full_' + i,
        name: '满员占位' + i,
        power: 70,
        salary: 300
    }));

    api.completeSigning(agent, { fee: 200000, salary: 1000, years: 2 }, '测试');

    assert.equal(state.roster.length, api.MAX_ROSTER);
    assert.equal(state.market.length, 1);
});

test('选手事件：市场挂牌生成、每周滚动与事件覆盖', () => {
    const { api, state, setRandom } = freshGame();
    const a1 = makeAgent();
    const a2 = makeAgent();
    const a3 = makeAgent();
    state.market = [a1, a2, a3];

    setRandom(() => 0);
    api.attachMarketEvents();
    assert.equal(state.marketEvents.length, 1);
    const eventAgent = state.market.find(a => a.event);
    assert.ok(eventAgent, '事件应挂到选手身上');
    assert.equal(state.marketEvents[0].agentName, eventAgent.name);

    // 每周滚动：随机数 > 0.35 时不产生事件
    state.marketEvents = [];
    setRandom(() => 0.9);
    api.rollWeeklyMarketEvents();
    assert.equal(state.marketEvents.length, 0);

    // 随机数命中时产生 1 条事件
    setRandom(() => 0);
    api.rollWeeklyMarketEvents();
    assert.equal(state.marketEvents.length, 1);

    // 事件覆盖会重置进行中的谈判
    a1.negotiation = { status: 'open' };
    api.applyMarketEvent(a1, api.PLAYER_EVENT_TYPES[0], '测试');
    assert.equal(a1.negotiation, null);
    assert.equal(a1.event.key, api.PLAYER_EVENT_TYPES[0].key);
});

test('谈判弹窗展示条款并实时刷新成功率', () => {
    const { api, document, state, setRandom } = freshGame();
    const agent = makeAgent();
    state.market = [agent];
    setRandom(() => 0.5);

    api.openNegotiation(agent.uniqueId);
    const html = document.getElementById('modal-body').innerHTML;
    assert.match(html, /转会谈判/);
    assert.match(html, /预估成功率/);
    assert.match(html, /neg-fee/);
    assert.match(html, /周薪要求/);

    setOffer(document, 100, 100, 2);
    api.syncNegotiationPreview(agent.uniqueId);
    assert.equal(document.getElementById('neg-chance').textContent, '46%');

    setOffer(document, 130, 130, 3);
    api.syncNegotiationPreview(agent.uniqueId);
    assert.equal(document.getElementById('neg-chance').textContent, '95%');
    assert.match(document.getElementById('neg-fee-label').textContent, /260,000/);
});

test('默认周薪按身价 0.5% 计算，并限制在 300-8000', () => {
    const { api } = freshGame();
    assert.equal(api.defaultSalary({ price: 200000 }), 1000);
    assert.equal(api.defaultSalary({ price: 0 }), 300);
    assert.equal(api.defaultSalary({ price: 20000000 }), 8000);
    assert.equal(api.defaultSalary(null), 300);
});
