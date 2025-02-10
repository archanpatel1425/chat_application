import Image from "next/image";
import Link from "next/link";
import React from "react";


const ReshapingCareer = ({ block, dataBinding }) => {
    const { title, description, btn_text, btn_link, Images, mobile_Images } = block;
    const [img_one, img_two, img_three, img_four] = Images;
    const [img_one_mobile, img_two_mobile, img_three_mobile, img_four_mobile] = mobile_Images;
    
    return (
    <div className='bg-[#F0F6FF] mt-[50px] md:mt-[70px] mb-[50px] em:mb-[100px] md:mb-[180px]' data-cms-bind={dataBinding} >
            <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 font-DM'>
                <div className=''>
                    <ul className='block lg:flex flex-col xl:flex-row justify-between items-center'>

                    <li className='w-[100%] mx-auto xl:mx-[0px] mt-[0px] xl:mt-[0px] max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[45%] hidden sm:grid grid-cols-4 gap-x-2 pb-[50px] lg:pb-[100px] xl:pb-[180px] '>
                           <div className='flex flex-col items-center'>
                              <Image src={img_one.image} width={100} height={520} alt={""} className=""/>
                               <p className='text-[16px] lg:text-[20px] text-[#000000] font-normal font-DM text-center'>{img_one.text}</p>
                           </div>
                           <div className='flex flex-col items-center'>
                              <Image src={img_two.image} width={74} height={300} alt={""} className=""/>
                               <p className='text-[16px] lg:text-[20px] text-[#000000] font-normal font-DM text-center'>{img_two.text}</p>
                           </div>
                           <div className='flex flex-col items-center'>
                              <Image src={img_three.image} width={93} height={600} alt={""} className=""/>
                               <p className='text-[16px] lg:text-[20px] text-[#000000] font-normal font-DM text-center'>{img_three.text}</p>
                           </div>
                           <div className='flex flex-col items-center'>
                              <Image src={img_four.image} width={77} height={270} alt={""} className=""/>
                               <p className='text-[16px] lg:text-[20px] text-[#000000] font-normal font-DM text-center'>{img_four.text}</p>
                           </div>
                              
                      </li>
                      <li className=' sm:hidden grid grid-cols-1 em:grid-cols-2 gap-x-2 gap-y-10 pt-[50px]'>
                          <div className='flex flex-col justify-between items-center'>
                              <Image src={img_one_mobile.image} width={68} height={92} alt={""} className=""/>
                               <p className='text-[16px] lg:text-[20px] text-[#000000] font-normal font-DM text-center pt-[20px]'>{img_one_mobile.text}</p>
                           </div>
                           <div className='flex flex-col justify-between items-center'>
                              <Image src={img_two_mobile.image} width={74} height={91} alt={""} className=""/>
                               <p className='text-[16px] lg:text-[20px] text-[#000000] font-normal font-DM text-center pt-[20px]'>{img_two_mobile.text}</p>
                           </div>
                           <div className='flex flex-col justify-between items-center'>
                              <Image src={img_three_mobile.image} width={101} height={101} alt={""} className=""/>
                               <p className='text-[16px] lg:text-[20px] text-[#000000] font-normal font-DM text-center pt-[20px]'>{img_three_mobile.text}</p>
                           </div>
                           <div className='flex flex-col justify-between items-center'>
                              <Image src={img_four_mobile.image} width={101} height={101} alt={""} className=""/>
                               <p className='text-[16px] lg:text-[20px] text-[#000000] font-normal font-DM text-center pt-[20px]'>{img_four_mobile.text}</p>
                           </div>
                      </li>

                        <li className='w-[100%] sm:w-[95%] md:w-[90%] xl:w-[47%] text-center xl:text-left pt-[50px] sm:pt-[0] pb-[50px] md:pb-[100px] xl:pb-[0] ml-auto mr-auto xl:mr-0'>

                            <h5 className='font-bold text-[#3D405B] text-[22px] em:text-[30px] lg:text-[36px]  font-DM leading-[32px] em:leading-[45px] '>{title}</h5>

                            <p className='font-DM text-[16px] em:text-[18px] md:text-[20px]  font-normal  leading-[27px] em:leading-[32px] text-[#3D405B] pt-[15px] max-w-[100%] xl:max-w-[85%] ml-auto xl:ml-0 mr-auto' >{description}</p>

                            <div className="text-center xl:text-left mt-[25px]">
                                <Link href={btn_link}>
                                    <button className="font-DM text-[16px] lg:text-[18px] text-[#fff] py-[10px] sm:py-[15px] px-[40px] lg:px-[45px]  rounded-[5px] font-bold bg-[#472BE3] hover:shadow-btn">
                                        {btn_text}
                                    </button>
                                </Link>
                            </div>

                        </li>

                    </ul>
                </div>
            </div>
        </div>

    );
};

export default ReshapingCareer;
