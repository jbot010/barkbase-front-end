// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>sup, {user ? user.name : 'dawg'}</h1>
      <img src="https://textfiles.com/underconstruction/ParisCafe9362pikaconstruct.gif" alt="" />
      <img src="https://textfiles.com/underconstruction/CoCollegeParkDorm4438underconstruction.gif" alt="" />
      <img src="https://textfiles.com/underconstruction/HeHeartlandValley7159construction.gif" alt="" />
      <img src="https://textfiles.com/underconstruction/CapitolHillSenate7861construct.gif" alt="" />
    </main>
  )
}

export default Landing
