import Image from "next/image";
import React from "react";



const LastText = ({ block, dataBinding }) => {
    const { desc_one, desc_two, image } = block;
    return (

        <div className=' bg-[#009CA5] mt-[50px] sm:mt-[100px] md:mt-[150px] mb-[50px] sm:mb-[100px]  bg-hidden md:bg-[url("/assets/images/focus-right-image.png")] bg-[100%_90px] xl:bg-[100%_50px] bg-cropRespon lg:bg-crop  bg-no-repeat' data-cms-bind={dataBinding}>
            <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4'>
                <div className='py-[30px] md:py-[60px] '>
                    <p className='font-DM text-[18px] em:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[38px] font-normal leading-[28px] em:leading-[32px] sm:leading-[37px] md:leading-[40px] lg:leading-[45px] xl:leading-[58px] text-[#fff] max-w-[100%] em:max-w-[95%] sm:max-w-[80%] xl:max-w-[90%] 2xl:max-w-[93%] ml-auto md:ml-0 mr-auto text-center md:text-left'>{desc_one}</p>
                    <p className='font-DM text-[18px] em:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[38px] font-normal leading-[28px] em:leading-[32px] sm:leading-[37px] md:leading-[40px] lg:leading-[45px] xl:leading-[58px] text-[#fff] pt-[30px] md:pt-[50px] max-w-[100%] em:max-w-[95%] sm:max-w-[80%] 2xl:max-w-[93%] ml-auto md:ml-0 mr-auto  text-center md:text-left'> {desc_two}</p>
                </div>
            </div>
        </div>

    );
};

export default LastText;
