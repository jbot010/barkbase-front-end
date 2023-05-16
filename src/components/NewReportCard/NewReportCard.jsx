// npm imports
import { useState } from "react"

//MUI
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button'
// import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
//import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Switch } from "@mui/material";


//css
import styles from './NewReportCard.module.css'

const NewReportCard = (props) => {
  const [formData, setFormData] = useState({
    duration: 0,
    boarding: false,
    walk: false,
    swimming: false,
    agility: false,
    treat: false,
    meal: false,
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target

    if (name === 'boarding' || name === 'walk' || name === 'swimming' || name === 'agility' || name === 'treat' || name === 'meal') {
      setFormData({ ...formData, [name]: evt.target.checked })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddReport(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
          type="text"
          name="treat"
          label="Treat"
          id="treat-input"
          value={formData.treat}
          onChange={handleChange}
      />
      <label htmlFor="boarding-input">Boarding</label>
      <Switch 
        checked={formData.boarding}
        onChange={handleChange}
        name="boarding"
      />
      <label htmlFor="walk-input">Walk</label>
      <Switch 
        checked={formData.walk}
        onChange={handleChange}
        name="walk"
      />
      <label htmlFor="swimming-input">Swimming</label>
      <Switch 
        checked={formData.swimming}
        onChange={handleChange}
        name="swimming"
      />
      <label htmlFor="agility-input">Agility</label>
      <Switch 
        checked={formData.agility}
        onChange={handleChange}
        name="agility"
      />
      <label htmlFor="treat-input">Treat</label>
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
      <Button type="submit"> Submit </Button>
    </form>
  )
}

export default NewReportCard