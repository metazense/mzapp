import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '../placeholder.module.css'

export default function IntegrationsPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>INTEGRATIONS</span>
          <h1 className={styles.title}>
            Explore 60+ Enterprise Integrations
          </h1>
          <p className={styles.subtitle}>
            Connect Metazense to your entire technology stack. Gather data, perform tests, and remediate vulnerabilities across cloud, on-prem, CI/CD, and security tools.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#demo" className={styles.btnPrimary}>
              Get Demo →
            </Link>
            <Link href="/support" className={styles.btnSecondary}>
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>60+</div>
            <div className={styles.statLabel}>Native integrations</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>5min</div>
            <div className={styles.statLabel}>Average setup time</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>API coverage</div>
          </div>
        </div>
      </section>

      {/* Integrations Grid Section */}
      <section className={styles.integrationsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>All Integrations</h2>
          <p className={styles.sectionSubtitle}>
            Connect to the tools you already use
          </p>

          {/* Filter Tabs */}
          <div className={styles.filterTabs}>
            <button className={`${styles.filterTab} ${styles.filterTabActive}`}>All</button>
            <button className={styles.filterTab}>Cloud</button>
            <button className={styles.filterTab}>CI/CD</button>
            <button className={styles.filterTab}>Containers</button>
            <button className={styles.filterTab}>Operating Systems</button>
            <button className={styles.filterTab}>SaaS</button>
            <button className={styles.filterTab}>Ticketing</button>
          </div>

          {/* Integration Cards Grid */}
          <div className={styles.integrationsGrid}>
            {/* Cloud */}
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>☁️</div>
              <div className={styles.integrationName}>AWS</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🔷</div>
              <div className={styles.integrationName}>Azure</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🌐</div>
              <div className={styles.integrationName}>Google Cloud</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🔴</div>
              <div className={styles.integrationName}>Oracle Cloud</div>
            </div>
            {/* Containers */}
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🐳</div>
              <div className={styles.integrationName}>Docker</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>☸️</div>
              <div className={styles.integrationName}>Kubernetes</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>📦</div>
              <div className={styles.integrationName}>Amazon ECR</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>📦</div>
              <div className={styles.integrationName}>Azure ACR</div>
            </div>
            {/* CI/CD */}
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🐙</div>
              <div className={styles.integrationName}>GitHub Actions</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🦊</div>
              <div className={styles.integrationName}>GitLab CI</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🔧</div>
              <div className={styles.integrationName}>Jenkins</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>⚡</div>
              <div className={styles.integrationName}>CircleCI</div>
            </div>
            {/* Operating Systems */}
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🐧</div>
              <div className={styles.integrationName}>Ubuntu</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🎩</div>
              <div className={styles.integrationName}>RHEL</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🪟</div>
              <div className={styles.integrationName}>Windows</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🍎</div>
              <div className={styles.integrationName}>macOS</div>
            </div>
            {/* SaaS & Ticketing */}
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>📋</div>
              <div className={styles.integrationName}>Jira</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🔔</div>
              <div className={styles.integrationName}>ServiceNow</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>💬</div>
              <div className={styles.integrationName}>Slack</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>📧</div>
              <div className={styles.integrationName}>Microsoft 365</div>
            </div>
            {/* Security */}
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🔐</div>
              <div className={styles.integrationName}>Okta</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>📊</div>
              <div className={styles.integrationName}>Splunk</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🛡️</div>
              <div className={styles.integrationName}>CrowdStrike</div>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🔍</div>
              <div className={styles.integrationName}>Snyk</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Integration Categories</h2>
          <p className={styles.sectionSubtitle}>
            Purpose-built connectors for every part of your stack
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>☁️</div>
              <h3>Cloud Platforms</h3>
              <p>AWS, Azure, GCP, Oracle Cloud—native integrations with automatic asset discovery and remediation.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🐳</div>
              <h3>Containers & Registries</h3>
              <p>Docker, Kubernetes, ECR, ACR, GCR—secure your containerized workloads with real-time protection.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔄</div>
              <h3>CI/CD Pipelines</h3>
              <p>GitHub, GitLab, Jenkins, Azure DevOps—shift security left with automated pipeline scanning.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎫</div>
              <h3>ITSM & Ticketing</h3>
              <p>Jira, ServiceNow, PagerDuty—automatic ticket creation and remediation tracking.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📡</div>
              <h3>SIEM & SOAR</h3>
              <p>Splunk, Sentinel, Chronicle—enrich your security data with Metazense intelligence.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔐</div>
              <h3>Identity Providers</h3>
              <p>Okta, Azure AD, Auth0—unified identity and access management integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Need a Custom Integration?</h2>
          <p className={styles.ctaText}>
            Our team can help you connect Metazense to any tool in your stack with our flexible API.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#demo" className={styles.btnPrimary}>
              Talk to an Expert →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
