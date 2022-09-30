/* eslint-disable max-len */


import styles from './About.css';

export default function About() {
  return (
    <div>
      <section className={styles.ImageContainer}>
        <img className={styles.Image} src="lionsmane-20.png" />
      </section>
      <section className={styles.About}>
        <p>Hello there! My name is Hailey Steineke, and I am a passionate problem-solver.</p>
      </section>

    </div>
  );
}
