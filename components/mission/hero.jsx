import React from "react";
import Image from 'next/image'
const Hero = ({ block, dataBinding }) => {
  const { title, title_suffix, highlight,right_image,left_image } = block;
  return (
    <div className='relative' data-cms-bind={dataBinding}>
      <div className='relative'>
        <div className='absolute  top-[150px] left-[-20px] hidden lg:block'>
          <Image src={right_image} width={400} height={600} alt={""} className='w-[300px] lg:w-[400px] h-[400px] lg:h-[600px] hidden md:block object-contain ' />
        </div>
      </div>
      <div className='relative'>
        <div className='absolute  top-[150px] right-[0px]  hidden lg:block'>
          <Image src={left_image} width={400} height={600} alt={""} className='w-[300px] lg:w-[400px] h-[400px] lg:h-[600px] hidden md:block object-contain ' />
        </div>
      </div>
      <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 bg-hidden md:bg-[url("/assets/images/mission-bg.png")] bg-center bg-cover bg-no-repeat'>
        <div className='block xl:flex justify-center items-center pt-[150px] md:pt-[180px] lg:pt-[230px] xl:pt-[380px] pb-[50px] md:pb-[130px] lg:pb-[230px] xl:pb-[280px] z-50'>
          <div className='w-[100%]   mt-[50px] xl:mt-[0] text-center md:text-left font-DM'>

            <h1 className=' not-italic leading-[50px] em:leading-[60px] sm:leading-[80px] md:leading-[100px] xl:leading-[120px] text-[37px] em:text-[50px] sm:text-[70px] md:text-[90px] xl:text-[100px]  font-bold text-[#3D405B] pb-3 text-center '>{title} <span className="text-[#9370e4]"> {highlight} </span>{title_suffix}</h1>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
