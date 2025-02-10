import Image from "next/image";
import React from "react";

const WhyJoin = ({ block, dataBinding }) => {
  const { title, Answers } = block;
  return (
    <div
      className="bg-[#F0F6FF] py-[40px] md:py-[100px] mb-[50px] md:mb-[100px]"
      data-cms-bind={dataBinding}
    >
      <div className="max-w-[90%] xl:max-w-[1280px] mx-auto px-0 em:px-4">
        <h2 className="font-DM text-[#3D405B] text-[24px] em:text-[28px] md:text-[30px] lg:text-[46px] font-bold text-center">
          {title}
        </h2>

        <div className="mt-[20px] md:mt-[50px] px-[0px] em:px-[30px] sm:px-[50px] xl:px-[100px]">
          {Answers.map((answer, index) => (
            <div
              key={index}
              className="block lg:flex items-center justify-between pb-[60px] lg:pb-[30px]"
            >
              <Image
                src={answer.Image}
                width={115}
                height={115}
                alt={`answer-image-${index}`}
                className="w-[20%] md:w-[12%] ml-auto lg:ml-0 mr-auto"
                unoptimized
              />
              <p className="w-[100%] lg:w-[85%] font-DM text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] text-center lg:text-left pt-[20px] lg:pt-[0]">
                <span className="text-[#9370E4] font-bold text-[16px] md:text-[20px] lg:text-[24px]">
                  {answer.title}
                </span>{" "}
                {answer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
