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
    duration: .5,
    boarding: false,
    walk: false,
    swimming: false,
    agility: false,
    treat: false,
    feedingTime: '12:00',
    mealCount: 0,
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
        type="number"
        name="duration"
        label="Duration"
        id="duration-input"
        value={formData.duration}
        onChange={handleChange}
        inputProps={{
          min: 0.5,
          max: 21,
          step: 0.5,
        }}
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
      <Switch 
        checked={formData.treat}
        onChange={handleChange}
        name="treat"
      />
      <label htmlFor="meal-input">Meals</label>
        <select
            required
            type="number"
            name="mealCount"
            id="meal-input"
            value={formData.mealCount}
            onChange={handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
      <label htmlFor="feeding-time-input"></label>
        <TextField
          type="time"
          name="feedingTime"
          label="feedingTime"
          id="feeding-time-input"
          value={formData.feedingTime}
          onChange={handleChange}
          inputProps={{
            step: 300, 
          }}
        />
      <Button type="submit"> Submit </Button>
    </form>
  )
}

export default NewReportCard