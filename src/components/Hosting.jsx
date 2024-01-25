import React from "react";
import Panel from "../assets/images/Panel.webp";
import Wordpress from "../assets/images/wordpress.webp";
import Green from "../assets/images/greenImg.webp";
import fourth from "../assets/images/Fourth.webp";
import LiteSpeed from "../assets/images/Litespeed.webp";
import Cloud from "../assets/images/cloud.webp";
import { helper } from "./common/Helper";

const Hosting = () => {
  return (
    <>
      <div id="about" className="max-w-[1284px] mx-auto px-3">
        <div className="flex flex-row  -mx-3 flex-wrap">
          <div data-aos="fade-down" className="w-full  lg:w-6/12 px-3">
            <h2 className=" font-Inter font-extrabold text-[#18191F] text-[30px] sm:text-[40px] md:text-[48px] leading-[133.333%]">
              True Cloud Web Hosting
            </h2>
            <p className=" font-Inter font-normal text-[#18191F] text-base sm:text-[18px] leading-[32px] pt-3 sm:pt-5">
              True Cloud Web Hosting All of the hosting packages we offer are
              deployed instantly on our SSD powered cloud. We don’t use
              dedicated servers that operate on single pieces of hardware. Our
              entire infrastructure is built to be reliable, secure, and
              scalable.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="w-full  lg:w-6/12 px-3 pt-6 lg:pt-0"
          >
            <div className="flex flex-wrap flex-row -mx-3 items-center">
              <div className="w-4/12 px-5">
                <img
                  className="w-full  transition-all duration-300 hover:scale-105  cursor-pointer"
                  src={Panel}
                  alt="Panel"
                />
              </div>
              <div className="w-4/12 px-5">
                <img
                  className="w-full  transition-all duration-300 hover:scale-105  cursor-pointer"
                  src={Green}
                  alt="Panel"
                />
              </div>
              <div className="w-4/12 px-5">
                <img
                  className="w-full  transition-all duration-300 hover:scale-105  cursor-pointer"
                  src={LiteSpeed}
                  alt="Panel"
                />
              </div>
              <div className="w-4/12 px-5 pt-[24px] sm:pt-[40px] md:pt-[50px]">
                <img
                  className="w-full  transition-all duration-300 hover:scale-105  cursor-pointer pt-[13px]  "
                  src={fourth}
                  alt="fourth"
                />
              </div>
              <div className="w-4/12 px-5 pt-[24px] sm:pt-[40px] md:pt-[50px]">
                <img
                  className="w-full  transition-all duration-300 hover:scale-105  cursor-pointer "
                  src={Wordpress}
                  alt="Panel"
                />
              </div>
              <div className="w-4/12 px-5 pt-[24px] sm:pt-[40px] md:pt-[50px]">
                <img
                  className="w-full  transition-all duration-300 hover:scale-105  cursor-pointer pb-[12px]"
                  src={Cloud}
                  alt="Panel"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center -mx-3 pt-[25px]  sm:pt-[50px] lg:pt-[75px] pb-6 sm:pb-[50px]">
          {helper.map((props, index) => (
            <div
              key={index}
              className="w-full sm:w-6/12 md:w-4/12 xl:w-3/12 px-6 pt-6"
            >
              <div data-aos={props.aosCard} className="text-center ">
                <div className="flex items-center justify-center w-[70px] lg:w-[100px] h-[70px] lg:h-[100px] bg-[#F3D9D9] mx-auto  rounded-[50%] hover:animate-pulse transition-all duration-300 cursor-pointer ">
                  <img
                    className="w-[40px] lg:w-[55px] "
                    src={props.src}
                    alt="img"
                  />
                </div>
                <h3 className=" font-Poppins font-bold text-[#000] text-[18px] sm:text-[20px] leading-normal pt-3">
                  {props.CommonHeading}
                </h3>
                <p className=" font-Poppins font-light text-[#000] text-[12px] leading-normal pt-1 max-w-[252px] mx-auto">
                  {props.CommonPhara}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hosting;
