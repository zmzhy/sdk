# VCT 战队经理 v1.3.0「选手养成 & 赛季深度」- 产品需求文档

## Overview

* **Summary**: 在 v1.2.1 基础上发布大型版本 v1.3.0，新增选手士气系统、赛前战术选择、训练系统升级、联赛季后赛，并扩充选手与战队池，配套 UI 体验优化。

* **Purpose**: 提升战队经营的策略深度与赛季高潮体验，让玩家在阵容养成、临场决策与赛季冲刺上有更多操作空间。

* **Target Users**: VCT 战队经理的单机/云存档玩家。

## Goals

* 让选手不再只是「战力数字」，引入士气与训练方向两个可管理维度。

* 让每场比赛前有一次战术决策，增强临场感。

* 让赛季末尾有季后赛高潮，而非纯积分决出冠军。

* 扩充选手与战队池，丰富次级联赛与转会市场。

* 保持「所有数值系统均为玩家可理解的确定性规则，不引入随机破坏平衡」。

## Non-Goals

* 不引入青训营/选秀/青训选手生成器（留待后续版本）。

* 不修改现有 Masters / Champions 杯赛机制与赛程周次结构。

* 不引入多地图 BP / 经济系统 / 回合内战术（超出单局模拟模型）。

* 不重写存档结构；新字段必须向后兼容旧存档（initExtras 兜底）。

* 不改变现有 24 周日历框架，季后赛在赛季结算阶段模拟进行。

## Background & Context

* 当前 v1.2.1：24 周赛季（1-9 联赛上半 / 10-12 Masters / 13-21 联赛下半 / 22-24 Champions）；顶级联赛 + Challengers 升降级；选手有 aim/gameSense/leadership/utility 四维与 power；训练已存在但为随机属性 +2\~+5、\$5000、无冷却；无士气、无战术选择、无季后赛。

* 比赛模拟：`simulateScoreFor(a,b)` 按 `a/(a+b)` 概率逐回合取先到 13 分。

* 战力计算：`calculateTeamPower` 取 roster 平均 power；AI 取 `AI_TEAMS.power`。

## Functional Requirements

* **FR-1 训练升级**: 训练按钮弹出属性选择（瞄准/意识/领导/技能），玩家指定训练项；单次花费提升至 \$8,000；每名选手每周最多训练 1 次（`trainedWeek` 标记）；单项属性上限 99，超过 90 后收益减半（向下取整）。

* **FR-2 士气系统**: 每名 roster 选手拥有 `morale`（0-100，初始 70）；胜场 +8、负场 -10，边界 0/100；团队平均士气影响有效战力：`effectivePower = teamPower * (0.9 + avgMorale/100 * 0.2)`，作用于玩家参与的比赛（手动与模拟）。

* **FR-3 赛前战术**: 新增战术状态 `tactic` ∈ {aggressive, balanced, defensive}，默认 balanced；进攻战术己方有效战力 ×1.05，防守战术对方有效战力 ×0.95，均衡无修正；在控制台「下场比赛」区域与比赛开始前均可切换。

* **FR-4 内容扩充**: 新增 ≥25 名职业选手与 ≥6 支战队，分布于各赛区与次级联赛，不与已有 id/name 重复。

* **FR-5 联赛季后赛**: 联赛下半程结束（第 21 周）后，玩家所在联赛积分前 4 进入单败季后赛（半决赛→决赛），在赛季结算阶段用同一比分模型模拟；季后赛冠军 = 联赛冠军，获得额外奖金与联盟邮件；玩家若在前 4 则参与模拟。

* **FR-6 UI 体验**: roster 卡片显示士气条与本周是否已训练；控制台显示团队平均士气、当前战术选择器；比赛模态框开场前可选择战术；赛季结算模态框展示季后赛对阵与结果。

* **FR-7 存档兼容**: 旧存档加载时 `initExtras` 为 roster 补全 morale=70、trainedWeek=0；shop/theme 等已有字段保持不变。

## Non-Functional Requirements

* **NFR-1**: 所有新逻辑不引入外部依赖，纯原生 JS。

* **NFR-2**: `node --check game.js` 必须通过。

* **NFR-3**: 士气与战术对胜率的影响幅度 ≤ ±10%，不破坏现有平衡。

