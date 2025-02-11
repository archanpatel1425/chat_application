
const PrivacyRights = ({ block, dataBinding }) => {
  const {
    title,
    qusetion1,
    description1,
    qusetion2,
    description2,
    qusetion3,
    description3,
    qusetion4,
    description4,
    qusetion5,
    description5,
    sub_title,
    description6,
    description7,
    description8,
    description9,
    description10,
    description11,
    description12,
  } = block;
  return (
    <div >
      <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4'>
        <div className='mt-[50px] md:mt-[100px]' data-cms-bind={dataBinding}>
          <h5 className='text-[26px] md:text-[34px] leading-[30px] text-[#3D405B] font-DM font-bold pt-[20px] pb-[20px] md:pb-[40px]'>10. {title}</h5>

          <div className=''>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion1}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description1}</p>
          </div>

          <div className='pt-[20px]'>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion2}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2}</p>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description3}</p>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'> {description4}</p>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description5}</p>
          </div>

          <div className='pt-[20px]'>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion3}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description6}</p>
          </div>

          <div className='pt-[20px]'>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion4}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description7}</p>
          </div>

          <div className='pt-[20px]'>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion5}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description8}</p>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description9}</p>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description10}</p>
          </div>

          <div className='pt-[20px]'>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{sub_title}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description11}</p>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'> {description12}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyRights;
