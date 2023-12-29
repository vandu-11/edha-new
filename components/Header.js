import React from "react";
import { useRouter } from 'next/router';
import Icon from '../components/Icon';
import styles from './Header.module.css';
import Link from 'next/link';

function Header() {
  const router = useRouter();

  const handleCourseChange = (event) => {
    const selectedCourse = event.target.value;
    if (selectedCourse) {
      if (selectedCourse === 'ai-data-science-full-stack') {
        router.push('/Courses/AIData');
      } else if (selectedCourse === 'iot-data-science-ai') {
        router.push('/Courses/Iot');
      } else if (selectedCourse === 'database-administration') {
        router.push('/Courses/Database');
      } else if (selectedCourse === 'Data-Science'){
        router.push('/Courses/Data')
      } else if (selectedCourse === 'Embedded System'){
        router.push('/Courses/EmbeddedSystems')
      }
    }
  };

  return (
    <div>
      <p className={styles.p1}>
        "Unlock Your Future: At Edha, Every Course Ignites Possibilities!"
      </p>
      <div className={styles.icon}>
        <p>Email: contact@edhadigitalservices.com</p>
        <p>Contact: +91 8884440466</p>
        <div className={styles.icons}>
          {/* Assuming Icon is a component for displaying icons */}
          <Icon />
        </div>
      </div>
      <nav className={styles.part1}>
        <img src="/log.png" alt="Your Logo" className={styles.logo} />
        <div>
          <p>
            <button
              style={{
                color: 'black',
                backgroundColor: 'rgb(30, 140, 107)',
                fontSize: '20px',
                borderRadius: '5px',
                width: '100px',
                height: '40px', // Adjust as needed
                border: 'none',
                cursor: 'pointer',
              }}
              id="clc"
              onClick={() => router.push('/contact')}
            >
              Contact
            </button>
          </p>
          <p>
           
              <button
                style={{
                  color: 'black',
                  fontSize: '20px',
                  marginLeft: '20px',
                  cursor: 'pointer',
                  backgroundColor: 'rgb(30, 140, 107)',
                  border: 'none',
                  borderRadius: '5px',
                  width: '100px',
                  height: '40px',
                }}
                id="clc"
                onClick={()=>router.push('/Certificate')} 
              >
                Certificate
              </button>
            
          </p>
          <p>
            <select
              onChange={handleCourseChange}
              style={{
                width: '120px', // Adjust the width as needed
                height: '40px',
                marginLeft: '20px',
                fontSize: '20px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: 'white',
                color: 'black',
              }}
            >
              <option value="">Course</option>
              <option value="ai-data-science-full-stack">AI/Data Science and Full Stack Development</option>
              <option value="iot-data-science-ai">IoT with Data Science and AI</option>
              <option value="database-administration">Database Administration</option>
              <option value="Data-Science">Data Science </option>
              <option value="Embedded System">Embedded Systems </option>
            </select>
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Header;
