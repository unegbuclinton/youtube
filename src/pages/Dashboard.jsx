import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import Dashboardlayout from "../components/Dashboardlayout";
import Stamps from "../components/Stamps";
import VideoCard from "../components/VideoCard";
// import ImageCard from "../components/ImageCard";

import {
  pageCounter,
  updateProfilesList,
  uploadProfiles,
} from "../redux/DashboardSlice";
import "./pages.css";
const Dashboard = () => {
  const [isFetching, setIsFetching] = useState(false);
  const listener = useRef(true);
  const { isLoading, pageNumber, profiles } = useSelector(
    (state) => state.dashboard
  );

  const dispatch = useDispatch();
  const increase = () => {
    dispatch(pageCounter());
    setIsFetching(false);
  };
  useEffect(() => {
    if (listener.current) {
      listener.current = false;
      dispatch(uploadProfiles(pageNumber));
    }
    const timer = setTimeout(() => {}, 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const divRef = useRef(null);
  const handleScroll = () => {
    const container = divRef.current;
    const scrollTop = container.scrollTop;
    const clientHeight = container.clientHeight;
    const scrollHeight = container.scrollHeight;
    const isAtBottom = scrollTop + clientHeight + 500 >= scrollHeight - 30;
    if (isAtBottom && !isLoading) {
      increase();
      dispatch(updateProfilesList(pageNumber));
    }
  };

  const videos = [
    {
      urls: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      urls: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      urls: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
  ];
  return (
    <Dashboardlayout>
      {isLoading ? (
        <div className="flex flex-col justify-center h-screen">
          <SyncLoader color="#af00ff" loading={true} size={10} />
        </div>
      ) : (
        <div
          ref={divRef}
          onScroll={handleScroll}
          className="layout mb-[4rem] overflow-auto"
        >
          <VideoCard videos={videos} />
        </div>
      )}
    </Dashboardlayout>
  );
};

export default Dashboard;
