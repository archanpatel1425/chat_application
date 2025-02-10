import Image from "next/image";
import Link from "next/link";
import React from "react";


const Apply = ({ block, dataBinding }) => {
    const { title, description, cards } = block;
    return (
        <div className='bg-[#F0F6FF] my-[50px] md:my-[100px] lg:my-[180px]'>
            <div className='max-w-[90%] xl:max-w-[1280px] mx-auto px-0 em:px-4 pt-[50px] md:pt-[100px] pb-[50px] md:pb-[130px]' id="homebloglist" data-cms-bind={dataBinding}>
                <div className='font-DM'>
                    <h2 className='text-[#3D405B] text-[24px] em:text-[28px] md:text-[30px] lg:text-[46px] font-bold text-center'>{title}</h2>
                    <p className='text-[#3D405B] text-[16px] md:text-[20px] leading-[25px] sm:leading-[30px] font-normal mx-auto pt-[10px] max-w-[100%] sm:max-w-[80%] text-center'>{description}</p>
                    <div className='pt-[20px] em:pt-[50px] lg:pt-[70px]'>
                        <ul className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px] max-w-[100%] sm:max-w-[60%] lg:max-w-[100%] mx-auto'>
                            {cards.map((card, index) => (
                                <li key={index}>
                                    <div className='text-center'>
                                        <div>
                                            <Image src={card.image} width={400} height={230} alt={`apply-step-image-${index}`} className='w-[100%]' />
                                        </div>
                                        <div className='w-[70%] mx-auto pt-[20px]'>
                                            <h6 className='text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] text-[#3D405B] font-medium pb-[30px]'>{card.title}</h6>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apply;
