import React from 'react';
import notFound from '../../images/404-error-page.jpg';
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.main}>
      <div className={styles.notfound}>
        <img src={notFound} alt='' />
      </div>
    </div>
  );
};

export default NotFound;
