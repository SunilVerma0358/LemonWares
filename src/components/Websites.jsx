import React, { useState } from "react";
import correct from "../assets/iconSvg/correct.svg";
import { Basic } from "./common/Helper";

const Websites = () => {
  const [first, setfirst] = useState();
  const [custom, setcustom] = useState("Tab1");
  function ChangeTab(Tab) {
    setcustom(Tab);
  }
  return (
    <>
      <div
        id="website"
        className="max-w-[1100px] mx-auto px-3 py-[50px] sm:py-[70px] md:py-[85px] lg:py-[100px] "
      >
        <h2 className=" font-Poppins font-semibold text-[#000] text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px] leading-[120%] text-center mx-auto max-w-[650px]">
          Ready to get started with Lemon Wares?
        </h2>
        <p className=" font-Poppins font-normal text-[#000] text-[20px] sm:text-[22px] md:text-[25px] leading-[100%] text-center pt-5 sm:pt-7 md:pt-[38px]">
          Choose the package that suits you
        </p>
        <div className="flex items-center justify-center flex-wrap py-[26px] sm:py-[40px] md:py-[57px] ">
          <p className=" font-Poppins font-normal text-[#000] text-[20px] sm:text-[22px] md:text-[25px] leading-[100%]">
            Monthly
          </p>
          <label className=" relative inline-block w-[60px] sm:w-[93px] h-[35px] sm:h-[50px] ms-[26px] ">
            <input type="checkbox" className="opacity-0 w-0 h-0" />
            <span
              onClick={() => setfirst(!first)}
              className="slider rounded-[50px] absolute top-0 left-0 bottom-0 right-0 cursor-pointer transition-all duration-300 ease-linear bg-[#B00000] before:absolute before:h-[20px] sm:before:h-[30px] before:w-[20px] sm:before:w-[30px] before:rounded-[30px] before:left-1 sm:before:left-[6px] before:bottom-[8px] sm:before:bottom-[11px] before:bg-white before:transition-all before:duration-300 before:ease-linear"
            ></span>
          </label>
          <p className=" font-Poppins font-normal text-[#000] text-[20px] sm:text-[22px] md:text-[25px] leading-[100%] ps-[26px]">
            Yearly
          </p>
          <div className=" font-Poppins font-medium text-[10px] text-[#000] leading-[90%] bg-[#FFE87A] rounded-[8px] py-[7px] px-2 ms-[25px] max-[385px]:mt-4">
            20% discount
          </div>
        </div>
        <div className="mx-auto max-w-[856px] relative before:absolute before:w-full before:max-w-[856px] before:h-[4px] before:bg-[#C4C4C4]  before:bottom-[-3px] before:left-[0%] ">
          <div className="flex items-center justify-between  md:pt-[13px]    ">
            <button
              onClick={() => ChangeTab("Tab1")}
              className={`${
                custom === "Tab1"
                  ? " relative  before:h-[4px]  before:bg-[#B00000] before:max-w-[443px]  before:absolute before:left-0 before:bottom-[-10%] before:duration-300 before:transition-all before:ease-linear before:w-full"
                  : ""
              } font-Poppins font-semibold text-[#000] text-[22px] sm:text-[26px] md:text-[30px] w-[50%] flex justify-center leading-[140%] max-w-[443px]  mx-auto  `}
            >
              Basic
            </button>

            <button
              onClick={() => ChangeTab("Tab2")}
              className={`${
                custom === "Tab2"
                  ? "relative before:h-[4px]  before:bg-[#B00000] before:max-w-[443px]  before:absolute before:left-0 before:bottom-[-10%] before:duration-300 before:transition-all before:ease-linear before:w-full "
                  : ""
              } font-Poppins font-semibold text-[#000] text-[22px] sm:text-[26px] md:text-[30px] leading-[140%] w-[50%] flex justify-center  `}
            >
              Premium
            </button>
          </div>
        </div>
        {custom === "Tab1" && (
          <div className="flex flex-row flex-wrap -mx-3 pt-[20px] sm:pt-[40px] md:pt-[60px]  justify-center">
            {Basic.map((props, index) => (
              <div
                key={index}
                className="w-full sm:w-6/12 lg:w-4/12  pt-6 px-3 "
              >
                <div className="flex justify-center items-center">
                  <div className="pt-4 sm:pt-[34px] pb-8 sm:pb-[48px] pe-[20px] sm:pe-[29px] ps-6 sm:ps-[35px] border-[1.5px] border-[#C4C4C4] shadow-[0px_0px_4px_0px_#00000040_inset] rounded-[15px] max-w-[305px] hover:shadow-[0px_0px_6px_0px_#B00000_inset] hover:border-transparent transition-all duration-300 ease-linear cursor-pointer ">
                    <h4 className=" font-Poppins font-semibold text-[#000] text-[20px] sm:text-[28px] leading-[89%] ">
                      {props.HeadingFour}
                    </h4>
                    <p className=" font-Poppins font-normal text-[12px] text-[#000] leading-[150%] pt-[11px] max-w-[237px]">
                      with all your customers via all conversation channels in
                      one central dashboard.
                    </p>
                    <h3 className=" font-Poppins font-semibold text-[#000] text-[32px] sm:text-[36px] md:text-[42px] leading-[76.19%] pt-5 sm:pt-[28px]">
                      {first
                        ? props.CommonHeadingTwo
                        : props.CommonHeadingThree}
                    </h3>
                    <p className=" font-Poppins font-light text-[12px] sm:text-[14px] text-[#000] leading-[100%] pt-[11px]">
                      Per month
                    </p>
                    <button className=" font-Poppins font-semibold text-[#000] text-[12px] sm:text-[14px] leading-[228%] py-[9px] ps-[56px] pe-[60px] mt-[20px] sm:mt-[28px] md:mt-[35px] border-2 border-[#000] rounded-[12px] transition-all ease-linear duration-300 hover:text-[#fff] hover:border-transparent relative  isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#B00000] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 ">
                      Choose this Plan
                    </button>
                    <p className=" font-Inter font-bold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      2GB SSD
                    </p>
                    <p className=" font-Inter font-semibold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      10GB Bandwidth
                    </p>
                    <p className=" font-Inter font-semibold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      15 Email Accounts
                    </p>
                    <p className=" font-Inter font-bold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      Unlimited Database
                    </p>{" "}
                    <p className=" font-Inter font-semibold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      4 Subdomains
                    </p>{" "}
                    <p className=" font-Inter font-semibold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      1 Parked Domain
                    </p>{" "}
                    <p className=" font-Inter font-semibold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      2 Websites
                    </p>{" "}
                    <p className=" font-Inter font-semibold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      Free SSL
                    </p>{" "}
                    <p className=" font-Inter font-semibold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      Softaculous
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {custom === "Tab2" && (
          <div className="flex flex-row flex-wrap -mx-3 pt-[20px] sm:pt-[40px] md:pt-[60px]  justify-center">
            {Basic.map((props, index) => (
              <div
                key={index}
                className="w-full sm:w-6/12 lg:w-4/12  pt-6 px-3 "
              >
                <div className="flex justify-center items-center">
                  <div className="pt-4 sm:pt-[34px] pb-8 sm:pb-[48px] pe-[20px] sm:pe-[29px] ps-6 sm:ps-[35px] border-[1.5px] border-[#C4C4C4] shadow-[0px_0px_4px_0px_#00000040_inset] rounded-[15px] max-w-[305px] hover:shadow-[0px_0px_6px_0px_#B00000_inset] hover:border-transparent transition-all duration-300 ease-linear cursor-pointer ">
                    <h4 className=" font-Poppins font-semibold text-[#000] text-[20px] sm:text-[28px] leading-[89%] ">
                      {props.HeadingFour}
                    </h4>
                    <p className=" font-Poppins font-normal text-[12px] text-[#000] leading-[150%] pt-[11px] max-w-[237px]">
                      with all your customers via all conversation channels in
                      one central dashboard.
                    </p>
                    <h3 className=" font-Poppins font-semibold text-[#000] text-[32px] sm:text-[36px] md:text-[42px] leading-[76.19%] pt-5 sm:pt-[28px]">
                      {first
                        ? props.CommonHeadingTwo
                        : props.CommonHeadingThree}
                    </h3>
                    <p className=" font-Poppins font-light text-[12px] sm:text-[14px] text-[#000] leading-[100%] pt-[11px]">
                      Per month
                    </p>
                    <button className=" font-Poppins font-semibold text-[#000] text-[12px] sm:text-[14px] leading-[228%] py-[9px] ps-[56px] pe-[60px] mt-[20px] sm:mt-[28px] md:mt-[35px] border-2 border-[#000] rounded-[12px] transition-all ease-linear duration-300 hover:text-[#fff] hover:border-transparent relative  isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#B00000] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 ">
                      Choose this Plan
                    </button>
                    <p className=" font-Inter font-bold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      2GB SSD
                    </p>
                    <p className=" font-Inter font-semibold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      10GB Bandwidth
                    </p>
                    <p className=" font-Inter font-semibold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      15 Email Accounts
                    </p>
                    <p className=" font-Inter font-bold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      Unlimited Database
                    </p>{" "}
                    <p className=" font-Inter font-semibold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      4 Subdomains
                    </p>{" "}
                    <p className=" font-Inter font-semibold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      1 Parked Domain
                    </p>{" "}
                    <p className=" font-Inter font-semibold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      2 Websites
                    </p>{" "}
                    <p className=" font-Inter font-semibold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      Free SSL
                    </p>{" "}
                    <p className=" font-Inter font-semibold text-[#808080] text-[14px] sm:text-base leading-[150%] lining-nums  proportional-nums  flex items-center gap-6 pt-2 sm:pt-[15px]">
                      <span>
                        <img src={correct} alt="correct" />
                      </span>
                      Softaculous
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Websites;
