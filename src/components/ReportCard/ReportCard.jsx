import styles from './ReportCard.module.css'
import AuthorInfo from '../AuthorInfo/AuthorInfo';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const ReportCard = ( ) => {
  return ( 
    <article className={styles.reportComponent}>
      <header className={styles.reportHeader}>
        <h3>I am an Author</h3>
        {/* <AuthorInfo content={''}/> */}
        <div className={styles.reportButtonContainer}>
          <button><EditIcon /></button>
          <button><DeleteForeverIcon /></button>
        </div>
      </header>
      <div className={styles.reportCardContent}>
        <p>THIS IS WHERE THE REPORT CARD INFORMATION GOES</p>
      </div>
    
    </article>
  )
}

export default ReportCard;