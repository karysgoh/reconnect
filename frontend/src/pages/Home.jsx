import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Reconnect</h1>
        <p>
          Your one-stop platform connecting ex-offenders to inclusive employers
          and upskilling opportunities.
        </p>
        <div className="hero-actions">
          <Link to="/jobs" className="btn btn-primary">Find Jobs</Link>
          <Link to="/courses" className="btn btn-secondary">Explore Courses</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h2>Job Opportunities</h2>
          <p>Browse listings from inclusive employers who value second chances.</p>
          <Link to="/jobs">View Jobs →</Link>
        </div>
        <div className="feature-card">
          <h2>Course Finder</h2>
          <p>Discover courses to help you gain new skills and qualifications.</p>
          <Link to="/courses">View Courses →</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
