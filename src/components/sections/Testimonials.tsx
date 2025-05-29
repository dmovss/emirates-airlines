import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Sarah A.',
    role: 'Business Class Passenger',
    quote: 'The service was exceptional from check-in to landing. The cabin crew made me feel like royalty!',
    rating: 5,
    image: '/assets/images/passenger1.jpg'
  },
  {
    name: 'James M.',
    role: 'Family Traveler',
    quote: 'The entertainment system kept my kids happy for the entire flight. Best long-haul experience ever.',
    rating: 4.5,
    image: '/assets/images/passenger2.jpg'
  }
]

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Customer Experiences</h2>
        <p className={styles.subheading}>What our passengers say</p>
        
        <div className={styles.testimonialCards}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < testimonial.rating ? styles.filled : ''}>
                    ★
                  </span>
                ))}
              </div>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <div className={styles.author}>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className={styles.avatar}
                />
                <div>
                  <h4 className={styles.name}>{testimonial.name}</h4>
                  <p className={styles.role}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <a href="#" className={styles.shareLink}>
          Share your experience →
        </a>
      </div>
    </section>
  )
}