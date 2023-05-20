// NPM MODULES
import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// MUI
import TextField from '@mui/material/TextField'
import UploadIcon from '@mui/icons-material/Upload'

// SERVICES
import * as authService from '../../services/authService'
import * as tokenService from '../../services/tokenService'

// CSS
import styles from './Signup.module.css'

const Signup = ({ handleAuthEvt }) => {
  const navigate = useNavigate()
  const imgInputRef = useRef(null)

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  const [photoData, setPhotoData] = useState({ photo: null })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleChangePhoto = evt => {
    const file = evt.target.files[0]
    let isFileInvalid = false
    let errMsg = ""
    const validFormats = ['gif', 'jpeg', 'jpg', 'png', 'svg', 'webp']
    const photoFormat = file.name.split('.').at(-1)

    if (file.size >= 10485760) {
      errMsg = "Image must be smaller than 10.4MB"
      isFileInvalid = true
    }
    if (!validFormats.includes(photoFormat)) {
      errMsg = "Image must be in gif, jpeg/jpg, png, svg, or webp format"
      isFileInvalid = true
    }
    
    setMessage(errMsg)
    
    if (isFileInvalid) {
      imgInputRef.current.value = null
      return
    }

    setPhotoData({ photo: evt.target.files[0] })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      setIsSubmitted(true)
      await authService.signup(formData, photoData.photo)
      handleAuthEvt()
      const newUserToken = tokenService.getToken()
      const newUser = tokenService.getUserFromToken(newUserToken)
      navigate(`/profiles/${newUser.profile}`)
    } catch (error) {
      console.log(error)
      setMessage(error.message)
      setIsSubmitted(false)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <main className={styles.container}>
      <div className={styles.HERO}><img src="https://res.cloudinary.com/ds57cqdwo/image/upload/v1684438250/barkbase/signuphero_dl91vj.jpg" alt="SIGNUP HERO" /></div>
      <p className={styles.message}>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <TextField
          sx={{width: .75}}
          required
          type="text"
          label="NAME"
          value={name} 
          name="name" 
          onChange={handleChange} 
        />
        <br />
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
        <br />
        <TextField
          sx={{width: .75}}
          required
          type="password"
          label="CONFIRM PASSWORD"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
        <label className={styles.label}>
          <UploadIcon />
          Photo:
          <input 
            type="file" 
            name="photo" 
            onChange={handleChangePhoto}
            ref={imgInputRef}
          />
        </label>
        <div className={styles.buttonContainerSignup}>
          <Link to="/">Cancel</Link>
          <button
            className={styles.button}
            disabled={ isFormInvalid() || isSubmitted }
          >
            {!isSubmitted ? 'Sign Up' : '🚀 Sending...'}
          </button>
        </div>
      </form>
    </main>
  )
}

export default Signup
