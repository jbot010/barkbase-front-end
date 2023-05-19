// NPM
import { useState } from "react"

// CSS
import styles from './NewComment.module.css'

const NewComment = (props) => {
  const [formData, setFormData] = useState({ text: ''})

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddComment(formData)
    setFormData({ text: '' })
  }

  return (
    <form className={styles.CommentContainer} onSubmit={handleSubmit}>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={formData.text}
        placeholder="Add a Comment"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewComment