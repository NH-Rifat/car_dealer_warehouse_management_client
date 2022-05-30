import React, { useEffect, useState } from 'react';
import styles from './ManageInventory.module.css';
import car_image1 from '../../images/s_released_cars_thumb01.jpg';
import car_image2 from '../../images/s_released_cars_thumb02.jpg';
import car_image3 from '../../images/s_released_cars_thumb03.jpg';
import SingleInventoryItem from './SingleInventoryItem/SingleInventoryItem';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`https://evening-dawn-57536.herokuapp.com/product`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteItem = (id) => {
    // console.log('handleDeleteItem',id);
    if (user) {
      const confirmation = window.confirm('Are you Sure to Delete?');
      if (confirmation) {
        fetch(`https://evening-dawn-57536.herokuapp.com/product/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingProduct = products.filter(
                (item) => item._id !== id
              );
              setProducts(remainingProduct);
            }
          });
      }
    } else {
      navigate('/login');
    }
  };

  const handleAddNewCar = () => {
    navigate(`/addItems`);
  };

  return (
    <div className={styles.inventory_container}>
      <div className={styles.manage_Inventory}>
        <div className={styles.total_card}>
          <h2>
            Total Cars Find:<span> {products.length}</span>
          </h2>

          <button onClick={handleAddNewCar} className={styles.add_car_btn}>
            Add new car
          </button>
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

export default ManageInventory;
