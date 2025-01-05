import React from "react";

import vision from "../../assets/home/vision.jpg";
import mission from "../../assets/home/mission.jpg";
import logo from "../../assets/home/about.png";

import "./About.css";

const About: React.FC = () => {
  return (
    <div>
      <div className="whyTrustUs flex flex-col items-center justify-center bg-white">
        <section className="flex lg:flex-row flex-col w-full md:h-screen px-5 py-12 items-center gap-10 max-w-7xl mx-auto">
          <div className="image lg:w-[150%] w-[100%]">
            <img src={logo} alt="" />
          </div>
          <div>
            <span className="block mb-4 text-[18px] text-[#000000] font-medium">
              Your Trusted Courier Partner, Every Step of the Way
            </span>
            <h3 className="lg:text-3xl text-2xl text-black font-bold">
              About Us
            </h3>
            <p
              className="text-[18px] text-slate-700 my-4 text-justify"
              style={{ textIndent: "2rem" }}
            >
              Your reliable partner for all your courier and logistics needs in
              India. We are committed to providing fast, secure, and
              cost-effective delivery solutions, ensuring that your shipments
              reach their destination on time, every time. Whether you're an
              individual, a small business, or a large corporation, our flexible
              courier services are designed to meet your unique needs with
              precision and professionalism.
            </p>
            <p
              className="text-base md:text-lg font-bold text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px" }}
            >
              "From Our Door to Yours, with Speed and Precision."{" "}
            </p>
          </div>
        </section>
      </div>
      <div className="visionMissionContents bg-white lg:h-screen">
        <section className="flex lg:flex-row flex-col w-full px-8 py-12 items-center gap-10 max-w-5xl mx-auto">
          <div className="image missionImage hidden lg:block">
            <img src={vision} alt="" />
          </div>
          <div data-aos="fade-down">
            <h3 className="text-2xl text-black font-semibold">Our Mission </h3>
            <p
              className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "18px" }}
            >
              Our mission is simple: to make courier services fast, reliable,
              and accessible for everyone in India. We aim to provide
              exceptional delivery solutions that cater to both personal and
              business needs. Our goal is to build lasting relationships with
              our customers by offering unmatched customer service, timely
              deliveries, and affordable pricing.
            </p>
          </div>
        </section>
        <section className="flex lg:flex-row flex-col w-full px-8 py-12 items-center gap-10 max-w-5xl mx-auto">
          <div data-aos="fade-up">
            <h3 className="text-2xl text-black font-semibold">Our Vision</h3>
            <p
              className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "18px" }}
            >
              Our vision is to be the leading courier service provider in India,
              known for innovation, reliability, and customer-centric solutions.
              We aim to revolutionize the logistics and delivery industry with
              cutting-edge technology and an unwavering commitment to customer
              satisfaction.
            </p>
          </div>
          <div className="image missionImage">
            <img src={mission} alt="" />
          </div>
        </section>
      </div>

      <div className="servicess">
        <div className="serviceWorks w-full md:w-6/12 mx-auto my-20 py-20">
          <h2 className="text-[24px] font-bold text-center">
            How Our Courier Services Work
          </h2>
          <ul
            aria-label="Changelog feed"
            role="feed"
            className="relative flex flex-col gap-12 py-12 pl-6 text-sm before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200"
          >
            <li
              role="article"
              data-aos="fade-up"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-black before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-2">
                <h4 className="text-base font-medium leading-7 text-[#1f1b66]">
                  Book Your Courier
                </h4>
                <p className=" text-slate-500">
                  Book your courier service online through our website or call
                  our customer service team. Choose from a range of options
                  based on your needs, whether it's express delivery or standard
                  shipping.
                </p>
              </div>
            </li>
            <li
              role="article"
              data-aos="fade-up"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-black before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-2">
                <h4 className="text-base font-medium text-[#1f1b66]">
                  Pack Your Items
                </h4>
                <p className=" text-slate-500">
                  Ensure your items are packed securely for transit. We provide
                  packaging tips and materials to ensure safe handling during
                  delivery.
                </p>
              </div>
            </li>
            <li
              role="article"
              data-aos="fade-up"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-black before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-2">
                <h4 className="text-base font-medium text-[#1f1b66]">
                  Track Your Shipment
                </h4>
                <p className=" text-slate-500">
                  Use our online tracking tool to monitor your shipment in real
                  time. Get updates on the status of your package, so you're
                  always in the loop.
                </p>
              </div>
            </li>
            <li
              role="article"
              data-aos="fade-up"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-black before:ring-2 before:ring-white"
            >
              <div className="flex flex-col flex-1 gap-2">
                <h4 className="text-base font-medium text-[#1f1b66]">
                  Delivery & Confirmation{" "}
                </h4>
                <p className=" text-slate-500">
                  Once your package is delivered, you will receive confirmation.
                  You can also opt for signature confirmation for added security
                  and peace of mind.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
