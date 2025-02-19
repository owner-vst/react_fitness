import { useEffect } from "react";
import { Link } from "react-router-dom";

function Verify() {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("redirecting");
    window.location.href = "/";
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
                    <h4 className="text-center mb-4">
                      Enter Verification Code
                    </h4>
                    <div className="form-validation">
                      <form
                        className="needs-validation"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <div className="form-group">
                          <label className="mb-1">
                            <strong>Verification Code</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="verificationCode"
                            placeholder="Enter verification code.."
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter the verification code.
                          </div>
                        </div>

                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Verify Code
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="new-account mt-3">
                      <p>
                        Remember your password?{" "}
                        <Link to="/auth/login">Login</Link>
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

export default Verify;
