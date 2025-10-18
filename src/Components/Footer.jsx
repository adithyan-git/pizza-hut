import React from "react";
import { Link } from "react-router-dom";
import right from "../Images/right.svg";
import footerleft from "../Images/footerleft.svg";
import footerright from "../Images/footerright.svg";
import footerbottom from "../Images/footerbottom.png";

const Footer = () => {
  return (
    <div
      className="px-[20px] pt-[120px] bg-[#F5F8FD] pb-[14.99px] relative before:opacity-[.1] before:content-[''] before:absolute before:w-[290px] before:h-[517px] before:bottom-0 before:left-[-100px] before:bg-[image:var(--footerleft)] after:content-[''] after:absolute after:w-[274px] after:h-[440px] after:bottom-0 after:right-[0px] after:opacity-[0.1] after:bg-[image:var(--footerright)] "
      style={{
        "--footerleft": `url(${footerleft})`,
        "--footerright": `url(${footerright})`,
      }}
    >
      <div className="max-w-[1290px] w-[100%] mx-auto  relative z-[1]">
        <div className="grid grid-cols-12 gap-[47px] max-[935px]:grid-cols-2  max-[585px]:grid-cols-1">
          <div className="max-[1025px]:px-[15px] col-span-4 max-[935px]:col-span-1  w-[100%] h-[364.95001220703125px] transform transition-all duration-300 hover:bg-[#bb0526f2] px-[45px] bg-[#F3274C] flex flex-col justify-around  rounded-[30px]">
            <div className="">
              <h6 className=" font-[Fugaz One] font-[400] text-[24px] text-[#FFFFFF]">
                pizza hut
              </h6>
              <p className=" pl-[17px] font-[Fugaz One] font-[400] text-[10px] text-[#FFFFFF]">
                FOOD & RESTAURANT
              </p>
            </div>
            <div>
              <p className="max-[1025px]:text-[14px] font-[Fredoka One] font-[400] text-[16px] text-[#FFFFFF]">
                Tuesday – Saturday: 12:00pm – 23:00pm
              </p>
              <p className="max-[1025px]:text-[14px] font-[Fredoka One] font-[400] text-[16px] text-[#FFFFFF]">
                Closed on Sunday
              </p>
            </div>
            <div>
              <p className="max-[1025px]:text-[14px] font-[Fredoka One] font-[400] text-[16px] text-[#FFFFFF]">
                5 star rated on TripAdvisor
              </p>
            </div>
          </div>
          <div className="col-span-2 max-[935px]:col-span-1">
            <h6 className="font-[Fredoka One] font-[400] text-[26px] text-[#000000] mb-[47.49px] w-fit border-b-[5px] border-[#FFD40D]">
              About
            </h6>
            <div className=" flex flex-col gap-[12.98px]">
              <div className="flex gap-[8.98px]  items-center">
                <img
                  src={right}
                  alt="img"
                  className="w-[9.143750190734863px] h-[14px]"
                />
                <p className="max-[1025px]:text-[14px] font-[Epilogue] font-[400] text-[16px] text-[#000000]">
                  Fredoka
                </p>
              </div>
              <div className="flex gap-[8.98px]  items-center">
                <img
                  src={right}
                  alt="img"
                  className="w-[9.143750190734863px] h-[14px]"
                />
                <p className="max-[1025px]:text-[14px] font-[Epilogue] font-[400] text-[16px] text-[#000000]">
                  Fredoka
                </p>
              </div>
              <div className="flex gap-[8.98px]  items-center">
                <img
                  src={right}
                  alt="img"
                  className="w-[9.143750190734863px] h-[14px]"
                />
                <p className="max-[1025px]:text-[14px] font-[Epilogue] font-[400] text-[16px] text-[#000000]">
                  Fredoka
                </p>
              </div>
              <div className="flex gap-[8.98px] items-center">
                <img
                  src={right}
                  alt="img"
                  className="w-[9.143750190734863px] h-[14px]"
                />
                <p className="max-[1025px]:text-[14px] font-[Epilogue] font-[400] text-[16px] text-[#000000]">
                  Fredoka
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 max-[935px]:col-span-1">
            <h6 className="font-[Fredoka One] font-[400] text-[26px] text-[#000000] mb-[47.49px] w-fit border-b-[5px] border-[#FFD40D]">
              Menu
            </h6>
            <div className=" flex flex-col gap-[12.98px]">
              <div className="flex gap-[8.98px]  items-center">
                <img
                  src={right}
                  alt="img"
                  className="w-[9.143750190734863px] h-[14px]"
                />
                <p className="max-[1025px]:text-[14px] font-[Epilogue] font-[400] text-[16px] text-[#000000]">
                  Burgers
                </p>
              </div>
              <div className="flex gap-[8.98px]  items-center">
                <img
                  src={right}
                  alt="img"
                  className="w-[9.143750190734863px] h-[14px]"
                />
                <p className="max-[1025px]:text-[14px] font-[Epilogue] font-[400] text-[16px] text-[#000000]">
                  Steaks
                </p>
              </div>
              <div className="flex gap-[8.98px] j items-center">
                <img
                  src={right}
                  alt="img"
                  className="w-[9.143750190734863px] h-[14px]"
                />
                <p className="max-[1025px]:text-[14px] font-[Epilogue] font-[400] text-[16px] text-[#000000]">
                  Fredoka
                </p>
              </div>
              <div className="flex gap-[8.98px]  items-center">
                <img
                  src={right}
                  alt="img"
                  className="w-[9.143750190734863px] h-[14px]"
                />
                <p className="max-[1025px]:text-[14px] font-[Epilogue] font-[400] text-[16px] text-[#000000]">
                  Fredoka
                </p>
              </div>
              <div className="flex gap-[8.98px]  items-center">
                <img
                  src={right}
                  alt="img"
                  className="w-[9.143750190734863px] h-[14px]"
                />
                <p className="max-[1025px]:text-[14px] font-[Epilogue] font-[400] text-[16px] text-[#000000]">
                  Fredoka
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4 max-[935px]:col-span-1">
            <h6 className="font-[Fredoka One] font-[400] text-[26px] text-[#000000] mb-[47.49px] w-fit border-b-[5px] border-[#FFD40D]">
              Newsletter
            </h6>
            <div>
              <p className="max-[1025px]:text-[14px] font-[Epilogue] font-[400] text-[16px] text-[#000000] mb-[15px]">
                Get recent news and updates.
              </p>
              <form action="">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email Address"
                  className="max-[1025px]:text-[14px] font-[Epilogue] font-[400] text-[16px] text-[#000000] w-[100%] flex justify-center items-center border-[1px] border-[#DEDEDE] h-[63px] pl-[36px] rounded-[10px] bg-white"
                />
              </form>
              <div className="ml-[10px] w-fit rounded-3xl mt-[20px] p-[7px] border-[3px] border-[#F3274C]">
                <button className="max-[1025px]:text-[14px] ml-[-17px] transform transition-all duration-300 hover:bg-[#bb0526f2] px-[42px] py-[20px] bg-[#F3274C] font-[Fredoka One] font-[400] text-[16px] text-[#FFFFFF] rounded-[12px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex relative before:content-[''] before:absolute before:z-[-1] max-[426px]:gap-0 before:w-[62px] before:h-[29.979999542236328px] before:bottom-0 before:left-[50%] before:transform before:translate-x-[-50%] before:bg-[image:var(--footerbottom)]  before:opacity-[0.1] max-[797px]:justify-center flex-wrap gap-[20px] justify-between px-[10px] py-[22px] border-t-[10px] border-[#FFD40D] mt-[100.01px]"
          style={{
            "--footerbottom": `url(${footerbottom})`,
          }}
        >
          <div className="flex items-center">
            <p className="max-[1025px]:text-[14px] max-[426px]:text-[13px] font-[Fugaz One] font-[400] text-[16px] text-[#F3274C]">
              © 2024 pizza hut
            </p>
            <p className="max-[1025px]:text-[14px] max-[426px]:text-[13px] max-[321px]:text-[13px]  font-[Fredoka] font-[400] text-[16px] text-[#000000]">
              <span className="pl-[5px]"> |</span>{" "}
              <Link>All shawonetc3 Themes</Link>
            </p>
          </div>
          <div>
            <div className="flex flex-wrap max-[473px]:gap-[20px] items-center gap-[274.99px] z-[1]">
              <p className="max-[1025px]:text-[14px] font-[Fredoka One] font-[400] text-[16px] text-[#000000]">
                <Link className="underline max-[426px]:text-[13px]">
                  Facebook
                </Link>
              </p>
              <p className="max-[1025px]:text-[14px] font-[Fredoka One] font-[400] text-[16px] text-[#000000]">
                <Link className="underline max-[426px]:text-[13px]">
                  Instagram
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
