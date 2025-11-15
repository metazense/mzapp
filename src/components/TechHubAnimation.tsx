'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './TechHubAnimation.module.css'

// Curated list of tech logos to display
const techLogos = [
  // Databases
  'mysql.webp',
  'postgresql.webp',
  'oracle.webp',
  'mongodb.webp',
  'azuresql.webp',
  'snowflake.webp',
  'cassandra.webp',
  'elasticsearch.webp',
  // Data Platforms
  'databricks.webp',
  'bigquery.webp',
  // ETL/Integration
  'airflow.webp',
  'dbt.webp',
  'fivetran.webp',
  'airbyte.webp',
  'kafka.webp',
  'spark.webp',
  // BI Tools
  'looker.webp',
  'tableau.webp',
  'power-bi.webp',
  // Dev Tools
  'gitlab.webp',
  'azure-devops-logo.webp',
  'flink.webp',
  'delta-lake.webp',
  'presto.webp'
]

export default function TechHubAnimation() {
  const [currentSet, setCurrentSet] = useState(0)
  const itemsPerSet = 24 // Number of icons to show at once (6x4 grid around center)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % Math.ceil(techLogos.length / itemsPerSet))
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  // Get current set of logos to display
  const startIdx = currentSet * itemsPerSet
  const displayLogos = techLogos.slice(startIdx, startIdx + itemsPerSet)

  // Grid positions (6 columns x 4 rows, center is empty)
  const gridPositions = [
    // Row 1
    { row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }, { row: 0, col: 3 }, { row: 0, col: 4 }, { row: 0, col: 5 },
    // Row 2
    { row: 1, col: 0 }, { row: 1, col: 1 }, /* CENTER */ { row: 1, col: 4 }, { row: 1, col: 5 },
    // Row 3
    { row: 2, col: 0 }, { row: 2, col: 1 }, /* CENTER */ { row: 2, col: 4 }, { row: 2, col: 5 },
    // Row 4
    { row: 3, col: 0 }, { row: 3, col: 1 }, { row: 3, col: 2 }, { row: 3, col: 3 }, { row: 3, col: 4 }, { row: 3, col: 5 }
  ]

  return (
    <div className={styles.container}>
      {/* Purple glow effect */}
      <div className={styles.purpleGlow} />

      {/* Dashed connection lines */}
      <svg className={styles.connectionLines} viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="50" y1="50" x2="0" y2="20" className={styles.dashedLine} />
        <line x1="50" y1="50" x2="100" y2="20" className={styles.dashedLine} />
        <line x1="50" y1="50" x2="0" y2="50" className={styles.dashedLine} />
        <line x1="50" y1="50" x2="100" y2="50" className={styles.dashedLine} />
        <line x1="50" y1="50" x2="0" y2="80" className={styles.dashedLine} />
        <line x1="50" y1="50" x2="100" y2="80" className={styles.dashedLine} />
      </svg>

      {/* Grid of tech logos */}
      <div className={styles.grid}>
        {displayLogos.map((logo, idx) => {
          const pos = gridPositions[idx]
          if (!pos) return null

          return (
            <div
              key={`${logo}-${idx}`}
              className={styles.techIcon}
              style={{
                gridRow: pos.row + 1,
                gridColumn: pos.col + 1,
              }}
            >
              <div className={styles.iconCard}>
                <Image
                  src={`/images/tech/${logo}`}
                  alt={logo.replace('.webp', '').replace('.png', '')}
                  width={60}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Central brain logo */}
      <div className={styles.centralHub}>
        <div className={styles.centralOrb}>
          <Image
            src="/images/result.png"
            alt="Metazense Digital Blueprint"
            width={120}
            height={120}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  )
}
