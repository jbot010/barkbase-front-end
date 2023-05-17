import React from 'react';
import styles from './ReportCard.module.css';
import AuthorInfo from '../AuthorInfo/AuthorInfo';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const ReportCard = ({ report }) => {
  const { formData } = report;

  return (
    <div className={styles.reportCard}>
      <h2>Report Card</h2>
      <p>Duration: {formData.duration}</p>
      <p>Boarding: {formData.boarding ? 'Yes' : 'No'}</p>
      <p>Walk: {formData.walk ? 'Yes' : 'No'}</p>
      <p>Swimming: {formData.swimming ? 'Yes' : 'No'}</p>
      <p>Agility: {formData.agility ? 'Yes' : 'No'}</p>
      <p>Treat: {formData.treat ? 'Yes' : 'No'}</p>
      <p>Meal Count: {formData.mealCount}</p>
      <p>Feeding Times: {formData.feedingTimes.join(', ')}</p>
      <p>Special Instructions: {formData.specialInstructions}</p>

      {/* Additional components */}
      <AuthorInfo author={report.author} />
      <DeleteForeverIcon onClick={handleDelete} />
      <EditIcon onClick={handleEdit} />
    </div>
  );
};

export default ReportCard;
