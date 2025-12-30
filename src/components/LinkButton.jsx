import { Link } from 'react-router-dom';
import './Button.css';
import './LinkButton.css';

function LinkButton({ to, children, variant = 'primary', className = '' }) {
  return (
    <Link
      to={to}
      className={`ah-btn ah-btn-${variant} link-btn ${className}`}
    >
      {children}
    </Link>
  );
}

export default LinkButton;