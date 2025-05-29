import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styles from './DestinationCard.module.css'

interface DestinationCardProps {
  id: string
  name: string
  description: string
  imageUrl: string
  onExplore: (id: string) => void
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  id,
  name,
  description,
  imageUrl,
  onExplore,
}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <LazyLoadImage
          src={imageUrl}
          alt={name}
          effect="blur"
          width="100%"
          height="100%"
          className={`${styles.image} ${loaded ? styles.loaded : ''}`}
          afterLoad={() => setLoaded(true)}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = '/assets/images/placeholder-destination.jpg'
          }}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <button
          onClick={() => onExplore(id)}
          className={styles.exploreButton}
          aria-label={`Explore ${name}`}
        >
          Discover More
        </button>
      </div>
    </article>
  )
}

export default React.memo(DestinationCard)