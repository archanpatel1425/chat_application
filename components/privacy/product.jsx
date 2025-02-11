
const ProductImprovements = ({ block, dataBinding }) => {
  const {
       title,
       description1,
       qusetion1,
       description2,
       qusetion2,
       description3,
       qusetion3,
       description4,
  } = block;
  return (
       <div >
            <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4'>
                 <div className='mt-[50px] md:mt-[100px]' data-cms-bind={dataBinding}>
                      <h5 className='text-[26px] md:text-[34px] leading-[30px] text-[#3D405B] font-DM font-bold pt-[20px] pb-[20px] md:pb-[40px]'>9. {title}</h5>

                      <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B]'>{description1}</p>

                      <div className='pt-[20px]'>
                           <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion1}</h6>

                           <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2}</p>
                      </div>

                      <div className='pt-[20px]'>
                           <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion2}</h6>

                           <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description3}</p>
                      </div>

                      <div className='pt-[20px]'>
                           <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion3}</h6>

                           <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description4}</p>
                      </div>
                 </div>
            </div>
       </div>
  )
}

export default ProductImprovements;
