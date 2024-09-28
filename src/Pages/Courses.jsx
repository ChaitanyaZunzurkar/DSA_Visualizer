import styles from '../Stylesheets/CourseBox.module.css';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: "Data Structure-1" },
  { id: 2, title: "Data Structure-2" },
  { id: 3, title: "Data Structure-3" },
  { id: 4, title: "Data Structure-4" },
  { id: 5, title: "Data Structure-5" },
  { id: 6, title: "Data Structure-6" },
];

export default function Courses() {
  return (
    <div className={styles.container}>
      {courses.map(course => (
        <div key={course.id} className={styles.courseBox}>
          <Link to={`/courses/:${course.id}`}>
            {course.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
