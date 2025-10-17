import React from "react";
import next from "../Images/Next.svg";
import img1 from "../Images/img1.svg";
import img2 from "../Images/img2.svg";
import img3 from "../Images/img3.svg";
import Previous from "../Images/Previous.svg";

const SliderItem = () => {
  return (
    <div className="pt-[120px] px-[20px]">
      <div className="max-w-[1290px] mx-auto w-[100%] flex gap-[20px]">
        <div className="flex flex-col justify-center">
          <img src={next} alt="img" className="w-[60px] h-[64.5px]" />
        </div>
        <div className="w-full grid grid-cols-3 gap-[30px] max-lg:grid-cols-2 max-sm:grid-cols-1 h-fit">
          <div className="w-full">
            <img
              src={img1}
              alt="img"
              className=" w-[100%] h-auto object-cover"
            />
          </div>
          <div className="w-full">
            <img
              src={img2}
              alt="img"
              className="w-[100%] h-auto object-cover"
            />
          </div>
          <div className="w-full">
            <img
              src={img3}
              alt="img"
              className=" w-[100%] h-auto object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <img src={Previous} alt="img" className="w-[60px] h-[64.5px] " />
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
