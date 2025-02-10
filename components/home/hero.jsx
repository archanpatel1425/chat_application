import Image from "next/image";
import React from "react";

const HomeHero = ({ block, dataBinding }) => {
    const { title, title_suffix, description, image, alt } = block;
    return (
     <div className='max-w-[90%] xl:max-w-[1280px] mx-auto px-0 em:px-4' data-cms-bind={dataBinding}>
            <div className=' relative z-[-10]  pt-[50px] em:pt-[150px] lg:pt-[250px] pb-[50px] sm:pb-[150px] lg:pb-[200px] xl:pb-[500px] bg-none xl:bg-[url("/assets/images/banner-crop.png")] bg-center bg-banner bg-no-repeat  top-[-1em]'>
                <div className='block text-center z-0 relative top-[5em]'>
                    <h1 className='font-Mont not-italic leading-[35px] em:leading-[55px] md:leading-[63px] text-[30px] em:text-[38px] em:text-[42px] md:text-[64px] lg:text-[80px]  font-bold text-[#9370E4] pb-2 md:pb-3 text-center  mt-[50px]'>{title}</h1>
                    <h1 className='pt-[0px] md:pt-[15px] lg:pt-[20px] font-Mont not-italic leading-[35px] em:leading-[55px] text-[30px] em:text-[38px] em:text-[42px] md:text-[64px] lg:text-[80px]  font-bold text-[#3D405B] pb-1 md:pb-3 text-center'>{title_suffix}</h1>
                    <p className='font-DM text-[16px] em:text-[18px] sm:text-[20px] lg:text-[24px] text-[#3D405B]  font-normal text-center max-w-[100%] sm:max-w-[90%] lg:max-w-[50%] mx-auto pt-[10px] lg:pt-[20px]'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
