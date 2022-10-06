/* eslint-disable max-len */
import styles from './Portfolio.css';

export default function Project() {
  return (
    <div className={styles.ProjectContainer}>
      <img className={styles.ProjectImage} src={'trashapp.PNG'}/>
      <h1>TrashApp || React, JavaScript, Node.js, Material UI, Heroku, Netlify</h1><br />
      <p>Insert a more detailed description of TrashApp here! </p><br />

      <p>GitHub  |  Deployed</p>
    </div>
  );
}
