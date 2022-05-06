import React, { useEffect, useState } from 'react';
import styles from './InventoryDetails.module.css';
import { GoLocation } from 'react-icons/go';

import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div>
      <div className={styles.manage_Inventory}>
        <div className={styles.total_card}>
          <h2>Please Manage Your Car Stock</h2>
        </div>
        <div className={styles.inventory_card}>
          <div className={styles.item_img}>
            <img src={item.img} alt='' />
          </div>
          <div className={styles.inventory_info}>
            <div className={styles.supplier_price}>
              <div className={styles.supplier}>
                <h5 className={styles.supply_heading}>Supplier</h5>
                <h5 className={styles.supplier_name}>{item.supplier}</h5>
              </div>
              <div className={styles.price}>
                <p>
                  $<span>{item.price}</span>
                </p>
              </div>
            </div>
            <div className={styles.calculate_info}>
              <p>Calculate Financing</p>
            </div>
            <div className={styles.inventory_name}>
              <h3>{item.name}</h3>
            </div>
            <div className={styles.location_info}>
              <span className={styles.location_icon}>
                <GoLocation></GoLocation>
              </span>
              <p>71 - Wast San Park St, New york, NY 98517</p>
            </div>
            <div className={styles.border}></div>
            <div className={styles.other_info}>
              <div className={styles.stock}>
                <p>
                  In stock: <span>{item.stock}</span>
                </p>
              </div>
              <div className={styles.Delivered}>
                <button>Delivered</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.reStock}>
          <h3>Please Re-stock Your Car Item</h3>
          <div className={styles.box}>
            <div className={styles.input_area}>
              <form action='' className={styles.reStock_form}>
                <input
                  type='text'
                  id='input-field'
                  name=''
                  placeholder='Give me a quantity...'
                />
                <input type='submit' id='input-btn' name='' value='Re-stock' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
