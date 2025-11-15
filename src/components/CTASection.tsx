import styles from './CTASection.module.css'
import TechHubAnimation from './TechHubAnimation'

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <div className={styles.ctaContent}>
          <h2 className="font-urbanist">See Your <span className="gradient-text">Digital Blueprint</span> in Action</h2>
          <p>Watch how Metazense automatically maps a complex enterprise system in minutes, not months. We'll show you the knowledge graph, the dependency analyzer, and how our AI agents use it to plan a real migration.</p>
          <div className={styles.ctaFeatures}>
            <div className={styles.ctaFeature}>
              <span className={styles.ctaCheckmark}>✓</span>
              <span>Live mapping demo</span>
            </div>
            <div className={styles.ctaFeature}>
              <span className={styles.ctaCheckmark}>✓</span>
              <span>Interactive knowledge graph</span>
            </div>
            <div className={styles.ctaFeature}>
              <span className={styles.ctaCheckmark}>✓</span>
              <span>Real migration scenario</span>
            </div>
          </div>
          <a href="#demo" className={styles.btnPrimary}>Book Your Demo →</a>
        </div>
        <div className={styles.ctaVisual}>
          <div className={styles.dashboardMockup}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles.mockupTitle}>Digital Blueprint Dashboard</div>
            </div>
            <div className={styles.mockupContent}>
              <TechHubAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
