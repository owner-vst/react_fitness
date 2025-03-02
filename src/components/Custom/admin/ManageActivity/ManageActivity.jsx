import { useEffect, useState } from "react";

function ManageActivity() {
  const [activities, setActivities] = useState([
    {
      id: 1,
      user: "John Doe",
      activityName: "Running",
      activityUnit: " km",
      calorieBurned: "200 cal",
    },
    {
      id: 2,
      user: "Sans",
      activityName: "Cycling",
      activityUnit: " km",
      calorieBurned: "300 cal",
    },
    {
      id: 3,
      user: "Mark",
      activityName: "Yoga",
      activityUnit: " min",
      calorieBurned: "150 cal",
    },
    {
      id: 4,
      user: "David",
      activityName: "Swimming",
      activityUnit: " mins",
      calorieBurned: "250 cal",
    },
    {
      id: 5,
      user: "Kenny",
      activityName: "Walking",
      activityUnit: " km",
      calorieBurned: "180 cal",
    },
  ]);

  const [formData, setFormData] = useState({
    id: null,
    user: "",
    activityName: "",
    activityUnit: "",
    calorieBurned: "",
  });

  const [isEditMode, setIsEditMode] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      setActivities((prevActivities) =>
        prevActivities.map((activity) =>
          activity.id === formData.id ? { ...activity, ...formData } : activity
        )
      );
    } else {
      setActivities((prevActivities) => [
        ...prevActivities,
        { ...formData, id: prevActivities.length + 1 },
      ]);
    }
    setFormData({
      id: null,
      user: "",
      activityName: "",
      activityUnit: "",
      calorieBurned: "",
    });
    setIsEditMode(false);
  };

  const handleEdit = (activity) => {
    setFormData(activity);
    setIsEditMode(true);
  };

  const handleDelete = (id) => {
    setActivities((prevActivities) =>
      prevActivities.filter((activity) => activity.id !== id)
    );
  };

  return (
    <div>
      <div className="content-body">
        <div className="container-fluid">
          <div className="card card-bx m-b30">
            <div className="card-header">
              <h6 className="title">Manage Activity</h6>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form
                  className="needs-validation"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className=" col-md-6 mb-3 ">
                      <label className="form-label">User </label>
                      <select
                        name="user"
                        className="form-control"
                        required
                        value={formData.user}
                        onChange={handleChange}
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
                    <div className=" col-md-6 mb-3 ">
                      <label className="form-label">Activity Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Activity Name"
                        required
                        name="activityName"
                        value={formData.activityName}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">
                        Please enter Activity Name.
                      </div>
                    </div>
                    <div className=" col-md-6 mb-3 ">
                      <label className="form-label">Activity Unit</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Activity Unit"
                        required
                        name="activityUnit"
                        value={formData.activityUnit}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">
                        Please enter Activity Unit.
                      </div>
                    </div>
                    <div className=" col-md-6 mb-3 ">
                      <label className="form-label">Calories Burned</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Calories Burned"
                        required
                        name="calorieBurned"
                        value={formData.calorieBurned}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">
                        Please enter Calories Burned.
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
                    {" "}
                    <button type="submit" className="btn btn-primary">
                      {isEditMode ? "Edit" : "Add"}
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
                  <h4 className="card-title">Activity Items</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-responsive-md">
                      <thead>
                        <tr>
                          <th style={{ width: 80 }}>#</th>
                          <th>User</th>
                          <th>Activity Name</th>
                          <th>Activity Unit</th>
                          <th>Calories Burned</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activities.map((activity) => (
                          <tr key={activity.id}>
                            <td>
                              <strong className="text-black">
                                {String(activity.id).padStart(2, "0")}
                              </strong>
                            </td>
                            <td>{activity.user}</td>
                            <td>{activity.activityName}</td>
                            <td>{activity.activityUnit}</td>
                            <td>{activity.calorieBurned}</td>
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
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => handleEdit(activity)}
                                  >
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => handleDelete(activity.id)}
                                  >
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

export default ManageActivity;
