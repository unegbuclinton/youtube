import React from "react";
import { useNavigate } from "react-router-dom";
import wallet from "../assets/images/shots.png";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";

const DashboardFooter = () => {
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };
  return (
    <div className="flex justify-evenly items-center fixed bottom-0 bg-black h-[3.5rem] w-full z-20">
      <div>
        <GrHomeRounded size="30" fill="#fff" />
      </div>
      <img src={wallet} alt="" />
      <IoIosAddCircleOutline fill="#fff" size="45" />

      <MdOutlineSubscriptions fill="#fff" size="30" />

      <MdVideoLibrary fill="#fff" size="30" />
    </div>
  );
};

export default DashboardFooter;
