import React from "react";

import { motion } from "framer-motion";

import {
  BusFront,
  ChevronsUp,
  Lock,
  LockKeyhole,
  MapPinCheck,
  PackageOpen,
  TrendingUp,
  Truck,
} from "lucide-react";

// import vision from "../../assets/home/vision.jpg";
// import mission from "../../assets/home/mission.jpg";

import trust from "../../assets/home/trust.jpg";

import "./Home.css";
// import FramerHome from "../../pages/FramerHome/FramerHome";

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

      {/* <FramerHome /> */}

      <div className="whyTrustUs">
        <section className="w-full px-2 grid grid-cols-1 md:grid-cols-2 items-center gap-2 max-w-6xl mx-auto">
          <div className="imageContents">
            <img
              src={trust}
              alt=""
              className="w-full max-w-[400px] h-auto object-contain"
            />
          </div>
          <div className="trustContents">
            <h2 className="text-black font-bold text-3xl py-5">
              Why Trust Our Courier Services in India?
            </h2>
            <p className="text-[18px] text-justify">
              We take pride in our commitment to providing reliable, affordable
              courier services in India. With years of experience in the
              logistics industry, we've built a reputation for offering
              high-quality services backed by excellent customer support. Our
              dedicated team works tirelessly to ensure that your shipments are
              delivered on time, intact, and securely.
            </p>
            <p className="text-[18px] text-justify mt-3">
              We ensure your shipments arrive safely and in perfect condition.
              Our secure tracking system provides real-time updates, keeping you
              informed every step of the way. You can trust us for peace of mind
              throughout the delivery process.
            </p>
          </div>
        </section>
      </div>

      <div className="bg-[#023d8a20] flex items-center justify-center">
        <div className="rightChoice w-full md:w-10/12 mx-auto my-10 pl-3 pr-3">
          <h2 className="text-center text-[28px] font-bold">
            Why Choose Our Courier Services in India?{" "}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10 flex justify-center">
            <div className="cardContents bg-white text-center flex flex-col items-center flex-1">
              <PackageOpen
                size={60}
                className="bg-[#020756] text-white p-2 rounded-ss-xl rounded-ee-xl"
              />
              <h2 className="text-black font-bold text-[22px] my-4">
                Pan-India Delivery Network
              </h2>
              <p className="text-[16px]">
                We offer comprehensive domestic courier services across all
                major cities in India, including Delhi, Mumbai, Bangalore,
                Chennai, Kolkata, Pune, and more. Our extensive network ensures
                timely delivery to both urban and remote locations.
              </p>
            </div>
            <div className="cardContents bg-white text-center flex flex-col items-center flex-1">
              <BusFront
                size={60}
                className="bg-[#020756] text-white p-2 rounded-ss-xl rounded-ee-xl"
              />
              <h2 className="text-black font-bold text-[22px] my-4">
                Affordable & Transparent Rates
              </h2>
              <p className="text-[16px]">
                Looking for cost-effective courier services in India? At JP
                Couriers, we offer competitive pricing without compromising on
                quality. Enjoy no hidden fees and transparent charges, making
                your shipping experience simple and affordable.
              </p>
            </div>
            <div className="cardContents bg-white text-center flex flex-col items-center flex-1">
              <ChevronsUp
                size={60}
                className="bg-[#020756] text-white p-2 rounded-ss-xl rounded-ee-xl"
              />
              <h2 className="text-black font-bold text-[22px] my-4">
                Fast & Reliable Deliveries
              </h2>
              <p className="text-[16px]">
                We know how important it is for you to receive your packages on
                time. That’s why we provide express courier services for urgent
                deliveries and standard shipping options for regular packages.
                Our fast, reliable, and secure services ensure that your
                shipment arrives on time, every time.
              </p>
            </div>
            <div className="cardContents bg-white text-center flex flex-col items-center flex-1">
              <TrendingUp
                size={60}
                className="bg-[#020756] text-white p-2 rounded-ss-xl rounded-ee-xl"
              />
              <h2 className="text-black font-bold text-[22px] my-4">
                Real-Time Tracking
              </h2>
              <p className="text-[16px]">
                Stay updated with our real-time parcel tracking system. Easily
                monitor your shipments from the moment they’re dispatched to
                delivery. Whether you’re sending a small document or a large
                consignment, our tracking system keeps you informed every step
                of the way.
              </p>
            </div>
            <div className="cardContents bg-white text-center flex flex-col items-center flex-1">
              <LockKeyhole
                size={60}
                className="bg-[#020756] text-white p-2 rounded-ss-xl rounded-ee-xl"
              />
              <h2 className="text-black font-bold text-[22px] my-4">
                Safe and Secure Deliveries
              </h2>
              <p className="text-[16px]">
                We prioritize the safety of your shipments. From fragile items
                to confidential documents, our expert handling ensures that
                every package is delivered securely. Our team follows strict
                quality control measures to ensure safe transport and delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
