//npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

//css
import styles from './DogEdit.module.css'

const EditDog = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state ? state : {})
  console.log(state);


  const handleChange = (evt) => {
  setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt) => {
  evt.preventDefault()
  props.handleUpdateDog(formData)
  }

return (

  <main className={styles.editContainer}>
    <form onSubmit={handleSubmit}>
      <h1 id="DogEdit">Edit Dog Details</h1>
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <label htmlFor="breed-input">Breed</label>
				<input
          required
          type="text"
          name="breed"
          id="breed-input"
          value={formData.breed}
          placeholder="Breed"
          onChange={handleChange}
        />
        <label htmlFor="age-input">Age</label>
        <input
          required
          name="age"
          id="age-input"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="size-input">Size</label>
        <select
          required
          name="size"
          id="size-input"
          value={formData.size}
          onChange={handleChange}
        >
          <option value="X-Small">X-Small</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="X-Large">X-Large</option>
        </select>
        <label htmlFor="color-input">Color</label>
        <input
          required
          name="color"
          id="color-input"
          value={formData.color}
          onChange={handleChange}
        />
        <label htmlFor="food-input">Food</label>
        <input
          required
          name="food"
          id="food-input"
          value={formData.food}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
}

export default EditDog