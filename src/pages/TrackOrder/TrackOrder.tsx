import React from "react";

const TrackOrder: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="relative my-6">
        <input
          id="id-01"
          type="text"
          name="id-01"
          placeholder="Enter Customer ID"
          className="peer relative h-10 w-full rounded border border-[#1f1b66] px-4 text-sm text-slate-500 outline-none "
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-[#1f1b66] peer-disabled:cursor-not-allowed"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          aria-label="Search icon"
          role="graphics-symbol"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  );
};

export default TrackOrder;
