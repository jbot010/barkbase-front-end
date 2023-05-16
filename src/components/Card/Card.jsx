import { Link } from 'react-router-dom'
import ButtonA from '../ButtonA/ButtonA';
import styles from './Card.module.css'

const Card = ( props ) => {
  return (
    <article className={styles.cardComponent}>
      <header className={styles.cardHeader}>
        <h1 className={styles.cardHeaderText}>{props.mainText}</h1>
        <h2>{props.subText}</h2>
        <div className={styles.cardButtonContainer}>
          <ButtonA path={''} content={'YUS'}/>
          <ButtonA path={''} content={'NAH'}/>
        </div>
      </header>
      <div className={styles.cardContent}>
        {props.cardContent}
      </div>
    </article>
  );
}

export default Card;