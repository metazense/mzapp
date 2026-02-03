'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './migration.module.css'

export default function MigrationPage() {
  useEffect(() => {
    // D3.js Network Graph Visualization
    const createNetworkGraph = () => {
      const canvas = document.getElementById('graph-canvas')
      if (!canvas) return

      // Ensure we're on the client side
      if (typeof window === 'undefined') return

      const canvasElement = canvas as HTMLCanvasElement
      const w = window.innerWidth
      const h = window.innerHeight

      // Simple canvas-based star field animation
      const ctx = canvasElement.getContext('2d')
      if (!ctx) return

      canvasElement.width = w
      canvasElement.height = h

      const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = []
      const nodeCount = 30

      // Create nodes
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          r: Math.random() * 3 + 2
        })
      }

      const animate = () => {
        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, w, h)

        // Update and draw nodes
        nodes.forEach(node => {
          node.x += node.vx
          node.y += node.vy

          if (node.x < 0 || node.x > w) node.vx *= -1
          if (node.y < 0 || node.y > h) node.vy *= -1

          ctx.fillStyle = 'rgba(129, 66, 255, 0.8)'
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2)
          ctx.fill()
        })

        // Draw connections
        ctx.strokeStyle = 'rgba(129, 66, 255, 0.2)'
        ctx.lineWidth = 1
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x
            const dy = nodes[i].y - nodes[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              ctx.beginPath()
              ctx.moveTo(nodes[i].x, nodes[i].y)
              ctx.lineTo(nodes[j].x, nodes[j].y)
              ctx.stroke()
            }
          }
        }

        requestAnimationFrame(animate)
      }

      animate()
    }

    createNetworkGraph()

    // Process section animation
    const createProcessAnimation = () => {
      const container = document.getElementById('process-animation')
      if (!container || typeof window === 'undefined') return

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svg.style.width = '100%'
      svg.style.height = '100%'
      svg.style.position = 'absolute'
      svg.style.top = '0'
      svg.style.left = '0'
      container.appendChild(svg)

      const nodes: { x: number; y: number; vx: number; vy: number }[] = []
      for (let i = 0; i < 20; i++) {
        nodes.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1
        })
      }

      const updateNetwork = () => {
        svg.innerHTML = ''

        // Draw connections
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x
            const dy = nodes[i].y - nodes[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 30) {
              const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
              line.setAttribute('x1', `${nodes[i].x}%`)
              line.setAttribute('y1', `${nodes[i].y}%`)
              line.setAttribute('x2', `${nodes[j].x}%`)
              line.setAttribute('y2', `${nodes[j].y}%`)
              line.setAttribute('stroke', 'rgba(129, 66, 255, 0.15)')
              line.setAttribute('stroke-width', '1')
              svg.appendChild(line)
            }
          }
        }

        // Draw nodes
        nodes.forEach(node => {
          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
          circle.setAttribute('cx', `${node.x}%`)
          circle.setAttribute('cy', `${node.y}%`)
          circle.setAttribute('r', '3')
          circle.setAttribute('fill', 'rgba(129, 66, 255, 0.3)')
          svg.appendChild(circle)
        })

        // Update positions
        nodes.forEach(node => {
          node.x += node.vx
          node.y += node.vy
          if (node.x < 0 || node.x > 100) node.vx *= -1
          if (node.y < 0 || node.y > 100) node.vy *= -1
        })

        requestAnimationFrame(updateNetwork)
      }

      updateNetwork()
    }

    createProcessAnimation()

    // Swarm animation for migration steps section
    const createSwarmAnimation = () => {
      const container = document.getElementById('swarm-animation')
      if (!container || typeof window === 'undefined') return

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svg.style.width = '100%'
      svg.style.height = '100%'
      svg.style.position = 'absolute'
      svg.style.top = '0'
      svg.style.left = '0'
      container.appendChild(svg)

      // Create swarm particles (birds)
      const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = []
      const particleCount = 50

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 2 + 1
        })
      }

      // Center of attraction (moves slowly)
      let centerX = 50
      let centerY = 50
      let centerVx = 0.05
      let centerVy = 0.03

      const updateSwarm = () => {
        svg.innerHTML = ''

        // Update center of attraction
        centerX += centerVx
        centerY += centerVy

        // Bounce center at edges
        if (centerX < 20 || centerX > 80) centerVx *= -1
        if (centerY < 20 || centerY > 80) centerVy *= -1

        // Update and draw particles
        particles.forEach((particle, i) => {
          // Attraction to center (flocking behavior)
          const dx = centerX - particle.x
          const dy = centerY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance > 0) {
            particle.vx += (dx / distance) * 0.01
            particle.vy += (dy / distance) * 0.01
          }

          // Alignment with neighbors (swarm behavior)
          let avgVx = 0
          let avgVy = 0
          let neighborCount = 0

          particles.forEach((other, j) => {
            if (i !== j) {
              const ndx = other.x - particle.x
              const ndy = other.y - particle.y
              const ndist = Math.sqrt(ndx * ndx + ndy * ndy)

              if (ndist < 15) {
                avgVx += other.vx
                avgVy += other.vy
                neighborCount++

                // Separation (avoid crowding)
                if (ndist < 5) {
                  particle.vx -= ndx * 0.01
                  particle.vy -= ndy * 0.01
                }
              }
            }
          })

          if (neighborCount > 0) {
            avgVx /= neighborCount
            avgVy /= neighborCount
            particle.vx += (avgVx - particle.vx) * 0.05
            particle.vy += (avgVy - particle.vy) * 0.05
          }

          // Limit speed
          const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
          const maxSpeed = 0.3
          if (speed > maxSpeed) {
            particle.vx = (particle.vx / speed) * maxSpeed
            particle.vy = (particle.vy / speed) * maxSpeed
          }

          // Update position
          particle.x += particle.vx
          particle.y += particle.vy

          // Wrap around edges
          if (particle.x < 0) particle.x = 100
          if (particle.x > 100) particle.x = 0
          if (particle.y < 0) particle.y = 100
          if (particle.y > 100) particle.y = 0

          // Draw particle
          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
          circle.setAttribute('cx', `${particle.x}%`)
          circle.setAttribute('cy', `${particle.y}%`)
          circle.setAttribute('r', particle.size.toString())
          circle.setAttribute('fill', 'rgba(129, 66, 255, 0.3)')
          svg.appendChild(circle)

          // Draw connection lines to nearby particles
          particles.forEach((other, j) => {
            if (i < j) {
              const dx = other.x - particle.x
              const dy = other.y - particle.y
              const dist = Math.sqrt(dx * dx + dy * dy)

              if (dist < 10) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
                line.setAttribute('x1', `${particle.x}%`)
                line.setAttribute('y1', `${particle.y}%`)
                line.setAttribute('x2', `${other.x}%`)
                line.setAttribute('y2', `${other.y}%`)
                line.setAttribute('stroke', `rgba(129, 66, 255, ${0.1 * (1 - dist / 10)})`)
                line.setAttribute('stroke-width', '1')
                svg.appendChild(line)
              }
            }
          })
        })

        requestAnimationFrame(updateSwarm)
      }

      updateSwarm()
    }

    createSwarmAnimation()

    // Step card interaction
    const cards = document.querySelectorAll(`.${styles.stepCard}`)
    cards.forEach(card => {
      card.addEventListener('click', function(this: HTMLElement) {
        cards.forEach(c => c.classList.remove(styles.active))
        this.classList.add(styles.active)
      })
    })

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
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
          <canvas id="graph-canvas" className={styles.graphCanvas}></canvas>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroImageFrame}>
            <video
              className={styles.heroVideo}
              autoPlay
              loop
              muted
              playsInline
              aria-label="DeepMig - AI-Powered Migration Tool"
            >
              <source src="https://pub-57f689a05a7f44538384bbef252a8947.r2.dev/deepmig.mp4" type="video/mp4" />
            </video>
          </div>
          <h1 className="font-urbanist">DEEPMIG</h1>
          <p>AI-Powered Migration from Legacy to Modern Frameworks</p>
          <div className={styles.ctaButtons}>
            <a href="https://github.com/metazense/deepmig" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">Try DeepMig Live</a>
            <Link href="#contact" className={styles.btnSecondary}>Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.animatedBackground} id="process-animation"></div>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} font-urbanist`}>Charting the Course:</h2>
          <p className={`${styles.sectionSubtitle} font-urbanist`}>End-to-End Migration with DeepMig</p>

          {/* Step 1: Blueprint */}
          <div className={styles.analyzeSection}>
            <div className={styles.analyzeContent}>
              <div className={styles.stepNumber}>01</div>
              <h3 className="font-urbanist">Blueprint Your Legacy System</h3>
              <p>Start with the DeepMig Parser Agent. It instantly deconstructs your entire legacy codebase into a detailed structural blueprint. This interactive map reveals every dependency, data flow, and hidden complexity, giving your team the essential visibility to review, iterate, and validate the true scope of your environment before migration begins.</p>
              <div className={styles.featureTags}>
                <span className={styles.featureTag}>Dependency Mapping</span>
                <span className={styles.featureTag}>Data Flow Analysis</span>
                <span className={styles.featureTag}>Interactive Visualization</span>
              </div>
            </div>
            <div className={styles.analyzeVisual}>
              <div className={styles.stepImageFrame}>
                <video
                  className={styles.stepVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Blueprint Your Legacy System - Code Analysis"
                >
                  <source src="https://pub-57f689a05a7f44538384bbef252a8947.r2.dev/metazcode.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* Step 2: Strategize */}
          <div className={styles.insightsSection}>
            <div className={`${styles.analyzeVisual} ${styles.insightsVisual}`}>
              <div className={styles.stepImageFrame}>
                <video
                  className={styles.stepVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Strategize the Migration"
                >
                  <source src="https://pub-57f689a05a7f44538384bbef252a8947.r2.dev/migration-plan-v2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className={styles.analyzeContent}>
              <div className={styles.stepNumber}>02</div>
              <h3 className="font-urbanist">Strategize the Migration</h3>
              <p>The blueprint becomes your strategic foundation. Our analysis engine processes this map to precisely assess project size, model complexities, and identify potential risks. The result is a data-driven migration plan with clear, actionable recommendations.</p>
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Scope timelines with confidence</span>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Allocate resources precisely</span>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>✓</span>
                  <span>Identify and mitigate risks early</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Convert */}
          <div className={styles.convertSection}>
            <div className={styles.analyzeContent}>
              <div className={styles.stepNumber}>03</div>
              <h3 className="font-urbanist">Convert and Modernize</h3>
              <p>Execute the plan with the DeepMig Converter Agent. Guided by the blueprint and your strategic choices, it performs intelligent, context-aware transformations of your legacy code, business logic, and database structures. This powerful engine automatically generates clean, idiomatic code and modern data pipelines for your target platform.</p>
              <div className={styles.featureTags}>
                <span className={styles.featureTag}>AI-Powered Transformation</span>
                <span className={styles.featureTag}>Context-Aware Conversion</span>
                <span className={styles.featureTag}>Automated Code Generation</span>
              </div>
            </div>
            <div className={`${styles.analyzeVisual} ${styles.convertVisual}`}>
              <div className={styles.stepImageFrame}>
                <video
                  className={styles.stepVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Convert and Modernize - Migration Execution"
                >
                  <source src="https://pub-57f689a05a7f44538384bbef252a8947.r2.dev/migration-execution.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* Step 4: Validate */}
          <div className={styles.validateSection}>
            <div className={`${styles.analyzeVisual} ${styles.validateVisual}`}>
              <div className={styles.stepImageFrame}>
                <video
                  className={styles.stepVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Validate and Accelerate - Migration Validation"
                >
                  <source src="https://pub-57f689a05a7f44538384bbef252a8947.r2.dev/migration-validation.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className={styles.analyzeContent}>
              <div className={styles.stepNumber}>04</div>
              <h3 className="font-urbanist">Validate and Accelerate</h3>
              <p>Migration isn't complete until it's verified. Our final stage delivers a comprehensive validation report, confirming the fidelity of the transformation against the original blueprint. We pinpoint any remaining edge cases or areas that require final human oversight, providing a clear and actionable handover that empowers your team to test, finalize, and deploy the new system faster.</p>
              <a href="https://github.com/metazense/deepmig-tutorial" className={styles.ctaLink} target="_blank" rel="noopener noreferrer">Start Your Migration Journey →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Steps Section */}
      <section className={styles.migrationSection}>
        <div className={styles.swarmBackground} id="swarm-animation"></div>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} font-urbanist`}>How to Migrate Successfully?</h2>
          <div className={styles.migrationSteps}>
            <div className={`${styles.stepCard} ${styles.active}`}>
              <h3>Assess & Plan</h3>
              <p className={styles.stepCardIntro}>Establish a rock-solid foundation for success by defining your goals and scope.</p>
              <p><strong>Commit to the Golden Rule: Lift and Shift.</strong> Your primary goal must be achieving perfect parity between the old and new systems. Avoid the trap of trying to fix or re-architect during the migration—save improvements for later.</p>
              <p><strong>Define Your Scope.</strong> Inventory all assets and decide on your rollout strategy. For large projects, plan a phased migration by tackling one high-impact business domain (e.g., Finance or Marketing) at a time to create manageable wins.</p>
            </div>
            <div className={styles.stepCard}>
              <h3>Proof of Value (PoV)</h3>
              <p className={styles.stepCardIntro}>De-risk your project and build momentum by executing a pilot migration on a focused area.</p>
              <p><strong>Execute a Pilot Domain.</strong> Select the first business domain from your plan (e.g., Finance) and use it as your PoV. The goal is to prove the process, validate the technology, and demonstrate a quick, successful outcome to stakeholders.</p>
              <p><strong>Automate and Validate.</strong> Use an AI Migration Agent on this smaller scope to automate the heavy lifting of code translation and data reconciliation. This proves you can achieve parity reliably before committing to the full-scale project.</p>
            </div>
            <div className={styles.stepCard}>
              <h3>Scale Out</h3>
              <p className={styles.stepCardIntro}>Execute the full migration with the confidence and efficiency gained from your successful PoV.</p>
              <p><strong>Replicate and Accelerate.</strong> Apply the proven process from your PoV to the remaining business domains. The AI agent scales the automated translation and validation, compressing a year-long project into weeks.</p>
              <p><strong>Go Live with Confidence.</strong> Run both systems in parallel and use continuous data validation to provide undeniable proof of parity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} font-urbanist`}>User Feedback</h2>
          <div className={styles.testimonialCarousel}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>In my role at leading tech companies, I've seen how DeepMig enhances the migration process. The Parser Agent provides valuable insights that help us accurately scope and plan migrations, ensuring a smooth transition. DeepMig's reliability and the team's responsiveness have made it a key tool in our migration efforts.</p>
              <div className={styles.testimonialAuthor}>Satish Garla,</div>
              <div className={styles.testimonialRole}>Senior Solution Architect</div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>The DeepMig-powered migration fits the chosen route to a modern architecture. For us this step is necessary, so that we can work from one environment and thus combine our existing and new source systems.</p>
              <div className={styles.testimonialAuthor}>Enterprise Team</div>
              <div className={styles.testimonialRole}>at Tech Conference in London</div>
            </div>
          </div>
        </div>
      </section>

      {/* Playbook Download Section */}
      <section className={styles.playbookSection}>
        <div className={styles.container}>
          <div className={styles.playbookContainer}>
            <div className={styles.playbookContent}>
              <div className={styles.playbookBadge}>FREE RESOURCE</div>
              <h2 className={`${styles.playbookTitle} font-urbanist`}>
                Get Your Free <span className={styles.gradientText}>AI-Powered Data Migration Playbook</span>
              </h2>
              <p className={styles.playbookDescription}>
                Unlock proven strategies, best practices, and expert insights to accelerate your migration journey. This comprehensive playbook includes:
              </p>
              <div className={styles.playbookFeatures}>
                <div className={styles.playbookFeature}>
                  <span className={styles.playbookIcon}>✓</span>
                  <span>Step-by-step migration framework</span>
                </div>
                <div className={styles.playbookFeature}>
                  <span className={styles.playbookIcon}>✓</span>
                  <span>Risk mitigation strategies</span>
                </div>
                <div className={styles.playbookFeature}>
                  <span className={styles.playbookIcon}>✓</span>
                  <span>Real-world case studies</span>
                </div>
                <div className={styles.playbookFeature}>
                  <span className={styles.playbookIcon}>✓</span>
                  <span>AI implementation checklist</span>
                </div>
              </div>
            </div>
            <div className={styles.playbookFormWrapper}>
              <div className={styles.playbookForm}>
                <h3 className="font-urbanist">Download Your Playbook</h3>
                <p className={styles.playbookFormSubtitle}>Enter your company email to receive instant access</p>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault()
                    const form = e.target as HTMLFormElement
                    const formData = new FormData(form)
                    try {
                      await fetch('https://formspree.io/f/xrelogvj', {
                        method: 'POST',
                        body: formData,
                        headers: { 'Accept': 'application/json' }
                      })
                      window.open('https://drive.google.com/file/d/1GJdRiWm5nHmgIO47nSaPb29VYXrx3Tox/view?usp=drive_link', '_blank')
                      form.reset()
                    } catch (error) {
                      alert('Something went wrong. Please try again.')
                    }
                  }}
                >
                  <input type="hidden" name="_subject" value="New Playbook Download Request" />
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Company Email</label>
                    <input
                      type="email"
                      name="email"
                      className={styles.formInput}
                      placeholder="email@company.com"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Company Name</label>
                    <input
                      type="text"
                      name="company"
                      className={styles.formInput}
                      placeholder="Your Company"
                      required
                    />
                  </div>
                  <button type="submit" className={`${styles.btnPrimary} ${styles.formSubmit}`}>
                    Download Playbook →
                  </button>
                  <div className={styles.playbookDisclaimer}>
                    By downloading, you agree to receive occasional updates from Metazense. Unsubscribe anytime.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection} id="contact">
        <div className={`${styles.container} ${styles.contactContainer}`}>
          <h2 className={`${styles.sectionTitle} font-urbanist`}>Looking to transform your migration journey?</h2>
          <p className={styles.sectionSubtitle}>Share your email and intended use for DeepMig, and our team will reach out to assist you.</p>
          <div className={styles.contactForm}>
            <form
              action="https://formspree.io/f/xrelogvj"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New DeepMig Contact Request" />
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Your work email</label>
                <input type="email" name="email" className={styles.formInput} placeholder="email@company.com" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>How are you planning to use DeepMig?</label>
                <textarea name="message" className={`${styles.formInput} ${styles.formTextarea}`} placeholder="Tell us about your migration needs..." required></textarea>
              </div>
              <button type="submit" className={`${styles.btnPrimary} ${styles.formSubmit}`}>Sign-Up</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
