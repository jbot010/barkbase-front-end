// NPM
import { useState } from 'react'

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// CSS
import styles from './NewDog.module.css'

const NewDog = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: 0,
    size: 'X-Small',
    sex: 'Male',
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
    <section className={styles.newDogContainer}>
      <h1 className={styles.addDog}>Add Dog</h1>
      <form onSubmit={handleSubmit} className={styles.newDogForm}>
        <TextField
          sx={{width: .95}}
          required
          type="text"
          name="name"
          label="Dog Name"
          id="name-input"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <TextField
          sx={{width: .95}}
          required
          type="text"
          name="breed"
          id="breed-input"
          label="Breed"
          value={formData.breed}
          placeholder="Breed"
          onChange={handleChange}
        />
        <TextField
          sx={{width: .95}}
          required
          name="age"
          id="age-input"
          label="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <TextField
          sx={{width: .95}}
          required
          name="color"
          label="Color"
          id="color-input"
          value={formData.color}
          onChange={handleChange}
        />
        <TextField
          sx={{width: .95}}
          required
          name="food"
          label="Food"
          id="food-input"
          value={formData.food}
          onChange={handleChange}
        />
        <div className={styles.dropDowns}>
          <Box>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="size-input-label">Size</InputLabel>
              <Select
                required
                name="size"
                id="size-input"
                value={formData.size}
                label="Size"
                onChange={handleChange}
              >
                <MenuItem value="X-Small">X-Small</MenuItem>
                <MenuItem value="Small">Small</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Large">Large</MenuItem>
                <MenuItem value="X-Large">X-Large</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="sex-input-label">Sex</InputLabel>
              <Select
                required
                name="sex"
                id="sex-input"
                value={formData.sex}
                label="Sex"
                onChange={handleChange}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <Button type="submit" variant="contained" sx={{ width: .25 }}>SUBMIT</Button>
      </form>
    </section>
  )
}

export default NewDog
