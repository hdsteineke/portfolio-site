import styles from './Portfolio.css';


export default function PortfolioItem(project) {
  return (
    <div className={styles.ProjectContainer}>
      <div className={styles.ProjectDescription}>
        <h1><span className={styles.ProjectTitle}>{project.name}</span></h1>
        <p>{project.github} | {project.deployed}</p>
        <p><span id={styles.Technologies}>{project.technologies}</span></p><br/>
        <p>{project.description}</p><br />
      </div>
      <img className={styles.ProjectImage} src={project.image} />
    </div>
  );
}
