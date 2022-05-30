import { render } from '@testing-library/react';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SingleInventoryItem from '../../ManageInventory/SingleInventoryItem/SingleInventoryItem';
import styles from './MyItems.module.css';

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const [rendered, setRendered] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  // console.log(user?.email);

  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      console.log('user email', email);
      const url = `https://evening-dawn-57536.herokuapp.com/myItems?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        // console.log(data);
        setProducts(data);
      } catch (error) {
        // console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate('/login');
        }
      }
    };
    getMyItems();
  }, [user?.email, rendered]);

  // console.log(user)

  const handleDeleteItem = (id) => {
    // console.log('handleDeleteItem',id);
    const confirmation = window.confirm('Are you Sure to Delete?');
    if (confirmation) {
      fetch(`https://evening-dawn-57536.herokuapp.com/product/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingProduct = products.filter((item) => item._id !== id);
            setProducts(remainingProduct);
            setRendered(!rendered);
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
