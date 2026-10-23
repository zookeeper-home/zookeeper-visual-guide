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
      '从节点自投票、投票交换到过半决议，逐步看懂 ZooKeeper 如何选出 Leader，以及 ZAB 协议如何让集群达成一致。',
    tags: ['FastLeaderElection', '过半机制', 'ZAB 协议'],
    url: 'https://zookeeper-home.github.io/zk-visual-election/',
    className: styles.cardElection,
  },
  {
    id: 'watcher',
    icon: '👁️',
    title: 'Watcher 机制',
    description:
      '跟随一次监听的完整旅程：注册监听、数据变更、事件通知与消费，再到重新注册，理解一次性通知语义。',
    tags: ['一次性通知', 'NodeDataChanged', '事件类型'],
    url: 'https://zookeeper-home.github.io/zk-visual-watcher/',
    className: styles.cardWatcher,
  },
  {
    id: 'write-flow',
    icon: '✍️',
    title: '写请求流程',
    description:
      '沿着客户端、Leader 和 Followers 的消息往返，看提议、ACK、过半提交如何串成一次可靠的写请求。',
    tags: ['Proposal', 'ACK', 'Commit'],
    url: 'https://zookeeper-home.github.io/zk-visual-write-flow/',
    className: styles.cardWrite,
  },
  {
    id: 'session',
    icon: '⏱️',
    title: 'Session 与临时节点',
    description:
      '从连接建立和心跳保活，到 Session 超时与临时节点自动删除，直观理解会话和节点之间的绑定关系。',
    tags: ['心跳机制', '临时节点', 'Session 超时'],
    url: 'https://zookeeper-home.github.io/zk-visual-session/',
    className: styles.cardSession,
  },
  {
    id: 'fault',
    icon: '💥',
    title: '故障容错与恢复',
    description:
      '观察 Follower 故障、Quorum 变化、Leader 重新选举和数据同步，理解集群如何应对故障并恢复服务。',
    tags: ['Quorum', '脑裂', 'DIFF / TRUNC'],
    url: 'https://zookeeper-home.github.io/zk-visual-fault/',
    className: styles.cardFault,
  },
]

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <a className={styles.logo} href="#top" aria-label="ZooKeeper 可视化教学首页">
          <span className={styles.logoIcon} aria-hidden="true">🐘</span>
          <span>
            <span className={styles.logoTitle}>ZooKeeper 可视化教学</span>
            <span className={styles.logoSubtitle}>通过动画理解分布式协调</span>
          </span>
        </a>
        <a
          href="https://github.com/zookeeper-home"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
          aria-label="在新窗口打开 ZooKeeper Home GitHub 组织"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className={styles.githubLinkLabel}>GitHub</span>
        </a>
      </header>

      <main id="top">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroEyebrow}>ZooKeeper · 分布式协调学习指南</div>
          <h1 className={styles.heroTitle} id="hero-title">
            让分布式原理
            <br />
            <span className={styles.heroTitleAccent}>看得见，也看得懂。</span>
          </h1>
          <p className={styles.heroSubtitle}>
            从 Leader 选举到故障恢复，用交互式可视化拆解 ZooKeeper 的核心机制。少一点抽象，多一点直觉。
          </p>
          <div className={styles.heroActions}>
            <a className={styles.heroCta} href="#topics">
              开始探索 <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className={styles.heroStats} aria-label="学习指南概览">
            <div className={styles.stat}>
              <div className={styles.statNumber}>{TOPICS.length}</div>
              <div className={styles.statLabel}>核心主题</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>交互式</div>
              <div className={styles.statLabel}>跟随过程理解</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>零基础</div>
              <div className={styles.statLabel}>无需前置准备</div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="topics" aria-labelledby="topics-title">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionKicker}>Explore the concepts</p>
              <h2 className={styles.sectionTitle} id="topics-title">
                <span className={styles.sectionTitleIcon} aria-hidden="true">✳</span>
                从这里开始理解
              </h2>
              <p className={styles.sectionSubtitle}>选择一个主题，跟着可视化过程一步步探索。</p>
            </div>
            <span className={styles.sectionCount}>01 — 0{TOPICS.length}</span>
          </div>

          <nav className={styles.cards} aria-label="ZooKeeper 可视化主题">
            {TOPICS.map((topic, index) => (
              <a
                key={topic.id}
                href={topic.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.card} ${topic.className}`}
                aria-label={`${topic.title}：在新窗口打开可视化演示`}
              >
                <div className={styles.cardTopline}>
                  <span className={styles.cardIcon} aria-hidden="true">{topic.icon}</span>
                  <span className={styles.cardIndex}>0{index + 1} / 0{TOPICS.length}</span>
                </div>
                <h3 className={styles.cardTitle}>{topic.title}</h3>
                <p className={styles.cardDescription}>{topic.description}</p>
                <div className={styles.cardTags} aria-label="相关关键词">
                  {topic.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.cardArrow}>
                  开始学习 <span className={styles.cardArrowIcon} aria-hidden="true">↗</span>
                </div>
              </a>
            ))}
          </nav>
        </section>

        <section className={styles.about} aria-labelledby="about-title">
          <div className={styles.aboutInner}>
            <div className={styles.aboutMark} aria-hidden="true">✦</div>
            <p className={styles.aboutKicker}>Why visual learning</p>
            <h2 className={styles.aboutTitle} id="about-title">把抽象的协议，变成清晰的过程。</h2>
            <p className={styles.aboutText}>
              ZooKeeper 是分布式系统中重要的协调服务，但 ZAB 协议、Watcher 和 Session 等概念往往难以只靠文字建立直觉。
            </p>
            <p className={styles.aboutText}>
              本指南通过动画呈现节点间的状态变化与消息流转，帮助你循序渐进地理解每一步发生了什么。
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span className={styles.footerMark} aria-hidden="true">✳</span>
        <span>ZooKeeper Home · 用动画理解分布式协调</span>
      </footer>
    </div>
  )
}
