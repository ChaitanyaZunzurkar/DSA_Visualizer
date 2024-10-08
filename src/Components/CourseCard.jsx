/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from '../Stylesheets/CourseCard.module.css';

function CourseCard({ course, onClick }) {
  return (
    <div className={styles.courseCard} onClick={() => onClick(course)} 
      style={{
        backgroundImage:`url(${course.image})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
      }}
    >
      <Link to='/courses/'>
        <div className={styles.contentWrapper}>
          <h3 className={styles.title}>{course.title}</h3>
          <p className={styles.description}>{course.description}</p>
        </div>
      </Link>
    </div>
  );
}


export default CourseCard;