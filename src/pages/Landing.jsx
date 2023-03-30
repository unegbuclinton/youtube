import React from "react";
import { useNavigate } from "react-router-dom";
import logologin from "../assets/images/loginLogo.png";
import landingLogo from "../assets/images/youtube.png";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center px-10 h-screen">
      <div className=" lg:w-1/4">
        <div className="flex justify-center">
          <img src={landingLogo} alt="" className="w-4/6 mb-6" />
        </div>
        <div>
          <div className="w-full bg-red rounded-xl px-5 py-3">
            <button
              onClick={() => navigate("/login")}
              className=" flex gap-5 justify-center items-center w-full border-none bg-white  py-3 text-sm font-semibold shadow-xxl"
            >
              <p className="bg-black rounded p-1">
                <img src={logologin} alt="" />
              </p>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
