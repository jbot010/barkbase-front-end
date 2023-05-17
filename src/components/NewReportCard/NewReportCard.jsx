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
    mealCount: 0,
    feedingTimes: ['12:00'],
    specialInstructions:''
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target;
  
    if (
      name === 'boarding' ||
      name === 'walk' ||
      name === 'swimming' ||
      name === 'agility' ||
      name === 'treat' ||
      name === 'feedingTimes'
    ) {
      setFormData({ ...formData, [name]: evt.target.checked });
    } else if (name === 'mealCount') {
      const count = parseInt(value, 10);
      const feedingTimes = Array.from({ length: count }, () => '12:00');
      setFormData({ ...formData, mealCount: count, feedingTimes });
    } else if (name.startsWith('feedingTime')) {
      const index = parseInt(name.slice(-1), 10);
      const updatedTimes = [...formData.feedingTimes];
      updatedTimes[index] = value;
      setFormData({ ...formData, feedingTimes: updatedTimes });
    } else if (name === 'specialInstructions') {
      setFormData({ ...formData, specialInstructions: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const renderFeedingTimeInputs = () => {
    const { mealCount, feedingTimes } = formData;
    const inputs = [];

    for (let i = 0; i < mealCount; i++) {
      const inputName = `feedingTime${i}`;
      inputs.push(
        <TextField
          key={inputName}
          type="time"
          name={inputName}
          label={`Feeding Time ${i + 1}`}
          value={feedingTimes[i]}
          onChange={handleChange}
          inputProps={{
            step: 300,
          }}
        />
      )
    }
    return inputs
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
          {renderFeedingTimeInputs()}
      <TextField
        type="text"
        name="specialInstructions"
        label="Special Instructions"
        id="special-instructions-input"
        value={formData.specialInstructions}
        onChange={handleChange}
      />
      <Button type="submit"> Submit </Button>
    </form>
  )
}

export default NewReportCard