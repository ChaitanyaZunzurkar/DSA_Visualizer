import styled from "styled-components";
import { Link } from "react-router-dom";

const courseData = [
  {
    id: 1,
    title: "Data Structures",
    price: "Fundamentals",
    description: "Understand stacks, queues and linked lists for effective data handling.",
    link: "/course/beginner",
    items: ["Stacks", "Queues", "Linked Lists"], // List for Fundamentals course
  },
  {
    id: 2,
    title: "Data Structures",
    price: "Search & Sort",
    description: "Learn key algorithms for efficient data searching and sorting.",
    link: "/course/intermediate",
    items: ["Binary Search", "Quick Sort", "Merge Sort"], // List for Search & Sort course
  },
  {
    id: 3,
    title: "Data Structures",
    price: "Advanced",
    description: "Dive into trees, graphs, and hashing for complex problem-solving.",
    link: "/course/advanced",
    items: ["Binary Trees", "Graphs", "Hash Tables"], // List for Advanced course
  },
];

const Courses = () => {
  return (
    <StyledWrapper>
      {courseData.map((course) => (
        <section className="eduzone-course-card" key={course.id}>

          <header>
            <h2 className="eduzone-course-title">{course.title}</h2>
            <h1 className="eduzone-course-price">{course.price}</h1>
          </header>

          <p className="eduzone-course-desc">{course.description}</p>

          <ul className="eduzone-course-lists">
            {course.items.map((item, index) => (
              <li className="eduzone-course-list" key={index}>

                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    fillRule="evenodd"
                  />
                </svg>

                <p>{item}</p>
              </li>
            ))}
          </ul>

          <Link to={`/courses/:${courseData.id}`} className="eduzone-course-action">
            Get Started
          </Link>

        </section>
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem; 
  height: 100vh; /* Add padding around the wrapper */
  background: #121212; /* Fallback for browsers that don't support gradients */
  background: linear-gradient(
    135deg,
    #121212 25%,
    #1a1a1a 25%,
    #1a1a1a 50%,
    #121212 50%,
    #121212 75%,
    #1a1a1a 75%,
    #1a1a1a
  );
  background-size: 40px 40px;

  /* Animation */
  animation: move 4s linear infinite;
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 40px;
  }
}

  .eduzone-course-card {
    flex: 1 1 300px; /* Flex-grow, flex-shrink, flex-basis */
    max-width: 320px; /* Maximum width for cards */
    border-radius: 1rem;
    background-color: #020617;
    padding: 1.5rem;
    display: flex;
    flex-direction: column; /* Ensure vertical stacking */
    justify-content: space-between; /* Space out elements evenly */
    height: 50%; 
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align header items to the left */
  }

  .eduzone-course-title {
    font-size: 1.5rem; /* Increase font size for better readability */
    line-height: 2rem;
    font-weight: 700;
    color: #f8fafc90;
  }

  .eduzone-course-price {
    font-size: 2.5rem; /* Adjusted font size for price */
    line-height: 1;
    font-weight: 700;
    color: #f8fafc;
  }

  .eduzone-course-desc {
    margin: 0.75rem 0;
    color: #f8fafc90;
    flex-grow: 1; /* Allow description to grow */
  }

  .eduzone-course-lists {
    margin-bottom: 1rem;
    color: #f8fafc90;
  }

  .eduzone-course-list {
    display: flex;
    align-items: center; /* Center the icon and text */
    margin-bottom: 0.5rem;
  }

  .eduzone-course-list svg {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 0.5rem;
    color: #0ea5e9;
  }

  .eduzone-course-action {
    display: inline-block;
    background-color: #0ea5e9;
    padding: 0.75rem 1.25rem;
    border-radius: 0.5rem;
    color: #f8fafc;
    text-align: center;
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
      background-color: #0284c7;
    }
  }
`;

export default Courses;
