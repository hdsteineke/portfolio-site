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
        <p>I am a <span className={styles.Highlight}>people-oriented</span> programmer who is passionate about co-creating workspaces that emphasize <span className={styles.Highlight}>open communication and mutual support</span>. I entered the software industry with the desire to weave my <span className={styles.Highlight}>relational skills</span> with my insatiable appetite for <span className={styles.Highlight}>problem-solving and pattern-recognition</span>. Whether it&apos;s solving puzzles, fixing bugs, or learning languages, I love a good challenge to chew on, and I am looking to join a team that values these skills!<br /><br />
        
        When I&apos;m not coding, you can find me playing with goats, reading the stars, and contemplating the nature of existence on this silly space marble. 
        </p>
      </section>

    </div>
  );
}
