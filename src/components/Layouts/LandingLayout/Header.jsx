import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light">
      <div className="container px-3 py-2">
        <Link className="navbar-brand" to="/">
          <img src="/assets/images/logo.png" alt="logo" />
          <span className="brand-title"> insightstracker.fit</span>
        </Link>
        <div className="d-flex align-items-center order-lg-3 ms-lg-3">
          <div className="d-flex align-items-center">
            <Link to="/auth/login" className="btn btn-outline-primary me-2">
              Sign in
            </Link>
            <Link
              to="/auth/signup"
              className="btn btn-outline-primary d-none d-md-block"
            >
              Sign up
            </Link>
          </div>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-default5"
            aria-controls="navbar-default5"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger">
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </div>
          </button>
        </div>
        {/* Button */}
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="navbar-default5">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
