'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './compliance.module.css'

export default function CompliancePage() {
  useEffect(() => {
    // Animated background grid
    const createComplianceGrid = () => {
      const canvas = document.getElementById('compliance-canvas')
      if (!canvas) return

      // Ensure we're on the client side
      if (typeof window === 'undefined') return

      const canvasElement = canvas as HTMLCanvasElement
      const w = window.innerWidth
      const h = window.innerHeight

      const ctx = canvasElement.getContext('2d')
      if (!ctx) return

      canvasElement.width = w
      canvasElement.height = h

      let offset = 0

      const animate = () => {
        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, w, h)

        // Draw grid
        ctx.strokeStyle = 'rgba(129, 66, 255, 0.1)'
        ctx.lineWidth = 1

        const gridSize = 50
        offset = (offset + 0.5) % gridSize

        for (let x = -offset; x < w; x += gridSize) {
          ctx.beginPath()
          ctx.moveTo(x, 0)
          ctx.lineTo(x, h)
          ctx.stroke()
        }

        for (let y = -offset; y < h; y += gridSize) {
          ctx.beginPath()
          ctx.moveTo(0, y)
          ctx.lineTo(w, y)
          ctx.stroke()
        }

        // Draw pulsing nodes at grid intersections
        ctx.fillStyle = 'rgba(129, 66, 255, 0.6)'
        for (let x = gridSize; x < w; x += gridSize * 3) {
          for (let y = gridSize; y < h; y += gridSize * 3) {
            const pulse = Math.sin(Date.now() / 1000 + x / 100 + y / 100) * 3 + 5
            ctx.beginPath()
            ctx.arc(x, y, pulse, 0, Math.PI * 2)
            ctx.fill()
          }
        }

        requestAnimationFrame(animate)
      }

      animate()
    }

    createComplianceGrid()

    // Compliance section animation - data flow and checkmarks
    const createComplianceAnimation = () => {
      const container = document.getElementById('compliance-animation')
      if (!container || typeof window === 'undefined') return

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svg.style.width = '100%'
      svg.style.height = '100%'
      svg.style.position = 'absolute'
      svg.style.top = '0'
      svg.style.left = '0'
      container.appendChild(svg)

      // Create flowing data particles
      const particles: { x: number; y: number; opacity: number; speed: number }[] = []
      for (let i = 0; i < 30; i++) {
        particles.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.5 + 0.2,
          speed: Math.random() * 0.3 + 0.1
        })
      }

      // Create shield icons
      const shields: { x: number; y: number; scale: number; pulse: number }[] = []
      for (let i = 0; i < 5; i++) {
        shields.push({
          x: (i + 0.5) * 20,
          y: 20 + Math.random() * 60,
          scale: 1,
          pulse: Math.random() * Math.PI * 2
        })
      }

      const updateCompliance = () => {
        svg.innerHTML = ''

        // Draw flowing lines (data streams)
        for (let i = 0; i < 5; i++) {
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
          const y = 20 + i * 15
          const offset = (Date.now() / 1000 + i) % 2
          path.setAttribute('d', `M 0 ${y} Q 25 ${y + 5 * Math.sin(offset * Math.PI)} 50 ${y} Q 75 ${y - 5 * Math.sin(offset * Math.PI)} 100 ${y}`)
          path.setAttribute('stroke', 'rgba(129, 66, 255, 0.1)')
          path.setAttribute('stroke-width', '1')
          path.setAttribute('fill', 'none')
          path.setAttribute('vector-effect', 'non-scaling-stroke')
          svg.appendChild(path)
        }

        // Draw particles
        particles.forEach((particle, index) => {
          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
          circle.setAttribute('cx', `${particle.x}%`)
          circle.setAttribute('cy', `${particle.y}%`)
          circle.setAttribute('r', '2')
          circle.setAttribute('fill', `rgba(129, 66, 255, ${particle.opacity})`)
          svg.appendChild(circle)

          // Update particle position
          particle.x += particle.speed
          if (particle.x > 100) particle.x = 0
          particle.opacity = 0.2 + Math.abs(Math.sin(particle.x / 10)) * 0.5
        })

        // Draw shield icons with pulsing effect
        shields.forEach(shield => {
          const group = document.createElementNS('http://www.w3.org/2000/svg', 'g')
          shield.pulse += 0.05
          shield.scale = 1 + Math.sin(shield.pulse) * 0.1

          const shieldPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
          shieldPath.setAttribute('d', `M ${shield.x},${shield.y - 2 * shield.scale} L ${shield.x + 2 * shield.scale},${shield.y} L ${shield.x},${shield.y + 3 * shield.scale} L ${shield.x - 2 * shield.scale},${shield.y} Z`)
          shieldPath.setAttribute('fill', 'none')
          shieldPath.setAttribute('stroke', `rgba(129, 66, 255, ${0.2 + shield.scale * 0.1})`)
          shieldPath.setAttribute('stroke-width', '1')
          group.appendChild(shieldPath)

          // Checkmark inside shield
          const check = document.createElementNS('http://www.w3.org/2000/svg', 'path')
          check.setAttribute('d', `M ${shield.x - 1},${shield.y} L ${shield.x - 0.3},${shield.y + 1} L ${shield.x + 1},${shield.y - 1}`)
          check.setAttribute('stroke', `rgba(129, 66, 255, ${0.3 + shield.scale * 0.2})`)
          check.setAttribute('stroke-width', '0.5')
          check.setAttribute('fill', 'none')
          group.appendChild(check)

          svg.appendChild(group)
        })

        requestAnimationFrame(updateCompliance)
      }

      updateCompliance()
    }

    createComplianceAnimation()

    // Framework card interaction
    const cards = document.querySelectorAll(`.${styles.frameworkCard}`)
    cards.forEach(card => {
      card.addEventListener('click', function(this: HTMLElement) {
        this.classList.toggle(styles.active)
      })
    })

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href') || '')
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    })
  }, [])

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <canvas id="compliance-canvas" className={styles.complianceCanvas}></canvas>
        </div>
        <div className={styles.heroContent}>
          <h1 className="font-urbanist">Compliance Automation</h1>
          <p>Automate continuous compliance for GDPR, SOX, HIPAA, and emerging AI regulations</p>
          <div className={styles.ctaButtons}>
            <Link href="#demo" className={styles.btnPrimary}>Request Demo</Link>
            <Link href="#frameworks" className={styles.btnSecondary}>Explore Frameworks</Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className={styles.valueSection}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} font-urbanist`}>From Weeks to <span className="gradient-text">Minutes</span></h2>
          <p className={`${styles.sectionSubtitle} font-urbanist`}>Transform compliance from a burden into a competitive advantage</p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>95%</div>
              <div className={styles.statLabel}>Reduction in manual audit prep time</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>3min</div>
              <div className={styles.statLabel}>Average DSR response time</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Automated evidence collection</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Continuous compliance monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.processSection}>
        <div className={styles.animatedBackground} id="compliance-animation"></div>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} font-urbanist`}>How It Works</h2>

          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.stepIcon}>🗺️</div>
              <h3 className="font-urbanist">Automated Mapping</h3>
              <p>Our AI agents automatically map your data flows, processing activities, and code to regulatory requirements. No manual documentation needed.</p>
            </div>
            <div className={styles.processVisual}>
              <div className={styles.visualPlaceholder}>
                <div className={styles.flowDiagram}>
                  <div className={styles.flowNode}>Data Sources</div>
                  <div className={styles.flowArrow}>→</div>
                  <div className={styles.flowNode}>Processing</div>
                  <div className={styles.flowArrow}>→</div>
                  <div className={styles.flowNode}>Compliance Check</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.processGrid} ${styles.reverse}`}>
            <div className={styles.processVisual}>
              <div className={styles.visualPlaceholder}>
                <div className={styles.policyDashboard}>
                  <div className={styles.policyItem}>
                    <span className={styles.policyIcon}>✓</span>
                    <span>Data Encryption</span>
                  </div>
                  <div className={styles.policyItem}>
                    <span className={styles.policyIcon}>✓</span>
                    <span>Access Controls</span>
                  </div>
                  <div className={styles.policyItem}>
                    <span className={styles.policyIcon}>⚠</span>
                    <span>Retention Policy</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepIcon}>🔍</div>
              <h3 className="font-urbanist">Continuous Monitoring</h3>
              <p>Real-time detection of compliance violations. Get instant alerts when code changes introduce regulatory risks or when data processing deviates from documented purposes.</p>
            </div>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.stepIcon}>📊</div>
              <h3 className="font-urbanist">Automated Evidence</h3>
              <p>Generate audit-ready reports in seconds. Our platform maintains a complete, queryable audit trail linking every piece of data to its legal basis and processing purpose.</p>
            </div>
            <div className={styles.processVisual}>
              <div className={styles.visualPlaceholder}>
                <div className={styles.reportPreview}>
                  <div className={styles.reportHeader}>Compliance Report</div>
                  <div className={styles.reportLine}></div>
                  <div className={styles.reportLine}></div>
                  <div className={styles.reportLine}></div>
                  <div className={styles.reportButton}>Download PDF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Frameworks Section */}
      <section className={styles.frameworksSection} id="frameworks">
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} font-urbanist`}>Supported Regulatory Frameworks</h2>
          <p className={styles.sectionDescription}>Comprehensive coverage for global compliance requirements</p>

          <div className={styles.frameworkGrid}>
            <div className={styles.frameworkCard}>
              <h3>GDPR</h3>
              <p className={styles.frameworkSubtitle}>General Data Protection Regulation</p>
              <ul className={styles.frameworkFeatures}>
                <li>Automated DSR responses</li>
                <li>Data mapping & lineage</li>
                <li>Consent management</li>
                <li>Right to be forgotten</li>
              </ul>
              <div className={styles.frameworkBadge}>EU</div>
            </div>

            <div className={styles.frameworkCard}>
              <h3>SOX</h3>
              <p className={styles.frameworkSubtitle}>Sarbanes-Oxley Act</p>
              <ul className={styles.frameworkFeatures}>
                <li>Change tracking & audit trails</li>
                <li>Access control verification</li>
                <li>Financial data integrity</li>
                <li>Automated controls testing</li>
              </ul>
              <div className={styles.frameworkBadge}>US</div>
            </div>

            <div className={styles.frameworkCard}>
              <h3>HIPAA</h3>
              <p className={styles.frameworkSubtitle}>Health Insurance Portability Act</p>
              <ul className={styles.frameworkFeatures}>
                <li>PHI discovery & classification</li>
                <li>Encryption enforcement</li>
                <li>Breach notification</li>
                <li>Access audit logging</li>
              </ul>
              <div className={styles.frameworkBadge}>US Healthcare</div>
            </div>

            <div className={styles.frameworkCard}>
              <h3>EU AI Act</h3>
              <p className={styles.frameworkSubtitle}>Artificial Intelligence Regulation</p>
              <ul className={styles.frameworkFeatures}>
                <li>AI system classification</li>
                <li>Risk assessment automation</li>
                <li>Training data lineage</li>
                <li>Model transparency reports</li>
              </ul>
              <div className={styles.frameworkBadge}>EU - Emerging</div>
            </div>

            <div className={styles.frameworkCard}>
              <h3>CCPA/CPRA</h3>
              <p className={styles.frameworkSubtitle}>California Privacy Rights Act</p>
              <ul className={styles.frameworkFeatures}>
                <li>Consumer rights automation</li>
                <li>Opt-out management</li>
                <li>Data sale tracking</li>
                <li>Privacy notice generation</li>
              </ul>
              <div className={styles.frameworkBadge}>California</div>
            </div>

            <div className={styles.frameworkCard}>
              <h3>ISO 27001</h3>
              <p className={styles.frameworkSubtitle}>Information Security Management</p>
              <ul className={styles.frameworkFeatures}>
                <li>Security controls mapping</li>
                <li>Risk assessment automation</li>
                <li>Incident response tracking</li>
                <li>Certification preparation</li>
              </ul>
              <div className={styles.frameworkBadge}>Global</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={styles.useCasesSection}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} font-urbanist`}>Real-World Use Cases</h2>

          <div className={styles.useCaseGrid}>
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>🏦</div>
              <h3>Financial Services</h3>
              <p>A multinational bank reduced SOX audit prep from 6 weeks to 3 days, with 100% automated controls testing across 200+ applications.</p>
              <div className={styles.useCaseMetrics}>
                <span className={styles.metric}>92% time savings</span>
                <span className={styles.metric}>Zero findings</span>
              </div>
            </div>

            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>🏥</div>
              <h3>Healthcare Provider</h3>
              <p>Leading hospital network achieved continuous HIPAA compliance, automatically tracking all PHI access and generating breach notifications within minutes.</p>
              <div className={styles.useCaseMetrics}>
                <span className={styles.metric}>$2M saved annually</span>
                <span className={styles.metric}>5min incident response</span>
              </div>
            </div>

            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>🛒</div>
              <h3>E-Commerce Platform</h3>
              <p>Global retailer automated GDPR and CCPA compliance across 15 countries, processing 10,000+ data subject requests per month automatically.</p>
              <div className={styles.useCaseMetrics}>
                <span className={styles.metric}>10K+ DSRs/month</span>
                <span className={styles.metric}>2min avg response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} id="demo">
        <div className={`${styles.container} ${styles.ctaContainer}`}>
          <h2 className={`${styles.sectionTitle} font-urbanist`}>Ready to Automate Your Compliance?</h2>
          <p className={styles.ctaSubtitle}>Join leading enterprises that have transformed compliance from a cost center to a strategic advantage.</p>

          <div className={styles.ctaForm}>
            <form>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Company Email</label>
                  <input type="email" className={styles.formInput} placeholder="you@company.com" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Company Name</label>
                  <input type="text" className={styles.formInput} placeholder="Acme Corp" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Which regulations do you need to comply with?</label>
                <div className={styles.checkboxGroup}>
                  <label className={styles.checkbox}>
                    <input type="checkbox" /> GDPR
                  </label>
                  <label className={styles.checkbox}>
                    <input type="checkbox" /> SOX
                  </label>
                  <label className={styles.checkbox}>
                    <input type="checkbox" /> HIPAA
                  </label>
                  <label className={styles.checkbox}>
                    <input type="checkbox" /> CCPA/CPRA
                  </label>
                  <label className={styles.checkbox}>
                    <input type="checkbox" /> EU AI Act
                  </label>
                  <label className={styles.checkbox}>
                    <input type="checkbox" /> Other
                  </label>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tell us about your compliance challenges</label>
                <textarea className={`${styles.formInput} ${styles.formTextarea}`} placeholder="We're struggling with..." required></textarea>
              </div>
              <button type="submit" className={`${styles.btnPrimary} ${styles.formSubmit}`}>Request Demo</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
