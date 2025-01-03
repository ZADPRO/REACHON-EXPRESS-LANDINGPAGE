import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [menuStatus, setMenuStatus] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="w-full fixed top-0 left-0 z-50 bg-white">
        <div
          className={`w-full flex ${
            menuStatus ? "fixed z-50" : ""
          } justify-center items-center h-[80px] bg-[#1f1b66]`}
        >
          <div className="w-[80%] h-[10vh] lg:w-[95%] flex justify-evenly items-center">
            <div className="w-[50%] lg:w-[30%] flex justify-start">
              <h2 className="companyName mt-2 text-[#fcb026]">JP </h2>{" "}
              <h2 className="companyName mt-2 text-[#fff] ms-2"> Couriers</h2>
            </div>
            <div className="hidden lg:flex w-[90%] justify-center gap-x-10">
              <div
                className="text-[22px] text-[#ffffff] cursor-pointer font-semibold underline-animation"
                onClick={() => {
                  handleNavigation("/");
                }}
              >
                Home
              </div>
              <div
                className="text-[22px] text-[#ffffff] cursor-pointer font-semibold underline-animation"
                onClick={() => {
                  handleNavigation("/about");
                }}
              >
                About
              </div>

              <div
                className="text-[22px] text-[#ffffff] cursor-pointer font-semibold underline-animation"
                onClick={() => {
                  handleNavigation("/contact");
                }}
              >
                Contact
              </div>
            </div>

            <div className="w-[0%] ml-14 flex lg:hidden justify-center items-center">
              <button
                className={`relative order-10 block self-center lg:hidden ${
                  menuStatus
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }`}
                onClick={() => setMenuStatus(!menuStatus)}
                aria-expanded={menuStatus ? true : false}
                aria-label="Toggle navigation"
              >
                <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Fullscreen Menu for Mobile */}
        <div
          className={`w-full h-[90vh] overflow-y-auto z-50 mt-[10vh] fixed top-0 left-0 transition-all duration-500 ease-in-out bg-white transform ${
            menuStatus
              ? "translate-x-0 opacity-100 visible"
              : "-translate-x-full opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center justify-start h-full">
            <div className="w-[80%] mt-10">
              <div
                className="text-[22px] cursor-pointer py-3 font-semibold"
                onClick={() => {
                  handleNavigation("/");
                }}
              >
                Home{" "}
              </div>
              <div
                className="text-[22px] cursor-pointer  py-3 font-semibold"
                onClick={() => {
                  handleNavigation("/about");
                }}
              >
                About
              </div>

              <div
                className="text-[22px] cursor-pointer  py-3 font-semibold"
                onClick={() => {
                  handleNavigation("/contact");
                }}
              >
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
