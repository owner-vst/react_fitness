import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = import.meta.env.VITE_API_URL;

const useDietStats = () => {
  const [dietStats, setDietStats] = useState(null); // Store the weekly diet stats
  const [loading, setLoading] = useState(false); // Handle loading state
  const [error, setError] = useState(null); // Handle error state

  const fetchDietStats = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${apiUrl}/api/user/get-weekly-diet-stats`,
        {
          withCredentials: true,
        }
      );
      setDietStats(response.data); // Store the response data
    } catch (err) {
      setError(err.response ? err.response.data : "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Fetch diet stats when the component mounts
  useEffect(() => {
    fetchDietStats();
  }, []);

  return {
    dietStats, // The fetched diet stats
    loading, // Loading state
    error, // Error state
    fetchDietStats, // Function to manually trigger fetching stats
  };
};

export default useDietStats;
