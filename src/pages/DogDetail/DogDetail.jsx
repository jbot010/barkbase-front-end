// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// pages
import Loading from "../Loading/Loading"

//services
import * as dogService from '../../services/dogService'

const DogDetails = (props) => {
  const { dogId } = useParams()
  const [dog, setDog] = useState(null)

  useEffect(() => {
    const fetchDog = async () => {
      const dogData = await dogService.show( dogId )
      setDog(dogData)
    }
    fetchDog()
  }, [dogId])

  return ( 
    
    
    console.log('dogdetails')

  );
}

export default DogDetails