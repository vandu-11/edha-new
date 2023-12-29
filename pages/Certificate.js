
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './certificate.module.css';

function Certificate() {
  const [studentDetails, setStudentDetails] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/student_names/')
      .then((response) => {
        setStudentDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching student details:', error);
      });
  }, []);

  const handleDownload = async (name) => {
    try {
      const downloadUrl = `http://127.0.0.1:8000/certificate/${name}`;

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', `${name}_certificate.pdf`);
      link.click();
    } catch (error) {
      console.error('Error downloading certificate:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.new}>
        <h1>Certificate Page</h1>
        <div>
          
          <table className={styles.studentTable}>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {studentDetails.map((student, index) => (
                <tr key={index}>
                  <td>{student[0]}</td>
                  <td>{student[1]}</td>
                  <td>
                    <button onClick={() => handleDownload(student[0])}>
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Certificate;
