import React from "react";
import img from "../Images/img.jpg";
import image from "../Images/Image.svg";
import signature from "../Images/signature.svg";
import leaves from "../Images/leaves.svg";
console.log(leaves);

const BestDeliciousFood = () => {
  return (
    <div className=" px-[20px]">
      <div className=" justify-between grid grid-cols-12 max-lg:grid-cols-2 max-lg:gap-[0px] max-w-[1290px] gap-[74px] w-[100%] mx-auto ">
        <div
          className="col-span-5 max-lg:col-span-12 relative after:content-[' '] relative after:absolute after:w-[188px] after:h-[540px] after:top-[-100px] after:left-[0px] after:bg-[image:var(--leaves)] after:z-[-1] max-[437px]:after:h-[300px]"
          style={{
            "--leaves": `url(${leaves})`,
          }}
        >
          <img src={img} alt="img" className=" w-[100%]  h-[100%] " />
          <div className="w-fit h-fit p-[45px] max-sm:p-[20px] bg-[#FFC222] absolute bottom-0 right-0 bg-[url(./src/Images/bgimg.png)] ]">
            <p className="max-w-[224.3715362548828px] w-[100%] font-[Oswald] font-[700]  max-[426px]:text-[22px] text-[28px] text-[#212121px]">
              we cook hot sandwiches for you
            </p>
          </div>
        </div>
        <div className=" flex flex-col  col-span-7 max-lg:col-span-12 ">
          <div className="w-fit px-[10px] max-lg:w-[100%]">
            <div className="w-fit max-lg:w-[100%] max-lg:flex  max-lg:flex-col max-lg:items-center max-lg:pt-[20px]">
              <p className="font-[Oswald] font-[700] text-[#00A149] text-[17px] capitalize mb-[5px] max-lg:text-center">
                about our food
              </p>
              <h6 className="max-[1025px]:text-[50px]  max-[769px]:text-[45px] max-sm:text-[25px] font-[Oswald] font-[700] text-[60px] text-[#212121] max-w-[580.1448364257812px] w-[100%] capitalize max-lg:text-center">
                the best delicious food made from us...
              </h6>
              <p className=" max-[1025px]:text-[16px] max-[769px]:text-[15px] max-[426px]:text-[14px] max-w-[636.9617919921875px]  w-[100%] text-[17px] text-[#5C5C5B] font-[400] font-[Oswald] mt-[29.5px] max-lg:text-center">
                Its the perfect dining experience where every dish is crafted
                with fresh, high-quality dining experience Experience quick and
                efficient service that ensures your food is servead fresh Its
                the where every dining experience where every dish is crafted
                with fresh, high-quality ingredients fresh, high-quality
              </p>
            </div>
            <div className="grid max-xl:mx-auto  max-sm:border-t-0   max-md:grid-cols-2  max-sm:grid-cols-1 grid-cols-3   border-t-[1px] border-[#D9D9D9] mt-[40.5px]  max-[426px]:mt-[0px] w-fit">
              <div className=" pt-[39.3px] pl-[30px] border-r-[1px] border-[#D9D9D9]  max-sm:border-r-0 pr-[80.62px] relative before:content-['0'] before:absolute before:font-[Oswald] before:font-[700] before:text-[90px] before:text-[#D9D9D9] before:left-0 before:top-0 before:z-[-1]">
                <p className="  max-[769px]:text-[16px] font-[Oswald] font-[500] text-[18px] text-[#212121] capitalize">
                  Satsified Clients
                </p>
                <h6 className="font-[Oswald] font-[700] text-[50px] text-[#FFC222]">
                  250+
                </h6>
              </div>
              <div className=" pt-[39.3px] px-[20px] border-r-[1px] border-[#D9D9D9]  max-sm:border-r-0    relative before:content-['F'] before:absolute before:font-[Oswald] before:font-[700] before:text-[90px] before:text-[#D9D9D9] before:left-[9px] before:top-0 before:z-[-1]">
                <p className="max-[769px]:text-[16px] font-[Oswald] font-[500] text-[18px] text-[#212121] capitalize">
                  Total food catagories
                </p>
                <h6 className="font-[Oswald] font-[700] text-[50px] text-[#FFC222]">
                  153+
                </h6>
              </div>
              <div className=" pt-[39.3px] px-[20px] relative before:content-['A'] max-sm:border-r-0 before:absolute before:font-[Oswald] before:font-[700] before:text-[90px] before:text-[#D9D9D9] before:left-[10px] before:top-0 before:z-[-1]">
                <p className="max-[769px]:text-[16px] font-[Oswald] font-[500] text-[18px] text-[#212121] capitalize">
                  awward win
                </p>
                <h6 className="font-[Oswald] font-[700] text-[50px] text-[#FFC222]">
                  25+
                </h6>
              </div>
            </div>
            <div className="flex flex-wrap gap-[20px] max-sm:justify-around justify-between items-center mt-[50px]">
              <div>
                <img src={image} alt="img" className="w-[60px] h-[60px]" />
              </div>
              <div>
                <img src={signature} alt="img" className="w-[121px] h-[46px]" />
              </div>
              <div className="px-[119px] max-md:px-[40px] py-[10px] bg-[#212121] w-fit h-fit rounded-[19px]">
                <p className="font-[Oswald] font-[600] text-[16px] text-[#FFFFFF]">
                  Foundation, since <span className="text-[#FFC222]">21st</span>{" "}
                  Oct , 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeliciousFood;
