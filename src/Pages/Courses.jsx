import styles from '../Stylesheets/CourseBox.module.css'; // Adjust the path as necessary
import { Link } from 'react-router-dom';
import img4 from '../assets/CourseBoximg/img4.jpg'

// Course data array with images and descriptions
const courses = [
  { id: 1, title: "DATA STRUCTURE 1", description: <ul><li>Sorting</li><li>Stack</li><li>Queue</li></ul>, image: img4},
  { id: 2, title: "DATA STRUCTURE 2", description:  <ul><li>Hashing</li><li>Linked List</li><li>Trees</li></ul>, image: img4 },
  { id: 3, title: "MACHINE LEARNING", description: "ML Basics", image: img4},
  { id: 4, title: "DEEP LEARNING", description: "DL Basics", image: img4 },
];

export default function Courses() {
  return (
    <div className={styles.container}>
      {courses.map(course => (
        <Link to={`/courses/${course.id}`} key={course.id} className={styles.cardLink}>
          <div className={styles.card}>
            <img src={course.image} alt={course.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3>{course.title}</h3>
              <h5>{course.description}</h5>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}