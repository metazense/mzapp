'use client'

import styles from './CTASection.module.css'

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
          <div className={styles.videoFrame}>
            <div className={styles.videoWrapper}>
              <video
                className={styles.ctaVideo}
                autoPlay
                loop
                muted
                playsInline
                aria-label="See Your Digital Blueprint in Action"
              >
                <source src="https://pub-57f689a05a7f44538384bbef252a8947.r2.dev/ecosystem_animation.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
