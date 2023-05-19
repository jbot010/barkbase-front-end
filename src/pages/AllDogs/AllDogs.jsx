
import DogList from "../DogList/DogList";

const AllDogs = ({ dogs }) => {
  return ( 
    <main>
      <DogList dogs={ dogs } />
    </main>
  );
}

export default AllDogs;