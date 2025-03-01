import { useEffect } from "react";

function UpdateProfile() {
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
    <form className="needs-validation" noValidate>
      <div className="row">
        <div className="col-md-6 mb-3 ">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter First Name"
            required
          />
          <div className="invalid-feedback">Please enter First Name.</div>
        </div>
        <div className="col-md-6 mb-3 ">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            required
          />
          <div className="invalid-feedback">Please enter Last Name.</div>
        </div>
      </div>
      <div className="row">
        <div className=" col-md-6 mb-3 ">
          <label className="form-label">Gender</label>
          <select
            name="gender"
            className="form-control"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Choose Gender
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <div className="invalid-feedback">Please select Gender.</div>
        </div>
        <div className=" col-md-6 mb-3 ">
          <label className="form-label">DOB</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter Date of Birth"
            required
          />
          <div className="invalid-feedback">Please enter DOB.</div>
        </div>
      </div>
      <div className="row">
        <div className=" col-md-6 mb-3 ">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone"
            required
          />
          <div className="invalid-feedback">Please enter Phone.</div>
        </div>

        <div className=" col-md-6 mb-3 ">
          <label className="form-label">Blood Group</label>
          <select
            name="gender"
            className="form-control"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Choose Blood Group
            </option>
            <option>O+</option>
            <option>O-</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>
          <div className="invalid-feedback">Please select Blood Group.</div>
        </div>
      </div>
      <div className="row">
        <div className=" col-md-6 mb-3 ">
          <label className="form-label">Activity Level</label>
          <select
            name="gender"
            className="form-control"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Choose Activity
            </option>
            <option>Sedentary</option>
            <option>Lightly Active</option>
            <option>Moderate</option>
            <option>Very Active</option>
          </select>
          <div className="invalid-feedback">Please select Activity Level.</div>
        </div>
        <div className=" col-md-6 mb-3 ">
          <label className="form-label">Goal</label>
          <select
            name="gender"
            className="form-control"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Choose Goal
            </option>
            <option>Lose Weight</option>
            <option>Build Muscle</option>
            <option>Maintain Weight</option>
            <option>Increase Weight</option>
          </select>
          <div className="invalid-feedback">Please select Goal.</div>
        </div>
      </div>
      <div className="row">
        <div className=" col-md-6 mb-3 ">
          <label className="form-label">Profile Picture</label>
          <input
            type="file"
            className="form-control"
            placeholder="Choose Profile Picture"
            required
          />
          <div className="invalid-feedback">Select Profile Picture.</div>
        </div>
        <div className=" col-md-6 mb-3 ">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            required
          />
          <div className="invalid-feedback">Please enter Email.</div>
        </div>
      </div>

      <div className="row">
        <div className=" col-md-6 mb-3 ">
          <label className="form-label">Height</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Height"
            required
          />
          <div className="invalid-feedback">Please enter Height.</div>
        </div>{" "}
        <div className=" col-md-6 mb-3 ">
          <label className="form-label">Weight</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Weight"
            required
          />
          <div className="invalid-feedback">Please enter Weight.</div>
        </div>
      </div>
      <div className=" col-md-12 mb-3 ">
        <label className="form-label">Address</label>
        <textarea
          type="text"
          className="form-control"
          placeholder="Enter Address"
          rows="5"
          required
        />
        <div className="invalid-feedback">Please enter Address.</div>
      </div>
      <div className="d-flex justify-content-end">
        {" "}
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </div>
    </form>
  );
}

export default UpdateProfile;
