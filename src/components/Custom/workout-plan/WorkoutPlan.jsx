import { useEffect, useState } from "react";
import useWorkoutPlan from "../../../hooks/workoutplan/useWorkoutPlan";
import Workout from "../charts/Workout";

function WorkoutPlan() {
  const {
    workoutPlanItems,
    loading,
    activities,
    error,
    fetchWorkoutPlanItems,
    updateWorkoutPlanItem,
    createActivity,
    deleteWorkoutPlanItem,
    createActivityLog,
    getActivites,
    suggestWorkplan,
  } = useWorkoutPlan();
  const [editedItems, setEditedItems] = useState({});
  const [activityId, setActivityId] = useState("");
  const [activityDuration, setActivityDuration] = useState("");
  const [newActivity, setNewActivity] = useState({
    name: "",
    duration: 0,
    calories_per_kg: 0,
  });
  const handleDurationChange = (planItemId, duration) => {
    setEditedItems((prev) => ({
      ...prev,
      [planItemId]: {
        ...prev[planItemId],
        duration: parseInt(duration, 10), // Change quantity to duration
        // Keep the status value intact if it is already set in editedItems
        status:
          prev[planItemId]?.status ??
          workoutPlanItems
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
        duration:
          prev[planItemId]?.duration ??
          workoutPlanItems
            .flatMap((plan) => plan.items)
            .find((item) => item.id === planItemId)?.duration ??
          0, // Keep duartion unchanged if not provided
      },
    }));
  };
  const handleSaveChanges = async () => {
    const updates = Object.entries(editedItems);
    for (const [id, values] of updates) {
      const itemId = parseInt(id, 10);
      const existingItem = workoutPlanItems
        .flatMap((plan) => plan.items)
        .find((item) => item.id === itemId);

      if (
        existingItem &&
        (existingItem.duration !== values.duration ||
          existingItem.status !== values.status)
      ) {
        await updateWorkoutPlanItem(itemId, values.status, values.duration);
        fetchWorkoutPlanItems(formattedDate);
      }
    }

    // Clear after saving
    setEditedItems({});
  };

  const handleDeleteItem = async (planItemId) => {
    console.log("in handle delete", planItemId);
    await deleteWorkoutPlanItem(planItemId);
    fetchWorkoutPlanItems(formattedDate);
  };
  const handleSubmitActivityLog = async (e) => {
    e.preventDefault();
    console.log("in handle activity log", activityId, activityDuration);
    await createActivityLog(
      parseInt(activityId, 10),
      parseInt(activityDuration, 10)
    );
    fetchWorkoutPlanItems(formattedDate);
  };
  const handleSubmitAddActivity = async (e) => {
    e.preventDefault();
    await createActivity(newActivity);
    getActivites();
    setNewActivity({
      name: "",
      duration: 0,
      calories_per_kg: 0,
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
    getActivites();
    fetchWorkoutPlanItems(formattedDate);
  }, []);

  console.log("in comp", workoutPlanItems);
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
                    </div>
                    <div className="card-body">
                      <h6 className="fs-16 text-black mb-4">
                        Suggested Today's Workout Plan
                      </h6>
                      {workoutPlanItems && workoutPlanItems.length > 0 ? (
                        workoutPlanItems.map((workoutPlan) => (
                          <div key={workoutPlan.id}>
                            {workoutPlan.items.map((item) => (
                              <div
                                key={item.id}
                                className="d-flex mb-4 align-items-center"
                              >
                                <span className="date-icon me-3">
                                  {today.getDate()}
                                </span>
                                <div>
                                  <h6 className="fs-16">
                                    <a href="#" className="text-black">
                                      {item.activity}
                                    </a>
                                  </h6>
                                  <span>{item.status}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        ))
                      ) : (
                        <div>No workout plan items found for today.</div>
                      )}

                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#addNewPlan"
                        className="btn btn-outline-primary rounded"
                      >
                        Add New Activity
                      </a>
                      {/* Modal */}
                      <div className="modal fade" id="addNewPlan">
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Add New Activity</h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <form onSubmit={handleSubmitAddActivity}>
                                <div className="form-group">
                                  <label>Activity Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Activity Name"
                                    value={newActivity.name}
                                    onChange={(e) =>
                                      setNewActivity({
                                        ...newActivity,
                                        name: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Duration</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Activity Unit"
                                    value={newActivity.duration}
                                    onChange={(e) =>
                                      setNewActivity({
                                        ...newActivity,
                                        duration: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Calories per kg</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Calories per kg"
                                    value={newActivity.calories_per_kg}
                                    onChange={(e) =>
                                      setNewActivity({
                                        ...newActivity,
                                        calories_per_kg: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <button className="btn btn-primary">
                                  Add New Activity
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
                        href="#"
                        className="btn btn-outline-primary rounded me-3"
                        onClick={suggestWorkplan}
                      >
                        Suggest Workout
                      </a>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#addNewPlan1"
                        className="btn btn-outline-primary rounded me-3"
                      >
                        Add Workout Log
                      </a>

                      {/* Modal */}
                      <div className="modal fade" id="addNewPlan1">
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Add Workout Log</h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <form onSubmit={handleSubmitActivityLog}>
                                <div className="form-group">
                                  <label>Activity</label>
                                  <select
                                    name="activityId"
                                    value={activityId}
                                    onChange={(e) =>
                                      setActivityId(e.target.value)
                                    }
                                    className="form-control input-btn input-number "
                                    defaultValue=""
                                    style={{
                                      maxHeight: "100px", // Set the max height for the dropdown
                                      overflowY: "auto", // Enable vertical scrolling when the list exceeds the max height
                                      display: "block", // Ensure the select box takes up space and is visible
                                    }}
                                  >
                                    <option value="" disabled>
                                      Select an activity
                                    </option>
                                    {activities.map((activity) => (
                                      <option
                                        key={activity.id}
                                        value={activity.id}
                                      >
                                        {activity.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>

                                <div className="form-group">
                                  <label>Duration</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Duration"
                                    value={activityDuration}
                                    onChange={(e) =>
                                      setActivityDuration(e.target.value)
                                    }
                                  />
                                </div>
                                <button className="btn btn-primary">
                                  Add Workout Log
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a
                        href="#"
                        className="btn btn-outline-primary rounded"
                        onClick={handleSaveChanges}
                      >
                        Update Workout Log
                      </a>
                      {/* Modal */}
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-responsive-md">
                          <thead>
                            <tr>
                              <th style={{ width: 80 }}>#</th>
                              <th>Activity</th>

                              <th>Duration</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {workoutPlanItems.map((workoutplan) =>
                              workoutplan.items.map((item) => (
                                <tr key={item.id}>
                                  <td>
                                    <strong className="text-black">
                                      {String(item.id).padStart(2, "0")}
                                    </strong>
                                  </td>
                                  <td>{item.activity}</td>

                                  <td>
                                    <input
                                      type="number"
                                      className="form-control"
                                      value={
                                        editedItems[item.id]?.duration ??
                                        item.duration
                                      }
                                      onChange={(e) =>
                                        handleDurationChange(
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
                                        className="form-control input-btn input-number "
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
                        Weekly Workout Progress
                      </h5>
                    </div>
                    <br></br>
                    <Workout />
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

export default WorkoutPlan;
