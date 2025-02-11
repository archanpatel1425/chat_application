const Share = ({ block, dataBinding }) => {
  const {
    title,
    qusetion1,
    description1,
    sub_title,
    description1_point_1,
    description1_point_2,
    description1_point_3,
    description1_point_4,
    description1_point_5,
    description1_point_6,
    description1_point_7,
    description1_point_8,
    description1_point_9,
    description2,
    qusetion2,
    description3,
    description4
  } = block;

  return (
    <div >
      <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4'>
        <div className='mt-[50px] md:mt-[100px]' data-cms-bind={dataBinding}>
          <h5 className='text-[26px] md:text-[34px] leading-[30px] text-[#3D405B] font-DM font-bold pt-[20px] pb-[20px] md:pb-[40px]'>4. {title}</h5>

          <div>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion1}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description1}</p>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{sub_title}</p>

            <ul className='list-disc ml-[30px]'>
              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description1_point_1}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{description1_point_2}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{description1_point_3}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{description1_point_4}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{description1_point_5}</li>


              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{description1_point_6}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{description1_point_7}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{description1_point_8}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{description1_point_9}</li>

            </ul>
          </div>

          <div className='pt-[20px]'>
            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[15px]'>{description2}</p>
          </div>

          <div className='pt-[20px]'>

            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion2}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[15px]'>{description3}</p>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[15px]'>{description4}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share;
