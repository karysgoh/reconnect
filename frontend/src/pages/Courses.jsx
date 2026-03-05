import { useState, useEffect } from 'react';
import { getCourses } from '../services/api';
import './Courses.css';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="status-message">Loading courses...</p>;
  if (error) return <p className="status-message error">Error: {error}</p>;

  return (
    <div className="courses-page">
      <h1>Course Finder</h1>
      <p className="page-subtitle">
        Discover courses to help you upskill and improve your career prospects.
      </p>
      {courses.length === 0 ? (
        <p className="status-message">No courses available yet.</p>
      ) : (
        <ul className="course-list">
          {courses.map((course) => (
            <li key={course.id} className="course-card">
              <h2>{course.title}</h2>
              <span className="course-provider">{course.provider}</span>
              <p className="course-description">{course.description}</p>
              {course.url && (
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="course-link"
                >
                  Learn more →
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Courses;
