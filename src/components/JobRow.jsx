import Button from './Button'
import './JobRow.css'

function JobRow({ job, onDelete, onStatusChange }) {
  return (
    <tr>
      <td>{job.company}</td>
      <td>{job.position}</td>
      <td>
        <select
          className='form-select shadow-none'
          value={job.status}
          onChange={(e) =>
            onStatusChange(job._id, e.target.value)
          }
        >
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </select>
      </td>
      <td>{new Date(job.createdAt).toLocaleDateString()}</td>
      <td>
        <Button onClick={() => onDelete(job._id)} className='dlt-btn'>
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default JobRow;