import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      {/* footer */}
      <footer className="pt-lg-10 pt-5  border-top  bg-gray-100">
        <div className="container">
          <div className="row">
            <div className=" col-lg-4 col-md-6 col-12">
              <div className="mb-4">
                <Link className="navbar-brand " to="/">
                  <img src="/assets/images/logo.png" alt />
                  <span className="brand-title"> insightstracker.fit</span>
                </Link>
                <div className="mt-4">
                  <p>
                    Track your workouts, monitor your diet, and achieve your
                    fitness goals with our all-in-one fitness tracker
                  </p>
                </div>
              </div>
            </div>
            <div className="offset-lg-6 col-lg-2 col-md-3 col-6">
              <div className="mb-4">
                {/* list */}
                <h3 className="fw-bold mb-3">Company</h3>
                <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
                  <li>
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row align-items-center g-0 border-top py-2 mt-6">
            {/* Desc */}
            <div className="col-lg-4 col-md-5 col-12">
              <span>
                © <span id="copyright2"></span> insightstracker.fit, Inc. All
                Reserved
              </span>
            </div>
            {/* Links */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
