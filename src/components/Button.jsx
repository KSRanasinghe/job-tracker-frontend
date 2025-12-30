import './Button.css';

function Button({ children, variant = 'primary', className='', ...props }) {
  return (
    <button
      className={`ah-btn ah-btn-${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
