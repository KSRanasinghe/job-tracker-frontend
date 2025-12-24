import { useState } from 'react';

function Dashboard() {
  const [jobs, setJobs] = useState(() => {
    return JSON.parse(localStorage.getItem('jobs')) || [];
  });

  const handleDelete = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
  };

  return (
    <div>
      <h2>Dashboard</h2>

      {jobs.length === 0 && <p>No job applications yet.</p>}

      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <strong>{job.company}</strong> — {job.position}
            <button onClick={() => handleDelete(job.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
