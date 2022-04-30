import React from 'react';
import banner_img from '../../../images/banner_img.png';
import styles from './Banner.module.css';
// import  './Banner.responsive.css'

const Banner = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.main}>
        <div className='left_side'>
          <div className={styles.dealer}>
            <div className={styles.left_border}></div>
            <div className={styles.txt}>
              <h2>BEST CAR DEALER</h2>
            </div>
          </div>
          <div className={styles.heading_txt}>
            <h1>Popular Vehicle</h1>
            <h3>Dealership</h3>
            <p>Find the Perfect Car With Our Car Finder Tool</p>
            <div className={styles.btn}>
              <button>DISCOVER MORE</button>
            </div>
          </div>
        </div>
        <div className={styles.right_shape}>
          <div className={styles.right_side}>
            <img src={banner_img} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
