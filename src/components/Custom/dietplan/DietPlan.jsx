import { useEffect, useState } from "react";
import useDietPlan from "../../../hooks/dieplan/useDietPlan";
import Diet from "../charts/Diet";
import Workout from "../charts/Workout";
import { CalenderCustom } from "../calender/CalenderCustom";

function DietPlan() {
  const {
    dietPlanItems, // Provide a default empty array
    foodItems,
    loading,
    error,
    fetchDietPlanItems,
    updateDietPlanItem,
    createFoodLog,
    createFoodItem,
    suggestDietPlan,
    deleteDietPlanItem,
    getFoodItems,
  } = useDietPlan();

  const [editedItems, setEditedItems] = useState({});
  const [mealType, setMealType] = useState("");
  const [foodId, setFoodId] = useState("");
  const [quantityFoodLog, setQuantityFoodLog] = useState("");
  const [newFoodItem, setNewFoodItem] = useState({
    name: "",
    calories: 0,
    fats: 0,
    carbs: 0,
    protein: 0,
    serving_size_gm: 0,
  });

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
    fetchDietPlanItems(formattedDate);
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
        fetchDietPlanItems(formattedDate);
      }
    }

    // Clear after saving
    setEditedItems({});
  };
  const handleSubmitFoodLog = async (e) => {
    e.preventDefault();

    await createFoodLog(
      parseInt(foodId),
      mealType,
      parseFloat(quantityFoodLog)
    );
    fetchDietPlanItems(formattedDate);
  };
  const handleSubmitAddFoodItem = async (e) => {
    e.preventDefault();
    await createFoodItem(newFoodItem);
    getFoodItems();

    setNewFoodItem({
      name: "",
      calories: 0,
      fats: 0,
      carbs: 0,
      protein: 0,
      serving_size_gm: 0,
    });
  };
  const today = new Date();

  const formattedDate =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2);

  useEffect(() => {
    fetchDietPlanItems(formattedDate);
    if (!foodItems || foodItems.length === 0) {
      getFoodItems();
    }
  }, [dietPlanItems, fetchDietPlanItems, foodItems]);

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
                                <span className="date-icon me-3">{today.getDate()}</span>
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
                              <form onSubmit={handleSubmitAddFoodItem}>
                                <div className="form-group">
                                  <label>Food Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Food Name"
                                    value={newFoodItem.name}
                                    onChange={(e) =>
                                      setNewFoodItem({
                                        ...newFoodItem,
                                        name: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Calories</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Calories"
                                    value={newFoodItem.calories}
                                    onChange={(e) =>
                                      setNewFoodItem({
                                        ...newFoodItem,
                                        calories: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Fats</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Fats"
                                    value={newFoodItem.fats}
                                    onChange={(e) =>
                                      setNewFoodItem({
                                        ...newFoodItem,
                                        fats: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Carbs</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Carbs"
                                    value={newFoodItem.carbs}
                                    onChange={(e) =>
                                      setNewFoodItem({
                                        ...newFoodItem,
                                        carbs: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Protein</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Protein"
                                    value={newFoodItem.protein}
                                    onChange={(e) =>
                                      setNewFoodItem({
                                        ...newFoodItem,
                                        protein: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Serving Size (gm)</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Serving Size (gm)"
                                    value={newFoodItem.serving_size_gm}
                                    onChange={(e) =>
                                      setNewFoodItem({
                                        ...newFoodItem,
                                        serving_size_gm: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
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
                        className="btn btn-outline-primary rounded me-3"
                        onClick={suggestDietPlan}
                      >
                        Suggest Diet Plan
                      </a>

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
                              <form onSubmit={handleSubmitFoodLog}>
                                <div className="form-group">
                                  <label>Food Item</label>
                                  <select
                                    name="foodId"
                                    value={foodId}
                                    onChange={(e) => setFoodId(e.target.value)}
                                    className="form-control input-btn input-number "
                                    defaultValue=""
                                    style={{
                                      maxHeight: "100px", // Set the max height for the dropdown
                                      overflowY: "auto", // Enable vertical scrolling when the list exceeds the max height
                                      display: "block", // Ensure the select box takes up space and is visible
                                    }}
                                  >
                                    <option value="" disabled>
                                      Select a food item
                                    </option>
                                    {foodItems.map((food) => (
                                      <option key={food.id} value={food.id}>
                                        {food.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>

                                <div className="form-group">
                                  <label>Meal Type</label>
                                  <select
                                    name="status"
                                    className="form-control input-btn input-number "
                                    defaultValue=""
                                    value={mealType}
                                    onChange={(e) =>
                                      setMealType(e.target.value)
                                    }
                                    required
                                  >
                                    <option value="" disabled>
                                      Select a Meal Type
                                    </option>
                                    <option value="BREAKFAST">Breakfast</option>
                                    <option value="LUNCH">Lunch</option>
                                    <option value="DINNER">Dinner</option>
                                    <option value="SNACK">Snack</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <label>Quantity</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Quantity"
                                    value={quantityFoodLog}
                                    onChange={(e) =>
                                      setQuantityFoodLog(e.target.value)
                                    }
                                    required
                                  />
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Add Food Log
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a
                        className="btn btn-outline-primary rounded"
                        onClick={handleSaveChanges}
                      >
                        Update Workout Log
                      </a>
                      {/* <button
                        className="btn btn-primary"
                        onClick={handleSaveChanges}
                      >
                        Save
                      </button> */}
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
