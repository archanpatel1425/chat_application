import React from 'react';

const Use = ({ block, dataBinding }) => {
  const {
    title,
    qusetion1,
    description1,
    description1_point_1,
    qusetion2,
    description2_point_1,
    description2_point_2,
    description2_point_3,
    description2_point_4,
    description2_point_5,
    description2_point_6,
    description2_point_7,
    description2_point_8,
    description2_point_9,
    description2_point_10,
    description2_point_11,
    qusetion3,
    description3,
    description3_point_1,
    description3_point_2,
    description3_point_3,
    qusetion4,
    description4,
    qusetion5,
    description5
  } = block;
  return (
    <div >
      <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4'>
        <div className='mt-[50px] md:mt-[100px]' data-cms-bind={dataBinding}>
          <h5 className='text-[26px] md:text-[34px] leading-[30px] text-[#3D405B] font-DM font-bold pt-[20px] pb-[20px] md:pb-[40px]'>3.{title} </h5>

          <div>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion1}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description1}</p>

            <ul className='list-disc ml-[20px]'>
              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>To fulfil a contract, or take steps linked to a contract. In particular:
                {description1_point_1}</li>
            </ul>
          </div>

          <div className='pt-[20px]'>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion2}</h6>

            <ul className='list-disc ml-[20px]'>
              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2_point_1}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2_point_2}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2_point_3}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2_point_4}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2_point_5}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2_point_6}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2_point_7}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2_point_8}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2_point_9}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2_point_10}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2_point_11}</li>
            </ul>
          </div>

          <div className='pt-[20px]'>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion3}</h6>

            <ul className='list-disc ml-[20px]'>
              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description3_point_1}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description3_point_2}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description3_point_3}</li>

              <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description3}</p>

            </ul>
          </div>

          <div className='pt-[20px]'>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion4}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description4}</p>
          </div>

          <div className='pt-[20px]'>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion5}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description5}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Use;
