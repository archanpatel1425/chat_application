import Image from "next/image";
import React from "react";


const Student = ({ block, dataBinding }) => {
    const { title, desc_one_prefix, desc_one_highlight, desc_one_suffix, desc_two_prefix, desc_two_highlight, desc_two_suffix, image } = block;

    return (

        <div data-cms-bind={dataBinding}>
            <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 font-DM'>
                <div className=' rounded-[10px] relative mb-[50px] md:mb-[100px]'>

                    <ul className='flex flex-col-reverse lg:flex-row-reverse justify-between items-center'>

                        <li className='w-[100%] mx-auto lg:mx-[0px] mt-[50px] sm:mt-[100px] lg:mt-[0px] max-w-[45%] md:max-w-[50%] lg:max-w-[35%] xl:max-w-[45%] flex justify-center'>
                            <Image src={image} width={600} height={257} alt={""} className="object-contain" />
                        </li>

                        <li className='w-[100%] sm:w-[95%] md:w-[90%] lg:w-[48%] text-center lg:text-left'>
                            <h5 className='font-bold text-[#3D405B] text-[20px] em:text-[22px] sm:text-[30px] lg:text-[36px] xl:text-[42px] font-DM leading-[32px] sm:leading-[45px] xl:leading-[52px] '>{title}</h5>

                            <p className='font-DM text-[16px] em:text-[18px] md:text-[20px]  font-normal  leading-[27px] em:leading-[30px] text-[#3D405B] pt-[5px] em:pt-[15px] max-w-[100%] em:max-w-[85%] ml-auto lg:ml-0 mr-auto'>{desc_one_prefix} <span className='font-bold'>{desc_one_highlight}</span>  {desc_one_suffix}</p>
                            <p className='font-DM text-[16px] em:text-[18px] md:text-[20px]  font-normal  leading-[27px] em:leading-[30px] text-[#3D405B] pt-[5px] em:pt-[15px] max-w-[100%] em:max-w-[88%] ml-auto lg:ml-0 mr-auto'>
                                {desc_two_prefix} <span className='font-bold'>{desc_two_highlight}</span>  {desc_two_suffix}
                            </p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Student;
