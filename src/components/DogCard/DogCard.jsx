//npm modules
import { Link } from "react-router-dom";
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddCommentIcon from '@mui/icons-material/AddComment';
// css
import styles from './DogCard.module.css'
import { Switch } from "@mui/material";
// import { login } from "../../services/authService";

const DogCard = ({ dog }) => {
  console.log(dog);
  return (
      <Box 
        className={styles.dogCard}
        backgroundColor="white"
        display="flex" 
        justifyContent="spread-evenly" 
        alignItems="center"
        flexDirection="row"
        minWidth="480px"
        padding="24px"
        sx={{ width: "50%" }}
        >
          <Box className={styles.dogCardImg}><img src={dog.photo? dog.photo:'public/Default-360x360.png'} alt="" /></Box>
          <Box className={styles.dogCardContent} flexGrow="3">{dog.name} - {dog.breed}</Box>
        <Button variant="contained" size="small" href={`/dogs/${dog._id}`}>Details</Button>
        <Button><AddCommentIcon /></Button>
        <Switch />
      </Box>
  )
}
export default DogCard
