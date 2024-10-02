import styles from '../Stylesheets/COURSES.module.css';
import CourseCard from '../Components/CourseCard.jsx';
import { Link } from 'react-router-dom';
import demoImg from '../assets/react.svg'
const courses = [
  {
    id: 1,
    title: 'Stacks & Queues',
    description: 'Dive into the foundational data structures of stacks and queues.',
    longDescription: 'Explore the principles and applications of stacks and queues...',
    image: demoImg,
  },
  {
    id: 2,
    title: 'Hashing',
    description: 'Master the techniques of efficient data retrieval with hashing.',
    longDescription: 'Learn the powerful concept of hashing...',
    image: demoImg,
  },
  {
    id: 3,
    title: 'Trees & Graphs',
    description: 'Uncover the secrets of hierarchical and networked data structures.',
    longDescription: 'Delve into the world of trees and graphs...',
    image: demoImg,
  },
  {
    id: 4,
    title: 'Searching & Sorting',
    description: 'Learn the algorithms behind efficient data processing.',
    longDescription: 'Get to grips with the fundamental algorithms...',
    image: demoImg,
  },
  {
    id: 5,
    title: 'Linked List',
    description: 'Understand the versatile & dynamic data structure of linked lists.',
    longDescription: 'Explore the intricacies of linked lists...',
    image: demoImg,
  },
];

export default function COURSES() {
  return (
    <div className={styles.container}>
        <div className={styles.courseGrid}>
          {courses.map(course => (
            <Link key={course.id} to={`/courses/${course.id}`}>
              <CourseCard course={course} />
            </Link>
          ))}
        </div>
    </div>
  );
}
