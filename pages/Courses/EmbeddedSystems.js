import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './Embedded.module.css'

function Embedded() {
  return (
    <div>
      <Header />
      <div className={styles.new}>
      <h1>Embedded Systems </h1>
      <p>
        
Embark on an exciting journey into Embedded Systems, the hidden power behind modern devices.<br/>
 This course offers a hands-on exploration of how to design and program these systems, revealing<br/>
  their essential role in smart technology. From understanding hardware and microcontrollers to <br/>
  real-time operating systems and IoT integration, you'll gain a comprehensive grasp of this field<br/>
  . Through practical projects, you'll learn to connect with sensors, use communication protocols,<br/>
   and explore applications in everyday electronics, cars, and industry. Perfect for tech enthusiasts,<br/>
    engineers, and professionals wanting to master the mix of hardware and software, this course simplifie<br/>
    s Embedded Systems and equips learners to stay at the cutting edge of tech. Join now to uncover the <br/>
    secrets of smart devices and develop valuable skills in this dynamic field.
        
      </p>
      {/* Add the rest of your content here */}
      </div>
      <Footer />
    </div>
  );
}

export default Embedded;
