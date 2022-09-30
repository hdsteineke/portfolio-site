/* eslint-disable max-len */


import styles from './About.css';

export default function About() {
  return (
    <div>
      <section className={styles.ImageContainer}>
        <img className={styles.Image} src="lionsmane.png" />
      </section>
      <section className={styles.About}>
        <p>Hello there! My name is Hailey Steineke, and I am a passionate problem-solver. Whether it's puzzles, learning new languages, or systematically terminating bugs, I find deep satisfaction in learning new things and applying that knowledge in fun and creative ways. </p>
      </section>
      <section className={styles.About}>
        <p>Here's a little bit about my tech stack:</p>
      </section>

    </div>
  );
}
