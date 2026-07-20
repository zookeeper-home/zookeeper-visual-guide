# zookeeper-home 仓库命名规范

本组织下所有仓库遵循统一命名前缀，本地目录名必须与 GitHub 仓库名完全一致。

## 命名规则

| 类型 | 前缀格式 | 示例 | 说明 |
|------|---------|------|------|
| 动画演示（原理可视化） | `zk-<topic>-visual` | `zk-election-visual` | D3.js 动画演示某个 ZK 原理 |
| 靶场（故障排查实战） | `zk-<topic>-lab` | `zk-maxbuffer-lab` | 可一键启动的踩坑练习环境 |
| 索引门户 | `zookeeper-visual-guide` | — | 组织入口门户，唯一不使用 `zk-` 前缀 |

## 现有仓库

- `zk-election-visual` — ZAB 选举过程动画
- `zk-watcher-visual` — Watcher 机制动画
- `zk-write-flow-visual` — 写请求流程动画
- `zk-session-visual` — Session 与临时节点动画
- `zk-fault-visual` — 故障容错与恢复动画
- `zk-maxbuffer-lab` — jute.maxbuffer 踩坑靶场
- `zookeeper-visual-guide` — 索引门户

## 本地目录与远程一致性

本地克隆目录名必须与远程仓库名完全相同，路径统一在
`/home/cc11001100/github/zookeeper-home/<repo-name>/`。

## 新仓库检查清单

- [ ] 仓库名符合上表前缀格式
- [ ] 本地目录名 == 远程仓库名
- [ ] `vite.config.ts` 的 `base` == `'/<repo-name>/'`
- [ ] `.github/workflows/deploy.yml` 触发器为 `push: [main]`
- [ ] GitHub Pages 已启用（build_type: workflow）
- [ ] 仓库 website 设置为 `https://zookeeper-home.github.io/<repo-name>/`
