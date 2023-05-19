// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

// CSS
import styles from './ProfileCard.module.css'

const ProfileCard = ({ profile }) => {
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
    >
      <Box ><img src={profile.photo ? profile.photo : "/BWdog_icon.png"} alt="" className={styles.profileCardImg}/></Box>
      <Box className={styles.profileCardContent} flexGrow="3">{profile.name}</Box>
      <Button variant="contained" size="small" href={`/profiles/${profile._id}`}>DETAILS</Button>
      <button className={styles.profDltBtn}><DeleteForeverIcon /></button>
    </Box>
  )
}
export default ProfileCard
