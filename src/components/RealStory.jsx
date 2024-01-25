import React from "react";
import CLy from "../assets/images/cli.webp";
import QuotaMark from "../assets/iconSvg/Quote.svg";
import JPNL from "../assets/images/jPNL.webp";
import Branding from "../assets/images/Branding.webp";
import Quatoes from "../assets/images/Quatoes.webp";
const RealStory = () => {
  return (
    <>
      <div
        id="Real"
        className="max-w-[1200px] ps-3 pe-3 sm:pe-6 mx-auto pt-[50px]"
      >
        <div className="flex flex-wrap flex-row -mx-3">
          <div className="w-full sm:w-6/12 px-3">
            <div data-aos="fade-down" className="max-w-[445px] ms-auto">
              <h2 className=" font-Inter  font-extrabold text-[#18191F] text-[28px] sm:text-[36px] lg:text-[48px] leading-[133%]  relative ">
                Real Stories from Real Customers
                <span className=" lg:max-w-[142px] sm:max-w-[100px] max-w-[70px] absolute top-[-38%] sm:top-[-41%] left-[-3%] sm:left-[-5%] lg:left-[-18%]  z-[-1]">
                  <img className="w-full" src={Quatoes} alt="outes" />
                </span>
              </h2>
              <p className=" font-Inter font-normal text-[#18191F] text-base sm:text-[18px] leading-[177%] pt-2">
                Get inspired by these stories.
              </p>
            </div>

            <div data-aos="fade-up">
              <div className=" px-4 sm:px-[32px] pt-[7px] pb-10 sm:pb-14 md:pb-[65px] lg:pb-[96px] shadow-[0px_10px_20px_0px_#29292a12] rounded-lg sm:max-w-[350px]  me-auto sm:me-[0] ms-auto mt-6  hover:shadow-[0px_5px_5px_2px_#C4C4C4] transition-all duration-300 ease-linear cursor-pointer ">
                <div className="ps-[28px] sm:ps-[32px]   ">
                  <img className=" max-w-[120px]" src={CLy} alt="cyl" />
                </div>
                <div className="flex gap-2 md:gap-4">
                  <div className=" h-[16px]">
                    <img className="max-w-[110px]" src={QuotaMark} alt="img" />
                  </div>
                  <p className=" font-Inter font-normal text-[14px] sm:text-base text-[#000] leading-[200%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim
                    praesent elem
                  </p>
                </div>
                <div className="ps-6 md:ps-7">
                  {" "}
                  <p className=" font-Inter font-bold text-base sm:text-[18px] text-[#000] leading-[155%]  pt-4 sm:pt-6 ">
                    Floyd Miles
                  </p>
                  <p className=" font-Inter font-medium text-[12px] sm:text-[14px] text-[#969BAB] leading-[171%] ">
                    Vice President, CLI
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-6/12 ps-3 sm:ps-[15px] pe-2">
            <div data-aos="fade-up">
              <div className="px-4 sm:px-[32px] pt-5 sm:pt-[39px] pb-2 sm:pb-[14px] shadow-[0px_10px_20px_0px_#29292a12] rounded-lg  sm:max-w-[445px] mt-6 lg:mt-12 hover:shadow-[0px_5px_5px_2px_#C4C4C4] transition-all duration-300 ease-linear cursor-pointer ">
                <div className="ps-[24px]">
                  <img src={JPNL} alt="cyl" />
                </div>
                <div className="flex gap-2 md:gap-4 pt-[15px]">
                  <div className=" h-[16px]">
                    <img className="max-w-[97px]" src={QuotaMark} alt="img" />
                  </div>
                  <p className=" font-Inter font-normal text-[14px] sm:text-base text-[#000] leading-[200%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim
                    praesent elem
                  </p>
                </div>
                <p className=" font-Inter font-bold text-base sm:text-[18px] text-[#000] leading-[155%] ps-[24px] pt-4 sm:pt-6">
                  Jane Cooper
                </p>
                <p className=" font-Inter font-medium text-[12px] sm:text-[14px] text-[#969BAB] leading-[171%] ps-[24px]">
                  CEO, JPNL
                </p>
              </div>
            </div>
            <div data-aos="fade-down">
              <div className="px-4 sm:px-[32px] pt-[41px] sm:pt-[34px] pb-2 sm:pb-[32px] shadow-[0px_10px_20px_0px_#29292a12] rounded-lg  sm:max-w-[350px] mt-6 sm:mt-8 hover:shadow-[0px_5px_5px_2px_#C4C4C4] transition-all duration-300 ease-linear  cursor-pointer">
                <div className="ps-[24px]">
                  <img src={Branding} alt="cyl" />
                </div>
                <div className="flex gap-2 md:gap-4">
                  <div className=" h-[16px]">
                    <img className="max-w-[32px]" src={QuotaMark} alt="img" />
                  </div>
                  <p className=" font-Inter font-normal text-[14px] sm:text-base text-[#000] leading-[177.778%]">
                    LemonWares saved our time in Hosting my company page.
                  </p>
                </div>
                <p className=" font-Inter font-bold text-base sm:text-[18px] text-[#000] leading-[155.556%] ps-[24px] pt-4 sm:pt-6">
                  Kristin Watson
                </p>
                <p className=" font-Inter font-medium text-[12px] sm:text-[14px] text-[#969BAB] leading-[171.429%] ps-[24px]">
                  Co-Founder, LeeveOn Branding
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealStory;
