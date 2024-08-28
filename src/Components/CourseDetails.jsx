import '../Stylesheets/CourseDetails.module.css';

function CourseDetails({ course, onBack }) {
  return (
    <div className="course-details">
      <button onClick={onBack}>Back to Courses</button>
      <img src={course.image} alt={course.title} />
      <h2>{course.title}</h2>
      <p>{course.longDescription}</p>
    </div>
  );
}

export default CourseDetails;
