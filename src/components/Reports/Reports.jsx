import ReportCard from "../ReportCard/ReportCard"
import styles from './Reports.module.css'

const Reports = ( props ) => {
  return ( 
    <div className={styles.reportList}>
      <button>NEW REPORT (temp)</button>
      <ReportCard />
      <ReportCard />
      <ReportCard />
      {/* {props.reports.map((report) => (
        <ReportCard key={report._id} />
      ))} */}
    </div>
  )
}

export default Reports