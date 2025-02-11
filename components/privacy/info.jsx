import React from 'react';

const Info = ({ block, dataBinding }) => {
  const {
    title,
    question1,
    description1,
    question2,
    description2,
    description2_point_1,
    description2_point_2,
    question3,
    description3,
    description3_point_1,
    description3_point_2,
    question4,
    description4,
    description4_point_1,
    description4_point_2,
    qusetion5,
    description5,
    qusetion6,
    description6
  } = block;
  return (
    <div>
      <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4'>
        <div className='mt-[50px] md:mt-[100px]' data-cms-bind={dataBinding}>
          <h5 className='text-[26px] md:text-[34px] leading-[30px] text-[#3D405B] font-DM font-bold pt-[20px] pb-[20px] md:pb-[40px]'> 2. {title}</h5>

          <div>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{question1}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description1}</p>
          </div>

          <div className='pt-[35px]'>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{question2}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2}</p>

            <ul className='list-disc ml-[20px]'>
              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2_point_1}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2_point_2}</li>
            </ul>
          </div>

          <div className='pt-[35px]'>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{question3}</h6>

            <ul className='list-disc ml-[20px]'>
              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description3_point_1}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description3_point_1}</li>
            </ul>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description3}</p>
          </div>

          <div className='pt-[35px]'>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{question4}:</h6>

            <ul className='list-disc ml-[20px]'>
              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{ description4_point_1}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{ description4_point_2}</li>
            </ul>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{ description4}</p>
          </div>

          <div className='pt-[35px]'>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{ qusetion5}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{ description5}</p>
          </div>

          <div className='pt-[35px]'>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{ qusetion6}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{ description6}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info;
