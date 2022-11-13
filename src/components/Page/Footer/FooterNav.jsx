import styles from '../Footer/FooterNav.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function FooterNav() {

  function navToGitHub() {
    window.open('https://github.com/hdsteineke');
  }

  function navToLinkedIn() {
    window.open('https://www.linkedin.com/in/haileysteineke/');
  }
  return (
    <div className={styles.Footer}>
      <GitHubIcon onClick={navToGitHub} className={styles.Icon} />
      <LinkedInIcon onClick={navToLinkedIn} className={styles.Icon}/>
    </div>
  );
}
