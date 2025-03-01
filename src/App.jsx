import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashLayout from "./components/Layouts/DashLayout/DashLayout";
import Demo from "./components/Custom/Demo";
import NewChat from "./components/Custom/Chat/NewChat";
import AuthLayout from "./components/Layouts/AuthLayout/AuthLayout";
import Login from "./components/Pages/Auth/Login";
import Signup from "./components/Pages/Auth/Signup";
import Verify from "./components/Pages/Auth/Verify";
import Forgot from "./components/Pages/Auth/Forgot";
import DashBoardAdmin from "./components/Custom/admin/DashBoardAdmin";
import DashBoardVendor from "./components/Custom/vendor/DashBoardVendor";
import DashBoardUser from "./components/Custom/user/DashBoardUser";
import ProductGrid from "./components/Custom/shop/ProductGrid";
import Cart from "./components/Custom/shop/Cart";
import WishList from "./components/Custom/shop/WishList";
import Checkout from "./components/Custom/shop/Checkout";
import PaymentSuccess from "./components/Custom/shop/PaymentSuccess";
import PaymentFailed from "./components/Custom/shop/PaymentFailed";
import ProductDetail from "./components/Custom/shop/ProductDetail";
import Orders from "./components/Custom/shop/Orders";
import WorkoutPlan from "./components/Custom/workout-plan/WorkoutPlan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashLayout />}>
          <Route index element={<Demo />} />
        </Route>
        <Route path="/dashboard/user" element={<DashLayout />}>
          <Route index element={<DashBoardUser />} />
          <Route path="workoutplan" element={<Demo />} />
          <Route path="dietplan" element={<Demo />} />
          <Route path="shop" element={<Demo />} />
          <Route path="orders" element={<Demo />} />
          <Route path="wishlist" element={<Demo />} />
          <Route path="cart" element={<Demo />} />
          <Route path="personalrecord" element={<Demo />} />
          <Route path="settings" element={<Demo />} />
          <Route path="chat" element={<NewChat />} />
        </Route>
        <Route path="/dashboard/admin" element={<DashLayout />}>
          <Route index element={<DashBoardAdmin />} />
          <Route path="workoutplan" element={<WorkoutPlan />} />
          <Route path="dietplan" element={<Demo />} />
          <Route path="shop" element={<ProductGrid />} />
          <Route path="productdetail" element={<ProductDetail />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment" element={<PaymentSuccess />} />
          <Route path="paymentfailed" element={<PaymentFailed />} />
          <Route path="cart" element={<Cart />} />
          <Route path="personalrecord" element={<Demo />} />
          <Route path="settings" element={<Demo />} />
          <Route path="chat" element={<NewChat />} />
        </Route>
        <Route path="/dashboard/vendor" element={<DashLayout />}>
          <Route index element={<DashBoardVendor />} />
          <Route path="workoutplan" element={<Demo />} />
          <Route path="dietplan" element={<Demo />} />
          <Route path="shop" element={<Demo />} />
          <Route path="orders" element={<Demo />} />
          <Route path="wishlist" element={<Demo />} />
          <Route path="cart" element={<Demo />} />
          <Route path="personalrecord" element={<Demo />} />
          <Route path="settings" element={<Demo />} />
          <Route path="chat" element={<NewChat />} />
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
