import UpdateProfile from "./UpdateProfile";

function Settings() {
  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="clearfix">
                <div className="row">
                  <div className="d-flex justify-content-center align-items-center min-vh-100">
                    <div
                      className="card p-4 shadow-sm"
                      style={{ maxWidth: "700px", width: "100%" }}
                    >
                      <div className="mb-3 text-center">
                        <img
                          src="/assets/images/profile/ava.jpg"
                          alt="User"
                          className="img-fluid rounded-circle"
                          width={150}
                        />
                      </div>
                      <h3 style={{ textAlign: "center" }}>John Doe</h3>
                      <p style={{ textAlign: "center" }}>
                        Fitness Tracker Profile
                      </p>
                      <div className="text-start">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Name:</strong>{" "}
                            <span className="text-black">John Doe</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Email:</strong>{" "}
                            <span className="text-black">
                              john.doe@example.com
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Date of Birth:</strong>{" "}
                            <span className="text-black">01/01/1990</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Blood Group:</strong>{" "}
                            <span className="text-black">O+</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Activity Level:</strong>{" "}
                            <span className="text-black">Moderate</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Goal:</strong>{" "}
                            <span className="text-black">Lose 5 kg</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Height:</strong>{" "}
                            <span className="text-black">175 cm</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Weight:</strong>{" "}
                            <span className="text-black">75 kg</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Member Since:</strong>{" "}
                            <span className="text-black">January 2020</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Total Calories Burned:</strong>{" "}
                            <span className="text-danger">12,450 kcal</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Gender:</strong>{" "}
                            <span className="text-black">Male</span>
                          </li>

                          <li className="list-group-item d-flex justify-content-between">
                            <strong>Weekly Progress:</strong>{" "}
                            <span className="fw-bold">81%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-8">
              <div className="card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">Update Profile</h6>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <UpdateProfile />
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

export default Settings;
