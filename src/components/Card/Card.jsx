import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import { Button } from '@mui/material';


const Card = ( props ) => {
  return (
    <article className={styles.cardComponent}>
      <header className={styles.cardHeader}>
        <h1 className={styles.cardHeaderText}>{props.mainText}</h1>
        <h2>{props.subText}</h2>
        <div className={styles.cardButtonContainer}>
          <Button variant='contained' href={`/dogs/${props.dogId}/comments/${props.key}`}>Edit</Button>
          <Button variant='contained'>Edit</Button>
        </div>
      </header>
      <div className={styles.cardContent}>
        {props.mainText}
      </div>
    </article>
  );
}

export default Card;