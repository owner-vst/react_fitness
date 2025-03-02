import { useEffect, useState } from "react";

function ManageFoodCatalogue() {
  const [foodItems, setFoodItems] = useState([
    {
      id: 1,
      foodName: "Apple",
      calories: "95",
      carbs: "25g",
      fats: "0.3g",
      protein: "0.5g",
      user: "John Doe",
    },
    {
      id: 2,
      foodName: "Chicken Breast",
      calories: "165",
      carbs: "0g",
      fats: "3.6g",
      protein: "31g",
      user: "Sans",
    },
    {
      id: 3,
      foodName: "Brown Rice",
      calories: "215",
      carbs: "45g",
      fats: "1.6g",
      protein: "5g",
      user: "Mark",
    },
    {
      id: 4,
      foodName: "Avocado",
      calories: "234",
      carbs: "12g",
      fats: "21g",
      protein: "3g",
      user: "David",
    },
    {
      id: 5,
      foodName: "Salmon",
      calories: "206",
      carbs: "0g",
      fats: "13g",
      protein: "26g",
      user: "Kenny",
    },
  ]);

  const [formData, setFormData] = useState({
    id: null,
    foodName: "",
    calories: "",
    carbs: "",
    fats: "",
    protein: "",
    user: "",
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
      setFoodItems((prevFoodItems) =>
        prevFoodItems.map((item) =>
          item.id === formData.id ? { ...item, ...formData } : item
        )
      );
    } else {
      setFoodItems((prevFoodItems) => [
        ...prevFoodItems,
        { ...formData, id: prevFoodItems.length + 1 },
      ]);
    }
    setFormData({
      id: null,
      foodName: "",
      calories: "",
      carbs: "",
      fats: "",
      protein: "",
      user: "",
    });
    setIsEditMode(false);
  };

  const handleEdit = (item) => {
    setFormData(item);
    setIsEditMode(true);
  };

  const handleDelete = (id) => {
    setFoodItems((prevFoodItems) =>
      prevFoodItems.filter((item) => item.id !== id)
    );
  };

  return (
    <div>
      <div className="content-body">
        <div className="container-fluid">
          <div className="card card-bx m-b30">
            <div className="card-header">
              <h6 className="title">Manage Food Catalogue</h6>
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
                      <label className="form-label">Food Name </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Food Name"
                        required
                        name="foodName"
                        value={formData.foodName}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">
                        Please enter Food Name.
                      </div>
                    </div>
                    <div className=" col-md-6 mb-3 ">
                      <label className="form-label">Calories</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Calories"
                        required
                        name="calories"
                        value={formData.calories}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">
                        Please enter Calories.
                      </div>
                    </div>
                    <div className=" col-md-6 mb-3 ">
                      <label className="form-label">Carbs</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Carbs"
                        required
                        name="carbs"
                        value={formData.carbs}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">
                        Please enter Carbs.
                      </div>
                    </div>
                    <div className=" col-md-6 mb-3 ">
                      <label className="form-label">Fats</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Fats"
                        required
                        name="fats"
                        value={formData.fats}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">Please enter Fats.</div>
                    </div>
                    <div className=" col-md-6 mb-3 ">
                      <label className="form-label">Protein</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Protein"
                        required
                        name="protein"
                        value={formData.protein}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">
                        Please enter Protein.
                      </div>
                    </div>
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
                  <h4 className="card-title">Food Catalogue Items</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-responsive-md">
                      <thead>
                        <tr>
                          <th style={{ width: 80 }}>#</th>
                          <th>Food Name</th>
                          <th>Calories</th>
                          <th>Carbs</th>
                          <th>Fats</th>
                          <th>Protein</th>
                          <th>User</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {foodItems.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <strong className="text-black">
                                {String(item.id).padStart(2, "0")}
                              </strong>
                            </td>
                            <td>{item.foodName}</td>
                            <td>{item.calories}</td>
                            <td>{item.carbs}</td>
                            <td>{item.fats}</td>
                            <td>{item.protein}</td>
                            <td>{item.user}</td>
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
                                    onClick={() => handleEdit(item)}
                                  >
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => handleDelete(item.id)}
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

export default ManageFoodCatalogue;
