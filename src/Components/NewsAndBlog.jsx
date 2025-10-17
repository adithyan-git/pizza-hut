import React from "react";
import img1 from "../Images/img1.jpg";
import bg1 from "../Images/bg1.jpg";
import fryshape from "../Images/fry-shape.png";

import bg2 from "../Images/bg2.jpg";
import smallburger from "../Images/smallburger.svg";

const NewsAndBlog = () => {
  return (
    <div
      className="px-[20px]  pb-[120px] before:content-[''] before:absolute before:w-[130px] before:h-[128px] relative before:bg-[image:var(--smallburger)] before:left-0 before:top-[173px] before:z-[-1]  after:content-[''] after:absolute after:w-[96px] after:h-[113px]  after:bg-[image:var(--fryshape)] after:right-0 after:bottom-[109px] after:z-[-1]"
      style={{
        "--fryshape": `url(${fryshape})`,
        "--smallburger": `url(${smallburger})`,
      }}
    >
      <div className="max-w-[1290px] w-[100%] mx-auto">
        <div>
          <p className="font-[Oswald] font-[700] text-[17px]  text-[#00A149] mb-[4.9px] text-center">
            NEWS & BLOG
          </p>
          <h6 className="max-[426px]:text-[30px] font-[Oswald] font-[700] text-[60px]  text-[#212121] capitalize text-center">
            update news & blog
          </h6>
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[24px] mt-[60.09px]">
          <div className="rounded-[16px] bg-[#F4F4F4]">
            <div className="relative">
              <img
                src={img1}
                alt="img"
                className="w-[100%] h-[270px]  rounded-t-[16px]"
              />
              <div className="absolute right-[15px] bottom-[-26px] w-[154.9499969482422px] h-[51px] flex justify-center items-center bg-[#FFC222]">
                <p className=" font-[Oswald] font-[500] text-[17px] text-[#212121]">
                  Burger
                </p>
              </div>
            </div>
            <div className=" px-[30px] py-[30px] rounded-b-[16px]">
              <div className="flex gap-[34.62px] pb-[21px] border-b-[1px] border-[#00A149] ">
                <p className="font-[Oswald] font-[600] text-[17px] text-[#212121]">
                  15 Feb 2024
                </p>
                <p className="font-[Oswald] font-[600] text-[17px] text-[#212121]">
                  Comments (0)
                </p>
              </div>
              <h6 className="max-[376px]:text-[20px]  mb-[17px] mt-[17px] max-w-[351.7300109863281px] w-[100%] font-[Oswald] font-[600] text-[28px] text-[#212121] leading-[36.4px]">
                Quick Cravings: Unraveling Fast Food Delights
              </h6>
              <p className="max-w-[343.69989013671875px] w-[100%]  font-[Oswald] font-[400] text-[17px] text-[#5C5C5B] leading-[28px]">
                There are many variations of passages of Lorem Ipsum available,
                but majority have suffered Lorem haca ullamcorper donec ante
                habi believable. If you are going to use a passage...
              </p>
            </div>
          </div>
          <div className="rounded-[16px] bg-[#F4F4F4]">
            <div className="relative">
              <img
                src={bg1}
                alt="img"
                className="w-[100%] h-[270px] rounded-t-[16px]"
              />
              <div className="absolute right-[15px] bottom-[-26px] w-[154.9499969482422px] h-[51px] flex justify-center items-center bg-[#FFC222]">
                <p className=" font-[Oswald] font-[500] text-[17px] text-[#212121]">
                  Burger
                </p>
              </div>
            </div>
            <div className="px-[30px] py-[30px] rounded-b-[16px]">
              <div className="flex gap-[34.62px] pb-[21px] border-b-[1px] border-[#00A149] ">
                <p className="font-[Oswald] font-[600] text-[17px] text-[#212121]">
                  15 Feb 2024
                </p>
                <p className="font-[Oswald] font-[600] text-[17px] text-[#212121]">
                  Comments (0)
                </p>
              </div>
              <h6 className="max-[376px]:text-[20px] mb-[17px] mt-[17px] max-w-[351.7300109863281px] w-[100%] font-[Oswald] font-[600] text-[28px] text-[#212121] leading-[36.4px]">
                Veggie Vibes: Garden Fresh Delightful Creations
              </h6>
              <p className="max-w-[343.69989013671875px] w-[100%]  font-[Oswald] font-[400] text-[17px] text-[#5C5C5B] leading-[28px]">
                There are many variations of passages of Lorem Ipsum available,
                but majority have suffered Lorem haca ullamcorper donec ante
                habi believable. If you are going to use a passage...
              </p>
            </div>
          </div>
          <div className="rounded-[16px] bg-[#F4F4F4]">
            <div className="relative">
              <img
                src={bg2}
                alt="img"
                className="w-[100%]  h-[270px]  rounded-t-[16px]"
              />
              <div className="absolute right-[15px] bottom-[-26px] w-[154.9499969482422px] h-[51px] flex justify-center items-center bg-[#FFC222]">
                <p className=" font-[Oswald] font-[500] text-[17px] text-[#212121]">
                  Burger
                </p>
              </div>
            </div>
            <div className="px-[30px] py-[30px] rounded-b-[16px]">
              <div className="flex gap-[34.62px] pb-[21px] border-b-[1px] border-[#00A149] ">
                <p className="font-[Oswald] font-[600] text-[17px] text-[#212121]">
                  15 Feb 2024
                </p>
                <p className="font-[Oswald] font-[600] text-[17px] text-[#212121]">
                  Comments (0)
                </p>
              </div>
              <h6 className="max-[376px]:text-[20px]  mb-[17px] mt-[17px] max-w-[351.7300109863281px] w-[100%] font-[Oswald] font-[600] text-[28px] text-[#212121] leading-[36.4px]">
                Bold Bite: Exotic Flavors, Global Adventure
              </h6>
              <p className="max-w-[343.69989013671875px] w-[100%]  font-[Oswald] font-[400] text-[17px] text-[#5C5C5B] leading-[28px]">
                There are many variations of passages of Lorem Ipsum available,
                but majority have suffered Lorem haca ullamcorper donec ante
                habi believable. If you are going to use a passage...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndBlog;
