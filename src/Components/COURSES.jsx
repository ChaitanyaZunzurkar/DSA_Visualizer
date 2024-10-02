import styles from '../Stylesheets/COURSES.module.css';
import CourseCard from '../Components/CourseCard.jsx';
import { Link } from 'react-router-dom';
import demo1 from '../assets/testPaper.svg'
import demo2 from '../assets/react.svg'
const courses = [
  {
    id: 1,
    title: 'Stacks',
    description: 'Dive into the foundational data structures of stacks.',
    longDescription: 'Explore the principles and applications of stacks',
    image:demo1
  },
  {
    id:2,
    title:'Queues',
    description: 'Dive into the foundational data structures of queue.',
    longDescription: 'Explore the principles and applications of queue',
    image:demo2
  },
  {
    id: 3,
    title: 'Hashing',
    description: 'Master the techniques of efficient data retrieval with hashing.',
    longDescription: 'Learn the powerful concept of hashing...',
    image:demo1
  },
  {
    id: 4,
    title: 'Trees',
    description: 'Uncover the secrets of hierarchical and networked data structures.',
    longDescription: 'Delve into the world of trees and graphs...',
    image:demo2
  },
  {
    id: 5,
    title: 'Searching',
    description: 'Learn the algorithms behind efficient data processing.',
    longDescription: 'Get to grips with the fundamental algorithms...',
    image:demo1
  },
  {
    id: 6,
    title: 'Linked List',
    description: 'Understand the versatile & dynamic data structure of linked lists.',
    longDescription: 'Explore the intricacies of linked lists...',
    image:demo2
  },
  {
    id: 7,
    title: 'Sorting',
    description: 'Learn the algorithms behind efficient data processing.',
    longDescription: 'Get to grips with the fundamental algorithms...',
    image:demo1
  },
  {
    id: 4,
    title: 'Graphs',
    description: 'Uncover the secrets of hierarchical and networked data structures.',
    longDescription: 'Delve into the world of trees and graphs...',
    image:demo2
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
