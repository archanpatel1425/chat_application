import React from "react";


const IndustryFects = ({ block, dataBinding }) => {
    const { title, numbers } = block;
    return (
        <div className='bg-[#F3F5FC] py-[50px] sm:py-[80px] md:py-[100px]'>
            <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 '>
                <h3 className='text-center  font-Inter font-semibold leading-[51px] text-[24px] em:text-[28px] md:text-[34px] lg:text-[36px] xl:text-[42px] text-[#3D405B]'>{title}</h3>
                <div className='mt-[30px] sm:mt-[50px] lg:mt-[100px]'>
                    <ul className='grid grid-cols-1 lg:grid-cols-3 gap-x-[0px] gap-y-[50px]'>
                        {numbers.map((item, index) => {
                            return (
                                <li key={index} className='text-center font-DM max-w-[80%] em:max-w-[40%] lg:max-w-[75%] mx-auto'>
                                    <h3 className='text-[26px] em:text-[32px] md:text-[40px] lg:text-[50px] text-[#9370E4] font-bold'>
                                        {item.prefix}{item.number}{item.suffix}</h3>
                                    <p className='text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pb-2'>{item.text}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default IndustryFects;
