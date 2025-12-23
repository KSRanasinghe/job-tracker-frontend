import { Link } from 'react-router-dom';

function MainLayout({ children }) {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#222' }}>
        <Link to="/dashboard" style={{ color: '#fff', marginRight: '1rem' }}>
          Dashboard
        </Link>
        <Link to="/add-job" style={{ color: '#fff', marginRight: '1rem' }}>
          Add Job
        </Link>
        <Link to="/login" style={{ color: '#fff' }}>
          Login
        </Link>
      </nav>

      <main style={{ padding: '1rem' }}>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
