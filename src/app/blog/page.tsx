import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '../placeholder.module.css'

export default function BlogPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>BLOG</span>
          <h1 className={styles.title}>
            Insights on Agentic Security & Enterprise Mapping
          </h1>
          <p className={styles.subtitle}>
            Stay ahead with expert analysis on vulnerability management, AI-driven security, compliance automation, and the future of enterprise security.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#subscribe" className={styles.btnPrimary}>
              Subscribe to Newsletter →
            </Link>
            <Link href="/library" className={styles.btnSecondary}>
              Browse Library
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className={styles.cardsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Latest Articles</h2>
          <p className={styles.sectionSubtitle}>
            Expert insights from the Metazense team and industry leaders
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.cardImage}>🤖</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Agentic AI</span>
                <h3 className={styles.cardTitle}>Why Agentic AI is the Future of Vulnerability Management</h3>
                <p className={styles.cardExcerpt}>How autonomous AI agents are transforming the security landscape from reactive detection to proactive remediation.</p>
                <div className={styles.cardMeta}>Dec 1, 2025 • 8 min read</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>🔄</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Migration</span>
                <h3 className={styles.cardTitle}>The Complete Guide to Legacy Mainframe Migration</h3>
                <p className={styles.cardExcerpt}>Step-by-step approach to modernizing COBOL applications with AI-assisted code transformation.</p>
                <div className={styles.cardMeta}>Nov 28, 2025 • 12 min read</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>📋</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Compliance</span>
                <h3 className={styles.cardTitle}>Achieving SOC 2 Compliance with Continuous Automation</h3>
                <p className={styles.cardExcerpt}>How to maintain continuous compliance without the manual audit burden.</p>
                <div className={styles.cardMeta}>Nov 25, 2025 • 6 min read</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>🛡️</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Vulnerabilities</span>
                <h3 className={styles.cardTitle}>Understanding CVE Prioritization with Business Context</h3>
                <p className={styles.cardExcerpt}>Why CVSS scores alone aren&apos;t enough and how to prioritize vulnerabilities based on actual business risk.</p>
                <div className={styles.cardMeta}>Nov 22, 2025 • 7 min read</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>📦</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>SBOM</span>
                <h3 className={styles.cardTitle}>Why Every Enterprise Needs a Software Bill of Materials</h3>
                <p className={styles.cardExcerpt}>Supply chain security starts with knowing exactly what&apos;s in your software stack.</p>
                <div className={styles.cardMeta}>Nov 18, 2025 • 5 min read</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>☁️</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Cloud Security</span>
                <h3 className={styles.cardTitle}>Securing Multi-Cloud Environments at Scale</h3>
                <p className={styles.cardExcerpt}>Best practices for maintaining security consistency across AWS, Azure, and GCP deployments.</p>
                <div className={styles.cardMeta}>Nov 15, 2025 • 9 min read</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Topics</h2>
          <p className={styles.sectionSubtitle}>
            Deep dives into the topics that matter most
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🤖</div>
              <h3>Agentic AI in Security</h3>
              <p>How autonomous AI agents are transforming vulnerability management and threat response.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📋</div>
              <h3>Compliance Automation</h3>
              <p>Achieving SOC 2, HIPAA, PCI-DSS, and more with continuous automated compliance.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>☁️</div>
              <h3>Cloud Security</h3>
              <p>Securing multi-cloud environments with intelligent asset discovery and remediation.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔄</div>
              <h3>DevSecOps</h3>
              <p>Integrating security into CI/CD pipelines without slowing down development.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Threat Intelligence</h3>
              <p>Understanding the evolving threat landscape and how to stay protected.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏢</div>
              <h3>Enterprise Strategy</h3>
              <p>Building a security-first culture and measuring security ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Never Miss an Update</h2>
          <p className={styles.ctaText}>
            Subscribe to our newsletter for the latest security insights delivered to your inbox.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#subscribe" className={styles.btnPrimary}>
              Subscribe Now →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
