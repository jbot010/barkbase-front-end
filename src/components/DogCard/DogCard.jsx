//npm modules
import { Link } from "react-router-dom";

// css
import styles from './DogCard.module.css'

const DogCard = ({ dog }) => {

  return (
    <Link to={`/dogs/${dog._id}`}>
    <main>
      <ol>
        <li>{dog.name}</li>
        <li> {dog.breed} </li>
      </ol>
    </main>
    </Link>
  )
}

export default DogCard