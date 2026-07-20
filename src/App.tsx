import styles from './App.module.css'

interface TopicCard {
  id: string
  icon: string
  title: string
  description: string
  tags: string[]
  url: string
  className: string
}

const TOPICS: TopicCard[] = [
  {
    id: 'election',
    icon: '🗳️',
    title: 'ZAB 选举过程',
    description:
      '可视化展示 ZooKeeper 集群中 Leader 选举的完整过程：节点自投票、投票交换、过半机制、Leader 产生。理解 ZAB 协议如何保证集群一致性。',
    tags: ['FastLeaderElection', '过半机制', 'ZAB 协议'],
    url: 'https://zookeeper-home.github.io/zk-visual-election/',
    className: styles.cardElection,
  },
  {
    id: 'watcher',
    icon: '👁️',
    title: 'Watcher 机制',
    description:
      '可视化展示 Watcher 的完整生命周期：注册监听、数据变更、事件通知、Watcher 消费、重新注册。理解 ZooKeeper 的一次性通知语义。',
    tags: ['一次性通知', 'NodeDataChanged', '事件类型'],
    url: 'https://zookeeper-home.github.io/zk-visual-watcher/',
    className: styles.cardWatcher,
  },
  {
    id: 'write-flow',
    icon: '✍️',
    title: '写请求流程',
    description:
      '可视化展示写请求的完整处理链路：客户端请求 → Leader 提议 → Followers ACK → 过半提交 → 响应客户端。理解 ZooKeeper 的类 2PC 提交协议。',
    tags: ['2PC', 'Proposal', 'ACK', 'Commit'],
    url: 'https://zookeeper-home.github.io/zk-visual-write-flow/',
    className: styles.cardWrite,
  },
  {
    id: 'session',
    icon: '⏱️',
    title: 'Session 与临时节点',
    description:
      '可视化展示 Session 的完整生命周期：连接建立、心跳保活、临时节点创建、超时过期、临时节点自动删除。理解 Session 与临时节点的绑定关系。',
    tags: ['心跳机制', '临时节点', 'Session 超时'],
    url: 'https://zookeeper-home.github.io/zk-visual-session/',
    className: styles.cardSession,
  },
  {
    id: 'fault',
    icon: '💥',
    title: '故障容错与恢复',
    description:
      '可视化展示集群故障场景：Follower 宕机、Quorum 丢失、Leader 重新选举、数据同步恢复。理解 ZooKeeper 如何在部分节点故障时保持可用性。',
    tags: ['Quorum', '脑裂', '数据同步', 'DIFF/TRUNC'],
    url: 'https://zookeeper-home.github.io/zk-visual-fault/',
    className: styles.cardFault,
  },
]

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🐘</span>
          <div>
            <div className={styles.logoTitle}>ZooKeeper 可视化教学</div>
            <div className={styles.logoSubtitle}>通过动画直观理解分布式协调原理</div>
          </div>
        </div>
        <a
          href="https://github.com/zookeeper-home"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
      </header>

      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>把一天能理解的知识，缩短到一个小时</h1>
        <p className={styles.heroSubtitle}>
          通过 D3.js 动画可视化，直观理解 ZooKeeper 的核心原理。不再死记硬背，看一遍动画就懂了。
        </p>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>5</div>
            <div className={styles.statLabel}>核心知识点</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>D3.js</div>
            <div className={styles.statLabel}>动画引擎</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>0</div>
            <div className={styles.statLabel}>前置要求</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>📚</span>
          知识点导航
        </h2>
        <p className={styles.sectionSubtitle}>点击卡片进入对应的可视化动画演示</p>
        <div className={styles.cards}>
          {TOPICS.map((topic) => (
            <a
              key={topic.id}
              href={topic.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${topic.className}`}
            >
              <div className={styles.cardIcon}>{topic.icon}</div>
              <h3 className={styles.cardTitle}>{topic.title}</h3>
              <p className={styles.cardDescription}>{topic.description}</p>
              <div className={styles.cardTags}>
                {topic.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.cardArrow}>
                开始学习
                <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.about}>
        <h2 className={styles.aboutTitle}>🎯 关于本项目</h2>
        <p className={styles.aboutText}>
          ZooKeeper 是分布式系统中最重要的协调服务之一，但其内部原理（ZAB 协议、Watcher 机制、Session 管理等）往往让人难以理解。
        </p>
        <p className={styles.aboutText}>
          本项目通过 D3.js 动画可视化，将抽象的分布式协议变成可见的动画，帮助开发者快速建立直觉。
        </p>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} ZooKeeper Home. 用动画理解分布式协调</p>
      </footer>
    </div>
  )
}
