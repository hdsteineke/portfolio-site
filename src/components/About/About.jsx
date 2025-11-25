/* eslint-disable max-len */


import styles from './About.css';



export default function About() {


  return (
    <div className={styles.AboutContainer}>
      <section className={styles.ImageContainer}>
        <img className={styles.Image} src="lionsmane.png" />
      </section>
      <section className={styles.About}>
        <h1>Hailey Steineke <span className={styles.Pronouns}>(she/her)</span></h1>
        <p>I have many interests, of which coding is just one. What really draws me in is <span className={styles.Highlight}>language:</span> the power and meaning behind a set of words or commands, the symbolism and patterns used to convey those meanings, and all <span className={styles.Highlight}>the creative potential unlocked when one is able to speak a respective language.</span> I see it in programming, spoken word, music, astrology, just to name a few.
          <br></br>
          <br></br>
          
        What brings me here is my desire to use the language of programming to create <span className={styles.Highlight}>tools that inspire and support others on their individual journeys through healthy, creative living,</span> as well as express my own creativity.<span className={styles.Highlight}></span>
          <br></br>
          <br></br>
        
        If any of my work or interests you, feel free to connect with me on <span className={styles.Highlight}><a href="https://www.linkedin.com/in/haileysteineke/">LinkedIn!</a></span>
        </p>
      </section>

    </div>
  );
}
