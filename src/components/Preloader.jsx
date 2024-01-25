import React from "react";
const Preloader = () => {
  return (
    <div>
      <div className="h-screen  bg-white fixed top-0 left-0 right-0 overflow-hidden flex justify-center items-center">
        <div className="w-full relative flex justify-center ">
          <div className=" absolute top-[-35px] scale-[1.5] ">
            <div className="loader h-[25px] w-[1px]  absolute">
              <div className="dot top-[30px] h-[7px] w-[7px] relative rounded-[50%] bg-[#B00000]"></div>
            </div>
            <div className="loader animate-loader h-[25px] w-[1px]  absolute">
              <div className=" top-[30px] h-[7px] w-[7px] relative rounded-[50%] bg-[#B00000]"></div>
            </div>
            <div className="loader animate-loader h-[25px] w-[1px]  absolute">
              <div className=" top-[30px] h-[7px] w-[7px] relative rounded-[50%] bg-[#B00000]"></div>
            </div>
            <div className="loader animate-loader h-[25px] w-[1px]  absolute">
              <div className=" top-[30px] h-[7px] w-[7px] relative rounded-[50%] bg-[#B00000]"></div>
            </div>
            <div className="loader animate-loader h-[25px] w-[1px]  absolute">
              <div className=" top-[30px] h-[7px] w-[7px] relative rounded-[50%] bg-[#B00000]"></div>
            </div>
            <div className="loader animate-loader h-[25px] w-[1px]  absolute">
              <div className=" top-[30px] h-[7px] w-[7px] relative rounded-[50%] bg-[#B00000]"></div>
            </div>
          </div>
          <div className=" absolute bottom-[-85px] text-[25px] font-Poppins font-medium text-[#B00000]">
            Please wait
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
