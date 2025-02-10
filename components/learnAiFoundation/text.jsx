import Image from "next/image";
import React from "react";

const Text = ({ block, dataBinding }) => {
    const { title, image } = block;
    return (
        <div className=' bg-[#009CA5] mb-[50px] md:mb-[100px] mt-[-30px] em:mt-[-90px] md:mt-[-70px] bg-hidden md:bg-[url("/assets/images/text-crop-image.png")] bg-[100%_90px] xl:bg-[100%_50px] bg-cropRespon lg:bg-crop  bg-no-repeat' data-cms-bind={dataBinding}>
            <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4'>
                <div className='text-center py-[30px] em:py-[50px] md:py-[70px] lg:py-[140px]'>
                    <p className='font-DM  text-[20px] em:text-[22px] sm:text-[26px] md:text-[34px] lg:text-[42px] font-normal leading-[30px] em:leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[55px] text-[#fff] pt-[10px] em:pt-[15px] max-w-[100%] md:max-w-[95%] text-center sm:text-left'>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Text;
