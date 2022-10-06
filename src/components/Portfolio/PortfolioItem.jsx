import styles from './Portfolio.css';


export default function PortfolioItem(project) {
  return (
    <div className={styles.ProjectContainer}>
      <h1>{project.name}</h1>
      <img className={styles.ProjectImage} src={project.image} />
      <p>{project.technologies}</p><br/>
      <p>{project.description}</p><br />
      <p>{project.github} | {project.deployed}</p>
    </div>
  );
}
