import { useEffect, useState } from "react";

function ManageProducts() {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Product A",
      quantity: 100,
      price: 20,
      category: "Electronics",
      productImage: "/assets/images/product/1.jpg",
      description: "A high-quality gadget.",
    },
    {
      id: 2,
      productName: "Product B",
      quantity: 50,
      price: 30,
      category: "Home",
      productImage: "/assets/images/product/2.jpg",
      description: "A beautiful home decor item.",
    },
    {
      id: 3,
      productName: "Product C",
      quantity: 200,
      price: 15,
      category: "Books",
      productImage: "/assets/images/product/3.jpg",
      description: "An educational book.",
    },
  ]);

  const [formData, setFormData] = useState({
    id: null,
    productName: "",
    quantity: "",
    price: "",
    category: "",
    productImage: null,
    description: "",
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const categoryOptions = [
    "Electronics",
    "Gadgets",
    "Home",
    "Decor",
    "Books",
    "Education",
  ];

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
    const file = e.target.files[0]; // Get the file
    setFormData((prevData) => ({
      ...prevData,
      productImage: file ? URL.createObjectURL(file) : null, // Convert the file to a temporary URL
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === formData.id ? { ...product, ...formData } : product
        )
      );
    } else {
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...formData, id: prevProducts.length + 1 },
      ]);
    }

    // Reset formData and ensure the image URL is retained
    setFormData({
      id: null,
      productName: "",
      quantity: "",
      price: "",
      category: "",
      productImage: null, // Resetting image to null but it will be set again with object URL
      description: "",
    });
    setIsEditMode(false);
  };

  const handleEdit = (product) => {
    setFormData({
      ...product,
      category: product.category,
    });
    setIsEditMode(true);
  };

  const handleDelete = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div>
      <div className="content-body">
        <div className="container-fluid">
          <div className="card card-bx m-b30">
            <div className="card-header">
              <h6 className="title">Manage Products</h6>
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
                      <label className="form-label">Product Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Product Name"
                        required
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">
                        Please enter Product Name.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Quantity</label>
                      <input
                        type="number"
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
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Price"
                        required
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">
                        Please enter Price.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Category</label>
                      <select
                        name="category"
                        className="form-control"
                        required
                        value={formData.category}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Choose Category
                        </option>
                        {categoryOptions.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                      <div className="invalid-feedback">
                        Please select Category.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Product Image</label>
                      <input
                        type="file"
                        className="form-control"
                        placeholder="Choose Product Image"
                        required
                        onChange={handleImageChange}
                      />
                      <div className="invalid-feedback">
                        Select Product Image.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        placeholder="Enter Description"
                        required
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">
                        Please enter Description.
                      </div>
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
                  <h4 className="card-title">Product Items</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-responsive-md">
                      <thead>
                        <tr>
                          <th style={{ width: 80 }}>#</th>
                          <th>Product Name</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Category</th>
                          {/* <th>Product Image</th> */}
                          <th>Description</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr key={product.id}>
                            <td>
                              <strong className="text-black">
                                {String(product.id).padStart(2, "0")}
                              </strong>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src={product.productImage}
                                  className="rounded-lg me-2"
                                  width={70}
                                  alt
                                />
                                <span className="w-space-no">
                                  {product.productName}
                                </span>
                              </div>
                            </td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            {/* <td>
                              {product.productImage ? (
                                <img
                                  src={product.productImage}
                                  alt={product.productName}
                                  style={{ width: "50px", height: "50px" }}
                                />
                              ) : (
                                "No Image"
                              )}
                            </td> */}
                            <td>{product.description}</td>
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
                                    onClick={() => handleEdit(product)}
                                  >
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => handleDelete(product.id)}
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

export default ManageProducts;
