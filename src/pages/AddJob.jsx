import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddJob() {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company || !position) return;

    const newJob = {
      id: Date.now(),
      company,
      position,
    };

    
    const existingJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    localStorage.setItem(
      'jobs',
      JSON.stringify([...existingJobs, newJob])
    );

    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Add Job</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Company</label>
          <br />
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div>
          <label>Position</label>
          <br />
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>

        <button type="submit">Add Job</button>
      </form>
    </div>
  );
}

export default AddJob;
