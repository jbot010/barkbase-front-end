// NPM MODULES
import { useState, useEffect } from 'react'

// SERVICES
import * as profileService from '../../services/profileService'

// COMPONENTS
import ProfileCard from '../../components/ProfileCard/ProfileCard'

// CSS
import styles from './Profiles.module.css'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  if (!profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }
  
  return (
    <main className={styles.container}>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.map(profile => (
        <ProfileCard key={profile._id} profile={profile} />
      ))}
    </main>
  )
}

export default Profiles
