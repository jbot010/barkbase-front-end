//npm modules
import { Link } from "react-router-dom";

// css
import styles from './DogCard.module.css'

const DogCard = ({ dog }) => {

  return (
    <li>{dog.name}</li>
  )
}

export default DogCard