import React from 'react';
import styles from './Portfolio.css';

export default function Project() {
  return (
    <div className={styles.ProjectContainer}>
      <img className={styles.ProjectImage} src={'trashapp.PNG'}/>
      <h1>Title</h1>
    </div>
  );
}
