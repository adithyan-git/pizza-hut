import React from "react";
import { Link } from "react-router-dom";
import banner from "../Images/banner.jpg";
import icon from "../Images/Icon.svg";
import arrow from "../Images/arrow.png";
import bannerdiscount from "../Images/bannerdiscount.svg";

const Banner = () => {
  return (
    <section>
      <div
        className="relative px-[20px] py-[30px]   w-[100%] h-[fit] overflow-hidden bg-[image:var(--banner)] bg-cover"
        style={{
          "--banner": `url(${banner})`,
        }}
      >
        <div className="grid h-fit gap-[20px] py-[30px] grid-cols-2 max-[992px]:grid-cols-1  max-w-[1350px] mx-auto w-[100%] max-[1266px]:flex-col">
          <div className=" max-[1266px]:w-[100%]">
            <div className=" flex flex-col justify-around gap-[20px]">
              <p className="font-[Roboto] font-[400] text-[16px] text-[#FFFFFF]">
                Starting at $24.00
              </p>
              <h2 className=" max-[1025px]:text-[50px] max-[1025px]:leading-[50px] max-[1006px]:leading-[50px] max-[1245px]:text-[60px] font-[900] leading-[80px] font-[Roboto] text-[80px] text-[#FFFFFF] w-[710px] max-[1266px]:w-[100%] max-[1006px]:text-[40px] max-[425px]:text-[30px]">
                The best Food Collection 2024
              </h2>
              <p className="font-[400] font-[Oregano] text-[28px] text-[#FFFFFF] relative w-fit">
                Exclusive offer
                <span className="text-[#FFD43A] after:content-[''] after:w-[94px] after:h-[20px] after:bg-[url(./src/Images/SVG.svg)] after:absolute after:bottom-[-24px] after:left-[50%] after:transform after:-translate-[50%]">
                  -35%
                </span>{" "}
                off this week
              </p>
              <Link className="font-[Oswald]  font-[600] text-[17px] text-[#FFFFFF] flex w-[212.3000030517578px] h-[65px] bg-[#EF294C] rounded-[9px] justify-center items-center gap-[10px] hover:bg-[#fd0331a7] transition-all duration-300  max-[1266px]:my-[20px] max-[1006px]:w-[150px] max-[549px]:text-[12px] max-[549px]:w-fit max-[549px]:h-fit max-[549px]:p-[10px]">
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
          <div className="  relative max-[1266px]:w-[100%]   max-[1266px]:flex max-[1266px]:justify-end">
            <img
              src={bannerdiscount}
              alt="img"
              className=" w-[100%] max-[992px]:w-[400px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
