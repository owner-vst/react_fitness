import React, { useEffect, useState } from "react";
import useManageOrders from "../../../hooks/admin/useManageOrders";

function AdminOrders() {
  const {
    orders,
    orderItems,
    products,
    fetchOrders,
    fetchOrderItems,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem,
    updateOrder,
    deleteOrder,
  } = useManageOrders();

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    unitPrice: "",
    quantity: "",
    totalPrice: "",
    product_id: "",
    order_id: "",
    user_id: "",
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState(null);

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
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
    if (name === "name") {
      const selectedProduct = products.find(
        (product) => product.name === value
      );
      setFormData((prevData) => ({
        ...prevData,
        name: value,
        unitPrice: selectedProduct?.price?.toString() || "",
        product_id: selectedProduct?.id || "",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const requiredFields = {
      product_id: products.find((product) => product.name === formData.name)
        ?.id,
      order_id: currentOrderId,
      user_id: orders.find((order) => order.id === currentOrderId)?.user_id,
      quantity: parseInt(formData.quantity),
      price: parseFloat(formData.unitPrice),
    };

    if (isEditMode) {
      await updateOrderItem(formData.id, requiredFields);
    } else {
      await createOrderItem(requiredFields);
    }
    await fetchOrders();
    setFormData({
      id: null,
      name: "",
      unitPrice: "",
      quantity: "",
      totalPrice: "",
    });
    setIsEditMode(false);
    form.classList.remove("was-validated");
    fetchOrderItems(currentOrderId); // Refresh order items
  };

  const handleEdit = (item) => {
    setFormData({
      id: item.id,
      name: products.find((product) => product.id === item.product_id)?.name,
      unitPrice: item.price.toString(),
      quantity: item.quantity.toString(),
      totalPrice: (item.price * item.quantity).toString(),
    });
    setIsEditMode(true);
  };

  const handleDelete = async (id) => {
    await deleteOrderItem(id);
    await fetchOrders();
    fetchOrderItems(currentOrderId); // Refresh order items
  };

  const handleOrderEdit = (order) => {
    setFormData({
      id: order.id,
      status: order.status,
    });
    setIsEditMode(true);
  };

  const handleOrderDelete = (id) => {
    deleteOrder(id);
  };

  const handleOrderStatusChange = async () => {
    // e.preventDefault();
    // const form = e.target;
    // if (!form.checkValidity()) {
    //   form.classList.add("was-validated");
    //   return;
    // }

    const requiredFields = {
      status: formData.status,
    };

    await updateOrder(formData.id, requiredFields);
    await fetchOrders();
    setFormData({
      id: null,
      status: "",
    });
    setIsEditMode(false);
    // form.classList.remove("was-validated");
  };

  const handleInfoClick = (orderId) => {
    setCurrentOrderId(orderId);
    fetchOrderItems(orderId);
  };

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="modal fade" id="editOrderModal">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Order Items</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <form
                  className="needs-validation"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Product Name</label>
                      <select
                        name="name"
                        className="form-control"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Choose Product
                        </option>
                        {products.map((product) => (
                          <option key={product.id}>{product.name}</option>
                        ))}
                      </select>
                      <div className="invalid-feedback">
                        Please select Product Name.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Unit Price</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Unit Price"
                        required
                        name="unitPrice"
                        value={formData.unitPrice}
                        onChange={handleChange}
                        readOnly
                      />
                      <div className="invalid-feedback">
                        Please enter Unit Price.
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
                  </div>

                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">
                      {isEditMode ? "Edit" : "Add"}
                    </button>
                  </div>
                </form>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Cart Items</h4>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-responsive-md">
                            <thead>
                              <tr>
                                <th style={{ width: 80 }}>#</th>
                                <th>IMAGE</th>
                                <th>NAME</th>
                                <th>UNIT PRICE</th>
                                <th>QUANTITY</th>
                                <th>TOTAL PRICE</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {orderItems.map((item) => (
                                <tr key={item.id}>
                                  <td>
                                    <strong className="text-black">
                                      {String(item.id).padStart(2, "0")}
                                    </strong>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src={
                                          item.product?.image_url ||
                                          "/path/to/default/image.jpg"
                                        }
                                        className="rounded-lg me-2"
                                        width={70}
                                        alt={
                                          item.product?.name || "Product Image"
                                        }
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    {item.product?.name || "Unknown Product"}
                                  </td>
                                  <td>${item.price}</td>
                                  <td>{item.quantity}</td>
                                  <td>${item.price * item.quantity}</td>
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
                                          Remove
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
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Orders List</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-responsive-md ">
                    <thead>
                      <tr>
                        <th style={{ width: 200 }}>Order ID</th>
                        <th>Username</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id}>
                          <td>
                            <strong className="text-black">
                              {String(order.id).padStart(2, "0")}
                            </strong>
                          </td>
                          <td>{order.name}</td>
                          <td>
                            {new Date(order.created_at).toLocaleDateString()}
                          </td>
                          <td>
                            {isEditMode && formData.id === order.id ? (
                              <form
                                className="needs-validation"
                                noValidate
                                onSubmit={handleOrderStatusChange}
                              >
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
                                  <option value="PENDING">Pending</option>
                                  <option value="DELIVERED">Delivered</option>
                                  <option value="CANCELLED">Cancelled</option>
                                </select>
                                {/* <button
                                  type="submit"
                                  className="btn btn-primary mt-2"
                                >
                                  Save
                                </button> */}
                              </form>
                            ) : (
                              <span
                                className={`badge ${
                                  order.status === "DELIVERED"
                                    ? "bg-success"
                                    : order.status === "PENDING"
                                    ? "bg-warning"
                                    : "bg-danger"
                                }`}
                              >
                                {order.status}
                              </span>
                            )}
                          </td>
                          <td>${order.total_price}</td>
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
                                    <rect x={0} y={0} width={24} height={24} />
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
                                  onClick={() => handleOrderEdit(order)}
                                >
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  onClick={() => handleOrderDelete(order.id)}
                                >
                                  Delete
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editOrderModal"
                                  onClick={() => handleInfoClick(order.id)}
                                >
                                  Info
                                </a>
                              </div>
                              {isEditMode && formData.id === order.id && (
                                <button
                                  className="btn btn-primary btn-sm ms-2"
                                  onClick={handleOrderStatusChange}
                                >
                                  Save
                                </button>
                              )}
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
  );
}

export default AdminOrders;
