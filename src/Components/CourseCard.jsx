/* eslint-disable react/prop-types */
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
      <div className={styles.contentWrapper}>
        {/* <img src={course.image} alt={course.title} className={styles.image} /> */}
        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.description}>{course.description}</p>
      </div>
    </div>
  );
}


export default CourseCard;