import React, { useState } from "react";
import logo from "../assets/images/Logo.webp";
const LemonNav = () => {
  const [first, setfirst] = useState(false);
  function setopen() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }
  return (
    <>
      <div className="max-w-[1216px] mx-auto px-3 pt-[20px] sm:pt-[30] md:pt-[40px]">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-[110px]  xl:gap-[135px]">
            <div className="flex items-center gap-[48px] xl:gap-[62px]">
              <img
                className="max-w-[92px] cursor-pointer"
                src={logo}
                alt="logo"
              />
              <a
                href="#hero"
                className=" font-Poppins font-semibold text-[#000] text-[15px] leading-normal relative before:w-0 before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:left-3 before:bottom-[-10%] before:duration-200 before:transition-all before:ease-linear before:hover:w-[77%]"
              >
                Our Services
              </a>
            </div>
            <div
              className={`${
                first ? "right-0" : "right-100"
              } flex  gap-[33px] sm:gap-0   max-[1023px]:w-full h-full fixed bg-white right-[-100%] bg-[#0000] top-0 items-center justify-center lg:h-unset lg:static lg:right-0 lg:bg-transparent lg:justify-end flex-col lg:flex-row z-40 transition-all ease-linear duration-300 `}
            >
              <ul className="flex items-center gap-[33px] flex-col lg:flex-row">
                <li>
                  <a
                    href="#about"
                    onClick={setopen}
                    className=" font-Poppins font-semibold text-[#000] text-[15px] leading-normal relative before:w-0 before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:left-1 before:bottom-[-10%] before:duration-200 before:transition-all before:ease-linear before:hover:w-[77%] "
                  >
                    About{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#Real"
                    onClick={setopen}
                    className=" font-Poppins font-semibold text-[#000] text-[15px] leading-normal relative before:w-0 before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:left-2 before:bottom-[-10%] before:duration-200 before:transition-all before:ease-linear before:hover:w-[77%] "
                  >
                    Blog&News{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#website"
                    onClick={setopen}
                    className=" font-Poppins font-semibold text-[#000] text-[15px] leading-normal  relative before:w-0 before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:left-2 before:bottom-[-10%] before:duration-200 before:transition-all before:ease-linear before:hover:w-[77%]"
                  >
                    Contact{" "}
                  </a>
                </li>
              </ul>
              <div className="flex sm:hidden items-center gap-[33px] flex-col ">
                <a
                  href="#!"
                  onClick={setopen}
                  className=" font-Poppins font-semibold text-[#000] text-[15px] leading-normal before:absolute relative   after:w-0 after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:absolute after:left-2 after:bottom-[-10%] after:duration-300 after:transition-all after:ease-linear after:hover:w-[77%]"
                >
                  Account
                </a>
                <a
                  href="tel:+2349067322844"
                  onClick={setopen}
                  className=" font-Poppins font-semibold text-[#000] text-[15px] leading-normal flex items-center gap-[6px] lg:pe-[52px]  relative before:w-0 before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:left-7 before:bottom-[-10%] before:duration-200 before:transition-all before:ease-linear before:hover:w-[77%]"
                >
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1171_470)">
                        <path
                          d="M18.3333 14.0999V16.5999C18.3343 16.832 18.2867 17.0617 18.1937 17.2744C18.1008 17.487 17.9644 17.6779 17.7934 17.8348C17.6224 17.9917 17.4205 18.1112 17.2006 18.1855C16.9808 18.2599 16.7478 18.2875 16.5167 18.2666C13.9523 17.988 11.4892 17.1117 9.32498 15.7083C7.31151 14.4288 5.60443 12.7217 4.32499 10.7083C2.91663 8.53426 2.04019 6.05908 1.76665 3.48325C1.74583 3.25281 1.77321 3.02055 1.84707 2.80127C1.92092 2.58199 2.03963 2.38049 2.19562 2.2096C2.35162 2.03871 2.54149 1.90218 2.75314 1.80869C2.9648 1.7152 3.1936 1.6668 3.42499 1.66658H5.92499C6.32941 1.6626 6.72148 1.80582 7.02812 2.06953C7.33476 2.33324 7.53505 2.69946 7.59165 3.09992C7.69717 3.89997 7.89286 4.68552 8.17499 5.44158C8.2871 5.73985 8.31137 6.06401 8.24491 6.37565C8.17844 6.68729 8.02404 6.97334 7.79998 7.19992L6.74165 8.25825C7.92795 10.3445 9.65536 12.072 11.7417 13.2583L12.8 12.1999C13.0266 11.9759 13.3126 11.8215 13.6243 11.755C13.9359 11.6885 14.26 11.7128 14.5583 11.8249C15.3144 12.107 16.0999 12.3027 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.203 13.2931 18.3435 13.6912 18.3333 14.0999Z"
                          stroke="#B00000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1171_470">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  +2349067322844
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 lg:gap-0">
            <div className="hidden sm:flex items-center gap-[62px]">
              <a
                href="#Footer"
                className=" font-Poppins font-semibold text-[#000] text-[15px] leading-normal before:absolute relative before:w-[1px] before:h-[19px] before:bg-[#DAD8D8] before:top-1 before:right-[-32px]  after:w-0 after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:absolute after:left-2 after:bottom-[-10%] after:duration-300 after:transition-all after:ease-linear after:hover:w-[77%]"
              >
                Account
              </a>
              <a
                href="tel:+2349067322844"
                className=" font-Poppins font-semibold text-[#000] text-[15px] leading-normal flex items-center gap-[6px] lg:pe-[52px] relative before:w-0 before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:left-7 before:bottom-[-10%] before:duration-200 before:transition-all before:ease-linear before:hover:w-[62%] "
              >
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1171_470)">
                      <path
                        d="M18.3333 14.0999V16.5999C18.3343 16.832 18.2867 17.0617 18.1937 17.2744C18.1008 17.487 17.9644 17.6779 17.7934 17.8348C17.6224 17.9917 17.4205 18.1112 17.2006 18.1855C16.9808 18.2599 16.7478 18.2875 16.5167 18.2666C13.9523 17.988 11.4892 17.1117 9.32498 15.7083C7.31151 14.4288 5.60443 12.7217 4.32499 10.7083C2.91663 8.53426 2.04019 6.05908 1.76665 3.48325C1.74583 3.25281 1.77321 3.02055 1.84707 2.80127C1.92092 2.58199 2.03963 2.38049 2.19562 2.2096C2.35162 2.03871 2.54149 1.90218 2.75314 1.80869C2.9648 1.7152 3.1936 1.6668 3.42499 1.66658H5.92499C6.32941 1.6626 6.72148 1.80582 7.02812 2.06953C7.33476 2.33324 7.53505 2.69946 7.59165 3.09992C7.69717 3.89997 7.89286 4.68552 8.17499 5.44158C8.2871 5.73985 8.31137 6.06401 8.24491 6.37565C8.17844 6.68729 8.02404 6.97334 7.79998 7.19992L6.74165 8.25825C7.92795 10.3445 9.65536 12.072 11.7417 13.2583L12.8 12.1999C13.0266 11.9759 13.3126 11.8215 13.6243 11.755C13.9359 11.6885 14.26 11.7128 14.5583 11.8249C15.3144 12.107 16.0999 12.3027 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.203 13.2931 18.3435 13.6912 18.3333 14.0999Z"
                        stroke="#B00000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1171_470">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                +2349067322844
              </a>
            </div>{" "}
            <input type="checkbox" id="mobileview" hidden />
            <div onClick={setopen}>
              {first ? (
                <div className="flex lg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer  ">
                  {" "}
                  <span className="bg-[#000] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 rotate-[53deg] -bottom-[11px]"></span>
                  <span className="bg-[#000] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 -rotate-[56deg] bottom-[8px]"></span>
                </div>
              ) : (
                <div className=" flex lg:hidden flex-col  z-50 justify-between w-[24px] h-[24px] cursor-pointer relative ">
                  {" "}
                  <span className="bg-[#000] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                  <span className="bg-[#000]  w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                  <span className="bg-[#000] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default LemonNav;
