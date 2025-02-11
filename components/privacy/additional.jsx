
const Additional = ({ block, dataBinding }) => {
  const {
    title,
    description1,
    sub_title,
    point_1,
    point_2,
    point_3,
    point_4,
    point_5,
    point_6,
    point_7,
    point_8,
    point_9,
    point_10,
    description2,
    description3,
    description4,
    description5,
    description6,
    description7,
  } = block;
  return (
    <div >
      <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4'>
        <div className='mt-[50px] md:mt-[100px]' data-cms-bind={dataBinding}>
          <h5 className='text-[26px] md:text-[34px] leading-[30px] text-[#3D405B] font-DM font-bold pt-[20px] pb-[20px] md:pb-[40px]'>13. {title}</h5>

          <div className=''>
            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pb-2 '>{description1}</p>
          </div>

          <div className='pt-[15px]'>
            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pb-2 '>{sub_title}</p>
          </div>

          <div>
            <ul className='list-disc ml-[25px]'>
              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{point_1}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{point_1}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{point_2}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{point_3}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{point_4}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{point_5}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{point_6}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{point_7}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{point_8}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{point_9}</li>

              <li className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[10px]'>{point_10}</li>
            </ul>
          </div>

          <div className='pt-[15px]'>
            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2}</p>
          </div>

          <div className='pt-[15px]'>
            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>
              {description3} </p>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description4}</p>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description5}</p>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description6}</p>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description7}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Additional;
