
const Issue = ({ block, dataBinding }) => {
  const {
    title,
    description,
  } = block;

  return (
    <div >
      <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4'>
        <div className='mt-[50px] md:mt-[100px]' data-cms-bind={dataBinding}>
          <h5 className='text-[26px] md:text-[34px] leading-[30px] text-[#3D405B] font-DM font-bold pt-[20px] pb-[20px] md:pb-[40px]'>12. {title}</h5>

          <div>
            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] '>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Issue;
