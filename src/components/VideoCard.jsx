import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./image.css";
import Stamps from "./Stamps";
import VideoAddons from "./VideoAddons";
const VideoCard = ({ videos }) => {
  const [controls, setControls] = useState(false);
  const addControl = () => {
    setControls((prev) => !prev);
  };
  const { userData } = useSelector((state) => state.dashboard);
  const { limit, nextTime } = userData;

  return (
    <>
      {videos?.map(
        (
          { URL, profileImage, caption, comments, id, likes, profileName },
          idx
        ) => (
          <div key={idx} className="relative mb-2" onClick={addControl}>
            <video src={URL}></video>
            <Stamps likes={likes} comments={comments} id={id} />
            <VideoAddons
              caption={caption}
              profileName={profileName}
              profileImage={profileImage}
              src={profileImage}
            />
          </div>
        )
      )}
    </>
  );
};

export default VideoCard;
