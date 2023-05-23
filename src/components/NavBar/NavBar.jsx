// NPM
import { NavLink } from "react-router-dom"

// ICONS
import LogoutIcon from "@mui/icons-material/Logout"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

// CSS
import styles from "./NavBar.module.css"

const NavBar = ({ user, isAdmin, handleLogout }) => {
  console.log(isAdmin)
  return (
    <nav className={styles.nav}>
      <NavLink to={isAdmin ? "/dogs" : "/"}>
        <img src="/dog_icon.png" alt="DogIcon" />
      </NavLink>
      {user ? (
        <ul>
          <li>Welcome, {user.name}</li>
          <li>
            <NavLink
              to={`/profiles/${user.profile}`}
              className={styles.navItem}
            >
              <AccountCircleIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="" onClick={handleLogout} className={styles.navItem}>
              <LogoutIcon />
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <NavLink to="/auth/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/auth/signup">Sign Up</NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default NavBar
