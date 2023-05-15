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
      <header>
        <h1> {dog.name}</h1>
        <>
          <Link to={`/dogs/${dogId}/edit`} state={dog}></Link>
        </>

      </header>
    </main>
  );
}

export default DogDetails