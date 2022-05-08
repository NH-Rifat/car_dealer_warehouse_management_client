import React, { useEffect, useState } from 'react';
import styles from './InventoryItem.module.css';
import { GiAutoRepair } from 'react-icons/gi';
import { ImRoad } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';

const InventoryItem = ({ item }) => {
  const {
    _id,
    name,
    price,
    stock,
    build_year,
    supplier,
    mileage,
    description,
    img,
  } = item;

  let navigate = useNavigate();

  // const [item,setItem]=useState({})

  // useEffect(()=>{

  // },[])

  const handleManage = (itemId) => {
    // console.log('inventoryDetails');
    navigate(`/inventoryDetails/${itemId}`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.name_price}>
        <div className={styles.name}>
          <h2>{name}</h2>
        </div>
        <div className={styles.price}>
          <h3>${price}</h3>
        </div>
      </div>
      <div className={styles.line}>
        <div className={styles.first_line}></div>
        <div className={styles.second_line}></div>
      </div>
      <div className={styles.build_year}>
        <p>
          Build Year: <span className={styles.year}>{build_year}</span>
        </p>
      </div>
      <div className={styles.car_img}>
        <img src={img} alt='' />
      </div>
      <div className={styles.supplier}>
        <div className={styles.quantity}>
          <p>
            In Stock : <span className={styles.stock}>{stock}</span>
          </p>
        </div>
        <div className={styles.supplier_name}>
          <h5>{supplier}</h5>
        </div>
      </div>
      <div className={styles.dotted_border}></div>
      <div className={styles.description}>
        <p>
          {description.slice(0, 160)}... <Link to='/'>see more</Link>
        </p>
      </div>
      <div className={styles.dotted_border_des}></div>
      <div className={styles.manage_section}>
        <div className={styles.update}>
          <button onClick={() => handleManage(_id)}>Manage</button>
        </div>
        <div className={styles.automatic}>
          <p>
            <GiAutoRepair></GiAutoRepair> <span>Automatic</span>
          </p>
        </div>
        <div className={styles.speed}>
          <p>
            <ImRoad></ImRoad>
            <span>{mileage} km</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
