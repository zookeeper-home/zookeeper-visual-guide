# Changelog


## 2026-07-20 - 组织仓库统一化

- 7 个仓库统一改为 public（原为私有，免费 org 计划需 public 才能用 Pages）
- 7 个仓库启用 GitHub Pages（build_type=workflow，复用现有 deploy.yml）
- 6 个仓库补 `package.json` homepage 字段指向 Pages URL
- 7 个仓库 website（homepageUrl）设为各自 Pages URL
- 新增 `REPO_NAMING.md` 命名规范：`zk-visual-<topic>`（动画）/`zk-<topic>-lab`（靶场）/`zookeeper-visual-guide`（门户）
- 本地目录名已与远程仓库名完全一致
- deploy.yml 触发器统一为 `push: [main]`，推送/合并即自动部署

## 2026-07-20 - 动画演示仓库统一前缀 zk-visual-*

- 5 个动画演示仓库从后缀格式 `zk-<topic>-visual` 重命名为前缀格式 `zk-visual-<topic>`：
  - `zk-election-visual` → `zk-visual-election`
  - `zk-watcher-visual` → `zk-visual-watcher`
  - `zk-write-flow-visual` → `zk-visual-write-flow`
  - `zk-session-visual` → `zk-visual-session`
  - `zk-fault-visual` → `zk-visual-fault`
- GitHub 仓库名、本地目录名、vite base、package.json name+homepage、远程 website 同步更新
- 仓库内残留引用全部更新：README Pages URL、App.tsx githubUrl、indexedDB DB_NAME、package-lock name
- portal（本仓库）App.tsx 5 个 TopicCard URL 与 README 查看链接指向新 `zk-visual-*/` Pages
- `REPO_NAMING.md` 命名格式反转为 `zk-visual-<topic>`，现有仓库列表更新
- 靶场 `zk-maxbuffer-lab` 与门户 `zookeeper-visual-guide` 不在"动画演示"之列，保持原名
- 6 个仓库 deploy 重新跑通，新 `https://zookeeper-home.github.io/zk-visual-*/` 全部 HTTP 200
