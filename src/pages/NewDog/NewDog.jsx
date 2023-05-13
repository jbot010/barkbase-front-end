// npm modules
import { useState } from 'react'

//css
import styles from './NewDog.module.css'

const NewDog = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: 0,
    size: '',
    color: '',
    food: ''
  })
  
  return ( 
    <main className={styles.container}>
      <form>
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={formData.name}
          placeholder="Name"
        />
        <label htmlFor="breed-input">Breed</label>
				<input
          required
          type="text"
          name="breed"
          id="breed-input"
          value={formData.breed}
          placeholder="Breed"
        />
        <label htmlFor="age-input">Age</label>
        <input
          required
          name="age"
          id="age-input"
          value={formData.age}
        />
        <label htmlFor="size-input">Size</label>
        <select
          required
          name="size"
          id="size-input"
          value={formData.size}
        >
          <option value="X-Small">X-Small</option>
          <option value="SMall">Small</option>
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
        />
        <label htmlFor="food-input">Food</label>
        <input
          required
          name="food"
          id="food-input"
          value={formData.food}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
}

export default NewDog;
