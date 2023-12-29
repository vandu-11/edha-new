// pages/dataScienceCourse.js

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './Data.module.css';

function DataScienceCourse() {
  return (
    <div>
      <Header />
      <div className={styles.new}>
        <h1>Data Science Fundamentals: A 3-Month Journey</h1>
        <p>
          Embark on a 3-month journey into the world of data science with our online
          course.<br/> Perfect for beginners and those in the middle of their learning
          journey, the program covers<br/> the basics, data analysis, machine learning, and
          advanced data science topics.<br/> Learn practical skills like Python programming,
          data visualization, deep learning, and big data technologies.<br/> Each module
          includes hands-on projects and real-world case studies.<br/> By the end, you'll
          have a strong portfolio, be updated on the latest tools,<br/> and receive a
          certification. Great for anyone passionate about data, professionals <br/>looking
          to enhance their skills, or students seeking a solid foundation in data
          science.<br/> Enroll now to gain cutting-edge skills.<br/> For questions or to enroll,
          contact us or visit our Enquiry page.
        </p>
        {/* Add the rest of your content here */}
      </div>
      <Footer />
    </div>
  );
}

export default DataScienceCourse;
