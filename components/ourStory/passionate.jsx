import React from "react";
import Image from "next/image";


const Passionate = ({ block, dataBinding }) => {
  const { title, description, side_image } = block;
  return (
    <div className="mt-12" >
      <div className='bg-[#F6F6F6]' data-cms-bind={dataBinding}>
        <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 font-DM'>
          <div className=' py-[30px] xl:py-[60px] rounded-[10px] relative my-[50px] md:my-[100px] xl:my-[150px] '>
            <ul className='block lg:flex justify-between items-center'>
              <li className='w-[100%] lg:w-[60%] text-center lg:text-left'>
                <h5 className='font-bold text-[#3D405B] text-[22px] em:text-[30px] lg:text-[36px] xl:text-[42px] font-DM leading-[32px] em:leading-[45px] xl:leading-[50px] max-w-[95%] em:max-w-[90%] xl:max-w-[70%] ml-auto lg:ml-0  mr-auto'>{title}</h5>
                <p className='font-DM text-[16px] em:text-[18px] md:text-[22px] xl:text-[24px] font-normal  leading-[27px] em:leading-[30px] md:leading-[34px] text-[#3D405B] pt-[5px] em:pt-[15px] max-w-[98%] ml-auto lg:ml-0  mr-auto'>{description}</p>
              </li>
              <li className='w-[100%] mx-auto xl:mx-[0px] mt-[30px] em:mt-[50px] sm:mt-[80px] xl:mt-[0px] max-w-[50%] em:max-w-[50%] xl:max-w-[29%] flex justify-center lg:justify-end'>
                <Image src={side_image} width={345} height={257} alt={""} className="" />
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Passionate;
