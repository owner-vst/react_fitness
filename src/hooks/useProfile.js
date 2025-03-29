import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useProfile = () => {
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const updateProfile = async (submittedData) => {
    console.log("inside update profile", submittedData);
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3000/common/update-profile",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submittedData),
        }
      );

      const data = await response.json();
      console.log("Data=", data);
      if (data.error) {
        throw new Error(data.error);
      }

      if (data.success) {
        toast.success(data.message);
        // Redirect to the dashboard
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, updateProfile };
};

export default useProfile;
