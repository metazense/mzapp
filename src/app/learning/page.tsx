import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '../placeholder.module.css'

export default function LearningPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>LEARNING</span>
          <h1 className={styles.title}>
            Master Metazense & Modern Security
          </h1>
          <p className={styles.subtitle}>
            Self-paced courses, certifications, and hands-on labs to become an expert in agentic vulnerability management and our 9 integrated solutions.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#courses" className={styles.btnPrimary}>
              Explore Courses →
            </Link>
            <Link href="/support" className={styles.btnSecondary}>
              Get Help
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Learning Paths</h2>
          <p className={styles.sectionSubtitle}>
            Structured curricula for every role and skill level
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚀</div>
              <h3>Getting Started</h3>
              <p>Quick-start guides to deploy Metazense and achieve first remediation in under an hour.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔧</div>
              <h3>Platform Deep Dive</h3>
              <p>Master all 9 solutions: Migration, Compliance, SBOM, Threat Detection, and more.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔌</div>
              <h3>Integrations Lab</h3>
              <p>Hands-on labs for connecting Metazense to your cloud, CI/CD, and security stack.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📋</div>
              <h3>Compliance Academy</h3>
              <p>Framework-specific courses for SOC 2, HIPAA, PCI-DSS, GDPR, and more.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏆</div>
              <h3>Certification Program</h3>
              <p>Validate your expertise with official Metazense certifications.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👥</div>
              <h3>Admin Training</h3>
              <p>Advanced training for security administrators and team leads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Start Your Learning Journey</h2>
          <p className={styles.ctaText}>
            Create a free account to access all learning resources.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#signup" className={styles.btnPrimary}>
              Create Account →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
