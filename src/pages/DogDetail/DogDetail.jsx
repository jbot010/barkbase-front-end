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

  return ( 
    <main className={styles.container}>
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
      <div><NewComment handleAddComment={handleAddComment} />
        <Comments comments={dog.comments} user={props.user} dogId={dogId} /></div>
    </main>
  );
}

export default DogDetails