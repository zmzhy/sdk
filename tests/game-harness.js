/**
 * 转会谈判系统单元测试的运行支撑：
 * 在 Node 中用最小 DOM stub 加载零依赖的 game.js，并暴露谈判相关函数。
 *
 * 运行方式：在项目根目录执行 `node --test "tests/*.test.js"`
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const GAME_PATH = path.resolve(__dirname, '..', 'game.js');

function makeElement(id) {
    return {
        id,
        innerHTML: '',
        textContent: '',
        value: '',
        checked: false,
        disabled: false,
        style: { removeProperty() {}, setProperty() {} },
        dataset: {},
        classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
        appendChild() {},
        removeChild() {},
        insertBefore() {},
        remove() {},
        setAttribute() {},
        getAttribute() { return null; },
        removeAttribute() {},
        addEventListener() {},
        removeEventListener() {},
        focus() {},
        blur() {},
        click() {},
        closest() { return null; },
        querySelector() { return null; },
        querySelectorAll() { return []; },
        children: [],
        parentNode: null
    };
}

function createDocumentStub() {
    const elements = new Map();
    return {
        getElementById(id) { if (!elements.has(id)) elements.set(id, makeElement(id)); return elements.get(id); },
        getElementsByClassName() { return []; },
        querySelector() { return null; },
        querySelectorAll() { return []; },
        createElement() { return makeElement('created'); },
        body: makeElement('body'),
        documentElement: makeElement('html'),
        addEventListener() {},
        removeEventListener() {},
        readyState: 'complete'
    };
}

const EXPORT_SNIPPET = `
;globalThis.__api = {
    initGame,
    getState: () => gameState,
    ensureNegotiation,
    negotiationChance,
    readNegotiationOffer,
    syncNegotiationPreview,
    openNegotiation,
    submitNegotiationOffer,
    acceptNegotiationCounter,
    completeSigning,
    signAgent,
    defaultSalary,
    effectiveTransferPrice,
    attachMarketEvents,
    applyMarketEvent,
    rollWeeklyMarketEvents,
    marketEventsHTML,
    PLAYER_EVENT_TYPES,
    MAX_ROSTER,
    TRANSFER_WINDOW_WEEKS
};`;

const gameCode = fs.readFileSync(GAME_PATH, 'utf8');
const compiledScript = new vm.Script(gameCode + EXPORT_SNIPPET, { filename: 'game.js' });

/**
 * 创建一个隔离的游戏运行环境。
 * @returns {{ api: object, document: object, setRandom: (fn: Function) => void }}
 */
function createHarness() {
    let randomImpl = Math.random;
    const documentStub = createDocumentStub();

    const storage = {
        _data: {},
        getItem(key) { return Object.prototype.hasOwnProperty.call(this._data, key) ? this._data[key] : null; },
        setItem(key, value) { this._data[key] = String(value); },
        removeItem(key) { delete this._data[key]; }
    };

    const sandbox = {
        console,
        document: documentStub,
        localStorage: storage,
        navigator: { onLine: true, userAgent: 'node-test' },
        location: { href: 'http://localhost/', reload() {} },
        alert() {},
        confirm() { return true; },
        prompt() { return 'TestTeam'; },
        fetch() { return Promise.reject(new Error('offline test')); },
        matchMedia() { return { matches: false, addListener() {}, removeListener() {} }; },
        requestAnimationFrame() { return 0; },
        cancelAnimationFrame() {},
        setTimeout(fn, ms) { return Number(ms) >= 500 ? 0 : setTimeout(fn, ms); },
        clearTimeout,
        setInterval,
        clearInterval,
        Image: function Image() {},
        Blob: function Blob() {},
        URL: { createObjectURL() { return ''; }, revokeObjectURL() {} }
    };

    sandbox.window = sandbox;
    sandbox.self = sandbox;
    sandbox.globalThis = sandbox;
    sandbox.Math = new Proxy(Math, {
        get(target, prop) {
            if (prop === 'random') return () => randomImpl();
            return Reflect.get(target, prop);
        }
    });
    sandbox.setRandom = (fn) => { randomImpl = fn; };

    vm.createContext(sandbox);
    compiledScript.runInContext(sandbox);

    return {
        api: sandbox.__api,
        document: documentStub,
        setRandom(fn) { randomImpl = fn; }
    };
}

module.exports = { createHarness };
