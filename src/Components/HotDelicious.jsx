import React from "react";
import { Link } from "react-router-dom";
import hotdelicious from "../Images/hotdelicious.png";
import pizza from "../Images/pizza.svg";
import Background from "../Images/Background.png";
import tomato from "../Images/tomato.svg";
import delivery from "../Images/delivery.svg";
import vehicle from "../Images/vehicle.svg";
import bigpizza from "../Images/big-pizza.svg";
import fiftypercent from "../Images/50percent.svg";
import lefttomato from "../Images/lefttomato.svg";
import bg1 from "../Images/bg1.png";
import icon2 from "../Images/icon2.svg";
import bg3 from "../Images/bg3.png";
import fiftypercentoff from "../Images/50percent-off2.svg";
import bg4 from "../Images/bg4.png";
import frenchfry2 from "../Images/french-fry2.svg";
import bg5 from "../Images/bg5.png";
import chickentext from "../Images/chickentext.svg";
import chickenfrench from "../Images/chicken-french.svg";
const HotDelicious = () => {
  const dummyFod = [
    {
      id: 1,
      title: "Chicago Deep Pizza.",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      image: `${pizza}`,
    },
    {
      id: 2,
      title: "Chicago Deep Pizza.",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      image: `${pizza}`,
    },
    {
      id: 3,
      title: "Chicago Deep Pizza.",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      image: `${pizza}`,
    },
    {
      id: 4,
      title: "Chicago Deep Pizza.",
      description:
        "Its the perfect dining experience where Experience quick and efficient",
      image: `${pizza}`,
    },
  ];
  return (
    <>
      <section>
        <div className="pt-[120px]">
          <div className=" w-full px-[20px]">
            <div className="bg-[url(./src/Images/hotdelicious.png)] max-w-[1290px] mx-auto  w-[100%] h-fit pt-[114px] px-[53px] pb-[119.99px] bg-[url('./src/Images/bg.png)] max-[426px]:px-[10px]">
              <div className="flex flex-col items-center">
                <p className="font-[Oswald] font-[700] text-[17px]  mb-[4.9px] text-[#00A149]">
                  About Our Food
                </p>
                <h6 className="font-[Oswald] font-[700] text-[60px] text-[#212121] capitalize text-center max-[426px]:text-[35px]">
                  hot delicious item
                </h6>
              </div>
              <div className="flex justify-center mt-[30.09px]">
                <div className="w-fit flex gap-[20px] flex-wrap justify-center">
                  <div className="w-fit h-fit py-[13px] px-[36px]  rounded-[40px] bg-[#FFC222] flex justify-center items-center font-[Oswald] font-[500]  text-[18px] text-[#212121] capitalize cursor-pointer">
                    chicken fry
                  </div>
                  <div className="w-fit h-fit py-[13px] px-[36px] rounded-[40px] bg-[#D9D9D9] flex justify-center items-center font-[Oswald] font-[500]  text-[18px] text-[#212121] capitalize border-[1px] border-[#c2c2c2] cursor-pointer">
                    pizza
                  </div>
                  <div className="w-fit h-fit py-[13px] px-[36px]  rounded-[40px] bg-[#D9D9D9] flex justify-center items-center font-[Oswald] font-[500]  text-[18px] text-[#212121] capitalize border-[1px] border-[#c2c2c2] cursor-pointer">
                    burger
                  </div>
                  <div className="w-fit h-fit py-[13px] px-[36px] rounded-[40px] bg-[#D9D9D9] flex justify-center items-center font-[Oswald] font-[500]  text-[18px] text-[#212121] capitalize border-[1px] border-[#c2c2c2] cursor-pointer">
                    deserts
                  </div>
                </div>
              </div>

              <div className="pt-[50px]  max-w-5xl mx-auto  gap-6 h-fit grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3  grid-cols-4  pb-[12.51px]">
                {dummyFod.map((item) => (
                  <div
                    key={item.id}
                    className="w-fit   h-[346.79998779296875px] flex flex-col items-center justify-between mx-auto"
                  >
                    <div className="h-full w-full  flex items-center justify-center">
                      <img
                        src={item.image}
                        alt="img"
                        className="w-3/4 h-full object-contain"
                      />
                    </div>

                    <div className="flex flex-col items-center">
                      <p className="font-[Oswald] font-[700] text-[26px] text-[#212121] capitalize mb-[2.29px] text-center">
                        {item.title}
                      </p>
                      <p className="w-[241.34463500976562px] font-[Oswald] font-[400] text-[17px] text-[#5C5C5B] text-center">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <div>
              <div>
                <img
                  src={Background}
                  alt=""
                  className="w-full h-[390px] max-[426px]:h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#EF294C] px-[20px] w-full before:content-[''] before:absolute relative before:w-[108px] before:h-[198px] before:bg-[url(./src/Images/tomato.svg)] before:bottom-0 before:left-0 after:content-[''] after:absolute after:w-[90px] after:h-[83px] after:bg-[url(./src/Images/chilli.svg)] after:top-[121.91px] after:right-0 ">
          <div className="max-w-[1290px] w-[100%] mx-auto ">
            <div className="flex justify-between max-[1261px]:flex-col max-[1261px]:items-center ">
              <div className="flex flex-col justify-center   pt-[114px] pb-[120px] max-[1261px]:py-[20px] z-1">
                <p className="font-[Oswald] font-[700] text-[17px] text-[#FFC222] max-[805px]:text-center">
                  Crispy, Every Bite Taste
                </p>
                <h2 className="w-[456.0799865722656px] font-[Oswald] font-[700] text-[60px] text-[#FFFFFF] max-[805px]:w-[100%] max-[805px]:text-center max-[562px]:text-[30px] max-[426px]:text-[25px]">
                  30 Minutes Fast{" "}
                  <span className="text-[#FFC222]">Delivery</span> Challenge
                </h2>
              </div>
              <div className="flex gap-[63.6px] h-fit max-[805px]:flex-col max-[805px]:gap-[10px] max-[805px]:items-center z-1 max-[805px]:pb-[10px]">
                <img
                  src={delivery}
                  alt="img"
                  className="w-[412px] h-[347px] max-[805px]:h-auto"
                />
                <Link className="bg-[#FFFFFF] hover:bg-[#ffffffdf] transform transition-all duration-700 w-[212.3000030517578px] h-[65px] flex  rounded-[9px] items-center justify-center gap-[10px] mt-[170.69px] max-[805px]:mt-[10px] max-[426px]:w-fit max-[426px]:h-fit max-[426px]:px-[10px] max-[426px]:py-[10px] ">
                  <img src={vehicle} alt="img" />
                  <p className="font-[Oswald] font-[600] text-[17px] text-[#212121] capitalize">
                    order now
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-2 max-xl:grid-cols-1 ">
          <div className=" relative bg-[url(./src/Images/bgimage.png)] w-[100%] h-[869px] max-[426px]:h-[540px] flex flex-col justify-center items-center p-[10px]">
            <div className="flex flex-col items-center gap-[20px] w-fit h-fit ">
              <div className="w-[100%] h-fit  ">
                <p className="font-[Oswald] font-[700] text-[36px] text-[#FFFFFF]  text-center capitalize">
                  today
                </p>
                <div className="relative">
                  <p className="font-[Oswald] font-[700] max-[426px]:text-[40px] text-[60px] text-[#FFFFFF]  text-center capitalize">
                    special delicious
                  </p>
                  <p className="font-[Oswald] font-[600] text-[40px] max-[426px]:top-[27px]  text-[#FFFFFF]  text-center capitalize absolute top-[50px] left-[50%] transform translate-x-[-50%] w-[100%]">
                    beef<span className="text-[#FFC222]">chiness pizza</span>
                  </p>
                </div>
              </div>
              <div className="w-fit  h-fit z-[1]">
                <div className="relative w-fit">
                  <img src={bigpizza} alt="img" className="w-[100%]" />
                  <img
                    src={fiftypercent}
                    alt="img"
                    className="w-[181px] h-[158px]  absolute top-[-11px] right-[30px] max-[497px]:h-[102px] max-[591px]:h-[129px] max-[376px]:h-[80px] max-[426px]:w-[92px] max-[426px]:h-[102px]"
                  />
                </div>
              </div>
            </div>
            <img
              src={lefttomato}
              alt="img"
              className="absolute w-[67px] h-[224px]  left-0 top-[235.59px] "
            />
          </div>
          <div className=" grid grid-cols-2 max-sm:grid-cols-1">
            <div className="relative ">
              <img src={bg1} alt="img" className="h-[434.5px] w-[100%]" />
              <div className="absolute top-[60px] w-fit h-fit left-[45px] max-[426px]:top-[20px] max-[426px]:left-[20px]">
                <p className="font-[Oswald] font-[500] text-[26px] text-[#FFC222]">
                  Delicious
                </p>
                <p className="text-[#FFFFFF] font-[Oswald] text-[40px] font-[700] ">
                  burger combo
                </p>
                <p className="font-[Oswald] font-[600] text-[18px] text-[#FFFFFF]">
                  This Weekend only
                </p>
                <p className="font-[Oswald] font-[600] text-[20px] text-[#FFFFFF]">
                  limited offer /{" "}
                  <span className="font-[Oswald] font-[700] text-[44px] text-[#FFFFFF]">
                    $5
                  </span>
                </p>
                <Link className="bg-[#FFC222] hover:bg-[#ffb700d7] transform transition-all duration-700 w-[223.77999877929688px] h-fit flex rounded-[9px] justify-center p-[24px] gap-[10px] mt-[21.32px]">
                  <img
                    src={icon2}
                    alt="img"
                    className="w-[24.809999465942383px] h-[24px]"
                  />
                  <p className="font-[Oswald] font-[700] text-[17px] text-[#212121] ">
                    order now
                  </p>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={bg3}
                alt="img"
                className=" h-[434.5px] object-cover w-[100%]"
              />
              <div className="w-[229.63999938964844px] absolute  left-[45px] top-[59.3px] max-[426px]:top-[20px] max-[426px]:left-[20px]">
                <p className="font-[Oswald] font-[600] text-[18px] text-[#FFC222]">
                  crispy, every bite taste
                </p>
                <p className="font-[Oswald] font-[700] text-[53px] text-[#FFFFFF]">
                  SUPER DELICIOUS
                </p>
              </div>
              <img
                src={fiftypercentoff}
                alt="img"
                className="w-[181px] h-[156px] absolute bottom-[15px] left-0"
              />
            </div>
            <div className="relative">
              <img src={bg4} alt="img" className="h-[434.5px] w-[100%]" />
              <div className="absolute top-[59.3px] left-[45px] z-[1] max-[426px]:top-[20px] max-[426px]:left-[20px]">
                <p className="font-[Oswald] font-[600] text-[18px] text-[#FFFFFF]">
                  crispy, every bite taste
                </p>
                <h6 className="max-w-[239.55999755859375px] w-[100%] font-[Oswald] font-[700] text-[53px] text-[#FFFFFF]">
                  FASH FOOD MEAL
                </h6>
                <p className="font-[Oswald] font-[700] text-[16px] text-[#FFFFFF] max-w-[193.65753173828125px] w-[100%]">
                  The mouth-watering aroma of sizzling burgers
                </p>
                <Link className="w-[193.65753173828125px] h-fit flex bg-[#FFC222] hover:bg-[#ffb700d7] transform transition-all duration-700   rounded-[9px] justify-center gap-[10px] p-[25.7px]  mt-[5.7px]">
                  <img
                    src={icon2}
                    alt="img"
                    className="w-[24.809999465942383px] h-[24px] "
                  />
                  <p className="capitalize text-[17px] text-[#212121] font-[700] font-[Oswald] ">
                    order now
                  </p>
                </Link>
              </div>
              <img
                src={frenchfry2}
                alt="img"
                className="max-2xl:w-[210px] max-w-[304px] w-[100%] h-[316]px absolute right-0 bottom-[68.33px]"
              />
            </div>
            <div className="relative">
              <img src={bg5} alt="img" className=" h-[434.5px] w-[100%]" />
              <img
                src={chickentext}
                alt="img"
                className="max-2xl:w-[210px] max-w-[269px] w-[100%] absolute top-[60px] left-[45px] max-[426px]:top-[20px] max-[426px]:left-[20px]"
              />
              <img
                src={chickenfrench}
                alt="img"
                className="max-2xl:w-[210px]  absolute right-[28px] bottom-[45.55px] max-[426px]:bottom-[20px] max-[426px]:right-[20px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotDelicious;
