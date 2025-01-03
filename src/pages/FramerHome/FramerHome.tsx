import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";

import vision from "../../assets/home/vision.jpg";
import { Lock, MapPinCheck, Truck } from "lucide-react";

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const FramerHome: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
};

export default FramerHome;

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{
        scale,
        rotate,
      }}
      className="sticky backgroundImage top-0 flex flex-col items-center text-white pb-[10vh]"
    >
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

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-screen flex flex-col items-center justify-center"
    >
      <section className="w-full mt-20 bg-white grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <img src={vision} alt="" />
        <div className="p-5">
          <h3 className="text-4xl md:text-5xl font-semibold">
            Our Team of Instructors{" "}
          </h3>
          <p
            className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
            style={{ textIndent: "2rem", fontSize: "20px" }}
          >
            Maven Academy, our instructors are not just teachers-they are
            mentors, guides, and experts in their fields. Each member of our
            team is carefully selected for their experience, teaching skills,
            and passion for helping students succeed. From certified academics
            to industry professionals, our team is dedicated to providing the
            highest quality education and ensuring every student receives
            personalized attention. Our instructors go beyond teaching-they
            inspire, challenge, and support learners in reaching their goals,
            whether it's mastering a new subject, improving grades, or learning
            a new skill.
          </p>
        </div>
      </section>
    </motion.div>
  );
};
