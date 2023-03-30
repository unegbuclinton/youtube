import dayjs from "dayjs";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ReactPlayer from "react-player/youtube";
import { useDispatch, useSelector } from "react-redux";
// import { DPIconFilledHeart, DPIconHeart } from "../assets/images/icons";
import { getUserData, likeAPost } from "../redux/DashboardSlice";
import "./image.css";
import Stamps from "./Stamps";
const VideoCard = ({ videos }) => {
  const [controls, setControls] = useState(false);
  const addControl = () => {
    setControls((prev) => !prev);
  };
  const { userData } = useSelector((state) => state.dashboard);
  const { limit, nextTime } = userData;
  const dispatch = useDispatch();
  const [forLike, setForLike] = useState(false);
  const formatDate = dayjs(nextTime).format("ddd DD/MM hh:mm");
  const getLike = () => {
    setForLike((prev) => !prev);
    dispatch(likeAPost(id)).then(() => {
      dispatch(getUserData());
      if (!limit) return;
      toast.error(
        `You have reached your 100 likes daily limit! Come back at ${formatDate}`
      );
    });
  };

  return (
    <>
      {videos?.map(({ urls }, idx) => (
        <div key={idx} className="relative" onClick={addControl}>
          <Stamps />
          <ReactPlayer
            // muted={true}
            // playing={true}
            // controls={controls}
            width="100%"
            height="440px"
            url={urls}
          />
        </div>
      ))}
    </>
  );
};

export default VideoCard;
