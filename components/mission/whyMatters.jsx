import React from "react";

const WhyMatters = ({ block, dataBinding }) => {
  const { title, description } = block;
  return (
    <div data-cms-bind={dataBinding}>
      <div class="bg-[url(/assets/images/mission-matters-bg.png)] bg-center bg-repeat bg-matters">
        <div class="max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4">
          <div class="text-center py-[50px] md:py-[100px]">
            <h2 class="font-DM text-[#fff] text-[24px] em:text-[28px] md:text-[30px] lg:text-[46px] font-bold text-center">{title}</h2>
            <p class="font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[27px] md:leading-[32px] text-[#fff] pt-[10px] em:pt-[15px] max-w-[100%] md:max-w-[80%] mx-auto">{description}
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default WhyMatters;
