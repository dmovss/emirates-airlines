import styles from './Newsletter.module.css'

export default function Newsletter() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Stay Informed</h2>
        <p className={styles.description}>
          Be the first to know about our best fares
        </p>
        <form className={styles.form}>
          <input 
            type="email" 
            placeholder="Your email address"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}