import DashFooter from "./DashFooter";
import DashHeader from "./DashHeader";

import NavHeader from "./NavHeader";
import ProtoSidebar from "./ProtoSidebar";

import { Outlet } from "react-router-dom";

function DashLayout() {
  return (
    <div id="main-wrapper">
      <NavHeader />
      <DashHeader />

      <ProtoSidebar />

      <Outlet />
      <DashFooter />
    </div>
  );
}

export default DashLayout;
