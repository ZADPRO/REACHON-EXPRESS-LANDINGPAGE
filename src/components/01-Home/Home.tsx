import React from "react";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <div>
      <div className="homePageIntroCont">
        <section className="w-full px-2 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
          <div>
            <span className="block mb-4 text-xl font-bold text-[#ffff] font-medium">
              Courier Services in India
            </span>
            <h3 className="text-5xl text-[#fcb026] font-semibold">
              Fast, Reliable & Affordable Delivery Solutions{" "}
            </h3>
            <p className="text-xl text-[#ffff] my-4 md:my-6">
              A leading courier service provider in India offering fast, <br />{" "}
              secure, and affordable delivery solutions
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
