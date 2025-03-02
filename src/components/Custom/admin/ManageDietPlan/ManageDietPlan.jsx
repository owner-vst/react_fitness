import { useEffect, useState } from "react";

function ManageDietPlan() {
  const [dietPlans, setDietPlans] = useState([
    {
      id: 1,
      user: "John Doe",
      quantity: "200g",
      mealType: "Breakfast",
      status: "Completed",
      foodItem: "Oatmeal",
    },
    {
      id: 2,
      user: "Sans",
      quantity: "150g",
      mealType: "Lunch",
      status: "Pending",
      foodItem: "Chicken Salad",
    },
    {
      id: 3,
      user: "Mark",
      quantity: "100g",
      mealType: "Dinner",
      status: "Skipped",
      foodItem: "Grilled Fish",
    },
    {
      id: 4,
      user: "David",
      quantity: "300ml",
      mealType: "Snack",
      status: "Completed",
      foodItem: "Smoothie",
    },
    {
      id: 5,
      user: "Kenny",
      quantity: "250g",
      mealType: "Lunch",
      status: "Pending",
      foodItem: "Quinoa Salad",
    },
  ]);

  const [formData, setFormData] = useState({
    id: null,
    user: "",
    quantity: "",
    mealType: "",
    status: "",
    foodItem: "",
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
      setDietPlans((prevDietPlans) =>
        prevDietPlans.map((plan) =>
          plan.id === formData.id ? { ...plan, ...formData } : plan
        )
      );
    } else {
      setDietPlans((prevDietPlans) => [
        ...prevDietPlans,
        { ...formData, id: prevDietPlans.length + 1 },
      ]);
    }
    setFormData({
      id: null,
      user: "",
      quantity: "",
      mealType: "",
      status: "",
      foodItem: "",
    });
    setIsEditMode(false);
  };

  const handleEdit = (plan) => {
    setFormData(plan);
    setIsEditMode(true);
  };

  const handleDelete = (id) => {
    setDietPlans((prevDietPlans) =>
      prevDietPlans.filter((plan) => plan.id !== id)
    );
  };

  return (
    <div>
      <div className="content-body">
        <div className="container-fluid">
          <div className="card card-bx m-b30">
            <div className="card-header">
              <h6 className="title">Manage Diet Plan</h6>
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
                      <label className="form-label">Quantity</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Quantity"
                        required
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">
                        Please enter Quantity.
                      </div>
                    </div>
                    <div className=" col-md-6 mb-3 ">
                      <label className="form-label">Meal Type</label>
                      <select
                        name="mealType"
                        className="form-control"
                        required
                        value={formData.mealType}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Choose Meal Type
                        </option>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Snack</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select Meal Type.
                      </div>
                    </div>
                    <div className=" col-md-6 mb-3 ">
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
                        <option>Completed</option>
                        <option>Pending</option>
                        <option>Skipped</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select Status.
                      </div>
                    </div>
                    <div className=" col-md-6 mb-3 ">
                      <label className="form-label">Food Item</label>
                      <select
                        name="foodItem"
                        className="form-control"
                        required
                        value={formData.foodItem}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Choose Food Item
                        </option>
                        <option>Oatmeal</option>
                        <option>Chicken Salad</option>
                        <option>Grilled Fish</option>
                        <option>Smoothie</option>
                        <option>Quinoa Salad</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select Food Item.
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
                  <h4 className="card-title">Diet Plan Items</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-responsive-md">
                      <thead>
                        <tr>
                          <th style={{ width: 80 }}>#</th>
                          <th>User</th>
                          <th>Quantity</th>
                          <th>Meal Type</th>
                          <th>Status</th>
                          <th>Food Item</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dietPlans.map((plan) => (
                          <tr key={plan.id}>
                            <td>
                              <strong className="text-black">
                                {String(plan.id).padStart(2, "0")}
                              </strong>
                            </td>
                            <td>{plan.user}</td>
                            <td>{plan.quantity}</td>
                            <td>{plan.mealType}</td>
                            <td>{plan.status}</td>
                            <td>{plan.foodItem}</td>
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
                                    onClick={() => handleEdit(plan)}
                                  >
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => handleDelete(plan.id)}
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

export default ManageDietPlan;
