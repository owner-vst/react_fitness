import { useEffect, useState } from "react";

function ManageUsers() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      profilePic: "/assets/images/profile/small/pic1.jpg",
      gender: "Male",
      role: "Admin",
      dob: "1990-01-01",
      status: "Active",
      verified: "Verified",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      profilePic: "/assets/images/profile/small/pic2.jpg",
      gender: "Female",
      role: "User",
      dob: "1990-01-01",
      status: "Inactive",
      verified: "Not Verified",
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      profilePic: "/assets/images/profile/small/pic3.jpg",
      gender: "Female",
      role: "Vendor",
      dob: "1990-01-01",
      status: "Active",
      verified: "Verified",
    },
  ]);

  const [formData, setFormData] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    profilePic: null,
    gender: "",
    role: "",
    dob: "",
    status: "",
    verified: "",
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const genderOptions = ["Male", "Female"];
  const roleOptions = ["Admin", "User", "Vendor"];
  const statusOptions = ["Active", "Inactive"];
  const verifiedOptions = ["Verified", "Not Verified"];

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePic: file ? URL.createObjectURL(file) : null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === formData.id ? { ...user, ...formData } : user
        )
      );
    } else {
      setUsers((prevUsers) => [
        ...prevUsers,
        { ...formData, id: prevUsers.length + 1 },
      ]);
    }

    setFormData({
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      profilePic: null,
      gender: "",
      role: "",
      dob: "",
      status: "",
      verified: "",
    });
    setIsEditMode(false);
  };

  const handleEdit = (user) => {
    setFormData({ ...user });
    setIsEditMode(true);
  };

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div>
      <div className="content-body">
        <div className="container-fluid">
          <div className="card card-bx m-b30">
            <div className="card-header">
              <h6 className="title">Manage Users</h6>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form
                  className="needs-validation"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter First Name"
                        required
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">
                        Please enter First Name.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Last Name"
                        required
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">
                        Please enter Last Name.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">
                        Please enter Email.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Profile Picture</label>
                      <input
                        type="file"
                        className="form-control"
                        placeholder="Choose Profile Picture"
                        required
                        onChange={handleImageChange}
                      />
                      <div className="invalid-feedback">
                        Select Profile Picture.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Gender</label>
                      <select
                        name="gender"
                        className="form-control"
                        required
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Choose Gender
                        </option>
                        {genderOptions.map((gender) => (
                          <option key={gender} value={gender}>
                            {gender}
                          </option>
                        ))}
                      </select>
                      <div className="invalid-feedback">
                        Please select Gender.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Role</label>
                      <select
                        name="role"
                        className="form-control"
                        required
                        value={formData.role}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Choose Role
                        </option>
                        {roleOptions.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                      <div className="invalid-feedback">
                        Please select Role.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Status</label>
                      <select
                        name="status"
                        className="form-control"
                        required
                        value={formData.status}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Choose Status
                        </option>
                        {statusOptions.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                      <div className="invalid-feedback">
                        Please select Status.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Verified</label>
                      <select
                        name="verified"
                        className="form-control"
                        required
                        value={formData.verified}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Choose Verified
                        </option>
                        {verifiedOptions.map((verified) => (
                          <option key={verified} value={verified}>
                            {verified}
                          </option>
                        ))}
                      </select>
                      <div className="invalid-feedback">
                        Please select Verified.
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="dateOfBirth">Date of Birth</label>
                      <input
                        type="date"
                        className="form-control"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                        max={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
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
                  <h4 className="card-title">User List</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-responsive-md">
                      <thead>
                        <tr>
                          <th style={{ width: 80 }}>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th>Gender</th>
                          <th>Role</th>
                          <th>DOB</th>
                          <th>Status</th>
                          <th>Verified</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id}>
                            <td>
                              <strong className="text-black">
                                {String(user.id).padStart(2, "0")}
                              </strong>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src={user.profilePic}
                                  className="rounded-lg me-2"
                                  width={70}
                                  alt
                                />
                                <span className="w-space-no">
                                  {user.firstName}
                                </span>
                              </div>
                            </td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.role}</td>
                            <td>{user.dob}</td>
                            <td>{user.status}</td>
                            <td>{user.verified}</td>
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
                                    onClick={() => handleEdit(user)}
                                  >
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => handleDelete(user.id)}
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

export default ManageUsers;
