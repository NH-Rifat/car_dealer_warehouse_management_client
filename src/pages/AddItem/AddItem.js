import React from 'react';
import styles from './AddItem.module.css';
import banner1 from '../../images/banner5.jpg';

const AddItem = () => {
  return (
    <div className={styles.login_container}>
      <section className={styles.section}>
        <div className={styles.imgBx}>
          <img src={banner1} alt='' />
        </div>
        <div className={styles.contentBx}>
          <div className={styles.formBx}>
            <h2>Please Add your Car</h2>
            <form>
              <div className={styles.inputBx}>
                <span>Brand Name</span>
                <input type='text' name='name' />
              </div>
              <div className={styles.inputBx}>
                <span>Supplier</span>
                <input type='text' name='name' />
              </div>
              <div className={styles.inputBx}>
                <span>Price</span>
                <input type='text' name='name' />
              </div>
              <div className={styles.inputBx}>
                <span>Quantity</span>
                <input type='text' name='name' />
              </div>
              <div className={styles.inputBx}>
                <span>image url</span>
                <input type='text' name='name' />
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
