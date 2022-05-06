import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import banner1 from '../../../images/banner7.jpg';
import styles from './Register.module.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmitWithNameEmailAndPassword =(event) => {
    event.preventDefault();
    // console.log(name,email,password);
    createUserWithEmailAndPassword(email, password);
    event.target.value.reset();
  };
  return (
    <div className={styles.login_container}>
      <section className={styles.section}>
        <div className={styles.imgBx}>
          <img src={banner1} alt='' />
        </div>
        <div className={styles.contentBx}>
          <div className={styles.formBx}>
            <h2>Register</h2>
            <form onSubmit={handleSubmitWithNameEmailAndPassword}>
              <div className={styles.inputBx}>
                <span>Username</span>
                <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Please type your user name'
                />
              </div>
              <div className={styles.inputBx}>
                <span>Email</span>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Please type your email'
                />
              </div>
              <div className={styles.inputBx}>
                <span>Password</span>
                <input
                  type='password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Please type your password'
                />
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
