import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API_URL from '../services/api';
import { useAuth } from '../context/AuthContext';
import './Register.css'
import Button from '../components/Button';

function Register() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setError('All fields are required');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password
        }),
      });

      if (!res.ok) {
        console.log(data);

        throw new Error('Registration failed');
      }

      // auto-login after register
      const loginRes = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await loginRes.json();
      login(data.token, data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <title>Register | ApplyHub | One place for every application</title>

      <div className='register-layout'>
        <div className='container-fluid reg-section-a global'>
          <div className='container'>
            <div className="row">
              <div className='col-12 content-1'>
                <Link to='/'>
                  <img src="images/logo-foot.png" className='img-fluid' alt="ApplyHub" />
                </Link>
              </div>
              <div className='col-12 col-lg-6 content-2'>
                <img src="images/sign-up.svg" className='img-fluid' alt="ApplyHub" />
              </div>
              <div className='col-12 col-lg-6 content-3'>
                <div className='card'>
                  <div className='card-body'>
                    <h1>Sign Up</h1>
                    <p>One place for every application.</p>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          id="firstName"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          id="lastName"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </div>
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
                      <Button type='submit' variant='success-lg' disabled={loading}>
                        {loading ? 'Please wait...' : 'Create ApplyHub Account'}
                      </Button>

                      <span className='auth-link'>
                        <Link to='/login'>Sign In</Link>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
