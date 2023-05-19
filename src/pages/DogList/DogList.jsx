
import DogCard from '../../components/DogCard/DogCard'

import styles from './DogList.module.css'

const DogList = (props) => {
  return (
    <div className={styles.dogList}>
      <section>
        {props.dogs ? (
          <ul className={styles.dogListContainer}>
            {props.dogs.map((dog) => (
              <DogCard dog={dog} key={dog.id} />
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
