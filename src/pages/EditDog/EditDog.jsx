//npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"


import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

//css
import styles from './EditDog.module.css'


const EditDog = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)
  console.log(state);


  const handleChange = (evt) => {
  setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt) => {
  evt.preventDefault()
  props.handleUpdateDog(formData)
  }

return (

  <main className={styles.editDogContainer}>
    <form onSubmit={handleSubmit} className={styles.editDogForm}>
      <h1>Edit Dog Details</h1>
      <TextField
            sx={{width: .7}}
            required
            type="text"
            name="name"
            label="Dog Name"
            id="name-input"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
          />
          {/* <label htmlFor="breed-input">Breed</label> */}
          <TextField
            sx={{width: .7}}
            required
            type="text"
            name="breed"
            id="breed-input"
            label="Breed"
            value={formData.breed}
            placeholder="Breed"
            onChange={handleChange}
          />
          {/* <label htmlFor="age-input">Age</label> */}
          <TextField
            sx={{width: .7}}
            required
            name="age"
            id="age-input"
            label="Age"
            value={formData.age}
            onChange={handleChange}
          />
          <TextField
            sx={{width: .7}}
            required
            name="color"
            label="Color"
            id="color-input"
            value={formData.color}
            onChange={handleChange}
          />
          <TextField
            sx={{width: .7}}
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
    </main>
  );
}

export default EditDog