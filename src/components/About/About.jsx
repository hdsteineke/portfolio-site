/* eslint-disable max-len */


import styles from './About.css';

export default function About() {
  return (
    <div>
      <section className={styles.ImageContainer}>
        <img className={styles.Image} src="lionsmane.png" />
      </section>
      <section className={styles.About}>
        <p>I am a people-oriented programmer who is passionate about co-creating healthy, balanced workspaces with an emphasis on open communication and mutual support. I entered the software industry out of a desire to weave my relational skills with my insatiable appetite for intellection and input. Whether it&apos;s solving puzzles, fixing bugs, or learning languages, I love a good challenge to chew on, and I am looking to join a team that values these skills!
        
        When I&apos;m not coding, you can find me playing with goats, reading the stars, and contemplating the nature of existence on this silly space marble. 
        </p>
      </section>
      <section className={styles.About}>
        <p>Here&apos;s a little bit about my tech stack:</p>
      </section>

    </div>
  );
}
