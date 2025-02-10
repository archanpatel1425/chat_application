import Image from "next/image";
import React from "react";
import Link from 'next/link'

const Cards = ({ block, dataBinding }) => {
    const { cards } = block;
    const [card1, card2, card3, card4] = cards
    return (
        <div data-cms-bind={dataBinding}>
            <div className='pb-[50px] md:pb-[100px] pt-[0] xl:pt-[30px] mt-[-50px] em:mt-[-150px] md:mt-[-50px] lg:mt-[0]'>
                <div>
                    <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 font-DM'>
                        <div className='mt-[30px]'>
                            <ul className='block xl:flex justify-between font-DM'>
                                <li className='grid grid-cols-1 gap-y-[36px] w-[100%] xl:w-[48.7%] mt-[30px] xl:mt-[0]'>
                                    <div className='bg-[#009CA5] pt-[30px] md:pt-[50px] pb-[30px] md:pb-[40px]  px-[15px] em:px-[30px] sm:px-[40px] rounded-[10px] text-center sm:text-left'>
                                        <div className='bg-buildLogoRespo md:bg-buildLogo bg-[50%_85%] em:bg-[50%_100%] sm:bg-[0%_100%] xl:bg-[34%_90%] bg-no-repeat pb-[40px] em:pb-[30px] xl:pb-[0] relative'>
                                            <h5 className='text-left text-[18px] em:text-[20px] sm:text-[22px] md:text-[28px] font-normal text-[#FFFFFF] leading-[30px] md:leading-[35px] lg:leading-[40px] max-w-[100%] sm:max-w-[90%] mr-auto ml-auto sm:ml-0  pt-[5px] xl:pt-[0] '>{card1.title}
                                                <Link href='https://north-app.vercel.app/' target='_blank' className='absolute ml-[0.25em] mt-[0.10em] cursor-pointer'><Image src={card4.image} width={100} height={33} alt={""} className="w-[80px] md:w-[100px] min-w-[80px] md:min-w-[100px]" /></Link>
                                            </h5>
                                        </div>
                                        <p className='font-DM text-[16px] sm:text-[18px] md:text-[20px]  font-normal  leading-[27px] em:leading-[27px] text-[#FFFFFF] pt-[5px] em:pt-[15px] max-w-[100%] md:max-w-[95%] mr-auto ml-auto sm:ml-0'>{card1.description}</p>
                                        <div className='flex justify-center mt-[50px] max-w-[63%] em:max-w-[60%] md:max-w-[75%] mx-auto'>
                                            <Image src={card1.image} width={387} height={263} alt={""} unoptimized />
                                        </div>
                                    </div>
                                    <div className='bg-[#50969B]  py-[30px] em:py-[50px] sm:py-[60px] px-[15px] em:px-[30px] sm:px-[40px]  rounded-[10px]'>

                                        <Link href='https://north-app.vercel.app/' target='_blank' className='flex justify-center max-w-[40%] md:max-w-[60%] mx-auto'>
                                            <Image src={card4.image} width={315} height={83} alt={""} className="" />
                                        </Link>
                                    </div>
                                </li>
                                <li className=' w-[100%] xl:w-[48.5%] mt-[36px] xl:mt-[0] grid grid-cols-1 gap-y-[36px] xl:gap-y-[25px]'>

                                    <div className='text-center sm:text-left bg-[#6A50FF]  pt-[26px] pb-[26px] px-[15px] em:px-[20px] sm:px-[30px] rounded-[10px]'>
                                        <h3 className='text-[18px] em:text-[18px] sm:text-[20px] md:text-[24px] lg:text-[32px] font-normal leading-[32px] md:leading-[37px] lg:leading-[47px] text-[#FFFFFF] max-w-[100%]'>{card2.title} </h3>
                                        <div className='flex justify-center mt-[30px]'>
                                            <Image src={card2.image} width={228} height={152} alt={""} className="" />
                                        </div>
                                    </div>
                                    <div className='text-center sm:text-left bg-[#826BFF] py-[20px] em:py-[30px] md:py-[57px] px-[15px] em:px-[40px] md:px-[70px] rounded-[10px]'>
                                        <h3 className='text-[18px] em:text-[18px] sm:text-[20px] md:text-[24px] lg:text-[32px] font-normal leading-[32px] md:leading-[37px] lg:leading-[47px] text-[#FFFFFF] max-w-[100%]'>{card3.title}</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
