import { Link } from 'react-router-dom';
import './AuthBtn.css';

function AuthBtn({ to, children }) {
  return (
    <Link
      to={to}
      className="auth-btn"
    >
      {children}
    </Link>
  );
}

export default AuthBtn;
