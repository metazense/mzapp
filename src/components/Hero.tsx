'use client'

import { useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  useEffect(() => {
    // Generate stars - fewer on mobile for performance
    const starsContainer = document.getElementById('stars')
    if (starsContainer) {
      const isMobile = window.innerWidth <= 768
      const starCount = isMobile ? 20 : 50
      for (let i = 0; i < starCount; i++) {
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
    <section className={styles.hero}>
      <div className={styles.stars} id="stars"></div>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className="font-urbanist">
            <span className="gradient-text">Intelligent</span> Enterprise<br />
            Mapping
          </h1>
          <p>We don't just document your systems. We orchestrate them.</p>
          <div className={styles.heroButtons}>
            <a href="#demo" className={styles.btnPrimary}>Get Demo →</a>
            <a href="#learn" className={styles.btnSecondary}>Learn More</a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.deviceMockup}>
            {/* Device frame */}
            <div className={styles.deviceFrame}>
              {/* Video container */}
              <div className={styles.videoContainer}>
                <video
                  className={styles.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Metazense ecosystem animation"
                >
                  <source src="https://pub-57f689a05a7f44538384bbef252a8947.r2.dev/ecosystem_animation.mp4" type="video/mp4" />
                  <div className={styles.videoFallback}>
                    Video not supported
                  </div>
                </video>
              </div>
            </div>
            {/* Floating elements */}
            <div className={styles.floatingDot1}></div>
            <div className={styles.floatingDot2}></div>
            <div className={styles.floatingDot3}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
