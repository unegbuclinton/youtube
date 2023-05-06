import React from "react";

const VideoAddons = ({ caption, profileName, src }) => {
  return (
    <div className="pl-3 absolute bottom-10 text-white">
      <p className="text-sm mb-2 w-[75%]">{caption}</p>
      <div className="flex gap-2 items-center">
        <img src={src} alt="" className="w-[10%] h-[10%] rounded-full" />
        <p className="text-sm font-semibold">{profileName}</p>
        <p className="bg-red p-1 text-sm rounded-md">SUBSCRIBE</p>
      </div>
    </div>
  );
};

export default VideoAddons;
