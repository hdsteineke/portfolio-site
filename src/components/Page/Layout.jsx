/* eslint-disable max-len */
import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';
import './reset.css';
import './global.css';
import styles from './Layout.css';
import FooterNav from './Footer/FooterNav.jsx';

export default function Layout() {
  return (
    <>
      <div className={styles.Layout}>

        <Header />
        <main>
          <Outlet />
        </main>
        <FooterNav />
      </div>
    </>
  );
}
