import styles from './WhyEmirates.module.css'

const features = [
  {
    icon: '🍽️',
    title: 'Gourmet Dining',
    description: 'Enjoy regionally inspired multi-course meals prepared by top chefs'
  },
  {
    icon: '🛏️',
    title: 'Comfort & Luxury',
    description: 'Relax in our spacious cabins with industry-leading amenities'
  },
  {
    icon: '📶',
    title: 'Onboard Wi-Fi',
    description: 'Stay connected with our onboard Wi-Fi and entertainment system'
  }
]

export default function WhyEmirates() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Fly With Emirates</h2>
        <p className={styles.subheading}>Experience the difference</p>
        
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}