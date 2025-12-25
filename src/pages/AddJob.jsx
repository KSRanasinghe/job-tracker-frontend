import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_URL from '../services/api';
import { apiFetch } from '../services/apiClient';

function AddJob() {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await apiFetch('/jobs', {
        method: 'POST',
        body: JSON.stringify({
          company,
          position,
        }),
      });

      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to add job', error);
    }
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
