import React, { useState, useEffect, useRef } from "react";
import useManageUsers from "../../../../hooks/admin/useManageUsers";

function ManageUsers() {
  const { users, createUser, updateUser, deleteUser, fetchUsers } =
    useManageUsers();

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
  });

  const [profilePicFile, setProfilePicFile] = useState(null);
  const fileInputRef = useRef(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const genderOptions = ["Male", "Female"];
  const roleOptions = ["ADMIN", "USER", "VENDOR"];
  const statusOptions = ["ACTIVE", "INACTIVE"];

  // useEffect(() => {
  //   (function () {
  //     "use strict";
  //     const forms = document.querySelectorAll(".needs-validation");
  //     Array.prototype.slice.call(forms).forEach(function (form) {
  //       form.addEventListener(
  //         "submit",
  //         function (event) {
  //           if (!form.checkValidity()) {
  //             event.preventDefault();
  //             event.stopPropagation();
  //           }
  //           form.classList.add("was-validated");
  //         },
  //         false
  //       );
  //     });
  //   })();
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfilePicFile(file); // Only set the file
    // No need to update formData.profilePic here
  };

  const uploadProfilePic = async () => {
    const formDataObj = new FormData();
    formDataObj.append("file", profilePicFile);
    formDataObj.append("upload_preset", "insightstracker"); // Replace with your Cloudinary preset

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dxckq9hel/image/upload", // Replace with your Cloudinary URL
        {
          method: "POST",
          body: formDataObj,
        }
      );
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    let profilePicUrl = formData.profilePic; // This will be Cloudinary URL

    if (profilePicFile) {
      const uploadedUrl = await uploadProfilePic();
      if (!uploadedUrl) return;
      profilePicUrl = uploadedUrl;
    }

    const userData = {
      firstname: formData.firstName,
      lastname: formData.lastName,
      email: formData.email,
      profilePic: profilePicUrl, // This will now be Cloudinary URL
      gender: formData.gender,
      role_name: formData.role,
      dob: formData.dob,
      status: formData.status,
    };

    if (isEditMode) {
      await updateUser(formData.id, userData);
    } else {
      await createUser(userData);
    }

    // Reset everything after submit
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
    });
    setProfilePicFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setIsEditMode(false);
    form.classList.remove("was-validated");
    await fetchUsers();
  };

  const handleReset = (e) => {
    e.preventDefault();
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
    });
    setProfilePicFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setIsEditMode(false);
    const formElement = document.querySelector(".needs-validation");
    formElement.classList.remove("was-validated");
  };
  const handleEdit = (user) => {
    setFormData({
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      profilePic: user.profilePic,
      gender: user.gender,
      role: user.role,
      dob: user.dob,
      status: user.status,
    });
    setIsEditMode(true);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
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
                        required={!isEditMode}
                        onChange={handleImageChange}
                        ref={fileInputRef}
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

                  <div className="d-flex justify-content-end gap-2">
                    <button type="submit" className="btn btn-primary">
                      {isEditMode ? "Edit" : "Add"}
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleReset}
                    >
                      Reset
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
                          <th>Profile Pic</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th>Gender</th>
                          <th>Role</th>
                          <th>DOB</th>
                          <th>Status</th>
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
                              <img
                                src={
                                  user.profilePic ||
                                  "/assets/images/profile/download.png"
                                }
                                className="rounded-circle shadow-sm border border-dark"
                                width={70}
                                alt=""
                              />
                            </td>
                            <td> {user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.role}</td>
                            <td>{user.dob}</td>
                            <td>{user.status}</td>
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
