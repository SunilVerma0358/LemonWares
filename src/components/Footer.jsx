import React from "react";
import footerLogo from "../assets/images/footerLogo.webp";
import heart from "../assets/iconSvg/heart.svg";

import { FooterMap } from "./common/Helper";
const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <>
      <div id="Footer" className="bg-[#B00000]">
        <div className="max-w-[1220px] px-3 mx-auto pt-[48px] md:pt-[64px] pb-[40px] sm:pb-[55px] md:pb-[80px]">
          <div className="flex flex-wrap flex-row -mx-3 pb-[40px] sm:pb-[60px] md:pb-[80px] lg:pb-[104px]">
            <div className=" w-full lg:w-4/12 px-3">
              <div className="sm:max-w-[120px] max-w-[80px]">
                <img
                  className="w-full cursor-pointer"
                  src={footerLogo}
                  alt="footerLogo"
                />
              </div>
              <p className=" font-Inter font-normal text-[#E6E6E6] text-[14px] sm:text-base leading-[200%] lg:max-w-[296px] pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elem
              </p>
            </div>
            <div className=" w-full lg:w-8/12 px-3 sm:pt-6 lg:pt-0">
              <div className="flex flex-wrap flex-row -mx-3">
                {FooterMap.map((e, index) => (
                  <div key={index} className="w-6/12 sm:w-3/12 px-3 pt-6 ">
                    <div className="md:max-w-[150px] md:ms-auto">
                      <p className=" font-Inter font-bold text-[#fff] text-[14px] sm:text-[15px] md:text-base leading-[150%]">
                        {e.Heading}
                      </p>
                      <ul>
                        <li className="sm:pt-6 pt-3">
                          <a
                            href="#!"
                            className=" font-Inter font-normal text-[#E6E6E6] text-[14px] sm:text-[15px] md:text-base leading-[200%] hover:text-[#fff] duration-300 relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300 "
                          >
                            {e.linkOne}
                          </a>
                        </li>
                        <li className="sm:pt-6 pt-3">
                          <a
                            href="#!"
                            className=" font-Inter font-normal text-[#E6E6E6] text-[14px] sm:text-[15px] md:text-base leading-[200%] hover:text-[#fff] duration-300 relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300  "
                          >
                            {e.linkTwo}
                          </a>
                        </li>
                        <li className="sm:pt-6 pt-3">
                          <a
                            href="#!"
                            className=" font-Inter font-normal text-[#E6E6E6] text-[14px] sm:text-[15px] md:text-base leading-[200%] hover:text-[#fff] duration-300 relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300 "
                          >
                            {e.linkThree}
                          </a>
                        </li>
                        <li className="sm:pt-6 pt-3">
                          <a
                            href="#!"
                            className=" font-Inter font-normal text-[#E6E6E6] text-[14px] sm:text-[15px] md:text-base leading-[200%] hover:text-[#fff] duration-300 relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300 "
                          >
                            {e.linkFour}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className=" font-Inter font-noraml text-[11px] min-[350px]:text-[12px] sm:text-base text-[#fff] gap-[2px] sm:gap-[4px] leading-[200%] flex items-center ">
            Built by Jeremiah with{" "}
            <span>
              <img src={heart} alt="heart" className=" sm:w-[24px] w-[14px]" />
            </span>{" "}
            love in Lagos. Copyright {year}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
