import Workout from "../charts/Workout";

function WorkoutPlan() {
  const cartItems = [
    {
      id: 1,
      activity: "Running",
      caloriesBurned: "300 kcal",
      status: "Completed",
      duration: "30 min",
    },
    {
      id: 2,
      activity: "Cycling",
      caloriesBurned: "250 kcal",
      status: "In Progress",
      duration: "45 min",
    },
    {
      id: 3,
      activity: "Yoga",
      caloriesBurned: "150 kcal",
      status: "Completed",
      duration: "60 min",
    },
  ];

  return (
    <div>
      <div className="content-body">
        {/* row */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-xxl-4">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card flex-xl-column flex-md-row flex-column">
                    <div className="card-body border-bottom pb-4 p-2 event-calender">
                      <input
                        type="text"
                        className="form-control d-none"
                        id="datetimepicker1"
                      />
                    </div>
                    <div className="card-body">
                      <h6 className="fs-16 text-black mb-4">
                        Suggested Today's Workout Plan
                      </h6>
                      <div className="d-flex mb-4 align-items-center">
                        <span className="date-icon me-3">2</span>
                        <div>
                          <h6 className="fs-16">
                            <a
                              href="workout-statistic.html"
                              className="text-black"
                            >
                              Cardio Exercise
                            </a>
                          </h6>
                          <span>Pending</span>
                        </div>
                      </div>
                      <div className="d-flex mb-4 align-items-center">
                        <span className="date-icon me-3">2</span>
                        <div>
                          <h6 className="fs-16">
                            <a
                              href="workout-statistic.html"
                              className="text-black"
                            >
                              Cycling Routine
                            </a>
                          </h6>
                          <span>Finished</span>
                        </div>
                      </div>
                      <div className="d-flex mb-4 align-items-center">
                        <span className="date-icon me-3">2</span>
                        <div>
                          <h6 className="fs-16">
                            <a
                              href="workout-statistic.html"
                              className="text-black"
                            >
                              Running
                            </a>
                          </h6>
                          <span>Skipped</span>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#addNewPlan"
                        className="btn btn-outline-primary rounded"
                      >
                        Add New Activity
                      </a>
                      {/* Modal */}
                      <div className="modal fade" id="addNewPlan">
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Add New Activity</h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="form-group">
                                  <label>Activity Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Activity Name"
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Activity Unit</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Activity Unit"
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Calories Burned</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Calories Burned"
                                  />
                                </div>
                                <button className="btn btn-primary">
                                  Add New Activity
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-xxl-8">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card plan-list">
                    <div className="card-header d-sm-flex d-block pb-0 border-0 ">
                      <div className="me-auto pe-3">
                        <h4 className="text-black fs-20">Plan List</h4>
                      </div>

                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#addNewPlan1"
                        className="btn btn-outline-primary rounded me-3"
                      >
                        Add Workout Log
                      </a>

                      {/* Modal */}
                      <div className="modal fade" id="addNewPlan1">
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Add Workout Log</h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="form-group">
                                  <label>Activity</label>
                                  <select
                                    name="status"
                                    className="form-control input-btn input-number "
                                  >
                                    <option value="Cycling">Cycling</option>
                                    <option value="Running">Running</option>
                                    <option value="Yoga">Yoga</option>
                                  </select>
                                </div>

                                <div className="form-group">
                                  <label>Duration</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Duration"
                                  />
                                </div>
                                <button className="btn btn-primary">
                                  Add Workout Log
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-primary rounded"
                      >
                        Update Workout Log
                      </a>
                      {/* Modal */}
                    </div>
                    <div className="card-body">
                      {/* <div className="table-responsive">
                        <table className="table table-responsive-md">
                          <thead>
                            <tr>
                              <th style={{ width: 80 }}>#</th>

                              <th>UNIT PRICE</th>
                              <th>QUANTITY</th>
                              <th>TOTAL PRICE</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartItems.map((item) => (
                              <tr key={item.id}>
                                <td>
                                  <strong className="text-black">
                                    {String(item.id).padStart(2, "0")}
                                  </strong>
                                </td>

                                <td>{item.unitPrice}</td>
                                <td>{item.quantity}</td>
                                <td>{item.totalPrice}</td>
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
                      </div> */}
                      <div className="table-responsive">
                        <table className="table table-responsive-md">
                          <thead>
                            <tr>
                              <th style={{ width: 80 }}>#</th>
                              <th>Activity</th>
                              <th>Calories Burned</th>
                              <th>Status</th>
                              <th>Duration</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartItems.map((item) => (
                              <tr key={item.id}>
                                <td>
                                  <strong className="text-black">
                                    {String(item.id).padStart(2, "0")}
                                  </strong>
                                </td>
                                <td>{item.activity}</td>
                                <td>{item.caloriesBurned}</td>
                                <td>
                                  <div className="dropdown mt-sm-0 mt-3">
                                    <select
                                      name="status"
                                      className="form-control input-btn input-number "
                                      defaultValue="Pending"
                                    >
                                      <option value="Completed">
                                        Completed
                                      </option>
                                      <option value="In Progress">
                                        In Progress
                                      </option>
                                      <option value="Pending">Pending</option>
                                    </select>
                                  </div>
                                </td>
                                <td>{item.duration}</td>
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
                                        Save
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

                <div className="col-xl-12 col-xxl-12 col-md-6 ">
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <h5 className="text-black fs-20 mb-0">
                        Weekly Workout Progress
                      </h5>
                    </div>
                    <br></br>
                    <Workout />
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

export default WorkoutPlan;
