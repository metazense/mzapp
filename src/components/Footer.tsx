import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <Image
                src="/images/logo-purple.png"
                alt="Metazense Logo"
                width={40}
                height={40}
                style={{ display: 'block' }}
              />
              <span>metazense</span>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h4>Product</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">Metazense Platform</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">System Status</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Solutions</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">Financial Services</a></li>
              <li><a href="#">Manufacturing</a></li>
              <li><a href="#">Healthcare</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Open Source</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">cnquery</a></li>
              <li><a href="#">cnspec</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Resources</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Customer Stories</a></li>
              <li><a href="#">Comparisons</a></li>
              <li><a href="#">Library</a></li>
              <li><a href="#">Learning</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Company</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Impressum</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2025 Metazense Inc. Made by Icenik</p>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>𝕏</a>
              <a href="#" className={styles.socialLink}>in</a>
              <a href="#" className={styles.socialLink}>▶</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
