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
        <p>As a junior software developer with a strong foundation in <span className={styles.Highlight}>communication, language, and critical inquiry</span>, I bring a uniquely human-centered approach to technology. My background is rooted in a <span className={styles.Highlight}>deep curiosity about systems--natural, social and digital--</span>and I thrive when working on projects that align with values of equity, sustainability and purpose. I excel at asking the right questions, <span className={styles.Highlight}>translating complex ideas into accessible language</span>, and fostering collaborative environments.<br /><br />

        With a passion for learning and a commitment to building tools that serve people and planet, I&apos;m excited to contribute to <span className={styles.Highlight}>mission-driven teams</span> where thoughtful design, ethical development, and social impact are valued.<br /><br />
        
        When I&apos;m not coding, you can find me listening to the birds, reading the stars, and contemplating the nature of existence on this silly space marble. 
        </p>
      </section>

    </div>
  );
}
