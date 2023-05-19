import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

// MUI
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Switch } from "@mui/material"

// SERVICES
import * as reportService from '../../services/reportService'

const EditReport = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { dogId, reportId } = useParams()
  const [formData, setFormData] = useState(state)

  const handleToggle = ({ target }) => {
    setFormData ({ ...formData, [target.name]: target.checked })
  }

  const handleChange = ({ target }) => {
    if (target.name.startsWith("feedingTime")) {
      const index = parseInt(target.name.replace("feedingTime", ""), 10)
      const newFeedingTimes = [...formData.feedingTimes]
      newFeedingTimes[index] = target.value
      setFormData({ ...formData, feedingTimes: newFeedingTimes })
    } else {
      setFormData({ ...formData, [target.name]: target.value })
    }
  }
  
  const renderFeedingTimeInputs = () => {
    const { mealCount, feedingTimes } = formData;
    const inputs = [];

    for (let i = 0; i < mealCount; i++) {
      const inputName = `feedingTime${i}`
      inputs.push(
        <TextField
          key={inputName}
          type="time"
          name={inputName}
          label={`Feeding Time ${i + 1}`}
          value={feedingTimes[i] || ""}
          onChange={handleChange}
          inputProps={{
            step: 300,
          }}
        />
      )
    }
    return inputs
  }
  
  const handleSubmit = async (evt) => {
    evt. preventDefault()
    await reportService.updateReport(reportId, formData)
    navigate(`/dogs/${dogId}`)
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
        onChange={handleToggle}
        name="boarding"
      />
      <label htmlFor="walk-input">Walk</label>
      <Switch 
        checked={formData.walk}
        onChange={handleToggle}
        name="walk"
      />
      <label htmlFor="swimming-input">Swimming</label>
      <Switch 
        checked={formData.swimming}
        onChange={handleToggle}
        name="swimming"
      />
      <label htmlFor="agility-input">Agility</label>
      <Switch 
        checked={formData.agility}
        onChange={handleToggle}
        name="agility"
      />
      <label htmlFor="treat-input">Treat</label>
      <Switch 
        checked={formData.treat}
        onChange={handleToggle}
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

export default EditReport