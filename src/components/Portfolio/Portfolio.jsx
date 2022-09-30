/* eslint-disable max-len */
import styles from './Portfolio.css';

export default function Portfolio() {
  return (
    <ul className={styles.Portfolio}>
      <div className={styles.ProjectContainer}>
        <img className={styles.ProjectImage} src={'trashapp.PNG'}/>
        <h1>TrashApp || React, Cloudinary, Node.js, Material UI, Heroku, Netlify</h1><br />
        <p>Insert a more detailed description of TrashApp here! </p><br />
        <p>GitHub  |  Deployed</p>
      </div>

      <div className={styles.ProjectContainer}>
        <img className={styles.ProjectImage} src={'magica.png'}/>
        <h1>Magica || React, Supabase, Material UI, Netlify</h1><br />
        <p>Insert a more detailed description of _____ here! </p><br />
        <p>GitHub  |  Deployed</p>
      </div>

      <div className={styles.ProjectContainer}>
        <img className={styles.ProjectImage} src={'giftwrapp.png'}/>
        <h1>GiftWrApp || Vanilla JS, Supabase</h1><br />
        <p>Insert a more detailed description of _____ here! </p><br />
        <p>GitHub  |  Deployed</p>
      </div>
    </ul>
  );
}
