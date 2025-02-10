import React from "react";
import Image from "next/image";

const Hero = ({ block, dataBinding }) => {
    const { title_prefix, highlight, background_img, description } = block;
  return (
    <div className='relative overflow-hidden bg-center bg-no-repeat bg-hidden bg-story' data-cms-bind={dataBinding}>
      <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 '>
        <div className="block xl:flex justify-center items-center pt-[150px] md:pt-[180px] lg:pt-[230px] xl:pt-[300px] z-50">
          <div className="mt-[50px] xl:mt-[0] text-center md:text-left font-DM">
            <h1 className="leading-[42px] em:leading-[50px] sm:leading-[60px] md:leading-[70px] lg:leading-[90px] xl:leading-[100px]  text-[30px] em:text-[36px] sm:text-[42px] md:text-[50px] lg:text-[68px] xl:text-[80px]  font-bold text-[#3D405B] pb-3 text-center">
              {title_prefix}<span className="text-[#009CA5]">{highlight}</span>  
            </h1>
            <p className=" text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] sm:leading-[32px] text-[#3D405B]  text-center max-w-[100%] sm:max-w-[90%] lg:max-w-[75%] mx-auto ">
              {description}
            </p>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="relative w-full h-[214px]">
            <Image src={background_img} alt="bg image" className="object-cover md:object-fill w-full h-full"  height={100} width={100}/>
          </div>
    </div>
  );
}

export default Hero;