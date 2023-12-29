// pages/index.js
import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import courses from '../data/data';
import GoogleMap from '../components/GoogleMap';
import styles from './index.module.css';

function HomePage() {
  const router = useRouter();

  const handleCourseChange = (selectedCourse) => {
    if (selectedCourse) {
      const courseRoute = selectedCourse.toLowerCase().replace(/\s+/g, '-');
      router.push(`/courses/${courseRoute}`);
    }
  };

  const handleViewDetails = (courseType) => {
    // Navigate based on the course type
    if (courseType === 'AI/Data Science and Full stack developer') {
      router.push('/Courses/AIData');  // Navigate to '/Courses/AIData' for 'ai-data' type
    } else if (courseType === 'IOT/Data Science with AI/ML') {
      router.push('/Courses/Iot');
    } else if (courseType === 'Database Administration') {
      router.push('/Courses/Database');
    } else if (courseType === 'Data Science') {
      router.push('/Courses/Data');
    } else if (courseType === 'Embedded Systems') {
      router.push('/Courses/EmbeddedSystems');
    } else {
      router.push(`/courses/${courseType}`);
    }
  };
  const handleContactUs = () => {
    router.push('/contact');
  };
  
  
  return (
    <div>
      <Header />

      

      <div className={styles['header-content']}>
        <nav>
          <ul className={styles['nav-list']}></ul>
        </nav>

        <div style={{ color: 'white' }}></div>
        <div style={{ color: 'black', fontSize: '25px' }}>
  <h3>EDHA DIGITAL SERVICES</h3>
  <div style={{ marginBottom: '10px' }}>
    <h5>Empower the Future</h5> {/* Updated tagline */}
  </div>
  <div style={{ color: 'white' }}>
    <h5>Edha Digital Services - Leading Classroom & Online Training Institute in Bengaluru</h5>
  </div>
  <h5>
    Edha Digital Services offers a diverse range of opportunities for both freshers and <br />
    experienced candidates to enhance their skills and shape their career prospects across<br />
    various companies.
  </h5>



          <p>
            <button
              style={{
                color: 'black',
                backgroundColor: ' rgb(30, 140, 107)',
                fontSize: '15px',
                borderRadius: '5px',
                width: '100px',
                height: '40px', // Adjust as needed
                border: 'none',
                cursor: 'pointer',
              }}
              id="clc"
              onClick={() => router.push('/contact')}
            >
              Contact Us
            </button>
          </p>
        </div>
      </div>
      <div className={styles.courseContainer}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} handleViewDetails={handleViewDetails} />
        ))}
      </div>
         {/* Divider with quotes and Contact Us button */}
      <div className={styles.divider}>
        <div className={styles.quotes}>
          <p>"Enroll in excellence, learn with purpose, grow with determination, and make success a routine. Edha Digital Services is here to guide you."</p>
          <button className={styles.contactButton} onClick={handleContactUs}>
            Contact Us
          </button>
        </div>
      </div>
 



      <GoogleMap/>
      <Footer />
    </div>
  );
}

export default HomePage;
