import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashLayout from "./components/Layouts/DashLayout/DashLayout";
import Demo from "./components/Custom/Demo";
import AuthLayout from "./components/Layouts/AuthLayout/AuthLayout";
import Login from "./components/Pages/Auth/Login";
import Signup from "./components/Pages/Auth/Signup";
import Verify from "./components/Pages/Auth/Verify";
import Forgot from "./components/Pages/Auth/Forgot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashLayout />}>
          <Route index element={<Demo />} />
        </Route>
        <Route path="/dashboard/user" element={<DashLayout />}>
          <Route index element={<Demo />} />
          <Route path="workoutplan" element={<Demo />} />
          <Route path="dietplan" element={<Demo />} />
          <Route path="shop" element={<Demo />} />
          <Route path="orders" element={<Demo />} />
          <Route path="wishlist" element={<Demo />} />
          <Route path="cart" element={<Demo />} />
          <Route path="personalrecord" element={<Demo />} />
          <Route path="settings" element={<Demo />} />
        </Route>
        <Route path="/dashboard/admin" element={<DashLayout />}>
          <Route index element={<Demo />} />
          <Route path="workoutplan" element={<Demo />} />
          <Route path="dietplan" element={<Demo />} />
          <Route path="shop" element={<Demo />} />
          <Route path="orders" element={<Demo />} />
          <Route path="wishlist" element={<Demo />} />
          <Route path="cart" element={<Demo />} />
          <Route path="personalrecord" element={<Demo />} />
          <Route path="settings" element={<Demo />} />
        </Route>
        <Route path="/dashboard/vendor" element={<DashLayout />}>
          <Route index element={<Demo />} />
          <Route path="workoutplan" element={<Demo />} />
          <Route path="dietplan" element={<Demo />} />
          <Route path="shop" element={<Demo />} />
          <Route path="orders" element={<Demo />} />
          <Route path="wishlist" element={<Demo />} />
          <Route path="cart" element={<Demo />} />
          <Route path="personalrecord" element={<Demo />} />
          <Route path="settings" element={<Demo />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="verify" element={<Verify />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
