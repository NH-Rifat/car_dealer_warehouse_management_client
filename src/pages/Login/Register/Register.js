import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import banner1 from '../../../images/banner7.jpg'
import styles from './Register.module.css'

const Register = () => {
  return (
    <div className={styles.login_container}>
      <section className={styles.section}>
        <div className={styles.imgBx}>
          <img src={banner1} alt='' />
        </div>
        <div className={styles.contentBx}>
          <div className={styles.formBx}>
            <h2>Register</h2>
            <form >
              <div className={styles.inputBx}>
                <span>Username</span>
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
                  <input
                    type='checkbox'
                    name='terms'
                    id='checkbox'
                  />
                  Agree terms and conditions
                </label>
              </div>
              <div className={styles.inputBx}>
                <input type='submit' value='Sign up' />
              </div>
              <div className={styles.inputBx}>
                <p>
                  Already have an account? <Link to='/login'>Sign in</Link>
                </p>
              </div>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;