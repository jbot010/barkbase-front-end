// npm modules
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'

const NavBar = ({ user, handleLogout }) => {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(user.profile)
      setProfile(profileData)
    }
    fetchProfile()
  }, [user.profile])

  return (
    <nav className={styles.nav}>
      <NavLink to="/dogs"><img src="/dog_icon.png" alt="DogIcon" /></NavLink>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          {console.log(user)}
          { profile.isAdmin ?
          <div className={styles.navAdmin}>
            <li><NavLink to="/dogs" className={styles.navItem}>All Dogs</NavLink></li>
            <li><NavLink to="/new" className={styles.navItem}>Add Dog</NavLink></li>
            <li><NavLink to="/profiles" className={styles.navItem}>All Profiles</NavLink></li>
          </div> : <></>}
          <li><NavLink to={`/profiles/${user.profile}`} className={styles.navItem}><AccountCircleIcon /></NavLink></li>
          <li><NavLink to="" onClick={handleLogout} className={styles.navItem}>< LogoutIcon /></NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
