/* eslint-disable react/prop-types */
import styles from '../Stylesheets/CourseCard.module.css';

function CourseCard({ course, onClick }) {
  return (
    <div className={styles.courseCard} onClick={() => onClick(course)}>
      {/* Add a wrapper div */}
      <div className={styles.contentWrapper}>
        <img src={course.image} alt={course.title} className={styles.image} />
        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.description}>{course.description}</p>
      </div>
      {/* div ends here */}
    </div>
  );
}


export default CourseCard;