import styles from '../Footer/FooterNav.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function FooterNav() {
  return (
    <div className={styles.Footer}>
      <GitHubIcon className={styles.Icon}/>
      <LinkedInIcon className={styles.Icon}/>
    </div>
  );
}
