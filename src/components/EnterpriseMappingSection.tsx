'use client'

import { useState } from 'react'
import styles from './EnterpriseMappingSection.module.css'

export default function EnterpriseMappingSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.description}>
            Legacy migrations fail because teams don't understand what they're migrating.{' '}
            <span className="gradient-text">Metazense</span> creates a living Digital Blueprint of your data, code, and processes—then uses AI agents to automate the migration, ongoing compliance, and AI governance.
          </p>

          {/* Expandable section */}
          <div className={styles.expandableCard}>
            <button
              className={styles.expandButton}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span className={styles.expandTitle}>What is an Intelligent Enterprise Mapping Platform?</span>
              <svg
                className={`${styles.chevron} ${isExpanded ? styles.chevronRotated : ''}`}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {isExpanded && (
              <div className={styles.expandedContent}>
                <p className={styles.paragraph}>
                  An intelligent enterprise mapping platform creates a living blueprint of your technology estate, then uses AI agents to automate critical operations.
                </p>

                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <span className={styles.bullet}>•</span>
                    <span>
                      The mapping layer continuously discovers and connects your data assets, application code, and business processes—creating a complete, self-updating view of how your systems actually work together.
                    </span>
                  </li>
                  <li className={styles.listItem}>
                    <span className={styles.bullet}>•</span>
                    <span>
                      The intelligence layer uses this blueprint to power agentic AI applications that automate legacy migrations, enforce compliance, govern AI models, analyze impact, and remediate technical debt.
                    </span>
                  </li>
                </ul>

                <p className={styles.paragraph}>
                  This transforms enterprise visibility from static documentation into an active intelligence system that not only maps your systems but actively orchestrates their transformation—making your blueprint the foundation for automated modernization and governance.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
