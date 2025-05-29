import styles from './AppPromo.module.css'

export default function AppPromo() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Emirates App</h2>
          <p className={styles.description}>
            Manage your bookings, check in, and access your boarding pass all in one place
          </p>
          <div className={styles.appButtons}>
            <button className={styles.appButton}>
              <i className="fab fa-apple"></i>
              <div>
                <span>Download on the</span>
                <span>App Store</span>
              </div>
            </button>
            <button className={styles.appButton}>
              <i className="fab fa-google-play"></i>
              <div>
                <span>Get it on</span>
                <span>Google Play</span>
              </div>
            </button>
          </div>
        </div>
        <img 
          src="/assets/images/app-screens.png" 
          alt="Emirates App Screens"
          className={styles.appImage}
        />
      </div>
    </section>
  )
}