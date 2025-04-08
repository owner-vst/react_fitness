import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = import.meta.env.VITE_API_URL;

const useWorkoutPlan = () => {
  const [workoutPlanItems, setWorkoutPlanItems] = useState([]); // Store workout plan items
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch workout plan items for a specific date
  const fetchWorkoutPlanItems = async (date) => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/api/user/get-workout-plan`, {
        withCredentials: true,
        params: { date },
      });

      setWorkoutPlanItems(response.data.workoutPlans);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  // Update the workout plan item (e.g., status or duration)
  const updateWorkoutPlanItem = async (planItemId, status, duration) => {
    try {
      const response = await axios.put(
        `${apiUrl}/api/user/update-workout-plan-item`,
        {
          planItemId,
          status,
          duration,
        },
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
      }
      setWorkoutPlanItems((prevItems) =>
        prevItems.map((item) =>
          item.id === planItemId ? { ...item, status, duration } : item
        )
      );
      return response.data;
    } catch (err) {
      setError(err);
    }
  };

  // Delete a workout plan item
  const deleteWorkoutPlanItem = async (planItemId) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/api/user/delete-workout-plan-item/${planItemId}`,
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
      }
      setWorkoutPlanItems((prevItems) =>
        prevItems.filter((item) => item.id !== planItemId)
      );
      return response.data;
    } catch (err) {
      setError(err);
    }
  };
  const suggestWorkplan = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/common/suggest-workout-plan`,

        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        toast.success("PLan created successfully");
      }
      return response.data;
    } catch (err) {
      setError(err);
    }
  };
  // // UseEffect to fetch workout plan items on component mount
  // useEffect(() => {
  //   const today = new Date();
  //   const formattedDate =
  //     today.getFullYear() +
  //     "-" +
  //     ("0" + (today.getMonth() + 1)).slice(-2) +
  //     "-" +
  //     ("0" + today.getDate()).slice(-2);
  //   fetchWorkoutPlanItems(formattedDate); // Fetch workout plan items for today's date
  // }, []);

  return {
    workoutPlanItems, // Fetched workout plan items
    loading, // Loading state
    error, // Error state
    fetchWorkoutPlanItems, // Function to fetch workout plan items
    updateWorkoutPlanItem, // Function to update a workout plan item
    deleteWorkoutPlanItem, // Function to delete a workout plan item
    suggestWorkplan,
  };
};

export default useWorkoutPlan;
