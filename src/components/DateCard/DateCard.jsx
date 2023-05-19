// CSS
import styles from './DateCard.module.css'

const DateCard = ({ createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString()
  return (
    <p className={styles.date}>{date}</p>
  )
}

export default DateCard
