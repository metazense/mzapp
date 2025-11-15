import styles from './Testimonials.module.css'

const testimonials = [
  {
    text: '"Metazense was the only solution that allowed us to centrally monitor the maturity level of hardening measures across all our systems in a fast and efficient way."',
    author: 'Lukas Roemer',
    role: 'IT Administrator at IOZ'
  },
  {
    text: '"The Metazense agentic vulnerability patching with Ansible integrated in our GitHub environment is really taking our IaC to another level. With the continuous scan of our assets and the automated creation of remediation pull requests we are now able to fix vulnerabilities without much effort."',
    author: 'Alexander Voigt',
    role: 'Senior DevOps at Dgitio'
  }
]

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsHeader}>
          <h2 className="font-urbanist">What our customers say</h2>
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}></div>
                <div className={styles.authorInfo}>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
