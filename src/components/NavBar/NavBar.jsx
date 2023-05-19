// npm modules
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/dogs"><img src="/dog_icon.png" alt="DogIcon" /></NavLink>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          {/* <li><NavLink to="/dogs" className={styles.navItem}>Dog List</NavLink></li>
          <li><NavLink to="/new" className={styles.navItem}>New Dog</NavLink></li>
          <li><NavLink to="/profiles" className={styles.navItem}>Profiles</NavLink></li> */}
          {console.log(user, "USER")}
          <li><NavLink to={`/profiles/${user.profile}`} className={styles.navItem}><AccountCircleIcon /></NavLink></li>
          <li><NavLink to="/auth/change-password" className={styles.navItem}>Change Password</NavLink></li>
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
