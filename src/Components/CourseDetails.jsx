/* eslint-disable react/prop-types */
import styles from '../Stylesheets/CourseDetails.module.css';

function CourseDetails({ course, onBack }) {
  return (
    <div className={styles.courseDetails}>
      <button onClick={onBack} className={styles.backButton}>
        Back to Courses
      </button>
      <img src={course.image} alt={course.title} className={styles.image} />
      <h2 className={styles.title}>{course.title}</h2>
      <p className={styles.longDescription}>{course.longDescription}</p>
    </div>
  );
}

export default CourseDetails;
