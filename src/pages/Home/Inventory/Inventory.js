import React, { useEffect, useState } from 'react';
import styles from './Inventory.module.css';
import { Link } from 'react-router-dom';
import InventoryItem from '../../InventoryItem/InventoryItem';
import Loading from '../../Loading/Loading';

const Inventory = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://evening-dawn-57536.herokuapp.com/product`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (product.length === 0) {
    return <Loading></Loading>;
  }
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
        {product.slice(0, 6).map((singleProduct) => (
          <InventoryItem
            key={singleProduct._id}
            item={singleProduct}
          ></InventoryItem>
        ))}
      </div>
      <div className={styles.manage_inventory}>
        <h2>
          <Link to='/manageInventory'>Manage Inventory</Link>
        </h2>
      </div>
    </div>
  );
};

export default Inventory;
