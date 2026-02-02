import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '../placeholder.module.css'

export default function SupportPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>SUPPORT</span>
          <h1 className={styles.title}>
            We&apos;re Here to Help You Succeed
          </h1>
          <p className={styles.subtitle}>
            24/7 enterprise support, comprehensive documentation, and a dedicated team committed to your security success.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#contact" className={styles.btnPrimary}>
              Contact Support →
            </Link>
            <Link href="/learning" className={styles.btnSecondary}>
              Browse Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Support Options</h2>
          <p className={styles.sectionSubtitle}>
            Multiple ways to get the help you need, when you need it
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📚</div>
              <h3>Documentation</h3>
              <p>Comprehensive guides, API references, and tutorials for every Metazense feature.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💬</div>
              <h3>Live Chat</h3>
              <p>Get instant answers from our support team directly within the platform.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎫</div>
              <h3>Support Tickets</h3>
              <p>Submit detailed requests and track resolution progress in real-time.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📞</div>
              <h3>Phone Support</h3>
              <p>Direct line to our enterprise support team for critical issues.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👤</div>
              <h3>Customer Success</h3>
              <p>Dedicated CSM to ensure you maximize value from Metazense.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌐</div>
              <h3>Community</h3>
              <p>Connect with other Metazense users, share insights, and get peer support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Need Immediate Assistance?</h2>
          <p className={styles.ctaText}>
            Our support team is available 24/7 for enterprise customers.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#contact" className={styles.btnPrimary}>
              Contact Us Now →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
