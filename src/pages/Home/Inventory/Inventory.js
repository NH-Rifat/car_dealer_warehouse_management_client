import React from 'react';
import styles from './Inventory.module.css';
import { GiAutoRepair } from 'react-icons/gi';
import { ImRoad } from 'react-icons/im';
import car_image1 from '../../../images/s_released_cars_thumb01.jpg';
import car_image2 from '../../../images/s_released_cars_thumb02.jpg';
import car_image3 from '../../../images/s_released_cars_thumb03.jpg';
import car_image4 from '../../../images/s_released_cars_thumb04.jpg';
import car_image5 from '../../../images/s_released_cars_thumb05.jpg';
import car_image6 from '../../../images/s_released_cars_thumb06.jpg';

const Inventory = () => {
  return (
    <div className={styles.inventory_main}>
      <div className={styles.inventory_section}>
        <p>OUR FEATURED CARS</p>
        <h1>Latest Released Cars</h1>
      </div>
      <div className={styles.btn_group}>
        <button className={styles.seller_btn}>ALL SELLER</button>
        <button className={styles.new_car_btn}>NEW CARS</button>
        <button className={styles.used_car_btn}>USED CARS</button>
      </div>

      <div className={styles.inventory_card}>
        <div className={styles.card}>
          <div className={styles.name_price}>
            <div className={styles.name}>
              <h2>JAGUER M1 HYBRID</h2>
            </div>
            <div className={styles.price}>
              <h3>$2300</h3>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.first_line}></div>
            <div className={styles.second_line}></div>
          </div>
          <div className={styles.build_year}>
            <p>
              Build Year: <span className={styles.year}>2020</span>
            </p>
          </div>
          <div className={styles.car_img}>
            <img src={car_image1} alt='' />
          </div>
          <div className={styles.supplier}>
            <div className={styles.quantity}>
              <p>
                In Stock : <span className={styles.stock}>8</span>
              </p>
            </div>
            <div className={styles.supplier_name}>
              <h5>Elon Mask</h5>
            </div>
          </div>
          <div className={styles.dotted_border}></div>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              sint quaerat aliquid minus, assumenda doloribus facilis delectus
              debitis minima, iste tempore{' '}
            </p>
          </div>
          <div className={styles.dotted_border_des}></div>
          <div className={styles.manage_section}>
            <div className={styles.update}>
              <button>Manage</button>
            </div>
            <div className={styles.automatic}>
              <p>
                <GiAutoRepair></GiAutoRepair> <span>Automatic</span>
              </p>
            </div>
            <div className={styles.speed}>
              <p>
                <ImRoad></ImRoad>
                <span>7500 km</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.name_price}>
            <div className={styles.name}>
              <h2>AUDI NEW BOM 800</h2>
            </div>
            <div className={styles.price}>
              <h3>$2700</h3>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.first_line}></div>
            <div className={styles.second_line}></div>
          </div>
          <div className={styles.build_year}>
            <p>
              Build Year: <span className={styles.year}>2020</span>
            </p>
          </div>
          <div className={styles.car_img}>
            <img src={car_image2} alt='' />
          </div>
          <div className={styles.supplier}>
            <div className={styles.quantity}>
              <p>
                In Stock : <span className={styles.stock}>18</span>
              </p>
            </div>
            <div className={styles.supplier_name}>
              <h5>Great Wall</h5>
            </div>
          </div>
          <div className={styles.dotted_border}></div>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              sint quaerat aliquid minus, assumenda doloribus facilis delectus
              debitis minima, iste tempore{' '}
            </p>
          </div>
          <div className={styles.dotted_border_des}></div>
          <div className={styles.manage_section}>
            <div className={styles.update}>
              <button>Manage</button>
            </div>
            <div className={styles.automatic}>
              <p>
                <GiAutoRepair></GiAutoRepair> <span>Automatic</span>
              </p>
            </div>
            <div className={styles.speed}>
              <p>
                <ImRoad></ImRoad>
                <span>7500 km</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.name_price}>
            <div className={styles.name}>
              <h2>MERCEDEZ BENZ EI8</h2>
            </div>
            <div className={styles.price}>
              <h3>$1700</h3>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.first_line}></div>
            <div className={styles.second_line}></div>
          </div>
          <div className={styles.build_year}>
            <p>
              Build Year: <span className={styles.year}>2020</span>
            </p>
          </div>
          <div className={styles.car_img}>
            <img src={car_image3} alt='' />
          </div>
          <div className={styles.supplier}>
            <div className={styles.quantity}>
              <p>
                In Stock : <span className={styles.stock}>8</span>
              </p>
            </div>
            <div className={styles.supplier_name}>
              <h5>Brilliance</h5>
            </div>
          </div>
          <div className={styles.dotted_border}></div>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              sint quaerat aliquid minus, assumenda doloribus facilis delectus
              debitis minima, iste tempore{' '}
            </p>
          </div>
          <div className={styles.dotted_border_des}></div>
          <div className={styles.manage_section}>
            <div className={styles.update}>
              <button>Manage</button>
            </div>
            <div className={styles.automatic}>
              <p>
                <GiAutoRepair></GiAutoRepair> <span>Automatic</span>
              </p>
            </div>
            <div className={styles.speed}>
              <p>
                <ImRoad></ImRoad>
                <span>7500 km</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.name_price}>
            <div className={styles.name}>
              <h2>AUDI A8 HYBRID</h2>
            </div>
            <div className={styles.price}>
              <h3>$1400</h3>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.first_line}></div>
            <div className={styles.second_line}></div>
          </div>
          <div className={styles.build_year}>
            <p>
              Build Year: <span className={styles.year}>2020</span>
            </p>
          </div>
          <div className={styles.car_img}>
            <img src={car_image4} alt='' />
          </div>
          <div className={styles.supplier}>
            <div className={styles.quantity}>
              <p>
                In Stock : <span className={styles.stock}>8</span>
              </p>
            </div>
            <div className={styles.supplier_name}>
              <h5>Puma</h5>
            </div>
          </div>
          <div className={styles.dotted_border}></div>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              sint quaerat aliquid minus, assumenda doloribus facilis delectus
              debitis minima, iste tempore{' '}
            </p>
          </div>
          <div className={styles.dotted_border_des}></div>
          <div className={styles.manage_section}>
            <div className={styles.update}>
              <button>Manage</button>
            </div>
            <div className={styles.automatic}>
              <p>
                <GiAutoRepair></GiAutoRepair> <span>Automatic</span>
              </p>
            </div>
            <div className={styles.speed}>
              <p>
                <ImRoad></ImRoad>
                <span>7500 km</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.name_price}>
            <div className={styles.name}>
              <h2>AUDI NEW BOM 800</h2>
            </div>
            <div className={styles.price}>
              <h3>$2100</h3>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.first_line}></div>
            <div className={styles.second_line}></div>
          </div>
          <div className={styles.build_year}>
            <p>
              Build Year: <span className={styles.year}>2020</span>
            </p>
          </div>
          <div className={styles.car_img}>
            <img src={car_image5} alt='' />
          </div>
          <div className={styles.supplier}>
            <div className={styles.quantity}>
              <p>
                In Stock : <span className={styles.stock}>8</span>
              </p>
            </div>
            <div className={styles.supplier_name}>
              <h5>Perana</h5>
            </div>
          </div>
          <div className={styles.dotted_border}></div>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              sint quaerat aliquid minus, assumenda doloribus facilis delectus
              debitis minima, iste tempore{' '}
            </p>
          </div>
          <div className={styles.dotted_border_des}></div>
          <div className={styles.manage_section}>
            <div className={styles.update}>
              <button>Manage</button>
            </div>
            <div className={styles.automatic}>
              <p>
                <GiAutoRepair></GiAutoRepair> <span>Automatic</span>
              </p>
            </div>
            <div className={styles.speed}>
              <p>
                <ImRoad></ImRoad>
                <span>7500 km</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.name_price}>
            <div className={styles.name}>
              <h2>AUDI NEW BOM 800</h2>
            </div>
            <div className={styles.price}>
              <h3>$2500</h3>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.first_line}></div>
            <div className={styles.second_line}></div>
          </div>
          <div className={styles.build_year}>
            <p>
              Build Year: <span className={styles.year}>2020</span>
            </p>
          </div>
          <div className={styles.car_img}>
            <img src={car_image6} alt='' />
          </div>
          <div className={styles.supplier}>
            <div className={styles.quantity}>
              <p>
                In Stock : <span className={styles.stock}>12</span>
              </p>
            </div>
            <div className={styles.supplier_name}>
              <h5>Birkin</h5>
            </div>
          </div>
          <div className={styles.dotted_border}></div>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              sint quaerat aliquid minus, assumenda doloribus facilis delectus
              debitis minima, iste tempore{' '}
            </p>
          </div>
          <div className={styles.dotted_border_des}></div>
          <div className={styles.manage_section}>
            <div className={styles.update}>
              <button>Manage</button>
            </div>
            <div className={styles.automatic}>
              <p>
                <GiAutoRepair></GiAutoRepair> <span>Automatic</span>
              </p>
            </div>
            <div className={styles.speed}>
              <p>
                <ImRoad></ImRoad>
                <span>7500 km</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.manage_inventory}>
        <h2>Manage Inventories</h2>
      </div>
    </div>
  );
};

export default Inventory;
