import React from 'react';
import img from '../../images/payment_card.png';
import styles from './Footer.module.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";


const Footer = () => {
  return (
    <div className={styles.footer_main}>
      <div className={styles.footer_container}>
        <div className={styles.contact_section}>
          <h3>Contact Us</h3>
          <p>
            There are many variations of passaes of orem ipsum available, but
            the majority have in some form, by ipsum injected
          </p>
          <div className={styles.contact_social}>
            <div className={styles.phone_icon_section}>
              <div className={styles.phoneIcon}>
              <BsFillTelephoneFill></BsFillTelephoneFill>
              </div>
              <div className={styles.icon_details}>
                <p>PHONE NUMBER</p>
                <h4>+01 (845) 965 785</h4>
              </div>
            </div>
            <div className={styles.email_icon_section}>
              <div className={styles.emailIcon}><MdMailOutline></MdMailOutline></div>
              <div className={styles.icon_details}>
                <p>EMAIL ADDRESS</p>
                <h4>info@support.com</h4>
              </div>
            </div>
            <div className={styles.address_icon_section}>
              <div className={styles.locationIcon}><MdLocationOn></MdLocationOn></div>
              <div className={styles.icon_details}>
                <p>ADDRESS</p>
                <h4>East 40th Street New York, NY, USA</h4>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.info_link_subscribe_section}>
          <div className={styles.quick_subscribe_info}>
            <div className={styles.info_section}>
              <h3>Our info</h3>
              <div className={styles.info_txt}>
                <p>About Us</p>
                <p>Our Service</p>
                <p>Our Shop</p>
                <p>Blog</p>
                <p>Contact</p>
              </div>
            </div>

            <div className={styles.quick_section}>
              <h3>Quick Link</h3>
              <div className={styles.quick_txt}>
                <p>About Us</p>
                <p>Our Service</p>
                <p>Our Shop</p>
                <p>Blog</p>
                <p>Contact</p>
              </div>
            </div>

            <div className={styles.subscribe_section}>
              <h3>Subscribe Us</h3>
              <div className={styles.mail_section}>
                <input type='text' placeholder='Your Mail...' />
                <div className={styles.submit}><FaAngleDoubleRight></FaAngleDoubleRight></div>
              </div>
              <div className={styles.subscribe_social}>
                <div className={styles.fa_i}><FaFacebookF></FaFacebookF></div>
                <div className={styles.tw_i}><FaTwitter></FaTwitter></div>
                <div className={styles.pr_i}><FaTiktok></FaTiktok></div>
                <div className={styles.lin_i}><FaLinkedinIn></FaLinkedinIn></div>
              </div>
            </div>
          </div>
          <div className={styles.payment_section}>
            <div className={styles.payment_info}>
              <p>
                We know that honesty and transparency friendly customer service
              </p>
            </div>
            <div className={styles.card_section}>
              <img src={img} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
