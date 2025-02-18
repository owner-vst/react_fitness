import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    (function () {
      "use strict";
      var forms = document.querySelectorAll(".needs-validation");
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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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
                    <h4 className="text-center mb-4">Sign in your account</h4>
                    <div className="form-validation">
                      <form className="needs-validation" noValidate>
                        <div className="form-group">
                          <label className="mb-1">
                            <strong>Email</strong>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your valid email.."
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter a valid email.
                          </div>
                        </div>
                        <div className="form-group position-relative">
                          <label className="mb-1">
                            <strong>Password</strong>
                          </label>
                          <input
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            className="form-control"
                            placeholder="Choose a safe one.."
                            required
                          />
                          <span
                            className="show-pass eye"
                            onClick={togglePasswordVisibility}
                          >
                            <i
                              className={`fa ${
                                passwordVisible ? "fa-eye" : "fa-eye-slash"
                              }`}
                            />
                          </span>
                          <div className="invalid-feedback">
                            Please enter a password.
                          </div>
                        </div>

                        <div className="row d-flex justify-content-between mt-4 mb-2">
                          <div className="form-group">
                            <a href="page-forgot-password.html">
                              Forgot Password?
                            </a>
                          </div>
                        </div>

                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Sign Me In
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="new-account mt-3">
                      <p>
                        Dont have an account?{" "}
                        <a className="text-primary" href="page-register.html">
                          <Link to="/auth/signup">Sign Up</Link>
                        </a>
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

export default Login;
