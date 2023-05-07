import "../assets/styles/VideoCard.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardFooter from "./DashboardFooter";
import Notification from "./Notification";

const Dashboardlayout = ({ children }) => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  const loadItems = () => {
    const container = containerRef.current;
    if (
      container.scrollTop + container.clientHeight >=
      container.scrollHeight
    ) {
      dispatch(pageCounter());
      dispatch(updateProfileVideosList(pageNumber));
    }
  };

  return (
    <div className="relative">
      <Notification />
      <div className="relative overflow-scroll flex flex-col items-center bg-hero-pattern h-screen ">
        <div ref={containerRef} onScroll={loadItems} className="app__video">
          {children}
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default Dashboardlayout;
