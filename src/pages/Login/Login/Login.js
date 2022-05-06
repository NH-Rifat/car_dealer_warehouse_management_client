import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import banner1 from '../../../images/banner3.jpg';
import styles from './Login.module.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
  let errorElement = '';
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>;
  }

  const handleSignWithEmailAndPassword = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password);
  };
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
              <form onSubmit={handleSignWithEmailAndPassword}>
                <div className={styles.inputBx}>
                  <span>Email</span>
                  <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.inputBx}>
                  <span>Password</span>
                  <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={styles.inputBx}>
                  <p></p>
                </div>
                {
                  errorElement
                }
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
