// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// pages
// import Loading from "../Loading/Loading"
import NewComment from '../../components/NewComment/NewComment'
import Comments from '../../components/Comments/Comments'
import NewReportCard from '../../components/NewReportCard/NewReportCard'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Reports from '../../components/Reports/Reports'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';

//services
import * as dogService from '../../services/dogService'
import * as reportService from '../../services/reportService'
import styles from './DogDetail.module.css'



const DogDetails = (props) => {
  const { dogId } = useParams()
  const [dog, setDog] = useState({})

  useEffect(() => {
    const fetchDog = async () => {
      const dogData = await dogService.show( dogId )
      setDog(dogData)
    }
    fetchDog()
  }, [dogId])

  const handleAddComment = async (commentFormData) => {
    const newComment = await dogService.createComment(dogId, commentFormData)
    setDog({...dog, comments:[newComment, ...dog.comments]})
  }
  const handleDeleteComment = async (dogId, commentId) => {
    await dogService.deleteComment(dogId, commentId)
    setDog({ ...dog, comments: dog.comments.filter((c) => c._id !== commentId) })
  }

  const handleDeleteReport = async (dogId, reportId) => {
    const deletedReport = await reportService.deleteReport(dogId, reportId)
    console.log(deletedReport);
    setDog({ ...dog, reports: dog.reports.filter((r) => r._id !== reportId) })
  }
  
  return ( 
    <main className={styles.container}>
      <header className={styles.dogDetailContainer}>
        <div className={styles.dogDetailImg}>
          <img src={dog.photo? dog.photo:'/dog_icon.png'} alt="Default Dog Photo" />
          <div className={styles.DogPhotoButtonContainer}>
          <button><AddAPhotoIcon /></button>
          <button><NoPhotographyIcon /></button>
        </div>
        </div>
        <div className={styles.dogDetailContent}>
          <h1> {dog.name} </h1>
          <h3> Breed: {dog.breed} </h3>
          <h3> Age: {dog.age} </h3>
          <h3> Sex: {dog.sex} </h3>
          <h3> Color: {dog.color} </h3>
          <h3> Food: {dog.food} </h3>
          <div className={styles.buttonContainer}>
          <button>
            <Link to={`/dogs/${dogId}/edit`} state={dog}><EditIcon /></Link></button>
            <button onClick={() => props.handleDeleteDog(dogId)}><DeleteForeverIcon/></button>
          </div>
        </div>
      </header>
      <div className={styles.reportsAndComments}>
        <div className={styles.reportsContainer}>
          <Reports dog={dog} handleDeleteReport={handleDeleteReport} />
        </div>
        <div className={styles.commentsContainer}>
          <NewComment className={styles.newComment} handleAddComment={handleAddComment} />
          <Comments 
            comments={dog.comments} 
            user={props.user} 
            dogId={dogId} 
            handleDeleteComment={handleDeleteComment} 
          />
        </div>
        
      </div>
    </main>
  );
}

export default DogDetails