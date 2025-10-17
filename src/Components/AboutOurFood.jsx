import { Link } from "react-router-dom";
import icon1 from "../Images/icon1.svg";
import icon from "../Images/icon1.png";
import bgimg from "../Images/bgimg.jpg";

const AboutOurFood = () => {
  return (
    <div className="pt-[120px] pl-[20px] max-lg:pr-[20px] pb-[120px]">
      <div className="max-w-[1400px] w-[100%] grid grid-cols-12 max-lg:grid-cols-2  mx-auto gap-[20px] max-lg:gap-[0px]  ">
        <div className="col-span-7 max-lg:cols-span-12">
          <p className="font-[Oswald] font-[700] text-[17px] text-[#F3274C] mb-[4.89px] max-lg:text-center capitalize">
            about our food
          </p>
          <h6 className="max-w-[476.70184326171875px] max-[500px]:text-[30px] max-lg:max-w-[100%] w-[100%] font-[Oswald] font-[700] text-[60px] text-[#212121] max-lg:text-center">
            Where Quality Meet Excellent{" "}
            <span className="text-[#F3274C]"> Service.</span>
          </h6>
          <p className="max-lg:text-center max-w-[629.4446411132812px] max-lg:max-w-[100%]  font-[Oswald] font-[400] text-[17px] text-[#5C5C5B] mt-[29.49px]">
            Its the perfect dining experience where every dish is crafted with
            fresh, high-quality Experience quick and efficient service that
            ensures your food is servead fresh Its the dining experience where
            every dish is crafted with fresh, high-quality ingredients
          </p>
          <div className="grid grid-cols-2 max-[500px]:grid-cols-1  gap-[21.37px] mt-[30.5px]">
            <div className="flex gap-[15px] w-fit max-[500px]:mx-auto">
              <div className="">
                <img
                  src={icon}
                  alt="img"
                  className="w-[52.02000045776367px] h-[52px]"
                />
              </div>
              <div>
                <h6 className=" font-[Oswald] font-[600] text-[20px] text-[#212121] capitalize">
                  super quality food
                </h6>
                <p className="max-w-[238.1080322265625px] w-[100%] font-[Oswald] font-[400] text-[17px] text-[#212121]">
                  A team of dreamers and doers building unique interactive music
                  and art
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] w-fit max-[500px]:mx-auto">
              <div className="">
                <img
                  src={icon1}
                  alt="img"
                  className="w-[52.02000045776367px] h-[52px]"
                />
              </div>
              <div>
                <h6 className=" font-[Oswald] font-[600] text-[20px] text-[#212121] capitalize">
                  well reputation
                </h6>
                <p className=" max-w-[238.1080322265625px] w-[100%] font-[Oswald] font-[400] text-[17px] text-[#212121]">
                  A team of dreamers and doers building unique interactive music
                  and art
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-[22px] mt-[52.5px] items-center max-lg:justify-center">
            <div className="">
              <Link className="max-[500px]:w-[123px] flex bg-[#F3274C] hover:bg-[#f74e6d] transform transition-all duration-300 rounded-[9px] items-center  justify-center w-[209.33999633789062px] h-[65.5px] text-[17px] text-[#FFFFFF] font-[Oswald] font-[600px] ">
                More About Us
              </Link>
            </div>
            <div>
              <h6 className="font-[Oswald] font-[600] text-[16px] text-[#FFC222]">
                BRENDON GARREY
              </h6>
              <p className="max-[500px]:text-[13px] font-[Oswald] font-[700] text-[16px] text-[#212121] ">
                CUSTOMER’S EXPERIENCE IS OUR HIGHEST PRIORITY.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-5 max-lg:cols-span-12  max-lg:mr-[0px] max-lg:pt-[20px]">
          <img src={bgimg} alt="img" className="h-[100%] w-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default AboutOurFood;
