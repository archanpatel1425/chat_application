import Image from "next/image";
import React from "react";

const Hero = ({ block, dataBinding }) => {
  const { title, description, background_image, image_url } = block;

  return (
    <div
      className="relative bg-hidden mx-0"
      style={{ backgroundImage: `url(${background_image})` }}
      data-cms-bind={dataBinding}
    >
      <div className="max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4">
        <div className="block xl:flex justify-between items-center pt-[150px] pb-[30px] md:pb-[80px]">
          <div className="w-[100%] xl:w-[60%] mt-[30px] xl:mt-[0] text-center md:text-left">
            <h1 className="font-Mont not-italic leading-[50px] lg:leading-[80px] text-4xl md:text-5xl lg:text-[60px] font-bold text-[#3D405B] pb-3">
              {title}
            </h1>
            <p className="font-DM text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[30px] text-[#3D405B] pb-2">
              {description}
            </p>
          </div>
          <div className="w-[100%] mx-auto xl:mx-0 mt-[50px] xl:mt-0 max-w-[30%] em:max-w-[50%] xl:max-w-[28%] flex justify-center xl:justify-end">
            <Image
              src={image_url}
              alt="Terms Hero"
              width={202}
              height={456}
              loading="lazy"
              className="color-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
