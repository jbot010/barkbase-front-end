
import DogCard from '../../components/DogCard/DogCard'

import styles from './DogList.module.css'

const DogList = ( props ) => {
  console.log(props)
  return (
    <div 
    className={styles.dogList}>
      <section>
        {console.log(props.dogs)}
      {!props.dogs ?
        <ul className='dog-list-container'>
          {props.dogs.map((dog) => (
            <DogCard dog={dog} key={dog._id} />
          ))}
        </ul>
      :
      <h1>No Dogs!</h1>
      }
      </section>
    </div>
  )
}

export default DogList
