import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const useForgot = () => {
  const [loading, setLoading] = useState(false);
  const forgotPassword = () => {};
  const reserPassword = () => {};
  return { loading, forgotPassword, reserPassword };
};
export default useForgot;
