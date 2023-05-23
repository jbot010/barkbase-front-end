// NPM MODULES
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// MUI
import TextField from '@mui/material/TextField'

// SERVICES
import * as authService from '../../services/authService'
import * as tokenService from '../../services/tokenService'

// CSS
import styles from './Login.module.css'

const LoginPage = ({ handleAuthEvt }) => {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      await authService.login(formData)
      const user = await tokenService.getUserFromToken()
      handleAuthEvt()
      navigate(`/profiles/${user.profile}`)
    } catch (error) {
      console.log(error)
      setMessage(error.message)
    }
  }

  const { email, password } = formData

  const isFormInvalid = () => {
    return !(email && password)
  }

  return (
    <main className={styles.container}>
      <div className={styles.HERO}><img src="https://res.cloudinary.com/ds57cqdwo/image/upload/v1684438252/barkbase/login_hero_i5vbfy.jpg" alt="LOGIN HERO" /></div>
      <p className={styles.message}>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <TextField
          sx={{width: .75}}
          required
          type="text"
          label="EMAIL"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <br />
        <TextField
          sx={{width: .75}}
          required
          type="password"
          label="PASSWORD"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <div className={styles.buttonContainerLogin}>
          <Link to="/">Cancel</Link>
          <button className={styles.button} disabled={isFormInvalid()}>
            Log In
          </button>
        </div>
      </form>
    </main>
  )
}

export default LoginPage