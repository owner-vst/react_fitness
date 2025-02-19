// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const initialFormData = {
//   firstname: "",
//   lastname: "",
//   gender: "",
//   dob: "",
//   profilePic: null,
//   password: "",
//   confirmPassword: "",
// };

// function Signup() {
//   const [formData, setFormData] = useState(initialFormData);
//   const [profilePicFile, setProfilePicFile] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setProfilePicFile(e.target.files[0]);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("redirecting");
//     window.location.href = "/auth/verify";
//   };
//   useEffect(() => {
//     const validateForm = () => {
//       const forms = document.querySelectorAll(".needs-validation");
//       Array.from(forms).forEach((form) => {
//         form.addEventListener(
//           "submit",
//           (event) => {
//             if (!form.checkValidity()) {
//               event.preventDefault();
//               event.stopPropagation();
//             }
//             form.classList.add("was-validated");
//           },
//           false
//         );
//       });
//     };

//     validateForm();
//   }, []);

//   return (
//     <div className="authincation h-100">
//       <div className="container h-100 ">
//         <div
//           className="row justify-content-center h-100 align-items-center"
//           style={{ minHeight: "100vh" }}
//         >
//           <div className="col-md-6">
//             <div className="authincation-content">
//               <div className="row no-gutters">
//                 <div className="col-xl-12">
//                   <div className="auth-form ">
//                     <h4 className="text-center mb-4">Sign up your account</h4>

//                     <form
//                       className="needs-validation"
//                       noValidate
//                       onSubmit={handleSubmit}
//                     >
//                       <div className="row">
//                         <div className="col-md-6 mb-3">
//                           <label className="mb-1">
//                             <strong>First Name</strong>
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="firstname"
//                             value={formData.firstname}
//                             onChange={handleChange}
//                             placeholder="Enter First Name"
//                             required
//                           />
//                         </div>
//                         <div className="col-md-6 mb-3">
//                           <label className="mb-1">
//                             <strong>Last Name</strong>
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="lastname"
//                             value={formData.lastname}
//                             onChange={handleChange}
//                             placeholder="Enter Last Name"
//                             required
//                           />
//                         </div>
//                       </div>

//                       <div className="row">
//                         <div className="col-md-6 mb-3">
//                           <label className="mb-1">
//                             <strong>Gender</strong>
//                           </label>
//                           <select
//                             name="gender"
//                             className="form-control"
//                             value={formData.gender}
//                             onChange={handleChange}
//                             required
//                           >
//                             <option value="" disabled>
//                               Choose Gender
//                             </option>
//                             <option value="male">Male</option>
//                             <option value="female">Female</option>
//                           </select>
//                         </div>
//                         <div className="col-md-6 mb-3">
//                           <label className="mb-1">
//                             <strong>Date of Birth</strong>
//                           </label>
//                           <input
//                             type="date"
//                             className="form-control"
//                             name="dob"
//                             value={formData.dob}
//                             onChange={handleChange}
//                             required
//                             max={new Date().toISOString().split("T")[0]}
//                           />
//                         </div>
//                       </div>

//                       <div className="form-group position-relative">
//                         <label className="mb-1">
//                           <strong>Password</strong>
//                         </label>
//                         <input
//                           type="password"
//                           id="dz-password"
//                           className="form-control"
//                           name="password"
//                           value={formData.password}
//                           onChange={handleChange}
//                           placeholder="Enter Password"
//                           required
//                         />
//                         <span className="show-pass eye">
//                           <i className="fa fa-eye-slash" />
//                           <i className="fa fa-eye" />
//                         </span>
//                       </div>

//                       <div className="form-group position-relative">
//                         <label className="mb-1">
//                           <strong>Confirm Password</strong>
//                         </label>
//                         <input
//                           type="password"
//                           className="form-control"
//                           name="confirmPassword"
//                           value={formData.confirmPassword}
//                           onChange={handleChange}
//                           placeholder="Confirm Password"
//                           required
//                         />
//                         <span className="show-pass eye">
//                           <i className="fa fa-eye-slash" />
//                           <i className="fa fa-eye" />
//                         </span>
//                       </div>

