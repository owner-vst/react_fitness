import { useEffect } from "react";

function ManageWorkoutPlan() {
  const items = [
    {
      id: 1,
      activity: "Running",
      status: "Completed",
      duration: "30 mins",
      user: "John Doe",
    },
    {
      id: 2,
      activity: "Cycling",
      status: "Pending",
      duration: "45 mins",
      user: "Sans",
    },
    {
      id: 3,
      activity: "Yoga",
      status: "Skipped",
      duration: "1 hr",
      user: "Mark",
    },
    {
      id: 4,
      activity: "Swimming",
      status: "Completed",
      duration: "30 mins",
      user: "David",
    },
    {
      id: 5,
      activity: "Walking",
      status: "Pending",
      duration: "45 mins",
      user: "Kenny",
    },
  ];
  useEffect(() => {
    (function () {
      "use strict";
      const forms = document.querySelectorAll(".needs-validation");
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
  }, []);
  return (
    <div>
      <div className="content-body">
        <div className="container-fluid">
          <div className="card card-bx m-b30">
            <div className="card-header">
              <h6 className="title">Manage Workout Plan</h6>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form className="needs-validation" noValidate>
                  <div className="row">
                    <div className=" col-md-6 mb-3 ">
                      <label className="form-label">Activity </label>
                      <select
                        name="gender"
                        className="form-control"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Choose Activity
                        </option>
                        <option>Running</option>
                        <option>Cycling</option>
                        <option>Yoga</option>
                        <option>Swimming</option>
                        <option>Walking</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select Activity .
                      </div>
                    </div>
                    <div className=" col-md-6 mb-3 ">
                      <label className="form-label">Status</label>
                      <select
                        name="gender"
                        className="form-control"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Choose Status
                        </option>
                        <option>Completed</option>
                        <option>Skipped</option>
                        <option>Pending</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select Status.
                      </div>
                    </div>
                    <div className=" col-md-6 mb-3 ">
                      <label className="form-label">Duration</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Duration"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter Duration.
                      </div>
                    </div>
                    <div className=" col-md-6 mb-3 ">
                      <label className="form-label">User</label>
                      <select
                        name="user"
                        className="form-control"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Choose User
                        </option>
                        <option>David</option>
                        <option>John</option>
                        <option>Sans</option>
                        <option>Mark</option>
                        <option>Kenny</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select User.
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
                    {" "}
                    <button type="submit" className="btn btn-primary">
                      Edit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Workout Plan Items</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-responsive-md">
                      <thead>
                        <tr>
                          <th style={{ width: 80 }}>#</th>

                          <th>Activity</th>
                          <th>Status</th>
                          <th>Duration</th>
                          <th>User</th>

                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <strong className="text-black">
                                {String(item.id).padStart(2, "0")}
                              </strong>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="w-space-no">
                                  {item.activity}
                                </span>
                              </div>
                            </td>

                            <td>{item.status}</td>
                            <td>{item.duration}</td>
                            <td>{item.user}</td>

                            <td>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-success light sharp"
                                  data-bs-toggle="dropdown"
                                >
                                  <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageWorkoutPlan;
