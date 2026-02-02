import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '../placeholder.module.css'

export default function WhyMetazensePage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>WHY METAZENSE</span>
          <h1 className={styles.title}>
            The Only Platform That Actually Fixes Your Vulnerabilities
          </h1>
          <p className={styles.subtitle}>
            While other tools just report problems, Metazense&apos;s agentic AI autonomously remediates vulnerabilities across your entire enterprise. 9 specialized solutions working together to transform your security posture.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#demo" className={styles.btnPrimary}>
              Get Demo →
            </Link>
            <Link href="/comparisons" className={styles.btnSecondary}>
              See Comparisons
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>90%</div>
            <div className={styles.statLabel}>Reduction in vulnerabilities</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>&lt;30d</div>
            <div className={styles.statLabel}>Mean time to remediation</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>10x</div>
            <div className={styles.statLabel}>Less manual work</div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Intelligent Enterprise Mapping at Machine Speed</h2>
          <p className={styles.sectionSubtitle}>
            From discovery to remediation in five autonomous steps
          </p>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>1</div>
              <div className={styles.processTitle}>Discover</div>
              <div className={styles.processDesc}>Automatically map your entire digital landscape</div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>2</div>
              <div className={styles.processTitle}>Analyze</div>
              <div className={styles.processDesc}>Build your Digital Blueprint with metadata, metacode, and metaprocess</div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>3</div>
              <div className={styles.processTitle}>Prioritize</div>
              <div className={styles.processDesc}>AI-powered risk scoring based on business impact</div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>4</div>
              <div className={styles.processTitle}>Remediate</div>
              <div className={styles.processDesc}>Autonomous agents fix vulnerabilities automatically</div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>5</div>
              <div className={styles.processTitle}>Report</div>
              <div className={styles.processDesc}>Real-time dashboards and compliance documentation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className={styles.differenceSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>The Metazense Difference</h2>
          <p className={styles.sectionSubtitle}>
            Built different from the ground up
          </p>
          <div className={styles.differenceGrid}>
            <div className={styles.differenceCard}>
              <div className={styles.differenceIcon}>🔗</div>
              <h3>Unified</h3>
              <p>Single platform covering cloud, on-premises, legacy mainframes, and modern microservices. No third-party tools or fragmented solutions.</p>
            </div>
            <div className={styles.differenceCard}>
              <div className={styles.differenceIcon}>🤖</div>
              <h3>AI-Native</h3>
              <p>Built from day one for agentic AI. Structured, context-aware data powers intelligent agents that understand your entire ecosystem.</p>
            </div>
            <div className={styles.differenceCard}>
              <div className={styles.differenceIcon}>🔍</div>
              <h3>Transparent</h3>
              <p>Every decision explained. Every remediation documented. Full audit trails and rollback capabilities for enterprise governance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>9 Integrated Solutions</h2>
          <p className={styles.sectionSubtitle}>
            One platform. Nine specialized solutions. Complete enterprise coverage.
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔄</div>
              <h3>Migration</h3>
              <p>Automated legacy-to-cloud migration with AI-generated code transformation and validation.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📋</div>
              <h3>Compliance</h3>
              <p>Continuous compliance monitoring for SOC 2, HIPAA, PCI-DSS, GDPR, and 40+ frameworks.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📦</div>
              <h3>SBOM</h3>
              <p>Complete software bill of materials with real-time dependency tracking and vulnerability alerts.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔍</div>
              <h3>Threat Detection</h3>
              <p>AI-powered threat intelligence correlating vulnerabilities with active exploit campaigns.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🗺️</div>
              <h3>Data Lineage</h3>
              <p>End-to-end visibility into how data flows through your organization.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛡️</div>
              <h3>Vulnerability Management</h3>
              <p>Prioritize and fix vulnerabilities with autonomous remediation agents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className={styles.logosSection}>
        <div className={styles.logosTitle}>Trusted by industry-leading companies</div>
        <div className={styles.logosGrid}>
          <div className={styles.logoPlaceholder}>Enterprise 1</div>
          <div className={styles.logoPlaceholder}>Enterprise 2</div>
          <div className={styles.logoPlaceholder}>Enterprise 3</div>
          <div className={styles.logoPlaceholder}>Enterprise 4</div>
          <div className={styles.logoPlaceholder}>Enterprise 5</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Transform Your Security Posture?</h2>
          <p className={styles.ctaText}>
            See how Metazense can reduce vulnerabilities by 90% while cutting manual work by 10x.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#demo" className={styles.btnPrimary}>
              Schedule Demo →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
