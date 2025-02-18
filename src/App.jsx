import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashLayout from "./components/Layouts/DashLayout/DashLayout";
import Demo from "./components/Custom/Demo";
import AuthLayout from "./components/Layouts/AuthLayout/AuthLayout";
import Login from "./components/Pages/Auth/Login";
import Signup from "./components/Pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashLayout />}>
          <Route index element={<Demo />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
