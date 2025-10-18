import React from "react";
import { Link } from "react-router-dom";
import item1 from "../Images/item1.png";
import rightarrow from "../Images/rightarrow.svg";
import offer1 from "../Images/offer1.svg";
import icon2 from "../Images/icon2.svg";
import smallpizza from "../Images/smallpizza.svg";
import item2 from "../Images/item2.png";
import frenchfry from "../Images/french-fry.svg";
import item3 from "../Images/item3.png";
import food from "../Images/food.svg";
import fiftydiscount from "../Images/50.svg";
import burger2 from "../Images/burger2.png";

const DiscountMenus = () => {
  return (
    <section>
      <div className="w-full px-[20px]">
        <div
          className=" pt-[120px] grid max-sm:grid-cols-1 max-xl:grid-cols-2 max-w-[1290px] mx-[auto]  gap-[32.28px]  pb-[120px] grid-cols-3 after:content-['']  after:bg-[image:var(--burger2)] after:absolute after:w-[123px] after:h-[127px] after:right-[57.59px] after:bottom-[0px]  max-[1920px]:after:h-[100px]  max-[1920px]:after:right-[0px] relative   "
          style={{
            "--burger2": `url(${burger2})`,
          }}
        >
          <div className=" h-[331.19000244140625px] rounded-[9px] relative">
            <img
              src={item1}
              alt=""
              className="w-[100%] h-[331.19000244140625px] rounded-[9px] "
            />
            <div className="w-[173.67999267578125px] h-[98.80000305175781px] absolute left-[35px] top-[49.3px]  max-[376px]:left-[20px]">
              <p className="font-[Oswald] font-[700] text-[18px] max-[426px]:text-[13px]  text-[#FFC222]">
                crispy, every bite taste
              </p>
              <h6 className="font-[Oswald] font-[700] text-[38px]  max-[426px]:text-[22px]  text-[#FFFFFF]">
                Delicious & hot pizza
              </h6>
              <div className="mt-[5px]">
                <Link className="flex gap-[9.69px] items-center">
                  <p className=" font-[Oswald] font-[500] text-[17px] text-[#FFFFFF]">
                    order now
                  </p>
                  <img
                    src={rightarrow}
                    alt="img"
                    className="w-[12.590624809265137px] h-[14px]"
                  />
                </Link>
              </div>
            </div>
            <img
              src={offer1}
              alt="img"
              className="absolute top-0 right-[20.28px] w-[181px] h-[158px] max-[376px]:w-[90px]  max-[376px]:right-[0px]  max-[426px]:w-[100px]"
            />
            <img
              src={smallpizza}
              alt="img"
              className="w-[277px] h-[168px] absolute bottom-[0px] right-[0px]"
            />
          </div>
          <div className=" h-[331.19000244140625px] rounded-[9px] relative">
            <img
              src={item2}
              alt="img"
              className="w-[100%] h-[331.19000244140625px] rounded-[9px] object-cover"
            />
            <div className="absolute top-[50px] left-[35px] z-1  max-[376px]:left-[20px]">
              <p className="font-[Oswald] font-[500] text-[13.67px] text-[#FFFFFF]">
                Todays{" "}
                <span className="font-[Oswald] font-[500] text-[26px] text-[#FFC222]">
                  Delicious
                </span>
              </p>
              <h6 className="font-[Oswald] font-[700]  max-[426px]:text-[32px]  text-[40px] text-[#FFFFFF] mt-[10px]">
                french fry
              </h6>
              <p className="font-[Oswald] font-[700] text-[18px] text-[#FFFFFF] mt-[10px]">
                This Weekend only
              </p>
              <Link className=" max-[426px]:w-fit bg-[#FFC222] h-fit flex rounded-[9px] justify-center p-[20px] gap-[10px] mt-[10px] hover:bg-[#ffb700]">
                <img
                  src={icon2}
                  alt="img"
                  className="w-[24.809999465942383px] h-[24px]"
                />
                <p className=" font-[Oswald] font-[500] text-[17px]  text-[#FFFFFF] max-[426px]:text-[13px] ">
                  order now
                </p>
              </Link>
            </div>
            <img
              src={frenchfry}
              alt="img"
              className="absolute right-0 bottom-0"
            />
          </div>
          <div className=" relative ">
            <img
              src={item3}
              alt="img"
              className="w-[100%] h-[331.19000244140625px] rounded-[9px] object-cover"
            />
            <div className="absolute top-[49.3px] left-[35px] z-1  max-[376px]:left-[20px]">
              <p className="font-[Oswald] font-[700]  max-[426px]:text-[13px] text-[18px] text-[#FFC222] mb-[4.99px]">
                crispy, every bite taste
              </p>
              <h6 className="w-[163.25999450683594px]  max-[426px]:text-[32px] font-[Oswald] font-[700] text-[38px] text-[#FFFFFF] leading-[49.4px] ">
                chiken & french fry
              </h6>
              <div className="mt-[5px]">
                <Link className="flex gap-[9.69px] items-center">
                  <p className="font-[Oswald] font-[500] text-[17px] text-[#FFFFFF] ">
                    order now{" "}
                  </p>
                  <img
                    src={rightarrow}
                    alt="img"
                    className="w-[12.590624809265137px] h-[14px]"
                  />
                </Link>
              </div>
            </div>
            <img
              src={food}
              alt="img"
              className="w-[250px] h-[241px] absolute right-0 bottom-0"
            />
            <img
              src={fiftydiscount}
              alt="img"
              className="w-[79px] h-[67px] absolute top-[66.23px] right-[121.7px] max-[425px]:right-[10px] max-[806px]:right-[30px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountMenus;
