import styles from './List.css';

export default function List() {
  return (
    <ul className={styles.List}>
      {Array.from({ length: 10 }, (x, i) => i + 1).map(
        (n) => (
          <li key={n} className="accent-theme">
            Reason {n} why you should hire me...
          </li>
        )
      )}
    </ul>
  );
}
