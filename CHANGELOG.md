# Changelog


## 2026-07-20 - 组织仓库统一化

- 7 个仓库统一改为 public（原为私有，免费 org 计划需 public 才能用 Pages）
- 7 个仓库启用 GitHub Pages（build_type=workflow，复用现有 deploy.yml）
- 6 个仓库补 `package.json` homepage 字段指向 Pages URL
- 7 个仓库 website（homepageUrl）设为各自 Pages URL
- 新增 `REPO_NAMING.md` 命名规范：`zk-<topic>-visual`（动画）/`zk-<topic>-lab`（靶场）/`zookeeper-visual-guide`（门户）
- 本地目录名已与远程仓库名完全一致
- deploy.yml 触发器统一为 `push: [main]`，推送/合并即自动部署
