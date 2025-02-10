import Image from "next/image";
import React from "react";


const Map = ({ block, dataBinding }) => {
    const { map_img, prefix_text, highlight, suffix } = block;
    return (
        <div className='pb-[20px] em:pb-[40px] lg:pb-[100px] pt-0 md:pt-[5px]' data-cms-bind={dataBinding}>
            <div className='max-w-[90%] xl:max-w-[1280px] mx-auto px-0 em:px-4 my-[50px] md:my-[80px] lg:my-[120px] font-DM'>
                <div>
                    <div className='py-[30px]  px-[15px] em:px-[40px] bg-[#F9F9F9] rounded-[10px] shadow-2xl'>
                        <ul className='flex flex-col lg:flex-row-reverse justify-between items-center'>
                            <li className='w-[100%] lg:w-[65%] mt-[0] lg:mt-[-3em]'>
                                <p className='font-DM text-[18px] sm:text-[20px] md:text-[26px] lg:text-[32px] font-normal leading-[26px] sm:leading-[30px] md:leading-[42px] text-[#3D405B] text-center lg:text-left'>{prefix_text} <span className='text-[#9370E4] font-bold'>{highlight}</span> {suffix}</p>
                            </li>
                            <li className='w-[100%] mx-auto xl:mx-[0px] mt-[30px] lg:mt-[0px] max-w-[35%] em:max-w-[30%] xl:max-w-[35%] flex justify-center lg:justify-start'>
                                <Image src={map_img} width={448} height={500} alt={"Africa Map"} unoptimized />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Map;
