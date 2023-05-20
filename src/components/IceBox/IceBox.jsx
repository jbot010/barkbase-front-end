// MUI
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import NoPhotographyIcon from '@mui/icons-material/NoPhotography'

// CSS
import styles from './IceBox.module.css'

const IceBox = () => {
  return ( 
    <div className={styles.iceBoxContainer}>
      <div className={styles.iceBoxHeader}>
        <h1>ICE BOX ITEM</h1>
      </div>
      <div className={styles.iceBoxContent}>
        <p>This is where a future ice box feature will go!</p>
        <div className={styles.iceBoxButtonContainer}>
          <button><NoPhotographyIcon /></button>
          <button><AddAPhotoIcon /></button>
          <button><EditIcon /></button>
          <button><DeleteForeverIcon /></button>
        </div>
      </div>
    </div>
  )
}

export default IceBox;