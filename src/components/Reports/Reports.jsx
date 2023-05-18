import ReportCard from "../ReportCard/ReportCard"
import styles from './Reports.module.css'
import { Link } from "react-router-dom"

const Reports = ( props ) => {
  if(!props.dog.reports) return <h4>No Reports</h4>
  return ( 
    <div className={styles.reportList}>
      {props.dog.reports.map((report) => (
        <ReportCard
          key={report._id}
          report={report}
          author={props.dog.author}
          dog={props.dog}
        />
      ))}
      <button>NEW REPORT (temp)</button>
    </div>
  )
}

export default Reports