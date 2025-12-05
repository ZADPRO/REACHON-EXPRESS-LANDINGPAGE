import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="text-slate-500">
        {/* <!-- Main footer --> */}
        <div className="pt-16 pb-12 text-sm border-t border-slate-200 bg-slate-100">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-4 gap-6 w-full mx-auto justify-center md:grid-cols-8 lg:grid-cols-10">
              <div
                className="col-span-4 md:col-span-8 lg:col-span-4"
                aria-labelledby="footer-header"
              >
                <p className="text-[22px] font-bold uppercase text-[#fcb026]">
                  {" "}
                  Reachon <span className="text-[#1f1b66]">Express</span>
                </p>

                <p className="text-[20px] mt-4 mb-4 font-bold text-black">
                  Fast, Reliable & Affordable Delivery Solutions
                </p>
                <p className="text-[20px]">
                  A leading courier service provider in India offering fast,
                  secure, and affordable delivery solutions
                </p>
              </div>

              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-product-5-logo"
              >
                <h3
                  className="mb-6 text-[22px] text-black font-bold"
                  id="footer-product-5-logo"
                >
                  Quick Links
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-black text-[17px] duration-300 hover:text-[#1f1b66] hover:font-bold focus:text-[#1f1b66]"
                    >
                      {" "}
                      Home{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-black text-[17px] duration-300 hover:text-[#1f1b66] hover:font-bold focus:text-[#1f1b66]"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-black text-[17px] duration-300 hover:text-[#1f1b66] hover:font-bold focus:text-[#1f1b66]"
                    >
                      {" "}
                      Customer Care{" "}
                    </a>
                  </li>
                </ul>
              </nav>

              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-about-5-logo"
              >
                <h3
                  className="mb-6 text-[22px] text-black font-bold"
                  id="footer-about-5-logo"
                >
                  Company
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-black text-[17px] duration-300 hover:text-[#1f1b66] hover:font-bold focus:text-[#1f1b66]"
                    >
                      {" "}
                      Terms & Conditions{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-black text-[17px] duration-300 hover:text-[#1f1b66] hover:font-bold focus:text-[#1f1b66]"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-black text-[17px] duration-300 hover:text-[#1f1b66] hover:font-bold focus:text-[#1f1b66]"
                    >
                      {" "}
                      Refund Policy{" "}
                    </a>
                  </li>
                </ul>
              </nav>

              <nav
                className="col-span-5 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-docs-5-logo"
              >
                <h3
                  className="mb-6 text-[22px] text-black font-bold"
                  id="footer-docs-5-logo"
                >
                  Contact
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-black text-[17px] duration-300 hover:text-[#1f1b66] hover:font-bold focus:text-[#1f1b66]"
                    >
                      {" "}
                      +91 99447 46779
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-black text-[17px] duration-300 hover:text-[#1f1b66] hover:font-bold focus:text-[#1f1b66]"
                    >
                      {" "}
                      info@reachonexpress.com{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-black text-[17px] duration-300 hover:text-[#1f1b66] hover:font-bold focus:text-[#1f1b66]"
                    >
                      Reachon express transport india pvt Ltd, D.No.62,
                      Balasubburayalu street, erode-638001.
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* <!-- Sub Footer --> */}
        <div className="py-4 text-sm border-t border-slate-200 bg-slate-100">
          <div className="container px-6 mx-auto font-bold text-black text-[18px]">
            Reachon Express - All Rights Reserved - 2025
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
