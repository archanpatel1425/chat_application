import React from "react";

const Statement = ({ block, dataBinding }) => {
  const { title, description, image } = block
  
  return (
    <div data-cms-bind={dataBinding}>
      <div className="max-w-[90%] xl:max-w-[1280px] mx-auto px-0 em:px-4 mt-[50px] em:mt-[100px] md:mt-[100px] mb-[100px] md:mb-[200px]">

        <div style={{ backgroundImage: `url(${image})` }} className={`py-[40px] px-[20px] bg-[#009CA5]  bg-center bg-pillars rounded-[10px] border-[5px] border-[#3D405B]`}>
          <h2 className="font-DM text-[#fff] text-[26px] em:text-[28px] md:text-[30px] lg:text-[48px] font-bold text-center">{title}</h2>
          <p className="font-DM text-[16px] em:text-[18px] sm:text-[20px] lg:text-[24px] text-[#fff]  font-normal text-center max-w-[100%] sm:max-w-[90%] lg:max-w-[50%] mx-auto pt-[10px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Statement;
