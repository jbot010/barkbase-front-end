// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// pages
// import Loading from "../Loading/Loading"

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
        </>
      </div>
      <div></div>
    </main>
  );
}

export default DogDetails