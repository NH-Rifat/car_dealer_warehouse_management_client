import React from 'react';
import styles from './AddItem.module.css';
import banner1 from '../../images/banner5.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItem = () => {
  const [user] = useAuthState(auth);
  // console.log(user);

  const handleAddCar = (event) => {
    event.preventDefault();
    // console.log('handle add car');
    const product = {
      name: event.target.name.value,
      price: event.target.price.value,
      stock: event.target.stock.value,
      supplier: event.target.supplier.value,
      description: event.target.description.value,
      img: event.target.img.value,
      email: user.email,
    };
    // console.log(product);
    if (product) {
      fetch(`http://localhost:5000/product`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <div className={styles.login_container}>
      <section className={styles.section}>
        <div className={styles.imgBx}>
          <img src={banner1} alt='' />
        </div>
        <div className={styles.contentBx}>
          <div className={styles.formBx}>
            <h2>Please Add your Car</h2>
            <form onSubmit={handleAddCar}>
              <div className={styles.inputBx}>
                <span>Brand Name</span>
                <input
                  type='text'
                  name='name'
                  placeholder='Type your car Brand'
                />
              </div>
              <div className={styles.inputBx}>
                <span>Supplier</span>
                <input
                  type='text'
                  name='supplier'
                  placeholder='Supplier name'
                />
              </div>
              <div className={styles.inputBx}>
                <span>Price</span>
                <input type='text' name='price' placeholder='Price' />
              </div>
              <div className={styles.inputBx}>
                <span>Quantity</span>
                <input
                  type='text'
                  name='stock'
                  placeholder='stock or quantity'
                />
              </div>
              <div className={styles.inputBx}>
                <span>Description</span>
                <textarea
                  name='description'
                  cols='40'
                  rows='3'
                  placeholder='Please write something About Car'
                  className={styles.text_area}
                ></textarea>
              </div>
              <div className={styles.inputBx}>
                <span>image</span>
                <input type='text' name='img' placeholder='image url ' />
              </div>
              <div className={styles.inputBx}>
                <input type='submit' value='ADD ITEM' />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddItem;
