import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '../placeholder.module.css'

export default function ComparisonsPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>COMPARISONS</span>
          <h1 className={styles.title}>
            How Metazense Compares to Traditional Solutions
          </h1>
          <p className={styles.subtitle}>
            See why enterprises choose Metazense over legacy vulnerability scanners, SIEM tools, and manual remediation workflows. The difference is in the results.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#demo" className={styles.btnPrimary}>
              Get Demo →
            </Link>
            <Link href="/why-metazense" className={styles.btnSecondary}>
              Why Metazense
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Metazense vs. The Competition</h2>
          <p className={styles.sectionSubtitle}>
            Traditional tools find problems. Metazense solves them.
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📋</div>
              <h3>vs. Vulnerability Scanners</h3>
              <p>Scanners generate reports. Metazense generates fixes—automatically remediating vulnerabilities without human intervention.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>vs. SIEM Solutions</h3>
              <p>SIEM collects logs. Metazense takes action—correlating threats and remediating them in real-time.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✋</div>
              <h3>vs. Manual Remediation</h3>
              <p>Manual fixes take weeks. Metazense completes remediation in minutes with 100% accuracy.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔧</div>
              <h3>vs. Patch Management</h3>
              <p>Patch tools update software. Metazense understands context and applies intelligent, risk-based remediation.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📝</div>
              <h3>vs. Compliance Tools</h3>
              <p>Compliance tools check boxes. Metazense maintains continuous compliance with autonomous policy enforcement.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3>vs. Point Solutions</h3>
              <p>Point solutions address single problems. Metazense&apos;s 9 integrated solutions cover your entire security landscape.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>See the Difference for Yourself</h2>
          <p className={styles.ctaText}>
            Request a personalized demo comparing Metazense to your current solutions.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#demo" className={styles.btnPrimary}>
              Schedule Comparison Demo →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
