import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '../placeholder.module.css'

export default function CustomerStoriesPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>CUSTOMER STORIES</span>
          <h1 className={styles.title}>
            See How Enterprises Transform With Metazense
          </h1>
          <p className={styles.subtitle}>
            Leading organizations across retail, fintech, logistics, and public sector use Metazense&apos;s Digital Blueprint to build trust in their data, automate governance, and drive intelligent decision-making at scale.
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

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>50M+</div>
            <div className={styles.statLabel}>Data assets managed</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Enterprise users</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Industries served</div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Case Studies</h2>
          <p className={styles.sectionSubtitle}>
            Real results from real enterprises
          </p>

          <div className={styles.caseStudiesGrid}>
            <div className={styles.caseStudyCard}>
              <div className={styles.caseStudyLogo}>Gorgias</div>
              <p className={styles.caseStudyQuote}>
                &quot;We process 5 petabytes of data daily with 100 million records streamed. Metazense helped us build an AI Discovery Agent that lets any employee ask questions about data in natural language.&quot;
              </p>
              <div className={styles.caseStudyStat}>400+</div>
              <div className={styles.caseStudyStatLabel}>Data users empowered</div>
            </div>
            <div className={styles.caseStudyCard}>
              <div className={styles.caseStudyLogo}>Carrefour Brazil</div>
              <p className={styles.caseStudyQuote}>
                &quot;We went from zero to over 500 users leveraging Metazense across 1,000+ retail locations. The glossary of 300+ terms created a common language for business and technical users.&quot;
              </p>
              <div className={styles.caseStudyStat}>1,000+</div>
              <div className={styles.caseStudyStatLabel}>Data assets cataloged</div>
            </div>
            <div className={styles.caseStudyCard}>
              <div className={styles.caseStudyLogo}>Loggi</div>
              <p className={styles.caseStudyQuote}>
                &quot;By identifying and safely deleting 7,000 unused tables, we&apos;re saving $2,000 in monthly storage costs. We reduced our dashboards from 18,000 to 2,000 trusted reports.&quot;
              </p>
              <div className={styles.caseStudyStat}>$24K</div>
              <div className={styles.caseStudyStatLabel}>Annual cost savings</div>
            </div>
            <div className={styles.caseStudyCard}>
              <div className={styles.caseStudyLogo}>Aspire</div>
              <p className={styles.caseStudyQuote}>
                &quot;Our Bronze, Silver, Gold certification framework brings transparency to data quality. We now have 6,100+ data quality tests across 1,700+ tables.&quot;
              </p>
              <div className={styles.caseStudyStat}>6,100+</div>
              <div className={styles.caseStudyStatLabel}>Data quality tests</div>
            </div>
          </div>
        </div>
      </section>

      {/* More Stories Section */}
      <section className={styles.cardsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>More Success Stories</h2>
          <p className={styles.sectionSubtitle}>
            Enterprises across industries building their Digital Blueprint
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.cardImage}>🚕</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Mobility</span>
                <h3 className={styles.cardTitle}>FREENOW: Cross-Team Alignment at Scale</h3>
                <p className={styles.cardExcerpt}>Managing 17,000+ tabular assets across 400 schemas, FREENOW uses Metazense to reach 300+ downstream assets with a single data update announcement.</p>
                <div className={styles.cardMeta}>Europe • 150,000+ drivers</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>🏦</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Financial Services</span>
                <h3 className={styles.cardTitle}>Talentys Data: AI-Powered Governance Hub</h3>
                <p className={styles.cardExcerpt}>Built &quot;Gov AI&quot; to automatically enrich descriptions, tags, and glossaries using LLM integration, transforming data governance from passive to intelligent.</p>
                <div className={styles.cardMeta}>Morocco • Banking Sector</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>🏛️</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Public Sector</span>
                <h3 className={styles.cardTitle}>Ednon: Public Administration Transformation</h3>
                <p className={styles.cardExcerpt}>From &lt;1% to 41% tables documented, with 1,400+ data assets cataloged and 450+ glossary terms. Deployed in just 2 days.</p>
                <div className={styles.cardMeta}>Spain • Provincial Council</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>📈</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Fintech</span>
                <h3 className={styles.cardTitle}>Thndr: Data Trust for Investment Platform</h3>
                <p className={styles.cardExcerpt}>Automated PII classification using ML, achieving end-to-end data lineage visibility and proactive data quality management for regulated financial services.</p>
                <div className={styles.cardMeta}>MENA • Top 50 Fintech by Forbes</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>📦</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>E-commerce Logistics</span>
                <h3 className={styles.cardTitle}>Woop: Data-Driven Culture at Scale</h3>
                <p className={styles.cardExcerpt}>1,600+ data assets serving 27 teams and 100+ users. Orchestrating 25 million deliveries annually for 400+ European brands including Decathlon and Auchan.</p>
                <div className={styles.cardMeta}>France • Last-Mile Delivery</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>🗺️</div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>GeoSpatial & IoT</span>
                <h3 className={styles.cardTitle}>ms.GIS: Bridging GIS and IoT Data</h3>
                <p className={styles.cardExcerpt}>Custom connectors handling 300+ spatial formats, serving clients like the City of Vienna and San Francisco with holistic data lifecycle management.</p>
                <div className={styles.cardMeta}>Austria • Smart Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Industries We Serve</h2>
          <p className={styles.sectionSubtitle}>
            Metazense powers data transformation across every sector
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏦</div>
              <h3>Financial Services</h3>
              <p>Banks, fintechs, and investment platforms building trust through data governance and automated compliance.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛒</div>
              <h3>Retail & E-commerce</h3>
              <p>Global retailers managing millions of data assets across thousands of locations with unified data catalogs.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚚</div>
              <h3>Logistics & Transportation</h3>
              <p>Delivery and mobility companies optimizing operations with real-time data lineage and quality monitoring.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏛️</div>
              <h3>Public Sector</h3>
              <p>Government agencies and public institutions democratizing data access while maintaining governance.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💻</div>
              <h3>Technology & SaaS</h3>
              <p>Software companies scaling their data operations with automated metadata management and AI-powered discovery.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌐</div>
              <h3>IoT & Smart Cities</h3>
              <p>Organizations bridging geospatial and IoT data for infrastructure and urban development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className={styles.logosSection}>
        <div className={styles.logosTitle}>Trusted by industry leaders worldwide</div>
        <div className={styles.logosGrid}>
          <div className={styles.logoPlaceholder}>Carrefour</div>
          <div className={styles.logoPlaceholder}>Gorgias</div>
          <div className={styles.logoPlaceholder}>FREENOW</div>
          <div className={styles.logoPlaceholder}>Aspire</div>
          <div className={styles.logoPlaceholder}>Loggi</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Write Your Success Story?</h2>
          <p className={styles.ctaText}>
            Join leading enterprises that have transformed their data landscape with Metazense&apos;s Digital Blueprint.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#demo" className={styles.btnPrimary}>
              Get Started →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
