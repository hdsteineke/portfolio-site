/* eslint-disable max-len */
import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';
import './reset.css';
import './global.css';
import styles from './Layout.css';
import FooterNav from './Footer/FooterNav.jsx';
// import backgroundImg from '../../../public/starrynight.png';

export default function Layout() {
  return (
    <>
      <div className={styles.Layout}>
        {/* attempting to set background image with code below, but struggling to import background image */}
        {/* <div className={styles.Layout} style={{ backgroundImg: `url(${backgroundImg})` }}>
        </div> */}
        <Header />
        <main>
          <Outlet />
        </main>
        <FooterNav />
      </div>
    </>
  );
}
