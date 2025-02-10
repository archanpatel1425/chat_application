import Image from "next/image";
import React from "react";


const Hero = ({ block, dataBinding }) => {
    const { title_prefix, highlight, background_img, background_imgTwo } = block;
  return (
    <div 
    data-cms-bind={dataBinding}
    style={{ backgroundImage: `url(${background_imgTwo})` }}
    className='relative bg-hidden  bg-center bg-story  bg-no-repeat overflow-hidden pt-[30px] em:pt-[150px] xl:pt-[200px] mx-[10px] sm:mx-[15px] 3xl:mx-[180px]'>

      <div 
      style={{ backgroundImage: `url(${background_img})` }}
      className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 bg-hidden  bg-[100%] sm:bg-[50px_-80px] bg-story md:bg-cover bg-no-repeat py-[100px] sm:py-[150px] lg:py-[200px] xl:py-[300px]'>
        <div className="block xl:flex justify-center items-center z-50">
          <div className="mt-[50px] xl:mt-[0] text-center md:text-left font-Mont relative top-[0] em:top-[-8em]">
            <h1 className="leading-[42px] em:leading-[50px] sm:leading-[60px] md:leading-[70px] lg:leading-[90px] xl:leading-[100px]  text-[30px] em:text-[36px] sm:text-[42px] md:text-[50px] lg:text-[68px] xl:text-[80px]  font-bold text-[#3D405B] pb-3 text-center tracking-[0px]  em:tracking-[-1.667px] max-w-[100%] em:max-w-[70%] lg:max-w-[100%] mx-auto">
            {title_prefix} <span className="text-[#9370E4]">{highlight}</span> 
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
