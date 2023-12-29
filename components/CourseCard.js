// components/CourseCard.js
import React from 'react';
import styles from './CourseCard.module.css';

const CourseCard = ({ course, handleViewDetails }) => {
  const handleDetailsClick = () => {
    handleViewDetails(course.title);
  };

  return (
    <div className={styles.courseCard} onClick={handleDetailsClick}>
      <img src={course.image} alt={course.title} />
      <div className={styles.cardOverlay}>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <p>{course.advantages}</p>
        <button className={styles.viewDetailsButton} onClick={handleDetailsClick}>
          View Details
        </button>
        {/* ... (other code) */}
      </div>
    </div>
  );
};

export default CourseCard;
