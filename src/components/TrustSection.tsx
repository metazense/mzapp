import styles from './TrustSection.module.css'

export default function TrustSection() {
  return (
    <section className={styles.trustSection}>
      <p>The security and compliance platform trusted by</p>
      <div className={styles.trustLogos}>
        <div className={styles.trustLogo}>Calligo</div>
        <div className={styles.trustLogo}>EMnify</div>
        <div className={styles.trustLogo}>⚡ Hermeus</div>
        <div className={styles.trustLogo}>Obsidian</div>
        <div className={styles.trustLogo}>Universal Investment</div>
      </div>
    </section>
  )
}
