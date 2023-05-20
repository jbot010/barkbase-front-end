// NPM MODULES
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

// MUI
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Switch } from "@mui/material"

// CSS
import styles from './NewReportCard.module.css'

const NewReportCard = (props) => {

  const {dogId} = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    dogId: dogId,
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
    const { name, value } = evt.target
  
    if (
      name === 'boarding' ||
      name === 'walk' ||
      name === 'swimming' ||
      name === 'agility' ||
      name === 'treat' ||
      name === 'feedingTimes'
    ) {
      setFormData({ ...formData, [name]: evt.target.checked })
    } else if (name === 'mealCount') {
      const count = parseInt(value, 10)
      const feedingTimes = Array.from({ length: count }, () => '12:00')
      setFormData({ ...formData, mealCount: count, feedingTimes })
    } else if (name.startsWith('feedingTime')) {
      const index = parseInt(name.slice(-1), 10)
      const updatedTimes = [...formData.feedingTimes]
      updatedTimes[index] = value;
      setFormData({ ...formData, feedingTimes: updatedTimes })
    } else if (name === 'specialInstructions') {
      setFormData({ ...formData, specialInstructions: value })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }
  
  const renderFeedingTimeInputs = () => {
    const { mealCount, feedingTimes } = formData;
    const inputs = []

    for (let i = 0; i < mealCount; i++) {
      const inputName = `feedingTime${i}`
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
      )}
    return inputs
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    await props.handleAddReport(dogId, formData)
    navigate(`/dogs/${dogId}`)
  }

  return (
    <main className={styles.reportMain}>
      <h1 className={styles.newReport}>New Report</h1>
      <form className={styles.container} onSubmit={handleSubmit}>
        <TextField
          sx={{width: .5}}
          className={styles.duration}
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
        <div className={styles.boarding}>
          <label htmlFor="boarding-input">Boarding</label>
          <Switch 
            checked={formData.boarding}
            onChange={handleChange}
            name="boarding"
          />
        </div>
        <div className={styles.walk}>
          <label htmlFor="walk-input">Walk</label>
          <Switch 
            checked={formData.walk}
            onChange={handleChange}
            name="walk"
          />
        </div>
        <div className={styles.swim}>
          <label htmlFor="swimming-input">Swimming</label>
          <Switch 
            checked={formData.swimming}
            onChange={handleChange}
            name="swimming"
          />
        </div>
        <div className={styles.agility}>
          <label htmlFor="agility-input">Agility</label>
          <Switch 
            checked={formData.agility}
            onChange={handleChange}
            name="agility"
          />
        </div>
        <div className={styles.treat}>
          <label htmlFor="treat-input">Treat</label>
          <Switch 
            checked={formData.treat}
            onChange={handleChange}
            name="treat"
          />
        </div>
        <div className={styles.meals}>
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
        </div>
        <br />
        <TextField
          className={styles.spec}
          type="text"
          name="specialInstructions"
          label="Special Instructions"
          id="special-instructions-input"
          value={formData.specialInstructions}
          onChange={handleChange}
        />
        <br />
        <Button className={styles.sub} variant="outlined" type="submit" size="small"> Submit </Button>
      </form>
    </main>
  )
}



export default NewReportCard