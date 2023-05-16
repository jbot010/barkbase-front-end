// components
import { Link } from 'react-router-dom'
import AuthorInfo from '../AuthorInfo/AuthorInfo'
import styles from './CommentCard.module.css'

const CommentCard = ({ comment, dogId, user, handleDeleteComment }) => {
  return ( 
    <article>
      <header className={styles.commentHeader}>
          <AuthorInfo content={comment} />
          {comment.author._id === user.profile &&
            <>
              <Link to={`/dogs/${dogId}/comments/${comment._id}`} state={comment}>
                EDIT
              </Link>
              <button onClick={()=> handleDeleteComment(dogId, comment._id)}>DELETE</button>
            </>
          }
      </header>
      <p>{comment.text}</p>
      </article>
  )
}

export default CommentCard