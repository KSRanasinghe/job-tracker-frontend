import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthBtn from '../components/AuthBtn';
import './MainLayout.css'

function MainLayout({ children }) {
  const { logout, user } = useAuth();
  const initial = user?.firstName?.charAt(0).toUpperCase();

  return (
    <>
      <div className="container-fluid main-navbar-section global">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-2 content-1">
              <Link to="/">
                <img src="images/logo-nav.png" className="img-fluid" alt="ApplyHub" />
              </Link>
            </div>
            <div className="col-12 col-lg-10 content-2">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <a className="navbar-brand d-none" href="#">Navbar</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      <div class="dropdown">
                        <a class="profile-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          {initial}
                        </a>
                        <ul class="dropdown-menu">
                          <div className='profile'>
                            <p className='profile-icon'>{initial}</p>
                            <h5>{user.firstName} {user.lastName}</h5>
                            <h6>{user.email}</h6>
                          </div>
                          <li><hr class="dropdown-divider" /></li>
                          <li>
                            <button
                              onClick={logout}
                              className='dropdown-item'
                            >
                              Log out
                            </button>
                          </li>
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <main>
        {children}
      </main>

    </>
  );
}

export default MainLayout;