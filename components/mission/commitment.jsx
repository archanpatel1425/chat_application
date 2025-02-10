import React from "react";
import Image from 'next/image'

const Commitment = ({ block, dataBinding }) => {
    const { title, description } = block;
    return (
        <div className='relative' data_cms_bind={dataBinding}>

        <div>
              <Image src="/assets/images/commit-left-arrow.png" width={170} height={144} alt={""} unoptimized className='absolute top-[2em] left-[5%] hidden xl:block'/>
          </div>
        <div className='max-w-[90%] xl:max-w-[1120px] mx-auto  px-0 em:px-4 my-[50px] md:my-[70px]'>
              <div className='text-center py-[50px] bg-[#f5f5f5] rounded-[10px] bg-[url("/assets/images/commit-bg.png")] bg-center bg-pillars'>
              <h2 className='font-DM text-[#3D405B] text-[24px] em:text-[28px] md:text-[30px] lg:text-[46px] font-bold text-center'>{title}</h2>
              <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[27px] md:leading-[30px] text-[#3D405B] pt-[10px] md:pt-[15px] max-w-[93%] mx-auto'>{description}</p>
              </div>
        </div>
        <div>
              <Image src="/assets/images/commit-right.png" width={170} height={170} alt={""} unoptimized className='absolute top-[4em] right-[4%] hidden xl:block'/>
          </div>
    </div>
    );
};

export default Commitment;
