import React from 'react';
import styles from './CarModel.module.css';
import one from '../../../images/car_cat01.png';
import two from '../../../images/car_cat02.png';
import third from '../../../images/car_cat03.png';
import fourth from '../../../images/car_cat04.png';
import fifth from '../../../images/car_cat05.png';
import sixth from '../../../images/car_cat06.png';

const CarModel = () => {
  return (
    <div>
      <div className={styles.car_model}>
        <p className={styles.category}>CATEGORIES CARS</p>
        <h1>Browse By Type Cars</h1>

        <div className={styles.line}>
          <div className={styles.firstLine}></div>
          <div className={styles.secondLine}></div>
        </div>
        <div className={styles.car_section}>
          <div className={styles.first}>
            <img src={one} alt='' />
            <p>Sedan 800</p>
          </div>
          <div className={styles.second}>
            <img src={two} alt='' />
            <p>Toyota Aqua</p>
          </div>
          <div className={styles.third}>
            <img src={third} alt='' />
            <p>Hybrid i7</p>
          </div>
          <div className={styles.fourth}>
            <img src={fourth} alt='' />
            <p>Lamborghini</p>
          </div>
          <div className={styles.fifth}>
            <img src={sixth} alt='' />
            <p>Toyota 7G9</p>
          </div>
          <div className={styles.sixth}>
            <img src={fifth} alt='' />
            <p>Jaguar w7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModel;
