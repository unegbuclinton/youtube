import React, { useEffect } from "react";
import DashboardFooter from "./DashboardFooter";
import Notification from "./Notification";

const Dashboardlayout = ({ children, notify }) => {
  return (
    <div className="relative">
      {notify && <Notification />}
      <div className="relative overflow-hidden flex flex-col items-center bg-hero-pattern h-screen ">
        {children}
        <DashboardFooter />
      </div>
    </div>
  );
};

export default Dashboardlayout;
