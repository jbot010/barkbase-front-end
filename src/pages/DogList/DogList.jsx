// npm modules
// import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
//import DogCard
import DogCard from '../../components/DogCard/DogCard'

import styles from './DogList.module.css'

const DogList = ( props ) => {
  return (
    <Box 
    className={styles.dogList}>
      <h1>Dog List</h1>
      {console.log(props.dogs)}
      {/* {!props.dogs.length && <h2>Dog List Empty</h2>} */}
      <section>
        <ul className='dog-list-container'>
          {props.dogs.map((dog) => (
            <DogCard dog={dog} key={dog._id} />
          ))}
        </ul>
      </section>
    </Box>
  )
}

export default DogList
