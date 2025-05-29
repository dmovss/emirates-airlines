import { useState } from 'react'
import DestinationCard from '../cards/DestinationCard'
import styles from './Destinations.module.css'

const destinations = [
  {
    id: 1,
    name: 'Dubai',
    description: 'Experience the city of gold',
    imageUrl: '/assets/images/dubai.jpg'
  },
  {
    id: 2,
    name: 'London',
    description: 'Historic charm meets modern energy',
    imageUrl: '/assets/images/london.jpg'
  },
  {
    id: 3,
    name: 'Sydney',
    description: 'Stunning harbor and beaches',
    imageUrl: '/assets/images/sydney.jpg'
  },
  {
    id: 4,
    name: 'New York',
    description: 'The city that never sleeps',
    imageUrl: '/assets/images/new-york.jpg'
  }
]

export default function Destinations() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Discover Our Destinations</h2>
        <p className={styles.subheading}>Explore the world with Emirates</p>
        
        <div className={styles.carousel}>
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              {...destination}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className={styles.controls}>
          <button 
            onClick={() => setActiveIndex(prev => (prev > 0 ? prev - 1 : destinations.length - 1))}
            className={styles.controlButton}
            aria-label="Previous destination"
          >
            &lt;
          </button>
          <div className={styles.dots}>
            {destinations.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to destination ${index + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={() => setActiveIndex(prev => (prev < destinations.length - 1 ? prev + 1 : 0))}
            className={styles.controlButton}
            aria-label="Next destination"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  )
}