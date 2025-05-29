import styles from './DestinationCard.module.css'

interface DestinationCardProps {
  id: number
  name: string
  description: string
  imageUrl: string
  active: boolean
  onClick: () => void
}

export default function DestinationCard({
  id,
  name,
  description,
  imageUrl,
  active,
  onClick
}: DestinationCardProps) {
  return (
    <article 
      className={`${styles.card} ${active ? styles.active : ''}`}
      onClick={onClick}
      aria-labelledby={`destination-${id}-title`}
    >
      <div className={styles.imageContainer}>
        <img 
          src={imageUrl} 
          alt={name}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h3 id={`destination-${id}-title`} className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>
          Discover More
        </button>
      </div>
    </article>
  )
}