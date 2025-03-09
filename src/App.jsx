import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashLayout from "./components/Layouts/DashLayout/DashLayout";

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
import DietPlan from "./components/Custom/dietplan/DietPlan";
import PersonalRecord from "./components/Custom/personal-record/PersonalRecord";
import WorkoutStats from "./components/Custom/Workout Stats/WorkoutStats";
import Settings from "./components/Custom/Settings/Settings";
import ManageWorkoutPlan from "./components/Custom/admin/ManageWorkoutPlan/ManageWorkoutPlan";
import ManageWorkoutLog from "./components/Custom/admin/ManageWorkoutLog/ManageWorkoutLog";
import ManageActivity from "./components/Custom/admin/ManageActivity/ManageActivity";
import ManageDietPlan from "./components/Custom/admin/ManageDietPlan/ManageDietPlan";
import ManageFoodCatalogue from "./components/Custom/admin/ManageFoodCatalogue/ManageFoodCatalogue";
import ManageFoodLog from "./components/Custom/admin/ManageFoodLog/ManageFoodLog";
import ManageOrders from "./components/Custom/admin/ManageOrders/ManageOrders";
import ManageProducts from "./components/Custom/admin/ManageProducts/ManageProducts";
import ManageUsers from "./components/Custom/admin/ManageUsers/ManageUsers";
import Integrations from "./components/Custom/admin/Integrations/Integrations";
import LandingLayout from "./components/Layouts/LandingLayout/LandingLayout";
import Homepage from "./components/Pages/Landing/HomePage";
import About from "./components/Pages/Landing/About";
import Contact from "./components/Pages/Landing/Contact";
import AdminOrders from "./components/Custom/shop/AdminOrders";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/dashboard/user" element={<DashLayout />}>
          <Route index element={<DashBoardUser />} />
          <Route path="workoutplan" element={<WorkoutPlan />} />
          <Route path="dietplan" element={<DietPlan />} />
          <Route path="shop" element={<ProductGrid />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment" element={<PaymentSuccess />} />
          <Route path="paymentfailed" element={<PaymentFailed />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="personalrecord" element={<PersonalRecord />} />
          <Route path="settings" element={<Settings />} />

          <Route path="chat" element={<NewChat />} />
        </Route>
        <Route path="/dashboard/admin" element={<DashLayout />}>
          <Route index element={<DashBoardAdmin />} />
          <Route path="workoutplan" element={<WorkoutPlan />} />
          <Route path="manageworkoutplan" element={<ManageWorkoutPlan />} />
          <Route path="manageworkoutlog" element={<ManageWorkoutLog />} />
          <Route path="manageactivity" element={<ManageActivity />} />
          <Route path="dietplan" element={<DietPlan />} />
          <Route path="managedietplan" element={<ManageDietPlan />} />
          <Route path="managefoodcatalogue" element={<ManageFoodCatalogue />} />
          <Route path="managefoodlog" element={<ManageFoodLog />} />
          <Route path="shop" element={<ProductGrid />} />
          <Route path="productdetail" element={<ProductDetail />} />
          <Route path="orders" element={<AdminOrders />} />
          {/* <Route path="manageorders" element={<ManageOrders />} /> */}
          <Route path="manageproducts" element={<ManageProducts />} />
          <Route path="manageusers" element={<ManageUsers />} />
          {/* <Route path="wishlist" element={<WishList />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment" element={<PaymentSuccess />} />
          <Route path="paymentfailed" element={<PaymentFailed />} />
          <Route path="cart" element={<Cart />} /> */}
          <Route path="personalrecord" element={<PersonalRecord />} />
          <Route path="settings" element={<Settings />} />
          <Route path="integration" element={<Integrations />} />
          <Route path="chat" element={<NewChat />} />
          <Route path="workoutstat" element={<WorkoutStats />} />
        </Route>
        <Route path="/dashboard/vendor" element={<DashLayout />}>
          <Route index element={<DashBoardVendor />} />
          <Route path="workoutplan" element={<WorkoutPlan />} />
          <Route path="dietplan" element={<DietPlan />} />
          <Route path="shop" element={<ProductGrid />} />
          <Route path="orders" element={<AdminOrders />} />
          {/* <Route path="checkout" element={<Checkout />} /> */}
          {/* <Route path="manageorders" element={<ManageOrders />} /> */}
          <Route path="manageproducts" element={<ManageProducts />} />
          {/* <Route path="payment" element={<PaymentSuccess />} />
          <Route path="paymentfailed" element={<PaymentFailed />} /> */}
          {/* <Route path="wishlist" element={<WishList />} />
          <Route path="cart" element={<Cart />} /> */}
          <Route path="personalrecord" element={<PersonalRecord />} />
          <Route path="settings" element={<Settings />} />
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
