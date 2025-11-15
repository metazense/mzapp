'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import styles from './Solutions.module.css'

const solutions = [
  {
    icon: '🚀',
    title: 'Legacy Modernization',
    description: 'De-risk and accelerate your move from mainframe or on-prem databases to the cloud. Our AI agents extract and preserve critical business logic from legacy code, cutting project timelines by 75% and project costs by up to 80%.',
    link: '/solutions/migration'
  },
  {
    icon: '🛡️',
    title: 'Compliance Automation',
    description: 'Automate continuous compliance for regulations like GDPR, SOX, and HIPAA. Our platform maps regulations to your actual data and code, automates evidence gathering for auditors, and reduces DSR response times from weeks to minutes.',
    link: '/solutions/compliance'
  },
  {
    icon: '🧠',
    title: 'AI Governance',
    description: 'Gain complete visibility into your entire AI/ML model lifecycle. Automatically discover all models, track their training data, detect bias, and classify risk to ensure compliance with emerging regulations like the EU AI Act.'
  },
  {
    icon: '🎯',
    title: 'Intelligent Impact Analysis',
    description: 'Before you deprecate a column in a core table, understand exactly what will break. Run precise dependency queries to get a definitive list of every affected pipeline, report, and data asset in seconds, not weeks of manual searching.'
  },
  {
    icon: '🔍',
    title: 'Business Process Reverse-Engineering',
    description: 'Trace the logic for a critical KPI from a report all the way back to its source, even if the original developer is gone. We make every operation explicit and queryable, automatically visualize the data flow, and provide plain-English explanations.'
  },
  {
    icon: '🏗️',
    title: 'Living Enterprise Architecture',
    description: 'Transform your static EA documents into a living, self-updating Digital Blueprint. Continuously validate your architecture against the reality of your codebase, automate governance checks, and empower your teams with a single source of truth that is always current.'
  },
  {
    icon: '📚',
    title: 'Developer Onboarding & Knowledge Transfer',
    description: 'Turn your digital landscape into a living, self-service knowledge base. New hires can explore the graph and read AI-generated summaries to become productive in days, not months, preserving institutional knowledge long after expert developers have moved on.'
  },
  {
    icon: '💰',
    title: 'Cloud Cost Optimization (FinOps)',
    description: 'Eliminate wasted cloud spend by connecting your bill directly to the code, applications, and business capabilities that generate it. Identify zombie assets and inefficient queries to reduce your monthly cloud costs by 20-30%.'
  },
  {
    icon: '⚡',
    title: 'System Resilience & Incident Response',
    description: 'Reduce Mean Time to Resolution (MTTR) by 80%. When an incident occurs, instantly see the full blast radius, recent code commits, and data dependencies, enabling your teams to diagnose and fix the root cause in minutes, not hours.'
  }
]

export default function Solutions() {
  useEffect(() => {
    // Generate stars
    const starsContainer = document.getElementById('solutions-stars')
    if (starsContainer) {
      for (let i = 0; i < 50; i++) {
        const star = document.createElement('div')
        star.className = styles.star
        star.style.left = Math.random() * 100 + '%'
        star.style.top = Math.random() * 100 + '%'
        star.style.animationDelay = Math.random() * 3 + 's'
        starsContainer.appendChild(star)
      }
    }
  }, [])

  return (
    <section className={styles.solutionsSection}>
      <div className={styles.stars} id="solutions-stars"></div>
      <div className={styles.solutionsHeader}>
        <div className={styles.solutionsIcon}>🔮</div>
        <h2 className="font-urbanist">Explore Metazense solutions</h2>
      </div>
      <div className={styles.solutionsGrid}>
        {solutions.map((solution, index) => {
          const CardContent = (
            <>
              <div className={styles.solutionCardIcon}>{solution.icon}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              {solution.link && <div className={styles.learnMore}>Learn more →</div>}
            </>
          )

          return solution.link ? (
            <Link key={index} href={solution.link} className={styles.solutionCard}>
              {CardContent}
            </Link>
          ) : (
            <div key={index} className={styles.solutionCard}>
              {CardContent}
            </div>
          )
        })}
      </div>
      <div className={styles.ctaButton}>
        <a href="#demo" className={styles.btnPrimary}>Get Demo →</a>
      </div>
    </section>
  )
}
