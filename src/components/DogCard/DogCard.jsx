// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddCommentIcon from '@mui/icons-material/AddComment'

// CSS
import styles from './DogCard.module.css'

const DogCard = ({ dog }) => {
  return (
    <Box 
      key={dog.id}
      className={styles.dogCard}
      backgroundColor="white"
      display="flex" 
      justifyContent="spread-evenly" 
      alignItems="center"
      flexDirection="row"
      borderRadius="12px"
      padding="6px"
      marginTop="6px"
    >
    <Box ><img src={dog.photo? dog.photo:'/BWdog_icon.png'} alt="" className={styles.dogCardImg} /></Box>
    <Box className={styles.dogCardContent} flexGrow="3">{dog.name} - {dog.breed}</Box>
      <Button sx={{margin: 1}} variant="outlined" size="small" href={`/dogs/${dog._id}`}>DETAILS</Button>
      <Button variant="outlined" size="small" href={`/dogs/${dog._id}/reports/newreport`}><AddCommentIcon /></Button>
    </Box>
  )
}

export default DogCard