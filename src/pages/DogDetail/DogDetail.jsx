// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// pages
// import Loading from "../Loading/Loading"
import NewComment from '../../components/NewComment/NewComment'
import Comments from '../../components/Comments/Comments'

//services
import * as dogService from '../../services/dogService'

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
    setDog({...dog, comments:[...dog.comments, newComment]})
  }

  const handleDeleteComment = async (dogId, commentId) => {
    await dogService.deleteComment(dogId, commentId)
    setDog({ ...dog, comments: dog.comments.filter((c) => c._id !== commentId) })
  }

  return ( 
    <main className={styles.container}>
<<<<<<< HEAD
      <div className={styles.dogDetailImg}><img src={dog.photo} alt="" /></div>
      <div className={styles.dogDetailContent}>
        <h1> {dog.name} </h1>
        <h2> {dog.breed} </h2>
        <h2> {dog.age} </h2>
        <h2> {dog.color} </h2>
        <>
          <Link to={`/dogs/${dogId}/edit`} state={dog}>Edit Dog</Link>
          <button onClick={() => props.handleDeleteDog(dogId)}>Delete</button>
        </>
=======
      <div className={styles.dogDetailContainer}>
        <div className={styles.dogDetailImg}>img</div>
        <div className={styles.dogDetailContent}>
          <h1> {dog.name} </h1>
          <h2> {dog.breed} </h2>
          <h2> {dog.age} </h2>
          <h2> {dog.color} </h2>
          <>
            <Link to={`/dogs/${dogId}/edit`} state={dog}>Edit Dog</Link>
            <button onClick={() => props.handleDeleteDog(dogId)}>Delete</button>
          </>
        </div>
>>>>>>> 7db9337ef296d13f66e351bcc462ad92e7a0c6b7
      </div>
      <div className={styles.commentsContainer}>
        <NewComment handleAddComment={handleAddComment} />
        <Comments 
          comments={dog.comments} 
          user={props.user} 
          dogId={dogId} 
          handleDeleteComment={handleDeleteComment} 
        />
        </div>
    </main>
  );
}

export default DogDetails