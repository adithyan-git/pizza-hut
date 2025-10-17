import React from "react";
import img5 from "../Images/img5.svg";
import img6 from "../Images/img6.svg";
import img7 from "../Images/img7.svg";
import img8 from "../Images/img8.svg";
import img9 from "../Images/img9.svg";

const ItemsImages = () => {
  return (
    <div>
      <div className="grid grid-cols-5 max-sm:grid-cols-1 max-md:grid-cols-3 ">
        <div className="">
          <img src={img5} alt="img" className="w-[100%] h-auto object-cover" />
        </div>
        <div className="">
          <img src={img6} alt="img" className="w-[100%] h-auto object-cover" />
        </div>
        <div className="">
          <img src={img7} alt="img" className="w-[100%] h-auto object-cover " />
        </div>
        <div className="">
          <img src={img8} alt="img" className="w-[100%] h-auto object-cover " />
        </div>
        <div className="">
          <img src={img9} alt="img" className="w-[100%] h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ItemsImages;
