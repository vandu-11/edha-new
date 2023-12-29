import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.finalhomebody}>
      <div className={styles.body1}>
        <h4><i className="fa fa-graduation-cap" aria-hidden="true"></i><i> EDHA Digital Services</i></h4>
        <p>EDHA DIGITAL SERVICES PRIVATE LTD <br/>is a leading 
        IT/Digital service provider<br/> dedicated
to empowering
individuals and<br/> businesses with the latest technologies <br />
and trends. 
          </p>
      </div>
      <div className={styles.body2}>
        <h4>Our Services</h4>
        <p>Mobile Applications Design</p>
        <p>Web Applications Design</p>
        <p>Websites Design</p>
        <p>Web User Interface design</p>
        <p>Web Applications Design</p>
        <p>Theame Development Design</p>
      </div>
      <div className={styles.body4}>
        <h4>COURSES</h4>
        <p>AI/DataScience and full stack developer</p>
        <p>Iot/DataScience and AI</p>
        <p>Database Administration</p>
        <p>DataScience</p>
        <p>Embedded System</p>
      </div> 
      <div className={styles.body3}>
        <h4>Head Office</h4>
        <address>#8 1st Main Road<br />
          Vinayaka Nagar,Virgonagar Post<br />
          Medahalli,Bangakore:560049<br />
          Phone:8884440466<br/>
          Email: edhadigitalservices@gmail.com
        </address>
        <h5>Office Time: 10AM-6PM</h5>
      </div>
    </div>
  );
};

export default Footer;
