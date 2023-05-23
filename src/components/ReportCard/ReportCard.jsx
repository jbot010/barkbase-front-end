// NPM MODULES
import { Link } from 'react-router-dom'

// MUI
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'

// CSS
import styles from './ReportCard.module.css'

const ReportCard = (props) => {
  const report =  props.report
  const dog = props.dog
  
  console.log(props.myProfile);
  return (
    <div className={styles.reportCard}>
      <div className={styles.reportCardHeader}>
      <h2>{dog.name}'s Report Card</h2>
      {props.myProfile.isAdmin ? 
        <Link to={`/dogs/${report.dog}/reports/${report._id}`} state={report}>
          <button><EditIcon /></button>
        </Link>
      : ''}
      </div>
      <div className={styles.reportCardContent}>
        <p>{dog.owner.name}</p>
        <p>Duration: {report.duration}</p>
        <p>Boarding: {report.boarding ? 'Yes' : 'No'}</p>
        <p>Walk: {report.walk ? 'Yes' : 'No'}</p>
        <p>Swimming: {report.swimming ? 'Yes' : 'No'}</p>
        <p>Agility: {report.agility ? 'Yes' : 'No'}</p>
        <p>Treat: {report.treat ? 'Yes' : 'No'}</p>
        <p>Meal Count: {report.mealCount}</p>
        <p>Feeding Times: {report.feedingTimes.join(', ')}</p>
        <p>Special Instructions: {report.specialInstructions}</p>
      </div>
      {props.myProfile.isAdmin ? 
        <button onClick={()=> props.handleDeleteReport(props.dogId, report._id)}><DeleteForeverIcon /></button>
      : ''}
    </div>
  )
}

export default ReportCard
