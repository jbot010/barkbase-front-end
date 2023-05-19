// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// pages
import EditIcon from '@mui/icons-material/Edit'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import NoPhotographyIcon from '@mui/icons-material/NoPhotography'
import DogList from '../DogList/DogList'
import KeyIcon from '@mui/icons-material/Key'

//services
import * as profileService from '../../services/profileService'
import * as dogService from '../../services/dogService'
import styles from './ProfileDetail.module.css'
import NewDog from '../NewDog/NewDog'

const ProfileDetails = ( ) => {
  const { profileId } = useParams()
  const [profile, setProfile] = useState({})
  const [dogs, setDogs] = useState([])
  

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show( profileId )
      setProfile(profileData)
    }
    
    const fetchDogs = async () => {
      const dogData = await dogService.index()
      const profileDogs = dogData.filter((dog) => dog.owner._id === profileId)
      setDogs(profileDogs)
    }
    fetchProfile()
    fetchDogs()
  }, [profileId])
  
  const handleAddDog = async (newDog) => {
    const createdDog = await dogService.create(newDog)
    setDogs((prevDogs) => [...prevDogs, createdDog])
    setProfile((prevProfile) => ({...prevProfile, dogs: [...prevProfile.dogs, createdDog]}))
  }

  return ( 
    <main className={styles.container}>
      <header className={styles.profileDetailContainer}>
        <div className={styles.profileDetailImg}>
          <img src={profile.photo? profile.photo:'/BWdog_icon.png'} alt="Default profile Photo" />
          <div className={styles.profilePhotoButtonContainer}>
            <button><AddAPhotoIcon /></button>
            <button><NoPhotographyIcon /></button>
          </div>
        </div>
        <div className={styles.profileDetailContent}>
          <h1> {profile.name} </h1>
          <h2> {profile.isAdmin ? "Admin" : "Dog Owner"}</h2>
          <h3> Email: {profile.email} </h3>
          <h3> Phone: {profile.phoneNumber} </h3>
          <div className={styles.buttonContainer}>
            <button><Link to={`/profiles/${profileId}/`} state={profile}><EditIcon /></Link></button>
            <button><Link to="/auth/change-password" className={styles.navItem}>< KeyIcon /></Link></button>
          </div>
        </div>
      </header>
      <h2 className={styles.myDogs}>My Dogs</h2>
      <div className={styles.profileBody}>
        {dogs.length > 0 ? (
          <DogList className={styles.dogList} dogs={dogs} />
        ) : (
          <p>No dogs found.</p>
        )}
        <NewDog className={styles.profileNewDog} handleAddDog={handleAddDog} />
      </div>
    </main>
  )
}

export default ProfileDetails