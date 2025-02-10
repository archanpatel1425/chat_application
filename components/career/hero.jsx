import React from "react";

const Hero = ({ block, dataBinding }) => {
  const {
    title_prefix,
    highlight,
    title_suffix,
    highlightTwo,
    title_suffixTwo,
    description,
    highlightThree,
    description_suffix,
    background_img,
    background_imgTwo,
  } = block;

  return (
    <div data-cms-bind={dataBinding}>
    <div className={`relative bg-hidden  bg-center bg-story  bg-no-repeat overflow-hidden`}
      style={{ backgroundImage: `url(${background_img})` }}>
      <div
        className="max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 sm:bg-hidden bg-contain bg-story md:bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${background_imgTwo})` }}
      >
        <div className='block xl:flex justify-center items-center pt-[150px] md:pt-[180px] lg:pt-[230px] xl:pt-[300px] pb-[50px] md:pb-[130px] lg:pb-[180px] xl:pb-[220px] z-50'>
          <div className='mt-[50px] xl:mt-[0] text-center md:text-left font-DM'>
            <h1 className=' not-italic leading-[42px] em:leading-[50px] sm:leading-[60px] md:leading-[70px] lg:leading-[90px] xl:leading-[100px]  text-[30px] em:text-[36px] sm:text-[42px] md:text-[50px] lg:text-[68px] xl:text-[80px]  font-bold text-[#3D405B] pb-3 text-center max-w-[98%] em:max-w-[92%] mx-auto tracking-[-1.6px]'>{title_prefix} <span className='text-[#009CA5]'>{highlight}</span>  {title_suffix} <span className='text-[#009CA5]'>{highlightTwo}</span> {title_suffixTwo}</h1>
            <p className=' text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] sm:leading-[32px] text-[#3D405B]  text-center max-w-[100%] sm:max-w-[90%] lg:max-w-[80%] mx-auto '>{description} <span className='font-semibold'> {highlightThree}</span> {description_suffix}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
