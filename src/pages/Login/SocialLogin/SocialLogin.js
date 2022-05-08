import React from 'react';
import styles from './SocialLogin.module.css';
import google from '../../../images/google.png';
import github from '../../../images/github.png';
import facebook from '../../../images/facebook.png';
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
  // const [signInWithGoogle, user, loading, error] = useSignInWithGoogl(auth);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, userOfGithub, loadingOfGithub, errorOfGithub] =
    useSignInWithGithub(auth);

  const [token] = useToken(user || userOfGithub);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';
  let errorElement = '';

  if (loading || loadingOfGithub) {
    return <Loading></Loading>;
  }

  if (error || errorOfGithub) {
    errorElement = <p className='text-danger'>Error: {error.message}</p>;
  }
  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className={styles.social}>
        <div className={styles.social_login}>
          <div className=''>
            {errorElement}
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
