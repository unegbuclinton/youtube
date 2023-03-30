import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../assets/images/home.png";
import wallet from "../assets/images/wallet.png";
import signout from "../assets/images/icons/svgs/logout.svg";

const DashboardFooter = () => {
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };
  return (
    <div className="flex justify-center items-center gap-8 fixed bottom-0 bg-black h-[4rem] w-full z-20">
      <img src={Home} alt="" onClick={() => navigate("/dashboard")} />
      <img src={wallet} alt="" />
      <div
        onClick={checkout}
        className="flex justify-center items-center text-black bg-white py-3 px-4 text-sm font-semibold rounded-2xl"
      >
        SAIR
      </div>
      <img src={signout} alt="" />
    </div>
  );
};

export default DashboardFooter;
