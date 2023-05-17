// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>sup, {user ? user.name : 'dawg'}</h1>
      <h2>~~~ under construction ~~~~</h2>
    </main>
  )
}

export default Landing
