import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className={`${styles.hero} ${loaded ? styles.loaded : ''}`}>
      <div className={styles.videoContainer}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className={styles.video}
          poster="/assets/images/hero-poster.jpg"
        >
          <source src="/assets/videos/emirates-hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Fly Better with Emirates</h1>
        <p className={styles.subtitle}>Discover the world with our award-winning service</p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Book a Flight</button>
          <button className={styles.secondaryButton}>Explore Destinations</button>
        </div>
      </div>
    </section>
  )
}