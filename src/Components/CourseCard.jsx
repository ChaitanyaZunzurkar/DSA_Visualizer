/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from '../Stylesheets/CourseCard.module.css';

function CourseCard({ course, onClick }) {
  return (
    <div className={styles.courseCards} onClick={() => onClick(course)}>
      <Link to="/courses/">
        <div className={styles.contentWrappers}>
          <h3 className={styles.title}>{course.title}</h3>
          <p className={styles.description}>{course.description}</p>
          <button className={styles.read}>Get Started</button>
        </div>
      </Link>
    </div>
  );
}

export default CourseCard;
