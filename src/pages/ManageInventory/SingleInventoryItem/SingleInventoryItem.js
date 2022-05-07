import React from 'react';
import styles from './SingleInventoryItem.module.css';
import { GoLocation } from 'react-icons/go';



const SingleInventoryItem = ({ itemInfo,handleDeleteItem }) => {
  // console.log(handleDeleteItem);
  const {
    _id,
    name,
    price,
    stock,
    build_year,
    supplier,
    mileage,
    description,
    img
  } = itemInfo;
  return (
    <div className={styles.inventory_card}>
      <div className={styles.item_img}>
        <img src={img} alt='' />
      </div>
      <div className={styles.inventory_info}>
        <div className={styles.supplier_price}>
          <div className={styles.supplier}>
            <h5 className={styles.supply_heading}>Supplier</h5>
            <h5 className={styles.supplier_name}>{supplier}</h5>
          </div>
          <div className={styles.price}>
            <p>
              $<span>{price}</span>
            </p>
          </div>
        </div>
        <div className={styles.calculate_info}>
          <p>Calculate Financing</p>
        </div>
        <div className={styles.inventory_name}>
          <h3>{name}</h3>
        </div>
        <div className={styles.location_info}>
          <span className={styles.location_icon}>
            <GoLocation></GoLocation>
          </span>
          <p>71 - Wast San Park St, New york, NY 98517</p>
        </div>
        <div className={styles.border}></div>
        <div className={styles.other_info}>
          <div className={styles.delete}>
            <button onClick={()=>handleDeleteItem(_id)}>Remove</button>
          </div>
          <div className={styles.stock}>
            <p>
              In stock: <span>{stock}</span>
            </p>
          </div>
          <div className={styles.update}>
            <button >Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInventoryItem;
