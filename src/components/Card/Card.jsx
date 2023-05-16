import { Link } from 'react-router-dom'
import ButtonA from '../ButtonA/ButtonA';
import styles from './Card.module.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const Card = ( { comment, dogId, user, handleDeleteComment, mainText } ) => {
  return (
    <article className={styles.cardComponent}>
      <header className={styles.cardHeader}>
        <h1 className={styles.cardHeaderText}>{mainText}</h1>
        <h2>ABC</h2>
        <div className={styles.cardButtonContainer}>
          {/* <Link to={`/dogs/${dogId}/comments/${comment._id}`} state={comment}> */}
            <ButtonA content="abc" />
          {/* </ Link> */}
          <ButtonA path={''} content={<DeleteForeverIcon />} />
        </div>
      </header>
      <div className={styles.cardContent}>
        {comment}
      </div>
    </article>
  );
}

export default Card;