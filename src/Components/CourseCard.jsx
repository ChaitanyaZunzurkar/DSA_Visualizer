
import './CourseCard.css';

function CourseCard({ course, onClick }) {
  return (
    <div className="course-card" onClick={() => onClick(course)}>
      <img src={course.image} alt={course.title} />
      <h3>{course.title}</h3>
      <p>{course.description}</p>
    </div>
  );
}

export default CourseCard;
