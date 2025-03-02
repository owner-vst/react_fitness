const Homepage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            insightstracker.fit
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section bg-light text-center py-5">
        <div className="container">
          <h1>
            Track your workouts, monitor your diet, and achieve your fitness
            goals with our all-in-one fitness tracker.
          </h1>
          <image src="https://via.placeholder.com/150" className="img-fluid mb-3" alt="Workout Tracking" />
          <a href="#" className="btn btn-primary mt-3">
            Join Us
          </a>
          <a href="#" className="btn btn-outline-primary mt-3 ms-2">
            Learn more
          </a>
        </div>
      </section>

      {/* Product Features */}
      <section className="product-features py-5">
        <div className="container">
          <h2 className="text-center mb-4">Product Features</h2>
          <p className="text-center mb-5">
            This platform provides many benefits for collaboration of fitness
            tracking and management.
          </p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">
                    Efficiently Track Your Workouts and Progress
                  </h5>
                  <p className="card-text">
                    Stay motivated by logging every workout and seeing your
                    improvements over time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Log Your Food Intake with Ease</h5>
                  <p className="card-text">
                    Keep track of your meals to ensure you're meeting your
                    nutritional goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">
                    Get Personalized Plans Tailored Just for You
                  </h5>
                  <p className="card-text">
                    Receive customized workout and diet plans that fit your
                    lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Real-time Progress Tracking</h5>
                  <p className="card-text">
                    Monitor your daily fitness, steps, reps, and calories burned
                    with ease.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">
                    Seamless E-commerce Integration
                  </h5>
                  <p className="card-text">
                    Buy fitness products, track orders, and manage subscriptions
                    effortlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">AI-Powered Recommendations</h5>
                  <p className="card-text">
                    Get personalized workout and diet recommendations based on
                    your data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Section */}
      <section className="transform-section bg-light text-center py-5">
        <div className="container">
          <h2>Transform Your Fitness Journey Today!</h2>
          <p>
            Join us now for a free trial and start achieving your fitness goals
            effortlessly.
          </p>
        </div>
      </section>

      {/* Unlock Section */}
      <section className="unlock-section py-5">
        <div className="container text-center">
          <h2>Unlock Your Fitness Potential Today</h2>
          <p>
            Experience the power of real-time stats and personalized fitness
            plans. Our tracker helps you log workouts and meals effortlessly.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Real-Time Stats</h5>
                  <p className="card-text">
                    Get instant feedback on your progress and performance.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Personalized Plans</h5>
                  <p className="card-text">
                    Receive customized workout plans to fit your unique goals.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-light text-center py-3">
        <div className="container">
          <p>&copy; 2023 insightstracker.fit, Inc.</p>
          <a href="#">Company</a> | <a href="#">Contact us</a>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
