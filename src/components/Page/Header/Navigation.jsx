import { Link } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="portfolio">Portfolio</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="resume.pdf">Resume</NavLink>
    </nav>
  );
}

function NavLink({ children, ...rest }) {
  return (
    <Link className="label-text" {...rest}>
      {children}
    </Link>
  );
}
