import React from 'react';

const Scope = ({ block, dataBinding }) => {
  const { title, question1, question2, description1, description2, description3, description4, description5, description6, description7, description8 } = block;

  return (
    <div >
      <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4' data-cms-bind={dataBinding}>
        <h5 className='text-[26px] md:text-[34px] leading-[30px] text-[#3D405B] font-DM font-bold pt-[20px] pb-[20px] md:pb-[40px]'>1. {title}</h5>

        <div>
          <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{question1}</h6>

          <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description1}</p>

          <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2}</p>

          <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description3}</p>

          <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description4}</p>

          <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description5}</p>

          <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description6}</p>

        </div>

        <div className='pt-[20px]'>
          <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{question2}</h6>

          <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[15px]'>{description7}</p>

          <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[15px]'>{description8}</p>
        </div>
      </div>
    </div>
  )
}

export default Scope;
