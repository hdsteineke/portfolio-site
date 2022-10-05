/* eslint-disable max-len */
import { projects } from '../../data/data.js';
import PortfolioItem from './PortfolioItem.jsx';
import styles from './Portfolio.css';

export default function Portfolio() {
  const portfolioList = projects.map(project => {
    return (
      <div key={project.id} className={styles.projectItem}>
        <PortfolioItem { ...project} />
      </div>
    );
  });

  return (
    <div>
      {portfolioList}
    </div>
  );
}
