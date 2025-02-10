import Image from "next/image";
import React from "react";

const Hero = ({ block, dataBinding }) => {
  const { title, title_suffix, highlight, highlight_two, description, background_image } = block;

  return (
    <div
      className={`relative bg-hidden mx-0 em:mx-[10px] 3xl:mx-[80px]`}
      style={{ backgroundImage: `url(${background_image})` }}
      data-cms-bind={dataBinding}
    >
      <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 bg-[url("/assets/images/mission-bg.png")] bg-center bg-cover bg-no-repeat'>
        <div className='block xl:flex justify-center items-center pt-[350px] md:pt-[350px] lg:pt-[400px] xl:pt-[500px] pb-[0px] em:pb-[50px] md:pb-[130px] lg:pb-[180px] xl:pb-[200px] z-50'>
          <div className='w-[100%] mt-0 em:mt-[50px] xl:mt-[0] text-center md:text-left relative top-[-155px]'>
            <h1 className='font-Mont leading-[50px] em:leading-[55px] sm:leading-[70px] lg:leading-[80px] xl:leading-[100px] text-[32px] em:text-[40px] sm:text-[50px] xl:text-[60px] 3xl:text-[80px] font-bold text-[#3D405B] pb-0 3xl:pb-3 text-center tracking-[-1.667px]'>
              {title} <span className='text-[#009CA5]'> {highlight} </span> {title_suffix} <span className='text-[#009CA5]'>  {highlight_two} </span>
            </h1>
            <p className='font-DM text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] sm:leading-[30px] text-[#3D405B] text-center max-w-[100%] sm:max-w-[95%] md:max-w-[60%] 3xl:max-w-[75%] mx-auto '>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
