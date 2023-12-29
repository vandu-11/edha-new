// pages/courses/[course].js
import React from 'react';
import { useRouter } from 'next/router';

const CourseDetails = () => {
  const router = useRouter();
  const { course } = router.query;

  return (
    <div>
      <h1>{course} Details</h1>
      {/* Add content specific to the course */}
    </div>
  );
};

export default CourseDetails;