//                       <div className="form-group">
//                         <label className="mb-1">
//                           <strong>Profile Picture</strong>
//                         </label>
//                         <input
//                           type="file"
//                           className="form-control"
//                           name="profilePic"
//                           value={profilePicFile}
//                           onChange={handleFileChange}
//                           accept="image/*"
//                           required
//                         />
//                       </div>

//                       <div className="text-center mt-4">
//                         <button
//                           type="submit"
//                           className="btn btn-primary btn-block"
//                         >
//                           Sign Up
//                         </button>
//                       </div>
//                     </form>

//                     <div className="new-account mt-3">
//                       <p>
//                         Already have an account?{" "}
//                         <Link className="text-primary" to="/auth/login">
//                           Sign in
//                         </Link>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const initialFormData = {
  firstname: "",
  lastname: "",
  gender: "",
  dob: "",
  profilePic: null,
  password: "",
  confirmPassword: "",
};

function Signup() {
  const [formData, setFormData] = useState(initialFormData);
  const [profilePicFile, setProfilePicFile] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setProfilePicFile(e.target.files[0]);
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstname) errors.firstname = "First Name is required";
    if (!formData.lastname) errors.lastname = "Last Name is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.dob) errors.dob = "Date of Birth is required";
    if (!formData.password) errors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!profilePicFile) errors.profilePic = "Profile picture is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data before proceeding
    if (!validateForm()) return;

    console.log("Form is valid, redirecting");
    window.location.href = "/auth/verify"; // Redirect to the verification page
  };

  useEffect(() => {
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  }, []);

  return (
    <div className="authincation h-100">
      <div className="container h-100">
        <div
          className="row justify-content-center h-100 align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <h4 className="text-center mb-4">Sign up your account</h4>

                    <form
                      className="needs-validation"
                      noValidate
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="mb-1">
                            <strong>First Name</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            placeholder="Enter First Name"
                            required
                          />
                          {formErrors.firstname && (
                            <div className="text-danger">
                              {formErrors.firstname}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="mb-1">
                            <strong>Last Name</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            placeholder="Enter Last Name"
                            required
                          />
                          {formErrors.lastname && (
                            <div className="text-danger">
                              {formErrors.lastname}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="mb-1">
                            <strong>Gender</strong>
                          </label>
                          <select
                            name="gender"
                            className="form-control"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>
                              Choose Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                          {formErrors.gender && (
                            <div className="text-danger">
                              {formErrors.gender}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="mb-1">
                            <strong>Date of Birth</strong>
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                            max={new Date().toISOString().split("T")[0]}
                          />
                          {formErrors.dob && (
                            <div className="text-danger">{formErrors.dob}</div>
                          )}
                        </div>
                      </div>

                      <div className="form-group position-relative">
                        <label className="mb-1">
                          <strong>Password</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Enter Password"
                          required
                        />
                        {formErrors.password && (
                          <div className="text-danger">
                            {formErrors.password}
                          </div>
                        )}
                      </div>

                      <div className="form-group position-relative">
                        <label className="mb-1">
                          <strong>Confirm Password</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm Password"
                          required
                        />
                        {formErrors.confirmPassword && (
                          <div className="text-danger">
                            {formErrors.confirmPassword}
                          </div>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="mb-1">
                          <strong>Profile Picture</strong>
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          name="profilePic"
                          onChange={handleFileChange}
                          accept="image/*"
                          required
                        />
                        {formErrors.profilePic && (
                          <div className="text-danger">
                            {formErrors.profilePic}
                          </div>
                        )}
                      </div>

                      <div className="text-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>

                    <div className="new-account mt-3">
                      <p>
                        Already have an account?{" "}
                        <Link className="text-primary" to="/auth/login">
                          Sign in
                        </Link>
                      </p>
                    </div>
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

export default Signup;
