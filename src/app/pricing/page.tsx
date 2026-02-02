import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '../placeholder.module.css'

export default function PricingPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>PRICING</span>
          <h1 className={styles.title}>
            Enterprise Security That Scales With You
          </h1>
          <p className={styles.subtitle}>
            Flexible pricing based on your infrastructure size and security needs. All plans include access to our 9 integrated solutions and agentic remediation capabilities.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#demo" className={styles.btnPrimary}>
              Get Custom Quote →
            </Link>
            <Link href="/comparisons" className={styles.btnSecondary}>
              Compare Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What&apos;s Included in Every Plan</h2>
          <p className={styles.sectionSubtitle}>
            Enterprise-grade security without enterprise complexity
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🤖</div>
              <h3>Agentic Remediation</h3>
              <p>AI-powered autonomous vulnerability fixes across your entire infrastructure.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔗</div>
              <h3>9 Integrated Solutions</h3>
              <p>Migration, Compliance, SBOM, Threat Detection, and 5 more solutions included.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Enterprise Dashboard</h3>
              <p>Real-time visibility into your security posture with executive reporting.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔌</div>
              <h3>Unlimited Integrations</h3>
              <p>Connect to any cloud, tool, or platform in your stack at no extra cost.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👥</div>
              <h3>Dedicated Support</h3>
              <p>24/7 enterprise support with dedicated customer success managers.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚀</div>
              <h3>White-Glove Onboarding</h3>
              <p>Expert-guided deployment to get you operational in days, not months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Get a Custom Quote</h2>
          <p className={styles.ctaText}>
            Tell us about your infrastructure and security goals. We&apos;ll create a tailored package for your needs.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#demo" className={styles.btnPrimary}>
              Contact Sales →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
