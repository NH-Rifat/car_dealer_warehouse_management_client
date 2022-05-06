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
            <h2>Please Add your items</h2>
            <form>
              <div className={styles.inputBx}>
                <span>Name</span>
                <input type='text' name='name' />
              </div>
              <div className={styles.inputBx}>
                <span>Email</span>
                <input type='email' name='email' />
              </div>
              <div className={styles.inputBx}>
                <span>Password</span>
                <input type='password' name='password' />
              </div>
              <div className='agree'>
                <label htmlFor='checkbox'>
                  <input type='checkbox' name='terms' id='checkbox' />
                  Agree terms and conditions
                </label>
              </div>
              <div className={styles.inputBx}>
                <input type='submit' value='Sign up' />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddItem;
