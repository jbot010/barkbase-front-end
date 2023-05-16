// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// pages
// import Loading from "../Loading/Loading"
import NewComment from '../../components/NewComment/NewComment'
import Comments from '../../components/Comments/Comments'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

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
      <header className={styles.dogDetailContainer}>
        <div className={styles.dogDetailImg}><img src={dog.photo? dog.photo:'/Default-360x360.png'} alt="" /></div>
        <div className={styles.dogDetailContent}>
          <h1> {dog.name} </h1>
          <h3> Breed: {dog.breed} </h3>
          <h3> Age: {dog.age} </h3>
          <h3> Color: {dog.color} </h3>
          <>
          <button>
            <Link to={`/dogs/${dogId}/edit`} state={dog}><EditIcon /></Link></button>
            <button onClick={() => props.handleDeleteDog(dogId)}><DeleteForeverIcon/></button>
          </>
        </div>
      </header>
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