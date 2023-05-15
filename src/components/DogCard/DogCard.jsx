//npm modules
import { Link } from "react-router-dom";

// css
import styles from './DogCard.module.css'
// import { login } from "../../services/authService";

const DogCard = ({ dog }) => {
  console.log(dog);
  return (
    <Link to={`/dogs/${dog._id}`}>
      <div className={styles.dogCard}>
        <div className={styles.dogCardImg}><img src={dog.photo} alt="" /></div>
        <div className={styles.dogCardContent}>{dog.name} - {dog.breed}</div>
        <div className={styles.dogCardButtons}><button>button</button></div>
      </div>
    </Link>
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