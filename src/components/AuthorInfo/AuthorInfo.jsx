// COMPONENTS
import DateCard from '../DateCard/DateCard.jsx'

// CSS
import styles from './AuthorInfo.module.css'

const AuthorInfo = (props) => {
  const { content } = props
  return (
    <div className={styles.container}>
        <h4>{content.author.name}</h4>
        <DateCard createdAt={content.createdAt} />
    </div>
  )
}

export default AuthorInfo