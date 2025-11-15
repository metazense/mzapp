import Image from 'next/image'
import styles from './InfoSections.module.css'

export default function InfoSections() {
  return (
    <>
      {/* Info Section 1: The Golden Triangle */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <div className={styles.infoGrid}>
            <div className={styles.infoText}>
              <h2 className="font-urbanist">The <span className="gradient-text">Golden Triangle</span></h2>
              <p>Traditional tools only look at code or infrastructure. <span className="gradient-text">Metazense</span> is the only platform that automatically maps and governs all three pillars of your enterprise:</p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureNumber}>1</div>
                  <div>
                    <div className={styles.featureTitle}>METADATA – The What</div>
                    <div className={styles.featureDesc}>Business metadata (definitions, glossaries, ownership), Technical metadata (schemas, data types, structures), and Operational metadata (lineage, quality metrics, usage patterns)</div>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureNumber}>2</div>
                  <div>
                    <div className={styles.featureTitle}>METACODE – The How</div>
                    <div className={styles.featureDesc}>Graph-based representation of code dependencies and data transformation logic from source to destination</div>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureNumber}>3</div>
                  <div>
                    <div className={styles.featureTitle}>METAPROCESS – The Why</div>
                    <div className={styles.featureDesc}>Business rationale and operational workflows that define why data and code exist and how they serve organizational objectives</div>
                  </div>
                </div>
              </div>
              <p>Together, these form your <strong>Digital Blueprint</strong> - a living, queryable knowledge graph that AI agents use to automate migrations, enforce compliance, and govern your AI/ML models.</p>
            </div>
            <div className={styles.infoVisual}>
              <div className={styles.iconLarge}>
                <Image
                  src="/images/logo-purple.png"
                  alt="Metazense Golden Triangle - Trefoil Knot"
                  width={300}
                  height={300}
                  style={{ maxWidth: '100%', height: 'auto', zIndex: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section 2: Why Metazense Digital Blueprint */}
      <section className={`${styles.infoSection} ${styles.whiteSection}`}>
        <div className={styles.infoContainer}>
          <div className={`${styles.infoGrid} ${styles.reverse}`}>
            <div className={styles.infoVisual}>
              <div className={styles.iconLargeXL}>
                <Image
                  src="/images/brain-metazense-white.png"
                  alt="Metazense Digital Blueprint - AI Brain"
                  width={518}
                  height={518}
                  style={{ maxWidth: '100%', height: 'auto', zIndex: 1 }}
                />
              </div>
            </div>
            <div className={styles.infoText}>
              <h2 className="font-urbanist">Why <span className="gradient-text">Metazense</span> Digital Blueprint?</h2>
              <p>Most enterprises don't have a <em>tool</em> problem. They have a <strong>knowledge problem</strong>. Your teams don't know how the legacy mainframe actually works, which tables are critical, or what will break if you change a column. Documentation is incomplete or outdated.</p>
              <p><span className="gradient-text">Metazense</span> solves this by automatically creating a unified, living knowledge graph of your entire digital landscape. Then we deploy specialized AI agents that leverage this knowledge to execute complex, multi-step workflows.</p>
              <div className={styles.featureList}>
                {[
                  'Automated knowledge extraction',
                  'AI-powered migration agents',
                  'Real-time compliance monitoring',
                  'Complete data lineage',
                  'Risk-free refactoring',
                  'Self-updating documentation'
                ].map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <div className={styles.featureNumber}>{index + 1}</div>
                    <div className={styles.featureText}>{feature}</div>
                  </div>
                ))}
              </div>
              <a href="#flow" className={`${styles.btn} ${styles.btnSecondaryDark}`}>Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section 3: Remove - This section is removed */}
    </>
  )
}
