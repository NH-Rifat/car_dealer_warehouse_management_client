import React from 'react';
import styles from './SocialLogin.module.css';
import google from '../../../images/google.png';
import github from '../../../images/github.png';
import facebook from '../../../images/facebook.png';

const SocialLogin = () => {
  return (
    <div>
      <div className={styles.social}>
        <div className={styles.social_login}>
          <div className=''>
            <div className={`${styles.google} ${styles.social}`}>
              <button>
                <img src={google} alt='' />
                <span>Google Sign in</span>
              </button>
            </div>
            <div className={`${styles.github} ${styles.social}`}>
              <button>
                <img src={github} alt='' />
                <span>Github Sign in</span>
              </button>
            </div>
            <div className={`${styles.faceBook} ${styles.social}`}>
              <button>
                <img src={facebook} alt='' />
                <span>Facebook Sign in</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
