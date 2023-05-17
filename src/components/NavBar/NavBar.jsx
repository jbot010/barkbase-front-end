// npm modules
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/dogs"><img src="/dog_icon.png" alt="DogIcon" /></NavLink>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><NavLink to="/dogs">Dog List</NavLink></li>
          <li><NavLink to="/new">New Dog</NavLink></li>
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
          <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
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
