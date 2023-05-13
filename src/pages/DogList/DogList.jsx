// npm modules
// import { useState, useEffect } from 'react'

//import DogCard
import DogCard from '../../components/DogCard/DogCard'

const DogList = ( props ) => {
  return (
    <main className='dog-list'>
      <h1>Dog List</h1>
      {console.log(props.dogs)}
      {/* {!props.dogs.length && <h2>Dog List Empty</h2>} */}
      <ul>
        {props.dogs.map((dog) => (
          <DogCard dog={dog} key={dog._id} />
        ))}
      </ul>
    </main>
  )
}

export default DogList