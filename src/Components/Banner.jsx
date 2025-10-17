import React from "react";
import { Link } from "react-router-dom";
import banner from "../Images/banner.jpg";
import icon from "../Images/icon.svg";
import arrow from "../Images/arrow.png";
import bannerdiscount from "../Images/bannerdiscount.svg";

const Banner = () => {
  return (
    <section>
      <div className="relative w-[100%]">
        <img
          src={banner}
          alt="img"
          className="w-[100%] h-[833px] max-[1006px]:h-[600px] max-[425px]:h-[500px]"
        />
        <div className="flex absolute top-0 w-[100%] max-[1266px]:flex-col">
          <div className="first w-[50%] h-[100%] max-[1266px]:w-[100%]">
            <div className="min-[1920px]:pt-[182px] min-[1920px]:pl-[209px] pt-[100px] pl-[100px] max-[768px]:pt-[40px] max-[768px]:pl-[40px] max-[425px]:pr-[10px]">
              <p className="font-[Roboto] font-[400] text-[16px] text-[#FFFFFF]">
                Starting at $24.00
              </p>
              <h2 className="font-[900] font-[Roboto] text-[80px] text-[#FFFFFF] w-[710px] max-[1266px]:w-[100%] max-[1006px]:text-[40px] max-[425px]:text-[30px]">
                The best Food Collection 2024
              </h2>
              <p className="font-[400] font-[Oregano] text-[28px] text-[#FFFFFF] relative w-fit">
                Exclusive offer{" "}
                <span className="text-[#FFD43A] after:content-[''] after:w-[94px] after:h-[20px] after:bg-[url(./src/Images/SVG.svg)] after:absolute after:bottom-[-24px] after:left-[50%] after:transform after:-translate-[50%]">
                  -35%
                </span>{" "}
                off this week
              </p>
              <Link className="font-[Oswald] font-[600] text-[17px] text-[#FFFFFF] flex w-[212.3000030517578px] h-[65px] bg-[#EF294C] rounded-[9px] justify-center items-center gap-[10px] hover:bg-[#fd0331a7] transition-all duration-300 mt-[75.68px] mb-[76px] max-[1266px]:my-[20px] max-[1006px]:w-[150px] max-[549px]:text-[12px] max-[549px]:w-fit max-[549px]:h-fit max-[549px]:p-[10px]">
                <img src={icon} alt="img" />
                order now
              </Link>

              <div className="w-[449.99920654296875px] h-[64px] bg-white rounded-[50px] flex justify-between items-center pl-[22.5px] max-[1006px]:w-[400px] max-[549px]:w-[300px] max-[549px]:h-[50px] max-[425px]:w-fit max-[425px]:rounded-[10px]">
                <form action="">
                  <div className=" flex gap-[20px]">
                    <img src={arrow} alt="img" className="w-[24px] h-[24px]" />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Your emaill address"
                      className="font-[400] text-[16px] text-[#838383] font-[Lato] max-[425px]:text-[12px] focus:outline-none focus:border-none"
                    />
                  </div>
                </form>
                <button className="w-[157.5500030517578px] h-[64px] rounded-[50px] bg-[#EF294C] text-[16px] font-[500] font-[Quicksand] text-[#FFFFFF] max-[1006px]:w-[150px] max-[549px]:h-[50px] max-[549px]:text-[12px] max-[425px]:w-fit px-[10px] max-[425px]:rounded-[10px] hover:bg-[#ff002fb9] transition-all duration-300 cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="second w-[50%] pt-[292px] pr-[75px] min-[1920px]:pr-[150px] max-[1266px]:w-[100%] max-[1266px]:pt-[15px] max-[1266px]:pr-[15px] max-[1266px]:flex max-[1266px]:justify-end">
            <img
              src={bannerdiscount}
              alt="img"
              className=" max-w-[769px] w-[100%] max-[1006px]:w-[400px] max-[425px]:w-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
