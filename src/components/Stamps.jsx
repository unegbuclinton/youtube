import React from "react";
import likes from "../assets/images/icons/svgs/filled-heart.svg";
import comments from "../assets/images/icons/svgs/comments.svg";
import share from "../assets/images/icons/svgs/share.svg";
const Stamps = () => {
  return (
    <div className=" flex flex-col justify-center items-center absolute bottom-28 right-3 z-10 text-sm text-white font-medium">
      <div className="flex flex-col items-center mb-3">
        <img src={likes} alt="like" />
        <p className="mt-1">1.3M</p>
      </div>
      <div className="flex flex-col items-center mb-3">
        <img src={comments} alt="comments" />
        <p className="mt-1">10.5M</p>
      </div>
      {/* <div className="flex flex-col items-center mb-3">
        <img src={share} alt="comments" />
      </div> */}
    </div>
  );
};

export default Stamps;
