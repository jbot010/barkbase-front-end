// css
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <main className={styles.container}>
      <div className={styles.HERO}><img src="https://res.cloudinary.com/ds57cqdwo/image/upload/v1684359173/pexels-pixmike-413195_rmaj0m.jpg" alt="BB HERO" /></div>
      <div className={styles.ABOUT}>
        <h1>Who We Are</h1>
        <p>Welcome to BarkBase, the revolutionary app that is transforming the way dog daycares are managed. Our cutting-edge platform combines innovative technology with a deep understanding of canine care, providing a seamless experience for both pet owners and daycare staff. With BarkBase, scheduling and managing your furry friend's daycare visits has never been easier, allowing you to stay connected and informed every step of the way. From detailed reports on your dog's activities to personalized care preferences, our app ensures that your beloved companion receives the highest level of attention and care, giving you peace of mind throughout the day. Join the BarkBase community today and discover a new level of convenience, transparency, and joy in dog daycare management.</p>
      </div>
      <div className={styles.P1}>
        <img src="https://res.cloudinary.com/di6tvzeal/image/upload/v1683986759/samples/landscapes/beach-boat.jpg" alt="holder" />
        <h2>Andrew</h2>
        <p>Front End Manager</p>
        <p>Designer</p>
        <p>GitHub Manager</p>
      </div>
      <div className={styles.P2}>
        <img src="https://res.cloudinary.com/di6tvzeal/image/upload/v1683986759/samples/landscapes/beach-boat.jpg" alt="holder" />
        <h2>Joe</h2>
        <p>Front End Engineer</p>
        <p>Scrum Manager</p>
      </div>
      <div className={styles.P3}>
        <img src="https://res.cloudinary.com/di6tvzeal/image/upload/v1683986759/samples/landscapes/beach-boat.jpg" alt="holder" />
        <h2>Julian</h2>
        <p>Database Manager</p>
        <p>Back End Engineer</p>
      </div>
      <div className={styles.P4}>
        <img src="https://res.cloudinary.com/di6tvzeal/image/upload/v1683986759/samples/landscapes/beach-boat.jpg" alt="holder" />
        <h2>Zach</h2>
        <p>Back End Manager</p>
        <p>Designer</p>
      </div>
      <div className={styles.D1}>
        <img src="https://res.cloudinary.com/di6tvzeal/image/upload/v1683986759/samples/landscapes/beach-boat.jpg" alt="holder" />
        <h2>Angie</h2>
        <p>DESCRIPTION</p>
      </div>
      <div className={styles.D2}>
        <img src="https://res.cloudinary.com/di6tvzeal/image/upload/v1683986759/samples/landscapes/beach-boat.jpg" alt="holder" />
        <h2>Joe's Dog</h2>
        <p>DESCRIPTION</p>
      </div>
      <div className={styles.D3}>
        <img src="https://res.cloudinary.com/di6tvzeal/image/upload/v1683986759/samples/landscapes/beach-boat.jpg" alt="holder" />
        <h2>Bowie</h2>
        <p>DESCRIPTION</p>
      </div>
      <div className={styles.D4}>
        <img src="https://res.cloudinary.com/ds57cqdwo/image/upload/v1684361358/barkbase/IMG_0487_ffdkz8.jpg" alt="Finn" />
        <h2>Finn</h2>
        <p>DESCRIPTION</p>
      </div>
    </main>
  )
}

export default Landing