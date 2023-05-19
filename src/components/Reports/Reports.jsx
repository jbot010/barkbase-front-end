// NPM MODULES
import { Link } from "react-router-dom"

// COMPONENTS
import ReportCard from "../ReportCard/ReportCard"

// CSS
import styles from './Reports.module.css'


const Reports = ( props ) => {
  if(!props.dog.reports) return <h4>No Reports</h4>
  return ( 
    <div className={styles.reportList}>
      <Link to ={`/dogs/${props.dog._id}/reports/newreport`}>
      <button>NEW REPORT</button>
      </Link>
      {props.dog.reports.map((report) => (
        <ReportCard
          key={report._id}
          report={report}
          author={props.dog.author}
          dog={props.dog}
          handleDeleteReport={props.handleDeleteReport}
        />
      ))}
    </div>
  )
}

export default Reports