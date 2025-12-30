import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API_URL from '../services/api';
import { useAuth } from '../context/AuthContext';
import './Login.css'
import Button from '../components/Button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }


    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      setLoading(false);

      if (!res.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await res.json();
      login(data.token, data.user);
      navigate('/dashboard');

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <title>Login | ApplyHub | One place for every application</title>

      <div className='login-layout'>
        <div className='container-fluid login-section-a global'>
          <div className='container'>
            <div className="row">
              <div className='col-12 content-1'>
                <Link to='/'>
                  <img src="images/logo-foot.png" className='img-fluid' alt="ApplyHub" />
                </Link>
              </div>
              <div className='col-12 col-lg-6 content-2'>
                <div className='card'>
                  <div className='card-body'>
                    <h1>Log in</h1>
                    <p className='auth-link'>
                      Don't have an account yet? <Link to='/register'>Sign Up</Link>
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control shadow-none"
                          id="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control shadow-none"
                          id="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      {error && <h6 className='error-msg'>{error}</h6>}
                      <Button type="submit" variant='success-lg' disabled={loading}>
                        {loading ? 'Please wait...' : 'Log in to Account'}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-6 content-3'>
                <img src="images/login.svg" className='img-fluid' alt="ApplyHub" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Login;
