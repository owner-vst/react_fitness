import { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const useDietPlan = () => {
  const [dietPlanItems, setDietPlanItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDietPlanItems = async (date) => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/api/user/get-diet-plan`, {
        withCredentials: true,
        params: { date },
      });
      setDietPlanItems(response.data.dietPlan);
      console.log("from hook", response.data.dietPlan);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const updateDietPlanItem = async (planItemId, quantity, status) => {
    try {
      const response = await axios.put(
        `${apiUrl}/api/user/update-diet-plan`,
        {
          planItemId,
          quantity,
          status,
        },
        {
          withCredentials: true,
        }
      );
      setDietPlanItems((prevItems) =>
        prevItems.map((item) =>
          item.id === planItemId ? { ...item, status, quantity } : item
        )
      );
      return response.data;
    } catch (err) {
      setError(err);
    }
  };

  const deleteDietPlanItem = async (planItemId) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/api/user/delete-diet-plan/${planItemId}`,
        {
          withCredentials: true,
        }
      );
      setDietPlanItems((prevItems) =>
        prevItems.filter((item) => item.id !== planItemId)
      );
      return response.data;
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    const today = new Date();
    console.log(today);

    const formattedDate =
      today.getFullYear() +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + today.getDate()).slice(-2);

    console.log(formattedDate);

    fetchDietPlanItems(formattedDate);
  }, []);

  return {
    dietPlanItems,
    loading,
    error,
    fetchDietPlanItems,
    updateDietPlanItem,
    deleteDietPlanItem,
  };
};

export default useDietPlan;
