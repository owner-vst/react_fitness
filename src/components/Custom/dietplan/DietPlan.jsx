import { useEffect, useState } from "react";
import useDietPlan from "../../../hooks/dieplan/useDietPlan";
import Diet from "../charts/Diet";
import Workout from "../charts/Workout";
import { CalenderCustom } from "../calender/CalenderCustom";

function DietPlan() {
  const cartItems = [
    {
      id: 1,
      foodItem: "Salad",
      carbs: 10,
      protein: 5,
      fats: 3,
      quantity: "250g",
    },
    {
      id: 2,
      foodItem: "Rice",
      carbs: 50,
      protein: 6,
      fats: 1,
      quantity: "200g",
    },
    {
      id: 3,
      foodItem: "Fruit bowl",
      carbs: 10,
      protein: 5,
      fats: 3,
      quantity: "250g",
    },
    // More items...
  ];
  const {
    dietPlanItems, // Provide a default empty array
    loading,
    error,
    fetchDietPlanItems,
    updateDietPlanItem,
    deleteDietPlanItem,
  } = useDietPlan();

  const [editedItems, setEditedItems] = useState({});

  const handleQuantityChange = (planItemId, quantity) => {
    setEditedItems((prev) => ({
      ...prev,
      [planItemId]: {
        ...prev[planItemId],
        quantity: parseInt(quantity, 10),
        // Keep the status value intact if it is already set in editedItems
        status:
          prev[planItemId]?.status ??
          dietPlanItems
            .flatMap((plan) => plan.items)
            .find((item) => item.id === planItemId)?.status ??
          "PENDING", // Default to 'PENDING' if no status is found
      },
    }));
  };

  const handleStatusChange = (planItemId, status) => {
    setEditedItems((prev) => ({
      ...prev,
      [planItemId]: {
        ...prev[planItemId],
        status, // Update status
        quantity:
          prev[planItemId]?.quantity ??
          dietPlanItems
            .flatMap((plan) => plan.items)
            .find((item) => item.id === planItemId)?.quantity ??
          0, // Keep quantity unchanged if not provided
      },
    }));
  };

  const handleDeleteItem = async (planItemId) => {
    await deleteDietPlanItem(planItemId);
  };
  const handleSaveChanges = async () => {
    const updates = Object.entries(editedItems);
    for (const [id, values] of updates) {
      const itemId = parseInt(id, 10);
      const existingItem = dietPlanItems
        .flatMap((plan) => plan.items)
        .find((item) => item.id === itemId);

      if (
        existingItem &&
        (existingItem.quantity !== values.quantity ||
          existingItem.status !== values.status)
      ) {
        await updateDietPlanItem(itemId, values.quantity, values.status);
      }
    }

    // Clear after saving
    setEditedItems({});
  };

  const today = new Date();
  console.log(today);

  const formattedDate =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2);

  useEffect(() => {
    if (!dietPlanItems || dietPlanItems.length === 0) {
      fetchDietPlanItems(formattedDate); // Trigger the fetch if not already done
    }
  }, [dietPlanItems, fetchDietPlanItems]);
  console.log("from comp", dietPlanItems);
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <div className="content-body">
        {/* row */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-xxl-4">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card flex-xl-column flex-md-row flex-column">
                    <div className="card-body border-bottom pb-4 p-2 event-calender">
                      <input
                        type="text"
                        className="form-control d-none"
                        id="datetimepicker1"
                      />

                      {/* <CalenderCustom/> */}
                    </div>

                    <div className="card-body">
                      <h6 className="fs-16 text-black mb-4">
                        Suggested Today's Diet Plan
                      </h6>

                      {dietPlanItems && dietPlanItems.length > 0 ? (
                        dietPlanItems.map((dietPlan) => (
                          <div key={dietPlan.id}>
                            {dietPlan.items.map((item) => (
                              <div
                                key={item.id}
                                className="d-flex mb-4 align-items-center"
                              >
                                <span className="date-icon me-3">2</span>
                                <div>
                                  <h6 className="fs-16">
                                    <a href="#" className="text-black">
                                      {item.foodItem}
                                    </a>
                                  </h6>
                                  <span>{item.status}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        ))
                      ) : (
                        <div>No diet plan items found for today.</div>
                      )}
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#addNewPlan"
                        className="btn btn-outline-primary rounded"
                      >
                        Add New Food Item
                      </a>
                      {/* Modal */}
                      <div className="modal fade" id="addNewPlan">
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Add New Food Item</h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="form-group">
                                  <label>Food Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Food Name"
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Calories</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Calories"
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Fats</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Fats"
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Carbs</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Carbs"
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Protein</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Protein"
                                  />
                                </div>
                                <button className="btn btn-primary">
                                  Add Food Item
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
            <div className="col-xl-9 col-xxl-8">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card plan-list">
                    <div className="card-header d-sm-flex d-block pb-0 border-0 ">
                      <div className="me-auto pe-3">
                        <h4 className="text-black fs-20">Plan List</h4>
                      </div>

                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#addNewPlan1"
                        className="btn btn-outline-primary rounded me-3"
                      >
                        Add Food Log
                      </a>

                      {/* Modal */}
                      <div className="modal fade" id="addNewPlan1">
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Add Food Log</h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="form-group">
                                  <label>Food Item</label>
                                  <select
                                    name="status"
                                    className="form-control input-btn input-number "
                                    defaultValue=""
                                  >
                                    <option value="" disabled>
                                      Select a food item
                                    </option>
                                    <option value="Salad">Salad</option>
                                    <option value="Rice">Rice</option>
                                    <option value="Pizza">Pizza</option>
                                    <option value="Burger">Burger</option>
                                    <option value="Sandwich">Sandwich</option>
                                  </select>
                                </div>

                                <div className="form-group">
                                  <label>Meal Type</label>
                                  <select
                                    name="status"
                                    className="form-control input-btn input-number "
                                    defaultValue=""
                                  >
                                    <option value="" disabled>
                                      Select a Meal Type
                                    </option>
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Lunch">Lunch</option>
                                    <option value="Dinner">Dinner</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <label>Quantity</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Quantity"
                                  />
                                </div>
                                <button className="btn btn-primary">
                                  Add Food Log
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-primary rounded"
                      >
                        Update Workout Log
                      </a>
                      <button
                        className="btn btn-primary"
                        onClick={handleSaveChanges}
                      >
                        Save
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-responsive-md">
                          <thead>
                            <tr>
                              <th style={{ width: 80 }}>#</th>
                              <th>Food Item</th>
                              <th>Carbs</th>
                              <th>Protein</th>
                              <th>Fats</th>
                              <th>Quantity</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dietPlanItems.map((dietPlan) =>
                              dietPlan.items.map((item) => (
                                <tr key={item.id}>
                                  <td>
                                    <strong className="text-black">
                                      {String(item.id).padStart(2, "0")}
                                    </strong>
                                  </td>
                                  <td>{item.foodItem}</td>
                                  <td>{item.carbs}</td>
                                  <td>{item.protein}</td>
                                  <td>{item.fats}</td>
                                  <td>
                                    <input
                                      type="number"
                                      className="form-control"
                                      value={
                                        editedItems[item.id]?.quantity ??
                                        item.quantity
                                      }
                                      onChange={(e) =>
                                        handleQuantityChange(
                                          item.id,
                                          e.target.value
                                        )
                                      }
                                    />
                                  </td>
                                  <td>
                                    <div className="dropdown mt-sm-0 mt-3">
                                      <select
                                        name="status"
                                        className="form-control input-btn input-number"
                                        value={
                                          editedItems[item.id]?.status ??
                                          item.status
                                        }
                                        onChange={(e) =>
                                          handleStatusChange(
                                            item.id,
                                            e.target.value
                                          )
                                        }
                                      >
                                        <option value="PENDING">Pending</option>
                                        <option value="COMPLETED">
                                          Completed
                                        </option>
                                      </select>
                                    </div>
                                  </td>
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
                                        <a className="dropdown-item" href="#">
                                          Edit
                                        </a>
                                        <a
                                          className="dropdown-item"
                                          href="#"
                                          onClick={() =>
                                            handleDeleteItem(item.id)
                                          }
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-12 col-xxl-12 col-md-6 ">
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <h5 className="text-black fs-20 mb-0">
                        Weekly Diet Progress
                      </h5>
                    </div>
                    <br></br>
                    <Diet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleSaveChanges}>
        Save Changes
      </button>
    </div>
  );
}

export default DietPlan;
