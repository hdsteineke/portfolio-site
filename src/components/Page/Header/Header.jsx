import SlideoutMenu from './SlideoutMenu.jsx';
import Navigation from './Navigation.jsx';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        <SlideoutMenu />
      </div>

      <a className={styles.NameLink} >Hailey Steineke</a>

      <div className={styles.NavigationContainer}>
        <Navigation />
      </div>

    </header>
  );
}
