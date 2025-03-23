/* eslint-disable max-len */
import { projects } from '../../data/data.js';
import PortfolioItem from './PortfolioItem.jsx';
import styles from './Portfolio.css';

export default function Portfolio() {
  const portfolioList = projects.map(project => {
    return (
      <div key={project.id}>
        <PortfolioItem { ...project} />
      </div>
    );
  });

  return (
    <div className={styles.Portfolio}>
      <h1>My Projects:</h1>
      {portfolioList}
    </div>
  );
}
