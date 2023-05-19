// npm modules
// import { useState, useEffect } from 'react'
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import Paper from '@mui/material/Paper'
// import TextField from '@mui/material/TextField'
//import DogCard
import DogCard from '../../components/DogCard/DogCard'

import styles from './DogList.module.css'

const DogList = ( props ) => {
  console.log(props)
  return (
    <div 
    className={styles.dogList}>
      {console.log(props.dogs, "DOG LIST")}
      <section>
        <ul className='dog-list-container'>
          {props.dogs.map((dog) => (
            <DogCard dog={dog} key={dog._id} />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default DogList
