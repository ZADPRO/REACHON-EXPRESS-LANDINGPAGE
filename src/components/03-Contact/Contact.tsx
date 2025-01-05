import React, { useState } from "react";
import TrackOrder from "../../pages/TrackOrder/TrackOrder";
import RegisterComplaint from "../../pages/RegisterComplaint/RegisterComplaint";

const Contact: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("Track Order");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="mt-[12vh] w-full md:w-10/12 mx-auto">
      <div className="m-2">
        <div className="flex items-center justify-center overflow-x-auto rounded">
          <button
            className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap px-6 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none border-[1px] ${
              activeButton === "Track Order"
                ? "bg-[#1f1b66] text-white border-[#1f1b66]"
                : "bg-white text-[#1f1b66] border-[#1f1b66] hover:bg-[#f0f0f0] focus:bg-[#e0e0e0]"
            }`}
            onClick={() => handleButtonClick("Track Order")}
          >
            <span>Track Order</span>
          </button>
          <button
            className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap px-6 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none border-[1px] ${
              activeButton === "Register Complaint"
                ? "bg-[#1f1b66] text-white border-[#1f1b66]"
                : "bg-white text-[#1f1b66] border-[#1f1b66] hover:bg-[#f0f0f0] focus:bg-[#e0e0e0]"
            }`}
            onClick={() => handleButtonClick("Register Complaint")}
          >
            <span>Register Complaint</span>
          </button>
        </div>

        {/* Display selected option below */}
        <div className="m-4">
          <p>Selected option: {activeButton || "None"}</p>

          {activeButton === "Track Order" && (
            <div>
              <TrackOrder />
            </div>
          )}

          {activeButton === "Register Complaint" && (
            <div>
              <RegisterComplaint />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
