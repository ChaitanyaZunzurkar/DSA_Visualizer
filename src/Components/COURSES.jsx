import { useState } from 'react';
import CourseCard from '../Components/CourseCard.jsx';
import CourseDetails from '../Components/CourseDetails.jsx';
import styles from '../Stylesheets/COURSES.module.css';

const courses = [
  {
    id: 1,
    title: 'Stacks & Queues',
    description: 'Dive into the foundational data structures of stacks and queues.',
    longDescription: 'Explore the principles and applications of stacks and queues, two of the most essential data structures in computer science. This course will guide you through the concepts of Last-In-First-Out (LIFO) and First-In-First-Out (FIFO), showing how these structures are used in algorithms, memory management, and more. Hands-on examples will help you understand their real-world applications.',
    image: 'https://files.oaiusercontent.com/file-JhFbMJ54SiMwOCLD0RInOmnb?se=2024-08-28T14%3A22%3A23Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbccc52db-f1ab-4836-a731-99ed8c18cf36.webp&sig=0y/BYCixSP52QjgOqAOHHIkbax3g9FfLitaJiMIePwU%3D'
  },
  {
    id: 2,
    title: 'Hashing',
    description: 'Master the techniques of efficient data retrieval with hashing.',
    longDescription: 'Learn the powerful concept of hashing, which allows for fast data access in a variety of applications. This course covers hash functions, collision resolution techniques, and hash table implementations. By the end of this course, you will understand how hashing is used in databases, cryptography, and more to optimize performance and ensure data integrity.',
    image: 'https://files.oaiusercontent.com/file-JdZCsF12O37UNF2uyx7WvF65?se=2024-08-28T14%3A26%3A54Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De3f08216-47c4-4608-8fc8-8d022bb9b406.webp&sig=RjfIR1Dyjw/Xa8fhlBs2d9xWXDCbZUje5O7lvAJ5XhA%3D'
  },
  {
    id: 3,
    title: 'Trees & Graphs',
    description: 'Uncover the secrets of hierarchical and networked data structures.',
    longDescription: 'Delve into the world of trees and graphs, essential structures for representing hierarchical relationships and networked systems. This course will teach you the fundamentals of tree traversal, binary trees, graph traversal algorithms like BFS and DFS, and how these structures are applied in areas such as databases, file systems, and social networks.',
    image: 'https://th.bing.com/th/id/OIG1.28Z7toEgf8p9dscr.eXI?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn'
  },
  {
    id: 4,
    title: 'Searching & Sorting',
    description: 'Learn the algorithms behind efficient data processing.',
    longDescription: 'Get to grips with the fundamental algorithms that power data retrieval and organization. This course covers a range of searching and sorting techniques, including linear and binary search, as well as sorting algorithms like quicksort, mergesort, and heapsort. Understand how to apply these algorithms to optimize performance in software applications.',
    image: 'https://th.bing.com/th/id/OIG3.0D5gQFQVC6_nna7jhipN?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn'
  },
  {
    id: 5,
    title: 'Linked List',
    description: 'Understand the versatile and dynamic data structure of linked lists.',
    longDescription: 'Explore the intricacies of linked lists, a flexible and dynamic data structure that underpins many complex algorithms. This course covers the implementation of singly linked lists, doubly linked lists, and circular linked lists, along with their advantages, drawbacks, and use cases. By the end, you will be able to utilize linked lists to solve various programming challenges effectively.',
    image: 'https://th.bing.com/th/id/OIG2.gIYa5OYWFmdo2MND_PAf?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn'
  },
];

export default function COURSES() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCardClick = (course) => {
    setSelectedCourse(course);
  };

  const handleBackClick = () => {
    setSelectedCourse(null);
  };

  return (
    <div className={styles.container}>
      <h1>COURSES</h1>
      <div className={styles.COURSES}>
        {selectedCourse ? (
          <CourseDetails course={selectedCourse} onBack={handleBackClick} />
        ) : (
          <div className={styles.courseGrid}>
            {courses.map(course => (
              <CourseCard key={course.id} course={course} onClick={handleCardClick} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
