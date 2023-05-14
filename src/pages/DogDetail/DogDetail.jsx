// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// pages
import Loading from "../Loading/Loading"

const DogDetails = (props) => {
  const { dogId } = useParams()
  const [dog, setDog] = useState(null)

  useEffect(() => {
    const fetchDog = async () => {
      const dogData = await dogService.show( dogID )
      setDog(dogData)
    }
    fetchDog()
  }, [dogId])

  return ( 
    console.log('dogdetails')
  )
}

export default DogDetails