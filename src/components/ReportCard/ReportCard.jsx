import React from 'react';
import styles from './ReportCard.module.css';
import AuthorInfo from '../AuthorInfo/AuthorInfo';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const ReportCard = ({ report }) => {
  console.log(report);
  //const { formData } = report;
  //console.log(formData, "This should be the form data");
  

  return (
    <div className={styles.reportCard}>
      <h2>Report Card</h2>
      <p>Duration: {report.duration}</p>
      <p>Boarding: {report.boarding ? 'Yes' : 'No'}</p>
      <p>Walk: {report.walk ? 'Yes' : 'No'}</p>
      <p>Swimming: {report.swimming ? 'Yes' : 'No'}</p>
      <p>Agility: {report.agility ? 'Yes' : 'No'}</p>
      <p>Treat: {report.treat ? 'Yes' : 'No'}</p>
      <p>Meal Count: {report.mealCount}</p>
      <p>Feeding Times: {report.feedingTimes.join(', ')}</p>
      <p>Special Instructions: {report.specialInstructions}</p>

      {/* Additional components */}
      {/* <AuthorInfo author={report.author} />
      <DeleteForeverIcon onClick={handleDelete} />
      <EditIcon onClick={handleEdit} /> */}
    </div>
  );
};

export default ReportCard;
