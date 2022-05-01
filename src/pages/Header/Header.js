import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/brand_logo.png';
// import './Header.css';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Navbar collapseOnSelect expand='lg' variant='dark' className=''>
          <Navbar.Brand href='#home'>
            <img src={logo} alt='' className={styles.logo} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            style={{ backgroundColor: 'black' }}
          />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'></Nav>
            <Nav>
              <Nav.Link as={Link} to='/'
                href='#deets'
                style={{ color: 'black' }}
                className={styles.nav_item}
              >
                HOME
              </Nav.Link>
              <Nav.Link
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
                href='#deets'
                style={{ color: 'black' }}
                className={styles.nav_item}
              >
                BLOG
              </Nav.Link>
              <Nav.Link
                href='#deets'
                style={{ color: 'white' }}
                className={`${styles.nav_item} ${styles.register}`}
              >
                REGISTER
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
