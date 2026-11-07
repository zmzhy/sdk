# VCT 战队经理 · Valorant Manager

一款纯前端的《无畏契约》战队经营模拟游戏。包含 40 支 VCT 战队、110 名职业选手、
24 周赛季、比赛 MVP 与选手数据统计，并支持基于 GitHub 仓库的云存档、全球排行榜、创意工坊、
站内邮箱与玩家对战（阵容码友谊赛 / 同屏双人）。

- 版本：**v1.1.0**
- 技术栈：HTML + CSS + 原生 JavaScript（零依赖、零构建）
- 后端：GitHub 仓库（GitHub Pages 托管 + GitHub Contents API 存储）

---

## 快速开始

### 本地游玩

任选一种：

```bash
# Python
python -m http.server 8080

# Node
npx serve .
```

浏览器打开 `http://localhost:8080`。

> 直接双击 `index.html` 也能玩，但本地文件协议下云端功能可能受浏览器安全策略限制，建议用本地服务器。

### 部署到 GitHub Pages

1. 在 GitHub 新建仓库（建议 **Public**，私有仓库的 Pages 需要付费账户）。
2. 把本目录全部文件推送到 `main` 分支：

```bash
git init
git add .
git commit -m "feat: VCT Manager v1.0.0"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

3. 仓库 **Settings → Pages → Build and deployment**，把 Source 选为 **GitHub Actions**。
4. 推送后 `.github/workflows/deploy.yml` 会自动部署，地址：
   `https://<用户名>.github.io/<仓库名>/`

---

## 云端功能配置

游戏本身完全可以在离线状态下运行（使用 localStorage 存档）。云端为可选能力。

进入游戏后点击顶栏 **☁** 图标，或开始界面「云端设置」：

| 字段 | 填写内容 |
| --- | --- |
| 仓库所有者 | 你的 GitHub 用户名或组织名 |
| 仓库名 | 存放游戏的仓库 |
| 分支 | 通常为 `main` |
| 访问令牌 | Fine-grained PAT |

### 创建访问令牌

1. GitHub → **Settings → Developer settings → Personal access tokens → Fine-grained tokens**
2. **Repository access** 选择 *Only select repositories*，勾选你的游戏仓库
3. **Permissions → Repository permissions → Contents** 设为 **Read and write**
4. 生成后复制令牌，粘贴到游戏内并点击「测试连接」

令牌只保存在你本机浏览器的 localStorage，不会上传到任何地方。

---

## 云端数据结构

所有数据都写在仓库的 `data/` 目录，用提交记录天然形成版本历史：

```
data/
├── leaderboard.json            全球排行榜（单文件，写入时合并去重）
├── saves/
│   └── <playerId>.json         每位玩家的云存档
└── workshop/
    ├── index.json              创意工坊索引（名称、作者、战力等摘要）
    └── items/
        └── <id>.json           作品详情（完整阵容）
```

- 云存档按本机生成的 `playerId` 命名，互不覆盖。
- 排行榜与工坊索引采用「读取 → 合并 → 写回 + 冲突重试」策略处理并发。
- 每次比赛结束会自动上传云存档；赛季结束时额外提交一次排行榜战绩。

---

## 安全与隐私

这套方案没有服务器，因此必须了解以下边界：

1. **令牌即写入权限。** 令牌泄露等同于该仓库 `Contents` 写权限泄露。不要把令牌写进源码、截图或公开聊天。
2. **公开仓库 = 公开数据。** 若仓库为 Public，`data/saves/` 与 `data/workshop/` 中的内容任何人都能读取。
   只想自己用时，请把仓库设为 Private（私有仓库 Pages 需 GitHub Pro），或不要上传云存档。
3. **无法防作弊。** 排行榜由客户端提交，任何人都能伪造战绩。它适合朋友间的小圈子，不适合当作严肃竞技榜单。
4. **GitHub API 限流。** 认证请求 5000 次/小时，未认证 60 次/小时。游戏已对读取做 30 秒缓存。

---

## 游戏内容

| 模块 | 说明 |
| --- | --- |
| 我的战队 | 阵容、选手属性、续约与解约、战力总评 |
| 转会市场 | 27 名特工 + 110 名真实职业选手 |
| 赛程 | 24 周赛季，逐周对局，比赛内结算 |
| 积分榜 | 40 支战队联赛排名 + 选手排行榜（战力/评级/职业/战队筛选） |
| VCT 战队 | 全部战队背景故事与完整阵容 |
| 全球榜 | 云端玩家战绩排名 |
| 创意工坊 | 发布/载入玩家自创战队 |
| 管理员控制台 | `Ctrl + Shift + A` 打开（金币、时间、属性、存档、调试） |

---

## 目录结构

```
.
├── index.html              页面结构
├── style.css               全部样式
├── game.js                 游戏逻辑与云端接入
├── github-backend.js       GitHub Contents API 封装（云存档/排行榜/工坊）
├── .github/workflows/      Pages 自动部署
├── .nojekyll               关闭 Jekyll 处理
└── data/                   云端数据（首次写入时自动创建）
```

---

## 版本记录

### v1.1.0
- 自创战队进入时弹窗提醒起名，控制台保留未命名提示条
- 新增站内邮箱：欢迎信、赛季奖金、购买凭证、工坊回执，支持未读角标与奖励领取
- 新增战队商城：队徽、主题、称号、改名卡、自动存档卡，全部为外观/便利道具，不修改比赛数值
- 新增玩家对战：阵容码异步友谊赛、创意工坊战队挑战、同屏双人战术卡对战
- 可视化对局：战术板、回合进度条、回合战报、MVP 结算卡片，支持暂停 / 1× / 2× / 跳过

### v1.0.0
- 正式版发布：40 支战队、110 名职业选手、27 名特工、24 周赛季
- 新增 GitHub 云存档、全球排行榜、创意工坊
- 新增管理员控制台
- 移动端适配（导航双行铺开、积分榜内部横向滚动、窄屏字号与间距调整）与错误提示优化

---

## 许可

MIT License，详见 [LICENSE](LICENSE)。

本项目为粉丝向作品，与 Riot Games 无隶属关系。VALORANT、VCT 及相关名称与标识归 Riot Games 所有。
