// npm imports
import { useState } from "react"

//css
import styles from './NewReportCard.module.css'

const NewReportCard = (props) => {
  const [formData, setFormData] = useState({
    duration: 0,
    boarding: '',
    walk: '',
    swimming: '',
    agility: '',
    treat: '',
    meal: '',
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
		props.handleAddDog(formData)
  }
}