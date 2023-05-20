// CSS
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <main className={styles.container}>
      <div className={styles.HERO}><img src="https://res.cloudinary.com/ds57cqdwo/image/upload/v1684359173/barkbase/pexels-pixmike-413195_rmaj0m.jpg" alt="BB HERO" /></div>
      <div className={styles.ABOUT}>
        <h1>Who We Are</h1>
        <p>Welcome to BarkBase, the revolutionary app that is transforming the way dog daycares are managed. Our cutting-edge platform combines innovative technology with a deep understanding of canine care, providing a seamless experience for both pet owners and daycare staff. With BarkBase, scheduling and managing your furry friend's daycare visits has never been easier, allowing you to stay connected and informed every step of the way. From detailed reports on your dog's activities to personalized care preferences, our app ensures that your beloved companion receives the highest level of attention and care, giving you peace of mind throughout the day. Join the BarkBase community today and discover a new level of convenience, transparency, and joy in dog daycare management.</p>
      </div>
      <div className={styles.P1}>
        <img src="https://res.cloudinary.com/ds57cqdwo/image/upload/v1684434842/barkbase/05f3f43b-012b-469e-847a-8ec90a95ee35_480_hkawyn.jpg" alt="Andrew" />
        <h2><a href="https://github.com/AndrewRentschler" target="_blank" rel="noopener noreferrer">Andrew</a></h2>
        <p>Front End Manager</p>
        <p>Designer</p>
        <p>GitHub Manager</p>
      </div>
      <div className={styles.P2}>
        <img src="https://res.cloudinary.com/ds57cqdwo/image/upload/v1684371997/barkbase/joe_headshot_720_lfw4lh.jpg" alt="Joe" />
        <h2><a href="https://github.com/carusoj7" target="_blank" rel="noopener noreferrer">Joe</a></h2>
        <p>Front End Engineer</p>
        <p>Scrum Manager</p>
      </div>
      <div className={styles.P3}>
        <img src="https://res.cloudinary.com/ds57cqdwo/image/upload/v1684371990/barkbase/studioehadshotday-2079_720_luhgkq.jpg" alt="Julian" />
        <h2><a href="https://github.com/jbot010" target="_blank" rel="noopener noreferrer">Julian</a></h2>
        <p>Database Manager</p>
        <p>Back End Engineer</p>
      </div>
      <div className={styles.P4}>
        <img src="https://res.cloudinary.com/ds57cqdwo/image/upload/v1684372420/barkbase/789871-Truitt-32_qvpgvu.jpg" alt="Zach" />
        <h2><a href="https://github.com/ttiurt" target="_blank" rel="noopener noreferrer">Zach</a></h2>
        <p>Back End Manager</p>
        <p>Designer</p>
      </div>
      <div className={styles.STAFF}>
        <h1>TEAM</h1>
      </div>
      <div className={styles.D1}>
        <img src="https://res.cloudinary.com/ds57cqdwo/image/upload/v1684434845/barkbase/img_3868_720_t2ofrl.jpg" alt="Angie" />
        <h2>Angie</h2>
        <br />
        <p>Chief Executive Officer</p>
      </div>
      <div className={styles.D2}>
        <img src="https://res.cloudinary.com/ds57cqdwo/image/upload/v1684371999/barkbase/img_0736_720_w9vqmx.jpg" alt="Oliver" />
        <h2>Oliver</h2>
        <br />
        <p>Chief Financial Officer</p>
      </div>
      <div className={styles.D3}>
        <img src="https://res.cloudinary.com/ds57cqdwo/image/upload/v1684371993/barkbase/aaa177af-08e9-468f-9769-435896ca91a7_1_105_c_720_cbeqep.jpg" alt="Bowie" />
        <h2>Bowie</h2>
        <br />
        <p>Chief Technical Officer</p>
      </div>
      <div className={styles.D4}>
        <img src="https://res.cloudinary.com/ds57cqdwo/image/upload/v1684361358/barkbase/IMG_0487_ffdkz8.jpg" alt="Finn" />
        <h2>Finn</h2>
        <br />
        <p>Chief Marketing Officer</p>
      </div>
    </main>
  )
}

export default Landing