import React from "react";
import person from "../Images/person.jpg";
import star from "../Images/star.svg";
import Border from "../Images/Border.svg";
const PersonReview = () => {
  return (
    <div className="pt-[87px] pb-[120px]">
      <div className="max-w-[1290px] w-[100%] h-fit  max-[998px]:flex-col mx-auto flex max-[426px]:gap-[25px]  gap-[54px]">
        <div className="max-[998px]:flex max-[998px]:justify-center max-[998px]:px-[20px]">
          <img
            src={person}
            alt="img"
            className="w-[374px] max-h-[523px] max-[998px]:w-[300px] max-[998px]:h-[300px] max-[999px]:rounded-[10px]  h-auto  object-fit"
          />
        </div>
        <div className="flex flex-col justify-center max-[426px]:p-[20px]">
          <div className="flex flex-col items-center h-fit">
            <p className="max-[426px]:text-[25px] font-[Oswald] text-center font-[600] text-[29px] text-[#212121] capitalize">
              Piter Bowman
            </p>
            <p className=" text-center font-[Oswald] font-[600] text-[20px] text-[#FFC222] capitalize mt-[6.33px]">
              Business CEO & cofounder
            </p>
            <p className="max-[426px]:text-[14px] max-w-[719.5977783203125px] w-[100%] font-[Oswald] font-[500] text-[34px]  max-[1197px]:text-[20px] text-[#212121] mt-[28.39px] text-center">
              “Thank you for dinner last night. It was amazing!! I have say it’s
              the best meal I have had in quite some time. will definitely be
              seeing more eating next year.”
            </p>
            <div className="w-fit h-fit flex gap-[3.53px] mt-[24px]">
              <img
                src={star}
                alt="img"
                className="w-[16.134374618530273px] h-[14px]"
              />
              <img
                src={star}
                alt="img"
                className="w-[16.134374618530273px] h-[14px]"
              />
              <img
                src={star}
                alt="img"
                className="w-[16.134374618530273px] h-[14px]"
              />
              <img
                src={star}
                alt="img"
                className="w-[16.134374618530273px] h-[14px]"
              />
              <img
                src={star}
                alt="img"
                className="w-[16.134374618530273px] h-[14px]"
              />
            </div>
            <div className="mt-[50px] max-[426px]:mt-[25px]">
              <img src={Border} alt="img" className="w-[146px] h-[41px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonReview;
