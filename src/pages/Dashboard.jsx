import { useState, useEffect } from 'react';
import { apiFetch } from '../services/apiClient';

function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {

        const data = await apiFetch('/jobs');
        setJobs(data);

      } catch (error) {
        console.error('Failed to fetch jobs', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleDelete = async (id) => {

    try {
      await apiFetch(`/jobs/${id}`, { method: 'DELETE' });
      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (error) {
      console.error('Failed to delete job', error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {

    try {
      const updatedJob = await apiFetch(`/jobs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ status: newStatus }),
      });

      setJobs((prev) =>
        prev.map((job) =>
          job._id === id ? updatedJob : job
        )
      );
    } catch (error) {
      console.error('Failed to update status', error);
    }
  };

  if (loading) return <p>Loading jobs...</p>;

  return (
    <>
      <title>Dashboard | ApplyHub | One place for every application</title>

      <div>
        <h2>Dashboard</h2>

        {jobs.length === 0 && <p>No job applications yet.</p>}

        <ul>
          {jobs.map((job) => (
            <li key={job._id}>
              <strong>{job.company}</strong> — {job.position}

              <select
                value={job.status}
                onChange={(e) =>
                  handleStatusChange(job._id, e.target.value)
                }
                style={{ marginLeft: '1rem' }}
              >
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="offer">Offer</option>
                <option value="rejected">Rejected</option>
              </select>

              <button
                onClick={() => handleDelete(job._id)}
                style={{ marginLeft: '1rem' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Dashboard;
