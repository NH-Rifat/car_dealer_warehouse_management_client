import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/brand_logo.png';
// import './Header.css';
import styles from './Header.module.css';
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut=()=>{
    signOut(auth);
  }
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Navbar
          collapseOnSelect
          expand='lg'
          variant='dark'
          className={styles.nab_bar}
        >
          <Navbar.Brand as={Link} to='/' href='#home'>
            <img src={logo} alt='' className={styles.logo} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            style={{ backgroundColor: 'black' }}
          />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'></Nav>
            <Nav>
              <Nav.Link
                as={Link}
                to='/'
                href='#deets'
                style={{ color: 'black' }}
                className={styles.nav_item}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                as={Link}
                to='/manageInventory'
                href='#deets'
                style={{ color: 'black' }}
                className={styles.nav_item}
              >
                INVENTORY
              </Nav.Link>
              <Nav.Link
                href='#deets'
                style={{ color: 'black' }}
                className={styles.nav_item}
              >
                PAGES
              </Nav.Link>
              <Nav.Link
                as={Link}
                to='/blog'
                href='#deets'
                style={{ color: 'black' }}
                className={styles.nav_item}
              >
                BLOG
              </Nav.Link>
              {user ? (
                <button className={styles.signOut_btn} onClick={handleSignOut}>
                {user?.displayName || user?.email.slice(0,5)}
                <span className={styles.signOutIcon}><FaSignOutAlt></FaSignOutAlt></span>
                
                </button>
              ) : (
                <Nav.Link
                  as={Link}
                  to='/register'
                  href='#deets'
                  style={{ color: 'white' }}
                  className={`${styles.nav_item} ${styles.register}`}
                >
                  REGISTER
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
