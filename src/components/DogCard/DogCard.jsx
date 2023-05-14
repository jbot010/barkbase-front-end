//npm modules
import { Link } from "react-router-dom";

// css
import styles from './DogCard.module.css'

const DogCard = ({ dog }) => {
  return (
    <Link to={`/dogs/${dog._id}`}>
      <li>{dog.name} : {dog.breed} : Age {dog.age} : Size {dog.size} : {dog.color}</li>
    </Link>
  )
}

export default DogCard