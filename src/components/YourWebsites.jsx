import React from "react";
import whatsapp from "../assets/iconSvg/whatsapp.svg";
import FirstElipse from "../assets/iconSvg/heroMainLeft.svg";
import SecondElipse from "../assets/iconSvg/heroMainRightTop.svg";
import ThreeElipse from "../assets/iconSvg/heroMainRightBottom.svg";
const YourWebsites = () => {
  return (
    <>
      <div className="max-w-[1244px] px-3 mx-auto pb-[50px] sm:pb-[70px] md:pb-[90px] lg:pb-[110px]">
        <div className="pt-[38px] sm:pt-[60px] md:pt-[80px] pb-[40px] sm:pb-[66px] md:pb-[88px] w-full bg-[#F7FAFE] rounded-[16px] relative">
          <div className="sm:max-w-[40px] max-w-[20px] absolute bottom-[20%] left-[-1%]">
            <img className="w-full" src={FirstElipse} alt="img" />
          </div>
          <div className="sm:max-w-[40px] max-w-[20px] absolute top-0 left-[34%]">
            <img className="w-full" src={SecondElipse} alt="img" />
          </div>
          <div className=" sm:max-w-[72px] max-w-[37px] absolute right-[-1%] bottom-[9%]">
            <img className="w-full" src={ThreeElipse} alt="img" />
          </div>
          <h2 className=" font-Poppins font-semibold text-[#2E2E2E] text-[38px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[137%] max-w-[1024px] mx-auto text-center">
            We're here to make your website awesome.
          </h2>
          <button className="bg-[#B00000] rounded-[8px]  font-Poppins font-normal text-[#fff] text-[12px] sm:text-[14px] leading-[171%] flex items-center gap-[9px] px-4 py-3 mx-auto mt-[22px] sm:mt-[40px] hover:shadow-[0px_0px_64px_0px_#b000004d] transition-all duration-300 ease-linear ">
            <span>
              <img src={whatsapp} alt="whatsapp" />
            </span>
            Get in touch with us
          </button>
        </div>
      </div>
    </>
  );
};

export default YourWebsites;
