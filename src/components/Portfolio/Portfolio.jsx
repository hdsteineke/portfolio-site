import styles from './Portfolio.css';
import Projects from './Projects';

export default function Portfolio() {
  return (
    <ul className={styles.Portfolio}>
      {Array.from({ length: 1 }, (x, i) => i + 1).map(
        (n) => (
          <li key={n} className="accent-theme">
            <Projects />
          </li>
        )
      )}
    </ul>
  );
}
