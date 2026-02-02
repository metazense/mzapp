import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '../placeholder.module.css'

export default function LibraryPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>LIBRARY</span>
          <h1 className={styles.title}>
            Resources to Master Enterprise Security
          </h1>
          <p className={styles.subtitle}>
            Whitepapers, case studies, solution briefs, and more. Everything you need to understand and implement modern agentic vulnerability management.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#resources" className={styles.btnPrimary}>
              Browse Resources →
            </Link>
            <Link href="/learning" className={styles.btnSecondary}>
              Start Learning
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className={styles.cardsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Resources</h2>
          <p className={styles.sectionSubtitle}>
            Deep-dive content for security professionals and executives
          </p>

          {/* Filter Tabs */}
          <div className={styles.filterTabs}>
            <button className={`${styles.filterTab} ${styles.filterTabActive}`}>All</button>
            <button className={styles.filterTab}>Whitepapers</button>
            <button className={styles.filterTab}>Case Studies</button>
            <button className={styles.filterTab}>Solution Briefs</button>
            <button className={styles.filterTab}>Reports</button>
          </div>

          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.cardImage}>📄</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Whitepaper</span>
                <h3 className={styles.cardTitle}>The Complete Guide to Agentic Vulnerability Management</h3>
                <p className={styles.cardExcerpt}>How AI agents are revolutionizing enterprise security from detection to autonomous remediation.</p>
                <div className={styles.cardMeta}>45 pages • PDF</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>📊</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Report</span>
                <h3 className={styles.cardTitle}>2025 State of Enterprise Vulnerability Remediation</h3>
                <p className={styles.cardExcerpt}>Annual industry report on remediation trends, challenges, and best practices from 500+ enterprises.</p>
                <div className={styles.cardMeta}>32 pages • PDF</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>📋</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Solution Brief</span>
                <h3 className={styles.cardTitle}>Metazense Migration: Legacy to Cloud in Weeks</h3>
                <p className={styles.cardExcerpt}>How Metazense AI agents automate COBOL-to-cloud migrations with zero business disruption.</p>
                <div className={styles.cardMeta}>8 pages • PDF</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>📈</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Case Study</span>
                <h3 className={styles.cardTitle}>How a Fortune 500 Bank Reduced Vulnerabilities by 94%</h3>
                <p className={styles.cardExcerpt}>Real-world results from deploying Metazense across 10,000+ assets in a global financial institution.</p>
                <div className={styles.cardMeta}>12 pages • PDF</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>📋</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Solution Brief</span>
                <h3 className={styles.cardTitle}>Continuous Compliance with Metazense</h3>
                <p className={styles.cardExcerpt}>Automate SOC 2, HIPAA, PCI-DSS, and 40+ framework compliance without manual audits.</p>
                <div className={styles.cardMeta}>10 pages • PDF</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>📄</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Whitepaper</span>
                <h3 className={styles.cardTitle}>The Digital Blueprint: Metadata, Metacode, Metaprocess</h3>
                <p className={styles.cardExcerpt}>Technical deep-dive into Metazense&apos;s Golden Triangle architecture for enterprise mapping.</p>
                <div className={styles.cardMeta}>28 pages • PDF</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Resource Categories</h2>
          <p className={styles.sectionSubtitle}>
            Find exactly what you need
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📄</div>
              <h3>Whitepapers</h3>
              <p>In-depth technical analyses of agentic security, remediation strategies, and industry trends.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Case Studies</h3>
              <p>Real-world examples of how enterprises achieved security transformation with Metazense.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📚</div>
              <h3>E-Books & Guides</h3>
              <p>Comprehensive guides on compliance frameworks, cloud security, and best practices.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎥</div>
              <h3>Webinars</h3>
              <p>On-demand recordings of expert sessions on emerging security topics.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📋</div>
              <h3>Checklists & Templates</h3>
              <p>Ready-to-use security assessment checklists and policy templates.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📈</div>
              <h3>Industry Reports</h3>
              <p>Annual security reports and benchmark data from across industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Get Exclusive Content</h2>
          <p className={styles.ctaText}>
            Sign up to access premium resources, early releases, and executive briefings.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#subscribe" className={styles.btnPrimary}>
              Get Access →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
