import React, { useState } from "react";
import LemonNav from "./LemonNav";
import HeroMain from "../assets/images/HeroMainImg.webp";
import heroMainLeft from "../assets/iconSvg/heroMainLeft.svg";
import heroMainRighttop from "../assets/iconSvg/heroMainRightTop.svg";
import heroMainRightBottom from "../assets/iconSvg/heroMainRightBottom.svg";

const HeroSection = () => {
  const [first, setfirst] = useState("Tab1");
  function ChangeTab(Tab) {
    setfirst(Tab);
  }
  return (
    <>
      <LemonNav />
      <div id="hero" className="container max-w-[1216px] mx-auto px-3">
        <div className="flex md:flex-row flex-wrap flex-col-reverse -mx-3 py-[40px] sm:py-[50px] md:py-[60px] lg:py-[80px]">
          <div
            data-aos="fade-up"
            className=" w-full md:w-6/12 lg:w-7/12 px-3 pt-6 md:pt-0"
          >
            <div className="relative before:w-[100%] before:h-[2px]  before:bg-[#E5E5E5] before:absolute before:left-0 before:bottom-[-9%] before:max-w-[242px]">
              <button
                onClick={() => ChangeTab("Tab1")}
                className={`${
                  first === "Tab1"
                    ? "relative  before:h-[2px]  before:bg-[#B00000] before:absolute before:left-1 before:bottom-[-10%] before:duration-300 before:transition-all before:ease-linear before:w-[77%] text-[#B00000] transition-all duration-300 ease-linear"
                    : "text-[#d6d4d4e0]"
                } font-Poppins font-semibold text-[15px] leading-normal  `}
              >
                Hosting
              </button>
              <button
                onClick={() => ChangeTab("Tab2")}
                className={`${
                  first === "Tab2"
                    ? "relative  before:h-[2px]  before:bg-[#B00000] before:absolute before:left-1 before:bottom-[-10%] before:duration-300 before:transition-all before:ease-linear before:w-[77%] text-[#B00000] transition-all duration-300 ease-linear"
                    : " text-[#d6d4d4e0]"
                } font-Poppins font-semibold text-[15px]  leading-normal   ms-[23px]`}
              >
                Domain
              </button>
              <button
                onClick={() => ChangeTab("Tab3")}
                className={`${
                  first === "Tab3"
                    ? "relative  before:h-[2px]  before:bg-[#B00000] before:absolute before:left-1 before:bottom-[-10%] before:duration-300 before:transition-all before:ease-linear before:w-[77%] text-[#B00000] transition-all duration-300 ease-linear"
                    : "text-[#d6d4d4e0]"
                } font-Poppins font-semibold text-[15px]  leading-normal  ms-[18px]`}
              >
                SEO{" "}
              </button>
              <button
                onClick={() => ChangeTab("Tab4")}
                className={`${
                  first === "Tab4"
                    ? "relative  before:h-[2px]  before:bg-[#B00000] before:absolute before:left-1 before:bottom-[-10%] before:duration-300 before:transition-all before:ease-linear before:w-[77%] text-[#B00000] transition-all duration-300 ease-linear"
                    : "text-[#d6d4d4e0]"
                } font-Poppins font-semibold text-[15px]  leading-normal  ms-[15px]`}
              >
                Email
              </button>
            </div>
            {first === "Tab1" && (
              <div className="pt-5 sm:pt-6 lg:pt-[30px]">
                <h1 className=" font-Poppins font-bold text-[#2E2E2E] text-[34px] sm:text-[46px] lg:text-[56px] xl:text-[64px] leading-[121.094%]">
                  Premium Web Hosting for Your Website
                </h1>
                <p className=" font-Inter font-normal text-[14px] sm:text-base text-[#808080] leading-[175%] tracking-[0.8px] max-w-[448px] pt-[20px] sm:pt-6 lg:pt-[34px]">
                  Blazing fast web hosting for individuals and businesses of all
                  sizes backed by 24x7x365 Support.
                </p>
                <div className="flex gap-6 items-center pt-[30px] sm:pt-[40px]   lg:pt-[60px]">
                  <button className=" font-Poppins font-normal text-[#fff] text-[12px] sm:text-[14px] leading-[171%]  bg-[#B00000] rounded-[8px]  shadow-[0px_0px_64px_0px_#b000004d] p-3  transition-all ease-linear duration-300 hover:text-[#000] border border-transparent hover:border-[#000] relative  hover:shadow-[0px_0px_64px_0px_transparent] isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#fff] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  ">
                    Create an Account
                  </button>
                  <button className=" font-Poppins font-normal text-[#000] text-[12px] sm:text-[14px] leading-[171%]  border border-[#000] rounded-[8px]  p-3  hover:shadow-[0px_0px_64px_0px_#b000004d] transition-all ease-linear duration-300 hover:text-[#fff] hover:border-transparent relative  isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#B00000] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 ">
                    Choose your plan
                  </button>
                </div>
              </div>
            )}
            {first === "Tab2" && (
              <div className="pt-5 sm:pt-6 lg:pt-[30px]">
                <h1 className=" font-Poppins font-bold text-[#2E2E2E] text-[34px] sm:text-[46px]  lg:text-[56px] xl:text-[64px] leading-[121.094%]">
                  Premium Web Domain for Your Website
                </h1>
                <p className=" font-Inter font-normal text-[14px] sm:text-base text-[#808080] leading-[175%] tracking-[0.8px] max-w-[448px] pt-[20px] sm:pt-6 lg:pt-[34px]">
                  Blazing fast web hosting for individuals and businesses of all
                  sizes backed by 24x7x365 Support.
                </p>
                <div className="flex gap-6 items-center  pt-[30px] sm:pt-[40px] xl:pt-[60px]">
                  <button className=" font-Poppins font-normal text-[#fff] text-[12px] sm:text-[14px] leading-[171%]  bg-[#B00000] rounded-[8px]  shadow-[0px_0px_64px_0px_#b000004d] p-3  transition-all ease-linear duration-300 hover:text-[#000] border border-transparent hover:border-[#000] relative  hover:shadow-[0px_0px_64px_0px_transparent] isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#fff] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  ">
                    Create an Account
                  </button>
                  <button className=" font-Poppins font-normal text-[#000] text-[12px] sm:text-[14px] leading-[171%]  border border-[#000] rounded-[8px]  p-3  hover:shadow-[0px_0px_64px_0px_#b000004d] transition-all ease-linear duration-300 hover:text-[#fff] hover:border-transparent relative  isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#B00000] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 ">
                    Choose your plan
                  </button>
                </div>
              </div>
            )}
            {first === "Tab3" && (
              <div className="pt-5 sm:pt-6 lg:pt-[30px]">
                <h1 className=" font-Poppins font-bold text-[#2E2E2E] text-[34px] sm:text-[46px]  lg:text-[56px] xl:text-[64px] leading-[121.094%]">
                  Premium Web SEO for Your Website
                </h1>
                <p className=" font-Inter font-normal text-[14px] sm:text-base text-[#808080] leading-[175%] tracking-[0.8px] max-w-[448px] pt-[20px] sm:pt-6 lg:pt-[34px]">
                  Blazing fast web hosting for individuals and businesses of all
                  sizes backed by 24x7x365 Support.
                </p>
                <div className="flex gap-6 items-center pt-[30px] sm:pt-[40px]   lg:pt-[60px]">
                  <button className=" font-Poppins font-normal text-[#fff] text-[12px] sm:text-[14px] leading-[171%]  bg-[#B00000] rounded-[8px]  shadow-[0px_0px_64px_0px_#b000004d] p-3  transition-all ease-linear duration-300 hover:text-[#000] border border-transparent hover:border-[#000] relative  hover:shadow-[0px_0px_64px_0px_transparent] isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#fff] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  ">
                    Create an Account
                  </button>
                  <button className=" font-Poppins font-normal text-[#000] text-[12px] sm:text-[14px] leading-[171%]  border border-[#000] rounded-[8px]  p-3  hover:shadow-[0px_0px_64px_0px_#b000004d] transition-all ease-linear duration-300 hover:text-[#fff] hover:border-transparent relative  isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#B00000] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 ">
                    Choose your plan
                  </button>
                </div>
              </div>
            )}
            {first === "Tab4" && (
              <div className="pt-5 sm:pt-6 lg:pt-[30px]">
                <h1 className=" font-Poppins font-bold text-[#2E2E2E] text-[34px] sm:text-[46px] lg:text-[56px] xl:text-[64px] leading-[121.094%]">
                  Premium Web Email for Your Website
                </h1>
                <p className=" font-Inter font-normal text-[14px] sm:text-base text-[#808080] leading-[175%] tracking-[0.8px] max-w-[448px] pt-[20px] sm:pt-6 lg:pt-[34px]">
                  Blazing fast web hosting for individuals and businesses of all
                  sizes backed by 24x7x365 Support.
                </p>
                <div className="flex gap-6 items-center pt-[30px] sm:pt-[40px]   lg:pt-[60px]">
                  <button className=" font-Poppins font-normal text-[#fff] text-[12px] sm:text-[14px] leading-[171%]  bg-[#B00000] rounded-[8px]  shadow-[0px_0px_64px_0px_#b000004d] p-3  transition-all ease-linear duration-300 hover:text-[#000] border border-transparent hover:border-[#000] relative  hover:shadow-[0px_0px_64px_0px_transparent] isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#fff] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  ">
                    Create an Account
                  </button>
                  <button className=" font-Poppins font-normal text-[#000] text-[12px] sm:text-[14px] leading-[171%]  border border-[#000] rounded-[8px]  p-3  hover:shadow-[0px_0px_64px_0px_#b000004d] transition-all ease-linear duration-300 hover:text-[#fff] hover:border-transparent relative  isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#B00000] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 ">
                    Choose your plan
                  </button>
                </div>
              </div>
            )}
          </div>
          <div
            data-aos="fade-down"
            className=" w-full md:w-6/12 lg:w-5/12 px-3"
          >
            <div className="max-w-[501px] md:pt-[17px] relative mx-auto md:mx-0">
              <img className="w-full " src={HeroMain} alt="hero" />
              <img
                className=" absolute bottom-[29%] left-[-5%]"
                src={heroMainLeft}
                alt="heromain"
              />
              <img
                className=" absolute top-[16%] right-[-1%]"
                src={heroMainRighttop}
                alt="heromain"
              />
              <img
                className=" absolute bottom-[8%] right-[-1%]"
                src={heroMainRightBottom}
                alt="heromain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
