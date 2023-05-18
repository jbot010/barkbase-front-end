
// COMPONENTS
import DogCard from '../../components/DogCard/DogCard'
import DogList from '../DogList/DogList'
import IceBox from '../../components/IceBox/IceBox'

// CSS
import styles from './AdminHome.module.css'


// PAGE
const AdminHome = ( props ) => {
  return (
    <main className={styles.adminHome}>
      <DogList dogs={props.dogs} className={styles.dogList}/>
      <IceBox />
    </main>
  )
}

export default AdminHome