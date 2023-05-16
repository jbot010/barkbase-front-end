//npm modules
import { Link } from "react-router-dom";
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
// css
import styles from './DogCard.module.css'
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
        <Button variant="contained" size="small" href={`/dogs/${dog._id}`}>button</Button>
      </Box>
  )
}
export default DogCard
{/* <li>{dog.name} : {dog.breed} : Age {dog.age} : Size {dog.size} : {dog.color}</li> */}

// <Link to={`/blogs/${blog._id}`} state={blog}>
// <article className={styles.container}>
//   <header>
//     <span>
//       <h1>{ blog.title }</h1>
//       <Icon category={blog.category} />
//     </span>
//     <AuthorInfo content={blog} />
//   </header>
//   <p>{ blog.text }</p>
// </article>
// </Link>