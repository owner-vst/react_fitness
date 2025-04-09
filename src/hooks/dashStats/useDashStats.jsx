import axios from "axios";
import { use, useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;
const useDashStats = () => {
  const [adminDashboardStats, setAdminDashboardStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAdminDashStats = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${apiUrl}/api/admin/admin-dashboard`, {
        withCredentials: true,
      });
      setAdminDashboardStats(response.data);
      console.log(response.data);
    } catch (err) {
      setError(err.response ? err.response.data : "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return {
    adminDashboardStats,
    loading,
    error,
    fetchAdminDashStats,
  };
};

export default useDashStats;
