//npm modules
import { Link } from "react-router-dom";

// css
import styles from './DogCard.module.css'

const DogCard = ({ dog }) => {

  return (
    <li>{dog.name} : {dog.breed} : Age {dog.age} : Size {dog.size} : {dog.color}</li>
  )
}

export default DogCard