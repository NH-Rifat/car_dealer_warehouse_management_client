import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import SingleInventoryItem from '../../ManageInventory/SingleInventoryItem/SingleInventoryItem';
import styles from './MyItems.module.css';

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const [rendered,setRendered] = useState(false)
  const [user] = useAuthState(auth)
  console.log(user?.email);

  useEffect(() => {
    fetch(`http://localhost:5000/myItems?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user?.email,rendered]);

  // console.log(user)

  const handleDeleteItem = (id) => {
    // console.log('handleDeleteItem',id);
    const confirmation = window.confirm('Are you Sure to Delete?');
    if (confirmation) {
      fetch(`http://localhost:5000/product/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingProduct = products.filter((item) => item._id !== id);
            setProducts(remainingProduct);
            setRendered(!rendered)
          }
        });
    }
  };

  return (
    <div className={styles.inventory_container}>
      <div className={styles.manage_Inventory}>
        <div className={styles.total_card}>
          <h2>
            Total Cars Find:<span> {products.length}</span>
          </h2>
          <Link to='/addItems'>
          <button className={styles.add_car_btn}>Add new car</button>
          
          </Link>
        </div>
        {products.map((item) => (
          <SingleInventoryItem
            key={item._id}
            itemInfo={item}
            handleDeleteItem={handleDeleteItem}
          ></SingleInventoryItem>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
