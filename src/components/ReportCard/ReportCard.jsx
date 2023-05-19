import React from 'react';
import styles from './ReportCard.module.css';
import AuthorInfo from '../AuthorInfo/AuthorInfo';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Chip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const ReportCard = (props) => {
  console.log(props, "PROPS");
  // console.log(props.report)
  const report =  props.report
  const dog = props.dog
  // console.log(report, "REPORT")

  //const { formData } = report;
  //console.log(formData, "This should be the form data");
  

  return (
    <div className={styles.reportCard}>
      <div className={styles.reportCardHeader}>
      <h2>{dog.name}'s Report Card</h2>
      <Link to={`/dogs/${report.dog}/reports/${report._id}`} state={report}>
        <button><EditIcon /></button>
      </Link>
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
    <button onClick={()=> props.handleDeleteReport(props.dogId, report._id)}><DeleteForeverIcon /></button>
    </div>
  )
}

export default ReportCard
