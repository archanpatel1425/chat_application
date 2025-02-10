import Image from "next/image";
import React from "react";

const Hero = ({ block, dataBinding }) => {
  const { above_title, title, title_suffix, below_title, background_image} =
    block;
    console.log(background_image);
  return (
    <div data-cms-bind={dataBinding}>
      <div
        className={`max-w-[100%] xl:max-w-[1350px] mx-auto my-0 px-[5px] em:px-4 pt-[200px] em:pt-[250px] sm:pt-[300px] xl:pt-[350px] pb-[70px] em:pb-[100px] sm:pb-[130px] lg:pb-[150px] xl:pb-[200px] bg-hidden bg-story xl:bg-cover bg-no-repeat overflow-hidden`}
        style={{ backgroundImage: `url(${background_image})`}}
      >
        <div className='flex justify-center items-center relative'>
          <div className=' text-center font-DM relative top-0 xl:top-[-2em]'>
            <p className='text-[14px] md:text-[16px]  font-normal leading-normal text-[#3D405B] pb-2'>{above_title}</p>
            <h1 className='leading-[40px] em:leading-[45px] md:leading-[50px] lg:leading-[60px] xl:leading-[68px] text-[30px] em:text-[34px] md:text-[40px] lg:text-[46px] xl:text-[58px]  font-bold text-[#3D405B] max-w-[100%] em:max-w-[80%] md:max-w-[65%] mx-auto '> <span className='text-[#9370E4]'>{title_suffix}</span> {title}</h1>
            <p className=' text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[20px] em:leading-[27px] md:leading-[30px] text-[#3D405B] max-w-[80%] em:max-w-[70%] sm:max-w-[50%] lg:max-w-[38%] mx-auto pt-[10px]'>{below_title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;