import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

import testimonials from "../../assets/home/testimonials.svg";

const Testimonials: React.FC = () => {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classes: {
        swipeable: "swipeable-class", // Add your class name or leave empty
        dragging: "dragging-class", // Add your class name or leave empty
        direction: {
          ltr: "ltr-class", // Add your class name for ltr or leave empty
          rtl: "rtl-class", // Add your class name for rtl or leave empty
        },
        type: {
          slider: "slider-class", // Add your class name or leave empty
          carousel: "carousel-class", // Add your class name or leave empty
        },
        slide: {
          active: "active-slide-class", // Add your class name or leave empty
          clone: "clone-slide-class", // Add your class name or leave empty
        },
        arrow: {
          disabled: "arrow-disabled-class", // Add your class name or leave empty
        },
        nav: {
          active: "[&>*]:bg-wuiSlate-700", // Your custom active class
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div>
      <div className="testimonialsSec bg-white lg:h-screen flex flex-col items-center justify-center md:mt-0">
        <div className="testimonialsHeader">
          <h2 className="w-full text-[22px] font-bold flex items-center justify-center w-full md:w-10/12 mx-auto">
            Testimonials / Success Stories
          </h2>
          <p className="w-full p-2 text-[20px] flex items-center text-center justify-center w-full md:w-9/12 mx-auto">
            This section showcases the diversity of your clientele and their
            satisfaction with your services, emphasizing key aspects such as
            reliability, customer service, and ease of use.
          </p>
        </div>
        <div className="glide-04 relative w-full md:w-10/12 mx-auto">
          {/*    <!-- Slides --> */}
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              <li>
                <div className="h-full w-full">
                  <div className="h-full overflow-hidden rounded bg-white text-black shadow-2xl shadow-slate-200">
                    <div className="relative p-6">
                      <figure className="relative z-10">
                        <blockquote className="p-6 text-lg leading-relaxed">
                          <p
                            className="text-justify"
                            style={{ textIndent: "2rem" }}
                          >
                            "I've been using Reachon Express for my business
                            deliveries, and I couldn't be happier. They offer
                            fast, reliable service and excellent customer
                            support."
                          </p>
                        </blockquote>
                        <figcaption className="flex flex-col items-start gap-2 p-6 pt-0 text-sm text-[#f95005]">
                          <span
                            className="flex gap-1 text-amber-400"
                            role="img"
                            aria-label="Rating: 3 out of 5 stars"
                          >
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            </span>
                          </span>
                          <div className="flex items-center gap-4 pt-4 text-[16px] text-[#020756]">
                            <img
                              src={testimonials}
                              alt="user name"
                              title="user name"
                              width="45"
                              height="45"
                              className="max-w-full shrink-0 rounded-full"
                            />
                            <div className="flex flex-col gap-1">
                              <span className="font-bold uppercase">
                                — Priya,
                              </span>
                              <cite className="not-italic">
                                E-Commerce Business Owner{" "}
                              </cite>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                      <svg
                        aria-hidden="true"
                        className="absolute left-6 top-6 z-0 h-16"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.79187 3.83333C2.66179 3.83333 2.53696 3.85316 2.41271 3.87125C2.45296 3.73591 2.49437 3.59825 2.56087 3.47458C2.62737 3.29491 2.73121 3.13916 2.83446 2.98225C2.92079 2.8125 3.07304 2.69758 3.18504 2.55233C3.30229 2.41116 3.46212 2.31725 3.58871 2.2C3.71296 2.0775 3.87571 2.01625 4.00521 1.92991C4.14054 1.85233 4.25837 1.76658 4.38437 1.72575L4.69879 1.59625L4.97529 1.48133L4.69237 0.35083L4.34412 0.43483C4.23271 0.46283 4.09679 0.495496 3.94221 0.53458C3.78412 0.563746 3.61554 0.643663 3.42771 0.71658C3.24221 0.799413 3.02754 0.855413 2.82804 0.988413C2.62737 1.11558 2.39579 1.22175 2.19162 1.39208C1.99387 1.56766 1.75529 1.71991 1.57912 1.94333C1.38662 2.15216 1.19646 2.3715 1.04887 2.62116C0.877957 2.85916 0.761873 3.1205 0.639373 3.37891C0.52854 3.63733 0.43929 3.90158 0.366373 4.15825C0.228123 4.67275 0.16629 5.16158 0.142373 5.57983C0.12254 5.99866 0.134207 6.34691 0.158707 6.59891C0.167457 6.71791 0.18379 6.83341 0.195457 6.91333L0.21004 7.01133L0.225207 7.00783C0.328959 7.49248 0.567801 7.93786 0.914102 8.29243C1.2604 8.64701 1.70001 8.89631 2.18208 9.01148C2.66415 9.12665 3.16897 9.10299 3.63815 8.94323C4.10733 8.78348 4.52169 8.49416 4.83331 8.10874C5.14493 7.72333 5.34107 7.25757 5.39903 6.76534C5.457 6.27311 5.37443 5.77452 5.16087 5.32726C4.94731 4.88 4.61149 4.50233 4.19225 4.23796C3.77302 3.97358 3.28751 3.8333 2.79187 3.83333V3.83333ZM9.20854 3.83333C9.07846 3.83333 8.95362 3.85316 8.82937 3.87125C8.86962 3.73591 8.91104 3.59825 8.97754 3.47458C9.04404 3.29491 9.14787 3.13916 9.25112 2.98225C9.33746 2.8125 9.48971 2.69758 9.60171 2.55233C9.71896 2.41116 9.87879 2.31725 10.0054 2.2C10.1296 2.0775 10.2924 2.01625 10.4219 1.92991C10.5572 1.85233 10.675 1.76658 10.801 1.72575L11.1155 1.59625L11.392 1.48133L11.109 0.35083L10.7608 0.43483C10.6494 0.46283 10.5135 0.495496 10.3589 0.53458C10.2008 0.563746 10.0322 0.643663 9.84437 0.71658C9.65946 0.799997 9.44421 0.855413 9.24471 0.988997C9.04404 1.11616 8.81246 1.22233 8.60829 1.39266C8.41054 1.56825 8.17196 1.7205 7.99579 1.94333C7.80329 2.15216 7.61312 2.3715 7.46554 2.62116C7.29462 2.85916 7.17854 3.1205 7.05604 3.37891C6.94521 3.63733 6.85596 3.90158 6.78304 4.15825C6.64479 4.67275 6.58296 5.16158 6.55904 5.57983C6.53921 5.99866 6.55087 6.34691 6.57537 6.59891C6.58412 6.71791 6.60046 6.83341 6.61212 6.91333L6.62671 7.01133L6.64187 7.00783C6.74563 7.49248 6.98447 7.93786 7.33077 8.29243C7.67707 8.64701 8.11668 8.89631 8.59875 9.01148C9.08081 9.12665 9.58563 9.10299 10.0548 8.94323C10.524 8.78348 10.9384 8.49416 11.25 8.10874C11.5616 7.72333 11.7577 7.25757 11.8157 6.76534C11.8737 6.27311 11.7911 5.77452 11.5775 5.32726C11.364 4.88 11.0282 4.50233 10.6089 4.23796C10.1897 3.97358 9.70417 3.8333 9.20854 3.83333V3.83333Z"
                          className="fill-[#26226d79]"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="h-full w-full">
                  <div className="h-full overflow-hidden rounded bg-white text-black shadow-2xl shadow-slate-200">
                    <div className="relative p-6">
                      <figure className="relative z-10">
                        <blockquote className="p-6 text-lg leading-relaxed">
                          <p
                            className="text-justify"
                            style={{ textIndent: "2rem" }}
                          >
                            "Fantastic service! My documents were delivered on
                            time, and I was kept updated every step of the way
                            with real-time tracking."
                          </p>
                        </blockquote>
                        <figcaption className="flex flex-col items-start gap-2 p-6 pt-0 text-sm text-[#f95005]">
                          <span
                            className="flex gap-1 text-amber-400"
                            role="img"
                            aria-label="Rating: 3 out of 5 stars"
                          >
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            </span>
                          </span>
                          <div className="flex items-center gap-4 pt-4 text-[16px] text-[#020756]">
                            <img
                              src={testimonials}
                              alt="user name"
                              title="user name"
                              width="45"
                              height="45"
                              className="max-w-full shrink-0 rounded-full"
                            />
                            <div className="flex flex-col gap-1">
                              <span className="font-bold uppercase">
                                — Ravi,{" "}
                              </span>
                              <cite className="not-italic">
                                Corporate Executive{" "}
                              </cite>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                      <svg
                        aria-hidden="true"
                        className="absolute left-6 top-6 z-0 h-16"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.79187 3.83333C2.66179 3.83333 2.53696 3.85316 2.41271 3.87125C2.45296 3.73591 2.49437 3.59825 2.56087 3.47458C2.62737 3.29491 2.73121 3.13916 2.83446 2.98225C2.92079 2.8125 3.07304 2.69758 3.18504 2.55233C3.30229 2.41116 3.46212 2.31725 3.58871 2.2C3.71296 2.0775 3.87571 2.01625 4.00521 1.92991C4.14054 1.85233 4.25837 1.76658 4.38437 1.72575L4.69879 1.59625L4.97529 1.48133L4.69237 0.35083L4.34412 0.43483C4.23271 0.46283 4.09679 0.495496 3.94221 0.53458C3.78412 0.563746 3.61554 0.643663 3.42771 0.71658C3.24221 0.799413 3.02754 0.855413 2.82804 0.988413C2.62737 1.11558 2.39579 1.22175 2.19162 1.39208C1.99387 1.56766 1.75529 1.71991 1.57912 1.94333C1.38662 2.15216 1.19646 2.3715 1.04887 2.62116C0.877957 2.85916 0.761873 3.1205 0.639373 3.37891C0.52854 3.63733 0.43929 3.90158 0.366373 4.15825C0.228123 4.67275 0.16629 5.16158 0.142373 5.57983C0.12254 5.99866 0.134207 6.34691 0.158707 6.59891C0.167457 6.71791 0.18379 6.83341 0.195457 6.91333L0.21004 7.01133L0.225207 7.00783C0.328959 7.49248 0.567801 7.93786 0.914102 8.29243C1.2604 8.64701 1.70001 8.89631 2.18208 9.01148C2.66415 9.12665 3.16897 9.10299 3.63815 8.94323C4.10733 8.78348 4.52169 8.49416 4.83331 8.10874C5.14493 7.72333 5.34107 7.25757 5.39903 6.76534C5.457 6.27311 5.37443 5.77452 5.16087 5.32726C4.94731 4.88 4.61149 4.50233 4.19225 4.23796C3.77302 3.97358 3.28751 3.8333 2.79187 3.83333V3.83333ZM9.20854 3.83333C9.07846 3.83333 8.95362 3.85316 8.82937 3.87125C8.86962 3.73591 8.91104 3.59825 8.97754 3.47458C9.04404 3.29491 9.14787 3.13916 9.25112 2.98225C9.33746 2.8125 9.48971 2.69758 9.60171 2.55233C9.71896 2.41116 9.87879 2.31725 10.0054 2.2C10.1296 2.0775 10.2924 2.01625 10.4219 1.92991C10.5572 1.85233 10.675 1.76658 10.801 1.72575L11.1155 1.59625L11.392 1.48133L11.109 0.35083L10.7608 0.43483C10.6494 0.46283 10.5135 0.495496 10.3589 0.53458C10.2008 0.563746 10.0322 0.643663 9.84437 0.71658C9.65946 0.799997 9.44421 0.855413 9.24471 0.988997C9.04404 1.11616 8.81246 1.22233 8.60829 1.39266C8.41054 1.56825 8.17196 1.7205 7.99579 1.94333C7.80329 2.15216 7.61312 2.3715 7.46554 2.62116C7.29462 2.85916 7.17854 3.1205 7.05604 3.37891C6.94521 3.63733 6.85596 3.90158 6.78304 4.15825C6.64479 4.67275 6.58296 5.16158 6.55904 5.57983C6.53921 5.99866 6.55087 6.34691 6.57537 6.59891C6.58412 6.71791 6.60046 6.83341 6.61212 6.91333L6.62671 7.01133L6.64187 7.00783C6.74563 7.49248 6.98447 7.93786 7.33077 8.29243C7.67707 8.64701 8.11668 8.89631 8.59875 9.01148C9.08081 9.12665 9.58563 9.10299 10.0548 8.94323C10.524 8.78348 10.9384 8.49416 11.25 8.10874C11.5616 7.72333 11.7577 7.25757 11.8157 6.76534C11.8737 6.27311 11.7911 5.77452 11.5775 5.32726C11.364 4.88 11.0282 4.50233 10.6089 4.23796C10.1897 3.97358 9.70417 3.8333 9.20854 3.83333V3.83333Z"
                          className="fill-[#26226d79]"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="h-full w-full">
                  <div className="h-full overflow-hidden rounded bg-white text-black shadow-2xl shadow-slate-200">
                    <div className="relative p-6">
                      <figure className="relative z-10">
                        <blockquote className="p-6 text-lg leading-relaxed">
                          <p
                            className="text-justify"
                            style={{ textIndent: "2rem" }}
                          >
                            "I've used this courier service for both personal
                            and business shipments for years. They always go
                            above and beyond, ensuring hassle-free deliveries
                            every time."
                          </p>
                        </blockquote>
                        <figcaption className="flex flex-col items-start gap-2 p-6 pt-0 text-sm text-[#f95005]">
                          <span
                            className="flex gap-1 text-amber-400"
                            role="img"
                            aria-label="Rating: 3 out of 5 stars"
                          >
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            </span>
                          </span>
                          <div className="flex items-center gap-4 pt-4 text-[16px] text-[#020756]">
                            <img
                              src={testimonials}
                              alt="user name"
                              title="user name"
                              width="45"
                              height="45"
                              className="max-w-full shrink-0 rounded-full"
                            />
                            <div className="flex flex-col gap-1">
                              <span className="font-bold uppercase">
                                — Daniel M.,{" "}
                              </span>
                              <cite className="not-italic">Customer</cite>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                      <svg
                        aria-hidden="true"
                        className="absolute left-6 top-6 z-0 h-16"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.79187 3.83333C2.66179 3.83333 2.53696 3.85316 2.41271 3.87125C2.45296 3.73591 2.49437 3.59825 2.56087 3.47458C2.62737 3.29491 2.73121 3.13916 2.83446 2.98225C2.92079 2.8125 3.07304 2.69758 3.18504 2.55233C3.30229 2.41116 3.46212 2.31725 3.58871 2.2C3.71296 2.0775 3.87571 2.01625 4.00521 1.92991C4.14054 1.85233 4.25837 1.76658 4.38437 1.72575L4.69879 1.59625L4.97529 1.48133L4.69237 0.35083L4.34412 0.43483C4.23271 0.46283 4.09679 0.495496 3.94221 0.53458C3.78412 0.563746 3.61554 0.643663 3.42771 0.71658C3.24221 0.799413 3.02754 0.855413 2.82804 0.988413C2.62737 1.11558 2.39579 1.22175 2.19162 1.39208C1.99387 1.56766 1.75529 1.71991 1.57912 1.94333C1.38662 2.15216 1.19646 2.3715 1.04887 2.62116C0.877957 2.85916 0.761873 3.1205 0.639373 3.37891C0.52854 3.63733 0.43929 3.90158 0.366373 4.15825C0.228123 4.67275 0.16629 5.16158 0.142373 5.57983C0.12254 5.99866 0.134207 6.34691 0.158707 6.59891C0.167457 6.71791 0.18379 6.83341 0.195457 6.91333L0.21004 7.01133L0.225207 7.00783C0.328959 7.49248 0.567801 7.93786 0.914102 8.29243C1.2604 8.64701 1.70001 8.89631 2.18208 9.01148C2.66415 9.12665 3.16897 9.10299 3.63815 8.94323C4.10733 8.78348 4.52169 8.49416 4.83331 8.10874C5.14493 7.72333 5.34107 7.25757 5.39903 6.76534C5.457 6.27311 5.37443 5.77452 5.16087 5.32726C4.94731 4.88 4.61149 4.50233 4.19225 4.23796C3.77302 3.97358 3.28751 3.8333 2.79187 3.83333V3.83333ZM9.20854 3.83333C9.07846 3.83333 8.95362 3.85316 8.82937 3.87125C8.86962 3.73591 8.91104 3.59825 8.97754 3.47458C9.04404 3.29491 9.14787 3.13916 9.25112 2.98225C9.33746 2.8125 9.48971 2.69758 9.60171 2.55233C9.71896 2.41116 9.87879 2.31725 10.0054 2.2C10.1296 2.0775 10.2924 2.01625 10.4219 1.92991C10.5572 1.85233 10.675 1.76658 10.801 1.72575L11.1155 1.59625L11.392 1.48133L11.109 0.35083L10.7608 0.43483C10.6494 0.46283 10.5135 0.495496 10.3589 0.53458C10.2008 0.563746 10.0322 0.643663 9.84437 0.71658C9.65946 0.799997 9.44421 0.855413 9.24471 0.988997C9.04404 1.11616 8.81246 1.22233 8.60829 1.39266C8.41054 1.56825 8.17196 1.7205 7.99579 1.94333C7.80329 2.15216 7.61312 2.3715 7.46554 2.62116C7.29462 2.85916 7.17854 3.1205 7.05604 3.37891C6.94521 3.63733 6.85596 3.90158 6.78304 4.15825C6.64479 4.67275 6.58296 5.16158 6.55904 5.57983C6.53921 5.99866 6.55087 6.34691 6.57537 6.59891C6.58412 6.71791 6.60046 6.83341 6.61212 6.91333L6.62671 7.01133L6.64187 7.00783C6.74563 7.49248 6.98447 7.93786 7.33077 8.29243C7.67707 8.64701 8.11668 8.89631 8.59875 9.01148C9.08081 9.12665 9.58563 9.10299 10.0548 8.94323C10.524 8.78348 10.9384 8.49416 11.25 8.10874C11.5616 7.72333 11.7577 7.25757 11.8157 6.76534C11.8737 6.27311 11.7911 5.77452 11.5775 5.32726C11.364 4.88 11.0282 4.50233 10.6089 4.23796C10.1897 3.97358 9.70417 3.8333 9.20854 3.83333V3.83333Z"
                          className="fill-[#26226d79]"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="h-full w-full">
                  <div className="h-full overflow-hidden rounded bg-white text-black shadow-2xl shadow-slate-200">
                    <div className="relative p-6">
                      <figure className="relative z-10">
                        <blockquote className="p-6 text-lg leading-relaxed">
                          <p
                            className="text-justify"
                            style={{ textIndent: "2rem" }}
                          >
                            "I had a last-minute delivery request, and their
                            team handled it perfectly. From customer support to
                            delivery confirmation, they made sure everything was
                            taken care of."
                          </p>
                        </blockquote>
                        <figcaption className="flex flex-col items-start gap-2 p-6 pt-0 text-sm text-[#f95005]">
                          <span
                            className="flex gap-1 text-amber-400"
                            role="img"
                            aria-label="Rating: 3 out of 5 stars"
                          >
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span aria-hidden="true">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            </span>
                          </span>
                          <div className="flex items-center gap-4 pt-4 text-[16px] text-[#020756]">
                            <img
                              src={testimonials}
                              alt="user name"
                              title="user name"
                              width="45"
                              height="45"
                              className="max-w-full shrink-0 rounded-full"
                            />
                            <div className="flex flex-col gap-1">
                              <span className="font-bold uppercase">
                                — Sarah L.,{" "}
                              </span>
                              <cite className="not-italic">Customer</cite>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                      <svg
                        aria-hidden="true"
                        className="absolute left-6 top-6 z-0 h-16"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.79187 3.83333C2.66179 3.83333 2.53696 3.85316 2.41271 3.87125C2.45296 3.73591 2.49437 3.59825 2.56087 3.47458C2.62737 3.29491 2.73121 3.13916 2.83446 2.98225C2.92079 2.8125 3.07304 2.69758 3.18504 2.55233C3.30229 2.41116 3.46212 2.31725 3.58871 2.2C3.71296 2.0775 3.87571 2.01625 4.00521 1.92991C4.14054 1.85233 4.25837 1.76658 4.38437 1.72575L4.69879 1.59625L4.97529 1.48133L4.69237 0.35083L4.34412 0.43483C4.23271 0.46283 4.09679 0.495496 3.94221 0.53458C3.78412 0.563746 3.61554 0.643663 3.42771 0.71658C3.24221 0.799413 3.02754 0.855413 2.82804 0.988413C2.62737 1.11558 2.39579 1.22175 2.19162 1.39208C1.99387 1.56766 1.75529 1.71991 1.57912 1.94333C1.38662 2.15216 1.19646 2.3715 1.04887 2.62116C0.877957 2.85916 0.761873 3.1205 0.639373 3.37891C0.52854 3.63733 0.43929 3.90158 0.366373 4.15825C0.228123 4.67275 0.16629 5.16158 0.142373 5.57983C0.12254 5.99866 0.134207 6.34691 0.158707 6.59891C0.167457 6.71791 0.18379 6.83341 0.195457 6.91333L0.21004 7.01133L0.225207 7.00783C0.328959 7.49248 0.567801 7.93786 0.914102 8.29243C1.2604 8.64701 1.70001 8.89631 2.18208 9.01148C2.66415 9.12665 3.16897 9.10299 3.63815 8.94323C4.10733 8.78348 4.52169 8.49416 4.83331 8.10874C5.14493 7.72333 5.34107 7.25757 5.39903 6.76534C5.457 6.27311 5.37443 5.77452 5.16087 5.32726C4.94731 4.88 4.61149 4.50233 4.19225 4.23796C3.77302 3.97358 3.28751 3.8333 2.79187 3.83333V3.83333ZM9.20854 3.83333C9.07846 3.83333 8.95362 3.85316 8.82937 3.87125C8.86962 3.73591 8.91104 3.59825 8.97754 3.47458C9.04404 3.29491 9.14787 3.13916 9.25112 2.98225C9.33746 2.8125 9.48971 2.69758 9.60171 2.55233C9.71896 2.41116 9.87879 2.31725 10.0054 2.2C10.1296 2.0775 10.2924 2.01625 10.4219 1.92991C10.5572 1.85233 10.675 1.76658 10.801 1.72575L11.1155 1.59625L11.392 1.48133L11.109 0.35083L10.7608 0.43483C10.6494 0.46283 10.5135 0.495496 10.3589 0.53458C10.2008 0.563746 10.0322 0.643663 9.84437 0.71658C9.65946 0.799997 9.44421 0.855413 9.24471 0.988997C9.04404 1.11616 8.81246 1.22233 8.60829 1.39266C8.41054 1.56825 8.17196 1.7205 7.99579 1.94333C7.80329 2.15216 7.61312 2.3715 7.46554 2.62116C7.29462 2.85916 7.17854 3.1205 7.05604 3.37891C6.94521 3.63733 6.85596 3.90158 6.78304 4.15825C6.64479 4.67275 6.58296 5.16158 6.55904 5.57983C6.53921 5.99866 6.55087 6.34691 6.57537 6.59891C6.58412 6.71791 6.60046 6.83341 6.61212 6.91333L6.62671 7.01133L6.64187 7.00783C6.74563 7.49248 6.98447 7.93786 7.33077 8.29243C7.67707 8.64701 8.11668 8.89631 8.59875 9.01148C9.08081 9.12665 9.58563 9.10299 10.0548 8.94323C10.524 8.78348 10.9384 8.49416 11.25 8.10874C11.5616 7.72333 11.7577 7.25757 11.8157 6.76534C11.8737 6.27311 11.7911 5.77452 11.5775 5.32726C11.364 4.88 11.0282 4.50233 10.6089 4.23796C10.1897 3.97358 9.70417 3.8333 9.20854 3.83333V3.83333Z"
                          className="fill-[#26226d79]"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/*    <!-- Controls --> */}
          <div
            className="flex w-full items-center justify-center gap-2 p-4"
            data-glide-el="controls"
          >
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir="<"
              aria-label="prev slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>prev slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir=">"
              aria-label="next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>next slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
