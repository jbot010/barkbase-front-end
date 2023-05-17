// components
import Card from '../Card/Card'
import CommentCard from '../CommentCard/CommentCard'
import styles from './Comments.module.css'

const Comments = (props) => {
  if (!props.comments) return <h4>No Comments</h4>

  return (
    <div className={styles.commentList}>
      {props.comments.map((comment) => (
        <CommentCard
          key={comment._id}
          comment={comment}
          user={props.user}
          dogId={props.dogId}
          handleDeleteComment={props.handleDeleteComment}
        />
      ))}
    </div>
  )
}

export default Comments