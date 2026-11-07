# VCT 战队经理 v1.3.0「选手养成 & 赛季深度」- 实施计划

## Task 1: 扩充选手与战队池
- **Status**: `completed`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - 在 `REAL_PRO_PLAYERS` 末尾新增 ≥25 名职业选手（id 延续现有编号，覆盖各赛区/战队，属性合理）。
  - 在 `AI_TEAMS` 末尾新增 ≥6 支战队（region/country/power/color/coach/bio 齐全，power 多在 65-75 区间以充实次级联赛）。
  - 确保无重复 id、无重复战队名。
- **Acceptance Criteria Addressed**: AC-4
- **Completion Evidence**: 脚本统计 REAL_PRO_PLAYERS=197、AI_TEAMS=60，无重复 id、无重复战队名（选手重名视为转会历史，可接受）。

## Task 2: initExtras 新字段存档兼容
- **Status**: `completed`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - 在 `initExtras` 中为 state 补全：`state.tactic = state.tactic || 'balanced'`；遍历 `state.roster`，为每位选手补 `morale`（默认 70，限 0-100）与 `trainedWeek`（默认 0）。
  - signAgent 签约时也补 morale=70、trainedWeek=0。
- **Acceptance Criteria Addressed**: AC-7
- **Completion Evidence**: 旧存档对象经 initExtras 后 morale=70、trainedWeek=0、tactic=balanced，不抛错；signAgent 新选手字段齐全。

## Task 3: 训练系统升级
- **Status**: `completed`
- **Priority**: high
- **Depends On**: Task 2
- **Description**:
  - 重写 `trainAgent`：周冷却判断 + 弹出属性选择模态框；`doTrainAgent(uniqueId, stat)` 执行训练。
  - 花费 $8,000；+2~+5，≥90 减半，上限 99；重算 power 与 rating；设置 trainedWeek。
- **Acceptance Criteria Addressed**: AC-1
- **Completion Evidence**: doTrainAgent 指定 aim 后属性增加、power 重算、扣 $8,000、trainedWeek=当前周；同周再次调用不扣钱不增加；浏览器实测训练模态框含 4 属性按钮。

## Task 4: 选手士气系统
- **Status**: `completed`
- **Priority**: high
- **Depends On**: Task 2
- **Description**:
  - `getTeamMorale()` 平均士气；`getEffectiveTeamPower()` = teamPower × (0.9 + avgMorale/100 × 0.2)。
  - `applyMoraleToRoster(didWin)`：胜 +8 / 负 -10，边界 0/100；在 finishMatch 与 simulateMatchResult 中调用。
- **Acceptance Criteria Addressed**: AC-2
- **Completion Evidence**: 胜场 morale 70→78，负场→68；morale=100 时 effectivePower=110%，morale=0 时=90%。

## Task 5: 赛前战术系统
- **Status**: `completed`
- **Priority**: high
- **Depends On**: Task 2
- **Description**:
  - `gameState.tactic`（默认 balanced）；`setTactic(t)` 更新状态并刷新；`applyTacticToPower` 按战术修正。
- **Acceptance Criteria Addressed**: AC-3
- **Completion Evidence**: aggressive→own×1.05；defensive→opp×0.95；balanced 不变。

## Task 6: 整合 effectivePower 进比赛模拟
- **Status**: `completed`
- **Priority**: high
- **Depends On**: Task 4, Task 5
- **Description**:
  - simulateMatchResult 与 playMatch 使用 getEffectiveTeamPower() 经 applyTacticToPower 处理后传入 simulateScoreFor；可视化战力同步。
- **Acceptance Criteria Addressed**: AC-2, AC-3
- **Completion Evidence**: simulateMatchResult/playMatch 均使用 effectiveTeamPower 经战术修正后的值。

## Task 7: 联赛季后赛模拟
- **Status**: `completed`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - `simulateLeaguePlayoff(leagueKey)`：前 4 单败（1v4, 2v3, 决赛）；buildSeasonSummary 赛季结束时运行；showSeasonSummary 发 $80,000 奖金 + 邮件（按赛季去重）。
- **Acceptance Criteria Addressed**: AC-5
- **Completion Evidence**: simulateLeaguePlayoff 返回完整对阵（2 半决赛 + 1 决赛），冠军属前 4；赛季结算显示季后赛板块并发奖金。

## Task 8: UI - roster 士气条与训练状态
- **Status**: `completed`
- **Priority**: medium
- **Depends On**: Task 3, Task 4
- **Description**:
  - renderAgentCard 为 owned 选手显示士气条（颜色随值）；训练按钮根据 trainedWeek 显示「本周已训练」并禁用。
- **Acceptance Criteria Addressed**: AC-6
- **Completion Evidence**: 浏览器实测 roster 卡片显示士气条，训练按钮显示「训练 $8,000」，已训练则禁用。

## Task 9: UI - 控制台士气与战术选择器
- **Status**: `completed`
- **Priority**: medium
- **Depends On**: Task 5
- **Description**:
  - renderDashboard 下场比赛区域显示有效战力、团队士气，以及 3 按钮战术选择器（激进/均衡/防守），当前战术高亮。
- **Acceptance Criteria Addressed**: AC-6
- **Completion Evidence**: 浏览器实测控制台显示「有效战力」「士气」与 3 个战术按钮，点击可切换高亮。

## Task 10: 季后赛结果 UI 展示
- **Status**: `completed`
- **Priority**: medium
- **Depends On**: Task 7
- **Description**:
  - 赛季总结模态框新增季后赛板块：半决赛、决赛对阵与比分，高亮冠军；玩家夺冠显示祝贺。
- **Acceptance Criteria Addressed**: AC-5, AC-6
- **Completion Evidence**: showSeasonSummary HTML 含 playoff-bracket 结构与冠军名称，CSS 样式已添加。

## Task 11: 版本号、README 与游戏公告
- **Status**: `completed`
- **Priority**: low
- **Depends On**: Task 1-10
- **Description**:
  - APP_VERSION 升至 1.3.0，index.html 三处 ?v=1.3.0；README 新增 v1.3.0 条目；GAME_ANNOUNCEMENTS 新增 v1.3.0 公告。
- **Acceptance Criteria Addressed**: (meta)
- **Completion Evidence**: APP_VERSION='1.3.0'，index.html 三处 ?v=1.3.0，README 与公告已更新。

## Task 12: 全量验证
- **Status**: `completed`
- **Priority**: high
- **Depends On**: Task 1-11
- **Description**:
  - node --check 通过；25 项冒烟测试全绿；浏览器实测士气/训练/战术/季后赛 UI 正常无报错。
- **Acceptance Criteria Addressed**: AC-1~AC-7, NFR-1~NFR-4
- **Completion Evidence**: node --check exit 0；冒烟测试 25/25 通过；浏览器 4 项检查全 PASS 无控制台错误。
