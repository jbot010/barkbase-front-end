// COMPONENTS
import DogCard from '../../components/DogCard/DogCard'

// CSS
import styles from './DogList.module.css'

const DogList = (props) => {
  return (
    <div className={styles.dogList}>
      <section>
        {props.dogs ? (
          <ul className='dog-list-container'>
            {props.dogs.map((dog) => (
              <DogCard dog={dog} key={dog._id} />
            ))}
          </ul>
        ) : (
          <h1>No Dogs!</h1>
        )}
      </section>
    </div>
  );
};

export default DogList
