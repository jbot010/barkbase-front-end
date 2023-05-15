//npm modules
import { Link } from "react-router-dom";

// css
import styles from './DogCard.module.css'

const DogCard = ({ dog }) => {
  return (
    <Link to={`/dogs/${dog._id}`}>
      <article>
        <div id="dogcard-img"></div>
        <div id="dogcard-content">
          
        </div>

      </article>
    </Link>
  )
}

export default DogCard

<li>{dog.name} : {dog.breed} : Age {dog.age} : Size {dog.size} : {dog.color}</li>

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