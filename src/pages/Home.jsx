import { Link } from "react-router-dom";
import './Home.css'
import AuthBtn from "../components/AuthBtn";

function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <title>ApplyHub | One place for every application</title>

      <div className="container-fluid navbar-section global">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3 content-1">
              <Link to="/">
                <img src="images/logo-nav.png" className="img-fluid" alt="ApplyHub" />
              </Link>
            </div>
            <div className="col-12 col-lg-9 content-2">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <a className="navbar-brand d-none" href="#">Navbar</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      <li>
                        <Link className="custom-nav-link active" to="/">Home</Link>
                      </li>
                      <li>
                        <a className="custom-nav-link" href="https://github.com/KSRanasinghe/applyhub-frontend" target="_blank" rel="noopenner norefferer">Overview</a>
                      </li>
                      <li>
                        <a className="custom-nav-link" href="https://github.com/KSRanasinghe" target="_blank" rel="noopenner norefferer">About Me</a>
                      </li>
                    </ul>
                    <div className="auth-box">
                      <Link className="custom-nav-link" to="/login" >Sign In</Link>
                      <AuthBtn to="/register">Get Started</AuthBtn>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid section-a global">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 content-1">
              <h1>Track Your Applications. Stay in Control.</h1>
              <p>We helps you to manage your job applications in one place.
                Stop guessing where you applied, avoid duplicate applications, and clearly understand the progress of every opportunity — <br />all at a glance.</p>
              <AuthBtn to="/register">Get Started</AuthBtn>
            </div>
            <div className="col-12 col-lg-6 content-2">
              <img src="images/section-a-1.png" className="img-fluid" alt="ApplyHub" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid section-b global">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 content-1">
              <img src="images/section-b-1.png" className="img-fluid" alt="ApplyHub" />
            </div>
            <div className="col-12 col-lg-6 content-2">
              <h2>Turn Job Hunting Chaos Into a Clear Process</h2>
              <p>Applying for jobs can quickly become overwhelming — dozens of applications, different companies, and no clear follow-ups.</p>
              <p>ApplyHub gives you a simple overview of:</p>
              <ul>
                <li>Which jobs you've already applied to</li>
                <li>The current status of each application</li>
                <li>Where to focus next instead of reapplying blindly</li>
              </ul>
              <p>With everything visible in one dashboard, you can make smarter decisions
                and approach your job search like a process — not guesswork.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid footer-section global">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 content-1">
              <Link to="/">
                <img src="images/logo-foot.png" className="img-fluid" alt="ApplyHub" />
              </Link>
            </div>
            <div className="col-12 col-lg-6 content-2">
              <h5>“One place for every application.”</h5>
            </div>
            <div className="col-12 col-lg-2 content-3">
              <a className="social-link" href="https://github.com/KSRanasinghe/applyhub-frontend" target="_blank" rel="noopenner noreferer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a className="social-link" href="https://www.linkedin.com/in/keshara-ranasinghe-20m08/" target="_blank" rel="noopenner noreferer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a className="social-link" href="mailto:kesharashakthi71@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid copyright-section global">
        <div className="container">
          <div className="row">
            <div className="col-12 content-1">
              <p>ApplyHub <i className="fa-regular fa-copyright"></i> {currentYear} | All Rights Reserved | Built by Keshara S. Ranasinghe</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;