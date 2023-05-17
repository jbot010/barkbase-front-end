import ReportCard from "../ReportCard/ReportCard"
import styles from './Reports.module.css'

const Reports = ( props ) => {
  if(!props.reports) return <h4>No Reports</h4>
  return ( 
    <div className={styles.reportList}>
      {props.reports.map((report) => (
        <ReportCard
          key={report._id}
          report={report}
          user={props.user}
          dogId={props.dogId}
        />
      ))}
      <button>NEW REPORT (temp)</button>
    </div>
  )
}

export default Reports