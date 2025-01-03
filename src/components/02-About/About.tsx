import React from "react";

import vision from "../../assets/home/vision.jpg";
import mission from "../../assets/home/mission.jpg";
import logo from "../../assets/home/mission.jpg";

const About: React.FC = () => {
  return (
    <div>
      <div className="whyTrustUs flex flex-col items-center justify-center bg-white">
        <section className="flex lg:flex-row flex-col w-full md:h-screen px-8 py-12 items-center gap-10 max-w-7xl mx-auto">
          <div className="image lg:w-[150%] w-[100%]">
            <img src={logo} alt="" />
          </div>
          <div>
            <span className="block mb-4 text-xl text-[#000000] font-medium">
              Your Trusted Courier Partner, Every Step of the Way
            </span>
            <h3 className="text-4xl text-black font-bold">About Us</h3>
            <p
              className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px", textIndent: "2rem" }}
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
          <div className="image hidden lg:block">
            <img src={vision} alt="" />
          </div>
          <div>
            <h3 className="text-4xl text-black font-semibold">Our Mission </h3>
            <p
              className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px" }}
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
          <div>
            <h3 className="text-4xl text-black font-semibold">Our Vision</h3>
            <p
              className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px" }}
            >
              Our vision is to be the leading courier service provider in India,
              known for innovation, reliability, and customer-centric solutions.
              We aim to revolutionize the logistics and delivery industry with
              cutting-edge technology and an unwavering commitment to customer
              satisfaction.
            </p>
          </div>
          <div className="image">
            <img src={mission} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
