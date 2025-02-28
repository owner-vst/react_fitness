import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Checkout() {
  const [role, setRole] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname) {
      const currentRole = location.pathname.split("/")[2];
      setRole(currentRole);
    }
  }, [location.pathname]);
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
    window.location.href = `/dashboard/${role}/payment`;
  };
  return (
    <div>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4 order-lg-2 mb-4">
                      <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-black">Your cart</span>
                        <span className="badge badge-primary badge-pill">
                          3
                        </span>
                      </h4>
                      <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                          <div>
                            <h6 className="my-0">Dumbell</h6>
                            <small className="text-muted">x2</small>
                          </div>
                          <span className="text-muted">$12</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                          <div>
                            <h6 className="my-0">Fitbit</h6>
                            <small className="text-muted">x1</small>
                          </div>
                          <span className="text-muted">$8</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                          <div>
                            <h6 className="my-0">Gripper</h6>
                            <small className="text-muted">x4</small>
                          </div>
                          <span className="text-muted">$5</span>
                        </li>

                        <li className="list-group-item d-flex justify-content-between">
                          <span>total (USD)</span>
                          <strong>$25</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-8 order-lg-1">
                      <h4 className="mb-3">Billing address</h4>
                      <form
                        className="needs-validation"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="firstName"
                              placeholder="First Name"
                              required
                            />
                            <div className="invalid-feedback">
                              Valid first name is required.
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="lastName"
                              placeholder="Last Name"
                              required
                            />
                            <div className="invalid-feedback">
                              Valid last name is required.
                            </div>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            required
                            placeholder="you@example.com"
                          />
                          <div className="invalid-feedback">
                            Please enter a valid email address for shipping
                            updates.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="address">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="1234 Main St"
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your shipping address.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="address2">
                            Address 2{" "}
                            <span className="text-muted">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address2"
                            placeholder="Apartment or suite"
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-5 mb-3">
                            <label htmlFor="country">Country</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="address2"
                              placeholder="Country"
                            />

                            <div className="invalid-feedback">
                              Please select a valid country.
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="state">State</label>
                            <input
                              type="text"
                              required
                              className="form-control"
                              id="address2"
                              placeholder="State"
                            />
                            <div className="invalid-feedback">
                              Please provide a valid state.
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="zip">Zip</label>
                            <input
                              type="text"
                              className="form-control"
                              id="zip"
                              placeholder
                              required
                            />
                            <div className="invalid-feedback">
                              Zip code required.
                            </div>
                          </div>
                        </div>

                        <hr className="mb-4" />
                        <h4 className="mb-3">Payment</h4>
                        <div className="d-block my-3">
                          <div className="form-check custom-radio mb-2">
                            <input
                              id="credit"
                              name="paymentMethod"
                              type="radio"
                              className="form-check-input"
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="credit"
                            >
                              Credit card
                            </label>
                          </div>
                          <div className="form-check custom-radio mb-2">
                            <input
                              id="debit"
                              name="paymentMethod"
                              type="radio"
                              className="form-check-input"
                              required
                            />
                            <label className="form-check-label" htmlFor="debit">
                              Debit card
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="cc-name">Name on card</label>
                            <input
                              type="text"
                              className="form-control"
                              id="cc-name"
                              placeholder
                              required
                            />
                            <small className="text-muted">
                              Full name as displayed on card
                            </small>
                            <div className="invalid-feedback">
                              Name on card is required
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="cc-number">
                              Credit card number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="cc-number"
                              placeholder
                              required
                            />
                            <div className="invalid-feedback">
                              Credit card number is required
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3 mb-3">
                            <label htmlFor="cc-expiration">Expiration</label>
                            <input
                              type="text"
                              className="form-control"
                              id="cc-expiration"
                              placeholder
                              required
                            />
                            <div className="invalid-feedback">
                              Expiration date required
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="cc-expiration">CVV</label>
                            <input
                              type="text"
                              className="form-control"
                              minLength={3}
                              maxLength={4}
                              id="cc-cvv"
                              placeholder
                              required
                            />
                            <div className="invalid-feedback">
                              Security code required
                            </div>
                          </div>
                        </div>
                        <hr className="mb-4" />
                        <button
                          className="btn btn-primary btn-lg btn-block"
                          type="submit"
                        >
                          Continue to checkout
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
  );
}

export default Checkout;
