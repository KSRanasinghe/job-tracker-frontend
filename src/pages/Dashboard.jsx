import { useState, useEffect } from 'react';
import { apiFetch } from '../services/apiClient';
import { Link } from 'react-router-dom';
import LinkButton from '../components/LinkButton'
import './Dashboard.css'
import JobRow from '../components/JobRow';

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
      await apiFetch(`/jobs/${id}`, {
        method: 'DELETE'
      });
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

      <div className='container-fluid dashboard global'>
        <div className='container'>
          <div className="row">
            <div className='col-12 content-1'>
              <h1>Dashboard</h1>
              <LinkButton to='/add-job' className='job-btn'>Add Job</LinkButton>
            </div>
            <div className='col-12 content-2'>
              <div className='card'>
                <div className='card-body'>
                  {
                    jobs.length === 0 ? (

                      <div className='empty-view'>
                        <img src="images/no-data.svg" className='img-fluid' alt="ApplyHub" />
                        <p>No job applications yet.</p>
                      </div>
                    ) : (

                      <table className="table">
                        <thead>
                          <tr>
                            <th>Company</th>
                            <th>Position</th>
                            <th>Status</th>
                            <th>Applied</th>
                            <th>Actions</th>
                          </tr>
                        </thead>

                        <tbody>
                          {jobs.map(job => (
                            <JobRow key={job._id} job={job} onDelete={handleDelete} onStatusChange={handleStatusChange} />
                          ))}
                        </tbody>
                      </table>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Dashboard;
