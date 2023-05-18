//npm modules
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

// css
import styles from './ProfileCard.module.css'

// import { login } from "../../services/authService";

const ProfileCard = ({ profile }) => {
  console.log(profile);
  return (
      <Box 
        className={styles.profileCard}
        backgroundColor="white"
        display="flex" 
        justifyContent="spread-evenly" 
        alignItems="center"
        flexDirection="row"
        borderRadius="12px"
        minWidth="70%"
        padding="6px"
        marginTop="6px"
        // sx={{ width: "50%" }}
        >
          <Box className={styles.profileCardImg}><img src={profile.photo ? profile.photo : "/BWdog_icon.png"} alt="" /></Box>
          <Box className={styles.profileCardContent} flexGrow="3">{profile.name}</Box>
        <Button variant="contained" size="small" href={`/profiles/${profile._id}`}>DETAILS</Button>
        <button><DeleteForeverIcon /></button>

      </Box>
  )
}
export default ProfileCard
