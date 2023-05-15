// components
import DateCard from '../DateCard/DateCard.jsx'

// css
import styles from './AuthorInfo.module.css'

const AuthorInfo = (props) => {
  const { content } = props
  return (
    <div className={styles.container}>
      <section>
        <h4>{content.author.name}</h4>
        <DateCard createdAt={content.createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo