import React from 'react';
import styles from './SocialLogin.module.css';
import google from '../../../images/google.png';
import github from '../../../images/github.png';
import facebook from '../../../images/facebook.png';
import {useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const SocialLogin = () => {
  // const [signInWithGoogle, user, loading, error] = useSignInWithGoogl(auth);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, userOfGithub, loadingOfGithub, errorOfGithub] =
    useSignInWithGithub(auth);
    
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';
  let errorElement = '';

  if (loading) {
    return <Loading></Loading>;
  }

  if (user || userOfGithub) {
    navigate(from, { replace: true });
  }

  if (error || errorOfGithub) {
    errorElement = (
      <div>
        <p>Error: {error?.message}{errorOfGithub?.message}</p>
      </div>
    );
  }
  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  if (user || userOfGithub) {
    navigate('/');
  }

  // const handleGoogleSignIn=()=>{
  //   // console.log('clicked');
  // }
  return (
    <div>
      <div className={styles.social}>
        <div className={styles.social_login}>
          <div className=''>
          {
            errorElement
          }
            <div className={`${styles.google} ${styles.social}`}>
              <button onClick={() => signInWithGoogle()}>
                <img src={google} alt='' />
                <span>Google Sign in</span>
              </button>
            </div>
            <div className={`${styles.github} ${styles.social}`}>
              <button onClick={() => signInWithGithub()}>
                <img src={github} alt='' />
                <span>Github Sign in</span>
              </button>
            </div>
            <div className={`${styles.faceBook} ${styles.social}`}>
              <button>
                <img src={facebook} alt='' />
                <span>Facebook Sign in</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
