import React from "react";

import { motion } from "framer-motion";

import { Lock, MapPinCheck, Truck } from "lucide-react";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <motion.div>
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
              <p className="text-xl font-medium text-[#ffff] my-4 md:my-6">
                A leading courier service provider in India offering fast,{" "}
                <br /> secure, and affordable delivery solutions
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="rightChoice w-full md:w-8/12 mx-auto my-10 pl-3 pr-3">
        <h2 className="text-center text-[26px] font-bold">
          Why We’re the Right Choice
        </h2>
        <p className="text-center text-[18px] my-6 w-full md:w-10/12 mx-auto">
          We provide fast, reliable, and affordable parcel delivery solutions
          for businesses and individuals. Whether it's local shipping or
          nationwide delivery, we've got you covered with seamless logistics
          services.
        </p>
        <div className="flex lg:flex-row flex-col gap-8 my-18">
          <div className="cardContents text-center flex flex-col items-center flex-1">
            <Truck
              size={60}
              className="bg-[#020756] text-white p-2 rounded-ss-xl rounded-ee-xl"
            />
            <h2 className="text-black font-bold text-[22px] my-2">
              Fast Delivery
            </h2>
            <p className="text-[16px]">
              Get your parcels delivered quickly with our extensive courier
              network. We ensure same-day or next-day delivery options to meet
              your urgent shipping needs.
            </p>
          </div>
          <div className="cardContents text-center flex flex-col items-center flex-1">
            <MapPinCheck
              size={60}
              className="bg-[#020756] text-white p-2 rounded-ss-xl rounded-ee-xl"
            />
            <h2 className="text-black font-bold text-[22px] my-2">
              Order Tracking
            </h2>
            <p className="text-[16px]">
              Stay updated with real-time tracking for all your shipments. From
              pickup to delivery, you can track every stage of your parcel's
              journey.
            </p>
          </div>
          <div className="cardContents text-center flex flex-col items-center flex-1">
            <Lock
              size={60}
              className="bg-[#020756] text-white p-2 rounded-ss-xl rounded-ee-xl"
            />
            <h2 className="text-black font-bold text-[22px] my-2">
              Secure Payment
            </h2>
            <p className="text-[16px]">
              We offer multiple secure payment options, including credit/debit
              cards, UPI, and net banking, ensuring free transactions with
              maximum security.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
