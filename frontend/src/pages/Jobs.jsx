import { useState, useEffect } from 'react';
import { getJobs } from '../services/api';
import './Jobs.css';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getJobs()
      .then(setJobs)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="status-message">Loading jobs...</p>;
  if (error) return <p className="status-message error">Error: {error}</p>;

  return (
    <div className="jobs-page">
      <h1>Job Opportunities</h1>
      <p className="page-subtitle">
        Browse inclusive employers who are open to hiring ex-offenders.
      </p>
      {jobs.length === 0 ? (
        <p className="status-message">No job listings available yet.</p>
      ) : (
        <ul className="job-list">
          {jobs.map((job) => (
            <li key={job.id} className="job-card">
              <h2>{job.title}</h2>
              {job.employer && (
                <span className="employer-name">{job.employer.name}</span>
              )}
              <p className="job-location">📍 {job.location}</p>
              <p className="job-description">{job.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Jobs;
