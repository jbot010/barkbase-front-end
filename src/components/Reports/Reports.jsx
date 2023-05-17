import ReportCard from "../ReportCard/ReportCard"
import styles from './Reports.module.css'
import { Link } from "react-router-dom"

const Reports = ( props ) => {
  return ( 
    <div className={styles.reportList}>
      <Link to={`/dogs/${props.dogId}/reports/newReport`}>
      <button>NEW REPORT (temp)</button></Link>
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