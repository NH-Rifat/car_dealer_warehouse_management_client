import React from 'react';
import styles from './ManageInventory.module.css';
import { GoLocation } from "react-icons/go";
import car_image1 from '../../images/s_released_cars_thumb01.jpg';
import car_image2 from '../../images/s_released_cars_thumb02.jpg';
import car_image3 from '../../images/s_released_cars_thumb03.jpg';


const ManageInventory = () => {
  return (
    <div className={styles.inventory_container}>
      <div className={styles.manage_Inventory}>
        <div className={styles.total_card}>
          <h2>
            Total Cars Find:<span> 207</span>
          </h2>
        </div>
        <div className={styles.inventory_card}>
          <div className={styles.item_img}>
            <img src={car_image1} alt='' />
          </div>
          <div className={styles.inventory_info}>
            <div className={styles.supplier_price}>
              <div className={styles.supplier}>
                <h5 className={styles.supply_heading}>Supplier</h5>
                <h5 className={styles.supplier_name}>Elon Mask</h5>
              </div>
              <div className={styles.price}>
                <p>
                  $<span>29,000</span>
                </p>
              </div>
            </div>
            <div className={styles.calculate_info}>
              <p>Calculate Financing</p>
            </div>
            <div className={styles.inventory_name}>
              <h3>BMW 8- Series 2-Door</h3>
            </div>
            <div className={styles.location_info}>
              <span className={styles.location_icon}><GoLocation></GoLocation></span>
              <p>71 - Wast San Park St, New york, NY 98517</p>
            </div>
            <div className={styles.border}></div>
            <div className={styles.other_info}>
              <div className={styles.delete}>
                <button>Remove</button>
              </div>
              <div className={styles.stock}>
                <p>
                  In stock: <span>5</span>
                </p>
              </div>
              <div className={styles.update}>
                <button>Update</button>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.inventory_card}>
          <div className={styles.item_img}>
            <img src={car_image2} alt='' />
          </div>
          <div className={styles.inventory_info}>
            <div className={styles.supplier_price}>
              <div className={styles.supplier}>
                <h5 className={styles.supply_heading}>Supplier</h5>
                <h5 className={styles.supplier_name}>Elon Mask</h5>
              </div>
              <div className={styles.price}>
                <p>
                  $<span>29,000</span>
                </p>
              </div>
            </div>
            <div className={styles.calculate_info}>
              <p>Calculate Financing</p>
            </div>
            <div className={styles.inventory_name}>
              <h3>BMW 8- Series 2-Door</h3>
            </div>
            <div className={styles.location_info}>
              <span className={styles.location_icon}></span>
              <p>71 - Wast San Park St, New york, NY 98517</p>
            </div>
            <div className={styles.border}></div>
            <div className={styles.other_info}>
              <div className={styles.delete}>
                <button>Remove</button>
              </div>
              <div className={styles.stock}>
                <p>
                  In stock: <span>5</span>
                </p>
              </div>
              <div className={styles.update}>
                <button>Update</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.inventory_card}>
          <div className={styles.item_img}>
            <img src={car_image3} alt='' />
          </div>
          <div className={styles.inventory_info}>
            <div className={styles.supplier_price}>
              <div className={styles.supplier}>
                <h5 className={styles.supply_heading}>Supplier</h5>
                <h5 className={styles.supplier_name}>Elon Mask</h5>
              </div>
              <div className={styles.price}>
                <p>
                  $<span>29,000</span>
                </p>
              </div>
            </div>
            <div className={styles.calculate_info}>
              <p>Calculate Financing</p>
            </div>
            <div className={styles.inventory_name}>
              <h3>BMW 8- Series 2-Door</h3>
            </div>
            <div className={styles.location_info}>
              <span className={styles.location_icon}></span>
              <p>71 - Wast San Park St, New york, NY 98517</p>
            </div>
            <div className={styles.border}></div>
            <div className={styles.other_info}>
              <div className={styles.delete}>
                <button>Remove</button>
              </div>
              <div className={styles.stock}>
                <p>
                  In stock: <span>5</span>
                </p>
              </div>
              <div className={styles.update}>
                <button>Update</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ManageInventory;