* **NFR-4**: 旧存档可无缝加载，不抛错、不丢已有数据。

## Constraints

* **Technical**: 单文件 game.js，函数声明后定义覆盖前定义；改动需保持接口兼容。

* **Business**: 商城道具仍为纯外观/便利，不与新系统数值耦合。

* **Dependencies**: 依赖现有 `simulateScoreFor`、`calculateTeamPower`、`showSeasonSummary`、`buildSeasonSummary`。

## Assumptions

* 玩家可接受训练从随机改为指定属性（更策略化）。

* 季后赛在结算阶段模拟、不可手动操作，符合「赛季高潮」定位。

* 士气仅影响玩家战队战力，AI 战队不引入士气（避免改动 AI 模拟面）。

## Acceptance Criteria

### AC-1: 训练可指定属性且有周冷却

* **Type**: `rule`

* **Given**: 玩家拥有一名未在本周训练过的 roster 选手

* **When**: 点击该选手「训练」按钮并选择「瞄准」，资金充足

* **Then**: 该选手 aim 增加（90 以下 +2\~+5，90 以上减半）、power 重算、资金扣 \$8,000、`trainedWeek` 设为当前周

* **Pass Condition**: 再次点击同选手训练，提示「本周已训练」且不扣钱

* **Evidence**: 手动/脚本验证 trainAgent 行为

### AC-2: 士气随胜负变化并影响战力

* **Type**: `rule`

* **Given**: 玩家 roster 选手 morale 初始 70

* **When**: 赢下一场比赛

* **Then**: 所有 roster 选手 morale +8（上限 100）；团队平均士气提升；`effectivePower` 高于基础 teamPower

* **Pass Condition**: 输掉比赛后 morale -10（下限 0），effectivePower 低于基础

* **Evidence**: 比赛后检查 roster.morale 与 effectivePower 计算

### AC-3: 战术切换影响比赛模拟

* **Type**: `rule`

* **Given**: 玩家战术为 balanced

* **When**: 切换为 aggressive 后进行一场比赛

* **Then**: 模拟时己方有效战力 = teamPower × moraleFactor × 1.05

* **Pass Condition**: 切换为 defensive 时对方有效战力 ×0.95

* **Evidence**: 检查 simulateMatchResult / playMatch 中 effectivePower 计算

### AC-4: 内容扩充无重复且数量达标

* **Type**: `rule`

* **Given**: v1.3.0 代码

* **When**: 统计 REAL\_PRO\_PLAYERS 与 AI\_TEAMS

* **Then**: REAL\_PRO\_PLAYERS 数量 ≥ 195，AI\_TEAMS 数量 ≥ 59，且无重复 id/name

* **Pass Condition**: 无重复，数量达标

* **Evidence**: 脚本统计

### AC-5: 季后赛决出联赛冠军

* **Type**: `rule`

* **Given**: 赛季第 21 周结束

* **When**: 进入赛季结算

* **Then**: 玩家所在联赛前 4 生成季后赛对阵并模拟，冠军获得奖金与邮件

* **Pass Condition**: 赛季总结模态框显示季后赛结果，冠军非空且属于前 4

* **Evidence**: 检查 buildSeasonSummary / showSeasonSummary 输出

### AC-6: UI 展示士气、训练状态、战术

* **Type**: `rubric`

* **Dimension**: 信息可见性与操作可达性

* **Scale**: 1-5

* **Anchors**: 1 = 新状态完全不可见；3 = 部分可见但操作入口不明显；5 = 士气条/训练状态/战术选择器均在 roster、控制台、比赛模态清晰可见且可操作

* **Pass Threshold**: >= 4

* **Evidence**: 浏览器检查 roster、dashboard、match-modal

### AC-7: 旧存档兼容

* **Type**: `rule`

* **Given**: 一份 v1.2.1 的存档（无 morale/trainedWeek/tactic 字段）

* **When**: 加载该存档

* **Then**: 不抛错，roster 选手 morale=70、trainedWeek=0，tactic=balanced，其余数据完整

* **Pass Condition**: 加载后可正常进入比赛

* **Evidence**: 构造旧存档 JSON 加载验证

## Open Questions

* [ ] 季后赛是否需要让玩家手动操作（需要额外赛程周，暂定为模拟）？

