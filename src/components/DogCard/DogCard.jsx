//npm modules
import { Link } from "react-router-dom";
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ButtonA from "../ButtonA/ButtonA";
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
        borderRadius="12px"
        minWidth="70%"
        padding="24px"
        marginTop="12px"
        sx={{ width: "50%" }}
        >
          <Box className={styles.dogCardImg}><img src={dog.photo? dog.photo:'/Default-360x360.png'} alt="" /></Box>
          <Box className={styles.dogCardContent} flexGrow="3">{dog.name} - {dog.breed}</Box>
        <Button variant="outlined" size="small" href={`/dogs/${dog._id}`}>DETAILS</Button>
        <Button variant="outlined" size="small" href={`/dogs/${dog._id}`}><AddCommentIcon /></Button>
        <ButtonA content={"BTN"} path={`/dogs/${dog._id}`} />
        <Switch />
      </Box>
  )
}
export default DogCard
