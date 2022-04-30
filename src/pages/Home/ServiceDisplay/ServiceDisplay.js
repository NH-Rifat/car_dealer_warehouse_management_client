import React from 'react';
import styles from './ServiceDisplay.module.css';
import { FiStar } from 'react-icons/fi';
import car_service from '../../../images/best_services_img01.jpg';
import car_service2 from '../../../images/best_services_img02.jpg';

const ServiceDisplay = () => {
  return (
    <div>
      <div className={styles.service_display}>
        <div className={styles.repair_service}>
          <div className={styles.txt}>
            <p>USED / BRAND NEW</p>
            <h1>Advanced Vehicle</h1>
            <h1>Repair Service</h1>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <FiStar></FiStar>
                <FiStar></FiStar>
                <FiStar></FiStar>
                <FiStar></FiStar>
                <FiStar></FiStar>
              </div>
              <div className={styles.review_txt}>
                <span>- ( 5.0 Reviews )</span>
              </div>
            </div>
            <div className={styles.dollar}>
              <h1>$23500</h1>
            </div>
            <div className={styles.btn}>
              <button>BUY NOW</button>
            </div>
          </div>
        </div>
        <div className={styles.car_service}>
          <img src={car_service} alt='' />
        </div>
        <div className={styles.repair_guarantee}>
          <div className={styles.guarantee_txt}>
            <p>ENGINE / <span> BRAND NEW </span></p>
            <h1>Servicing 5 Years </h1>
            <h1>Guarantee</h1>
            <div className={styles.guarantee_icons}>
              <div className={styles.guarantee_icon}>
                <FiStar></FiStar>
                <FiStar></FiStar>
                <FiStar></FiStar>
                <FiStar></FiStar>
                <FiStar></FiStar>
              </div>
              <div className={styles.guarantee_review_txt}>
                <span>- ( 5.0 Reviews )</span>
              </div>
            </div>
            <div className={styles.guarantee_dollar}>
              <h1>$23500</h1>
            </div>
            <div className={styles.guarantee_btn}>
              <button>BUY NOW</button>
            </div>
          </div>
        </div>
        <div className={styles.car_serviceTwo}>
          <img src={car_service2} alt='' />
        </div>
      </div>
    </div>
  );
};

export default ServiceDisplay;
