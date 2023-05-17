// css
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <main className={styles.container}>
      <div className={styles.HERO}>LOGO AND NAME</div>
      <div className={styles.ABOUT}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quod ad natus fugit quibusdam consequuntur quas libero id error recusandae minus voluptates earum esse velit praesentium temporibus magnam, harum hic.</div>
      <div className={styles.P1}>IMG + P1</div>
      <div className={styles.P2}>IMG + P2</div>
      <div className={styles.P3}>IMG + P3</div>
      <div className={styles.P4}>IMG + P4</div>
      <div className={styles.D1}>IMG + D1</div>
      <div className={styles.D2}>IMG + D2</div>
      <div className={styles.D3}>IMG + D3</div>
      <div className={styles.D4}>IMG + D4</div>
    </main>
  )
}

export default Landing