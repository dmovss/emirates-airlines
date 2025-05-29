import styles from './SpecialOffers.module.css'

export default function SpecialOffers() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Special Offers</h2>
        <p className={styles.subheading}>Limited time deals</p>
        
        <div className={styles.offerCards}>
          <div className={styles.offerCard}>
            <img 
              src="/assets/images/summer-sale.jpg" 
              alt="Summer Sale"
              className={styles.image}
            />
            <div className={styles.content}>
              <h3>Summer Sale</h3>
              <p>Save up to 30% on flights to Europe</p>
              <button className={styles.button}>Book Now</button>
            </div>
          </div>
          
          <div className={styles.rewards}>
            <div className={styles.rewardsContent}>
              <h3>Emirates Skywards</h3>
              <p>Join our frequent flyer program and earn miles on every flight</p>
              <button className={styles.button}>Sign up to Earn Miles</button>
            </div>
            <img 
              src="/assets/images/skywards.jpg" 
              alt="Skywards"
              className={styles.rewardsImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}