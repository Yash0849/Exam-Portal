
import React from 'react';
import './CourseCard.css';

const CourseCard = ({ courseName, description, teacherName, teacherImage, courseImage }) => {
  return (
    <div className="course-card">
      {courseImage && <img src={courseImage} alt={courseName} className="course-image" />}
      <h3>{courseName}</h3>
      <p>{description}</p>
      <div className="teacher-info">
        <img src={teacherImage} alt={teacherName} className="teacher-image" />
        <span>{teacherName}</span>
      </div>
    </div>
  );
};

export default CourseCard;
