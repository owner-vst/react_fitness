function About() {
  return (
    <div>
      <div>
        <div className="dz-bnr-inr dz-bnr-inr-sm text-center- overlay-primary-dark">
          <div className="container ">
            <strong className="d-flex text-primary justify-content-center mt-3">
              <h1>About Us</h1>
            </strong>
          </div>
        </div>
      </div>
      <section className="py-8">
        <div className="container my-lg-4 ">
          <div className="row">
            <div className=" col-lg-10 col-md-12 col-12 mb-8 mt-5">
              <h1 className="display-2 fw-bold mb-2">
                Welcome to insightstracker.fit
              </h1>
              {/* <h1 className="display-2 fw-bold mb-3 text-primary">
                insightstracker.fit
              </h1> */}
              <p className="h2 mb-3">
                Your ultimate fitness companion. Log your food, track your
                workouts, get AI-powered diet plans, shop for fitness gear, and
                much more!
              </p>
              <p className="mb-0 h4 text-body lh-lg text-primary">
                We offers a comprehensive suite of tools to help you achieve
                your fitness goals. From logging your meals to tracking your
                workouts, our app provides everything you need to stay on top of
                your health journey.
              </p>
            </div>
          </div>

          <div className="row gallery mb-8">
            <figure className="col-lg-4 col-md-6 mb-4">
              <img
                src="/assets/images/big/img1.jpg"
                alt="Gallery image 1"
                className="gallery__img rounded-3 img-fluid"
              />
            </figure>

            <figure className="col-lg-4 col-md-6 mb-4">
              <img
                src="/assets/images/big/img2.jpg"
                alt="Gallery image 2"
                className="gallery__img rounded-3 img-fluid"
              />
            </figure>

            <figure className="col-lg-4 col-md-6 mb-4">
              <img
                src="/assets/images/big/img3.jpg"
                alt="Gallery image 3"
                className="gallery__img rounded-3 img-fluid"
              />
            </figure>

            <figure className="col-lg-4 col-md-6 mb-4">
              <img
                src="/assets/images/big/img4.jpg"
                alt="Gallery image 4"
                className="gallery__img rounded-3 img-fluid"
              />
            </figure>

            <figure className="col-lg-4 col-md-6 mb-4">
              <img
                src="/assets/images/big/img5.jpg"
                alt="Gallery image 5"
                className="gallery__img rounded-3 img-fluid"
              />
            </figure>

            <figure className="col-lg-4 col-md-6 mb-4">
              <img
                src="/assets/images/big/img6.jpg"
                alt="Gallery image 6"
                className="gallery__img rounded-3 img-fluid"
              />
            </figure>
          </div>

          <div className="row ">
            <div className="col-md-10 offset-right-md-6">
              <h1 className="display-4 fw-bold mb-3">Our global reach</h1>

              <p className="lead">
                insightstracker.fit is the leading global platform for fitness
                connecting millions of users to the tools they need to succeed
                in their fitness journey.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="border-top pt-4 mt-6 mb-5">
                <h1 className="display-3 fw-bold mb-0">20M</h1>
                <p className="text-uppercase">Users</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="border-top pt-4 mt-6 mb-5">
                <h1 className="display-3 fw-bold mb-0">57K</h1>
                <p className="text-uppercase">Goals Set</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="border-top pt-4 mt-6 mb-5">
                <h1 className="display-3 fw-bold mb-0">21K</h1>
                <p className="text-uppercase">Workout Plans</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="border-top pt-4 mt-6 mb-5">
                <h1 className="display-3 fw-bold mb-0">380M</h1>
                <p className="text-uppercase">Workouts Logged</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section className="py-8">
        <div className="container my-lg-8">
          <div className="row">
            <div className="col-lg-10 col-md-8 col-12 mb-6">
              <h2 className="display-4 mb-3 fw-bold">Our Core Values</h2>
              <p className="lead">
                Our core values guide us in creating a fitness app that empowers
                users to lead healthier lives. We are committed to helping you
                achieve your fitness goals with integrity and innovation.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-5">
                  <div className="mb-3">
                    <i className="fas fa-heart-pulse text-primary fa-2x"></i>
                  </div>
                  <h3 className="mb-2">Health and Wellness</h3>
                  <p className="mb-0">
                    We prioritize your health and wellness, providing tools to
                    track your progress and stay motivated.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-5">
                  <div className="mb-3">
                    <i className="fas fa-chart-line text-primary fa-2x"></i>
                  </div>
                  <h3 className="mb-2">Data-Driven Insights</h3>
                  <p className="mb-0">
                    Utilize data to provide personalized insights and help you
                    make informed decisions about your fitness journey.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-5">
                  <div className="mb-3">
                    <i className="fas fa-solid fa-lightbulb text-primary fa-2x"></i>
                  </div>
                  <h3 className="mb-2">Innovation</h3>
                  <p className="mb-0">
                    We strive to innovate and improve our app continuously to
                    provide you with the best fitness tracking experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-8 bg-white">
        <div className="container my-lg-8">
          <div className="row">
            <div className="col-lg-10 col-md-8 col-12 mb-8 ">
              {/* heading */}
              <h2 className="display-4 mb-3 fw-bold mt-5">Our Team</h2>
              {/* lead */}
              <p className="lead mb-5">
                Want to work with some of the best global talent and build a
                tool used by all the companies you know and love? Join the Geeks
                team and help shape the future of design.
              </p>
              {/* btn */}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="card mb-4 card-hover">
                <div>
                  <img
                    src="/assets/images/profile/avatar-1.jpg"
                    alt="Trainer 1"
                    className="card-img-top img-fluid"
                  />
                </div>

                <div className="card-body">
                  <h3 className="mb-0 fw-semibold">
                    <a href="#" className="text-inherit">
                      Mary Roberts
                    </a>
                  </h3>
                  <p className="mb-3">Founder</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="card mb-4 card-hover">
                <div>
                  <img
                    src="/assets/images/profile/avatar-2.jpg"
                    alt="Trainer 2"
                    className="card-img-top img-fluid"
                  />
                </div>

                <div className="card-body">
                  <h3 className="mb-0 fw-semibold">
                    <a href="#" className="text-inherit">
                      Esther Howard
                    </a>
                  </h3>
                  <p className="mb-3">Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="card mb-4 card-hover">
                <div>
                  <img
                    src="/assets/images/profile/avatar-5.jpg"
                    alt="Trainer 3"
                    className="card-img-top img-fluid"
                  />
                </div>

                <div className="card-body">
                  <h3 className="mb-0 fw-semibold">
                    <a href="#" className="text-inherit">
                      Ross Johnson
                    </a>
                  </h3>
                  <p className="mb-3">Content Moderator</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-12 d-lg-none d-xl-block">
              <div className="card mb-4 card-hover">
                <div>
                  <img
                    src="/assets/images/profile/avatar-6.jpg"
                    alt="Trainer 4"
                    className="card-img-top img-fluid"
                  />
                </div>

                <div className="card-body">
                  <h3 className="mb-0 fw-semibold">
                    <a href="#" className="text-inherit">
                      James Davies
                    </a>
                  </h3>
                  <p className="mb-3">Support Moderator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cta */}
      <section>
        <div className="container mt-4 mb-5">
          <div className="row align-items-center g-0">
            <div className="col-xl-8 col-lg-6 col-md-12">
              <div className="pt-6 pt-lg-0">
                <h1 className="text display-4 fw-bold pe-lg-8">
                  Join the insightstracker.fit community
                </h1>

                <p className="text-50 mb-4 lead">
                  If you’re passionate about fitness and ready to make a change,
                  we’d love to have you on board. We’re committed to supporting
                  your fitness goals and overall well-being.
                </p>

                <a href="#" className="btn btn-primary">
                  Explore Fitness Programs
                </a>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-12 text-lg-end text-center pt-6">
              <img
                src="/assets/images/ab1.png"
                alt="Fitness Hero"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
