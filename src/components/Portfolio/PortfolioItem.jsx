import styles from './Portfolio.css';


export default function PortfolioItem(project) {
  return (
    <div className={styles.ProjectContainer}>
      <div className={styles.ProjectDescription}>
        <h1><span className={styles.ProjectTitle}>{project.name}</span></h1>
        <h2>{project.github} | {project.deployed}</h2>
        <p><span id={styles.Technologies}>{project.technologies}</span></p><br/>
        <p>{project.description}</p><br />
        <p>{project.contribution}</p><br />
      </div>
      <img className={styles.ProjectImage} src={project.image} />
    </div>
  );
}
