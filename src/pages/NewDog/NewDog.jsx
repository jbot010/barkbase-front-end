// npm modules
import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

//css
import styles from './NewDog.module.css'

const NewDog = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: 0,
    size: 'X-Small',
    color: '',
    food: ''
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
		props.handleAddDog(formData)
  }
  
  return ( 
    <Box
        display="flex" 
        justifyContent="center" 
        alignItems="center"
        sx={{ width: "50%" }}
      >
    <Paper elevation={4} sx={{ width: "100%", p: "1rem" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name</label>
        <TextField
          required
          type="text"
          name="name"
          id="name-input"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <label htmlFor="breed-input">Breed</label>
				<TextField
          required
          type="text"
          name="breed"
          id="breed-input"
          value={formData.breed}
          placeholder="Breed"
          onChange={handleChange}
        />
        <label htmlFor="age-input">Age</label>
        <TextField
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
        <Button type="submit" variant="contained" fullWidth>SUBMIT</Button>
      </form>
    </Paper>
    </Box>
  );
}

export default NewDog;
