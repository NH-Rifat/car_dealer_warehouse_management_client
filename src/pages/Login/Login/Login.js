import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import banner1 from '../../../images/banner3.jpg';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div>
      <div className={styles.login_container}>
        <section className={styles.section}>
          <div className={styles.imgBx}>
            <img src={banner1} alt='' />
          </div>
          <div className={styles.contentBx}>
            <div className={styles.formBx}>
              <h2>Login</h2>
              <form>
                <div className={styles.inputBx}>
                  <span>Email</span>
                  <input type='email' name='name' />
                </div>
                <div className={styles.inputBx}>
                  <span>Password</span>
                  <input type='password' name='password' />
                </div>
                <div className={styles.inputBx}>
                  <p></p>
                </div>
                <div className={styles.inputBx}>
                  <input type='submit' value='Sign in' />
                </div>
                <div className={styles.inputBx}>
                  <p>
                    Don't have an account? <Link to='/register'>Sign up</Link>
                  </p>
                </div>
                <div className={styles.inputBx}>
                  <p>
                    Forget Password?
                    <button className={styles.reset}>Reset Password</button>
                  </p>
                </div>
              </form>
              <div className={styles.or}>
                <div className={styles.left}></div>
                <div className={styles.middle}>or</div>
                <div className={styles.right}></div>
              </div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
