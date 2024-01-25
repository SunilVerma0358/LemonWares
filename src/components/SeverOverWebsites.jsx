import React from "react";
import JNPL from "../assets/images/JPNLIMg.webp";
import Korana from "../assets/images/korrane.webp";
import Nadine from "../assets/images/Nadine.webp";
import BradingImg from "../assets/images/brandingImg.webp";
import glass from "../assets/images/glass.webp";
import clu from "../assets/images/CLU.webp";

const SeverOverWebsites = () => {
  return (
    <>
      <div className="max-w-[1216px] mx-auto px-3 py-[50px] sm:py-[70px] md:py-[90px] lg:py-[105px]">
        <div className="flex flex-wrap flex-row -mx-3">
          <div data-aos="fade-down" className=" w-full lg:w-7/12 px-3">
            <h2 className=" font-Inter font-extrabold text-[#18191F] text-[36px] sm:text-[40px] md:text-[44px] lg:text-[48px] leading-[133%] max-w-[445px]">
              We serve over 100 Nigerian Websites
            </h2>
            <p className=" font-Inter font-normal text-[#18191F] text-base sm:text-[18px] leading-[177%] max-w-[445px] pt-2 sm:pt-3">
              Connect LemonWares with your favourite tools that you use daily
              and keep things on track.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="w-full  lg:w-5/12 px-3 pt-6 sm:pt-7  lg:pt-0"
          >
            <div className="flex flex-wrap flex-row -mx-3 items-center">
              <div className="w-4/12 px-5">
                <img
                  className="w-full max-w-[120px] transition-all duration-300 hover:scale-105  cursor-pointer "
                  src={JNPL}
                  alt="Panel"
                />
              </div>
              <div className="w-4/12 px-5">
                <img
                  className="w-full max-w-[120px] transition-all duration-300 hover:scale-105  cursor-pointer "
                  src={Korana}
                  alt="Panel"
                />
              </div>
              <div className="w-4/12 px-5">
                <img
                  className="w-full max-w-[120px] transition-all duration-300 hover:scale-105  cursor-pointer "
                  src={Nadine}
                  alt="Panel"
                />
              </div>
              <div className="w-4/12 px-5 pt-6 sm:pt-[36px] md:pt-[50px]">
                <img
                  className="w-full max-w-[120px] pt-[13px] transition-all duration-300 hover:scale-105  cursor-pointer  "
                  src={BradingImg}
                  alt="fourth"
                />
              </div>
              <div className="w-4/12 px-5 pt-6 sm:pt-[36px] md:pt-[50px]">
                <img
                  className="w-full max-w-[120px]  transition-all duration-300 hover:scale-105  cursor-pointer"
                  src={glass}
                  alt="Panel"
                />
              </div>
              <div className="w-4/12 px-5 pt-6 sm:pt-[36px] md:pt-[50px]">
                <img
                  className="w-full max-w-[120px] pb-[12px]  transition-all duration-300 hover:scale-105 cursor-pointer"
                  src={clu}
                  alt="Panel"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeverOverWebsites;
