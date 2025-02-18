import DashFooter from "./DashFooter";
import DashHeader from "./DashHeader";
import NavHeader from "./NavHeader";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function DashLayout() {
  return (
    <div id="main-wrapper">
      <NavHeader />
      <DashHeader />
      <SideBar />
      <Outlet />
      <DashFooter />
    </div>
  );
}

export default DashLayout;
