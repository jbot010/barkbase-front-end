import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';


const Card = ( { comment, dogId, user, handleDeleteComment, mainText } ) => {
  return (
    <article className={styles.cardComponent}>
      <header className={styles.cardHeader}>
        <h1 className={styles.cardHeaderText}>{mainText}</h1>
        <h2>ABC</h2>
        <div className={styles.cardButtonContainer}>
          <Button variant='contained' href={`/dogs/${dogId}/comments/${comment._id}`}>Edit</Button>
          <Button variant='contained'>Edit</Button>
        </div>
      </header>
      <div className={styles.cardContent}>
        {comment.text}
      </div>
    </article>
  );
}

export default Card;