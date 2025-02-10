import Link from "next/link";
import React from "react";
import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";


const OurMission = ({ block, dataBinding }) => {

    const containerRef = useRef(null);
    const { title, description, updates, highlight_one, highlight_two, description_middle, description_suffix, below_description_prefix
        , below_description_highlight,
        below_description_suffix } = block;

    return (
        <>
            <div className="hidden  pt-[50px] md:pt-[100px] pb-[50px] md:pb-[150px]"  data-cms-bind={dataBinding}>
                <div ref={containerRef} >

                    <div className="max-w-[100%] sm:max-w-[90%] lg:max-w-[80%] mx-auto my-0 px-[10px] sm:px-[16px] md:px-[32px]">
                        <div>
                            <h5 className="text-[22px] md:text-[26px] lg:text-[30px] font-normal font-DM text-[#3D405B] leading-[32px] sm:leading-[38px] text-center max-w-[100%] sm:max-w-[90%] xl:max-w-[60%] mx-auto">
                                {description} <span className="text-[#009ca5] font-semibold"> {highlight_one}</span>, 
                                {description_middle}<span className="text-[#009ca5] font-semibold"> {highlight_two}</span>- {description_suffix}
                            </h5>
                            <p className="font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pb-2 text-center pt-[10px] max-w-[95%] lg:max-w-[83%] mx-auto">
                                {below_description_prefix} <Link href="/story"><span className="text-[#009ca5] font-semibold border-b-[1px] border-[#009ca5]">{below_description_highlight} </span> </Link>{below_description_suffix}
                            </p>
                        </div>
                    </div>

                    <div className="max-w-[96%] md:max-w-[93%] xl:max-w-[95%] 2xl:max-w-[83%] ml-auto mr-auto my-0 px-0 font-DM mt-[50px] md:mt-[100px] grid grid-cols-[550px_800px_800px_800px_700px] gap-x-[50px] relative" id="slider-item">
                        {updates.map((item, index) => {
                            <div key={index} className='min-h-full h-[auto]' >
                                <Image src={item.image} width={130} height={120} alt={""} className='w-[60px] em:w-[80px] xl:w-[130px]' />
                                <h5 className='font-bold text-[#9370E4] text-[20px] em:text-[26px] md:text-[32px] font-DM leading-[30px] em:leading-[42px] pt-[18px] md:pt-[28px]'>{item.title}</h5>
                                <Link href={item.link}>
                                    <p className="text-[16px] text-[#404040] font-medium underline underline-offset-8 mt-[10px] font-DM ">{item.text}</p>
                                </Link>
                            </div>
                        })}
                    </div>


                    <div className="max-w-[90%] lg:max-w-[80%] mx-auto my-0 px-[10px] sm:px-[16px] md:px-[32px] pb-[10px]">
                        <div className="max-w-[85%] lg:max-w-[80%] mx-auto text-center mt-[50px] md:mt-[80px]">
                            <button className="bg-[#9370E4]  py-[10px] sm:py-[15px] px-7 sm:px-10  rounded-[0.2em] text-[16px] sm:text-[18px] text-[#f1f1f1] font-normal   hover:shadow-btn leading-[23px] font-DM transition duration-300 ease-in-out">
                                Learn More About Our Journey
                            </button>
                        </div>
                    </div>

                </div>
            </div>


            <div className="block  pt-[50px] md:pt-[100px] pb-[50px] md:pb-[150px]">

                <div className="max-w-[100%] sm:max-w-[90%] lg:max-w-[80%] mx-auto my-0 px-[10px] sm:px-[16px] md:px-[32px]">
                    <div>
                        <h5 className="text-[22px] md:text-[26px] lg:text-[30px] font-normal font-DM text-[#3D405B] leading-[32px] sm:leading-[38px] text-center max-w-[90%] xl:max-w-[60%] mx-auto">
                            {description} <span className="text-[#009ca5] font-semibold"> {highlight_one}</span>, {description_middle} <span className="text-[#009ca5] font-semibold"> {highlight_two}</span>- {description_suffix}
                        </h5>
                        <p className="font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pb-2 text-center pt-[10px] max-w-[95%] lg:max-w-[83%] mx-auto relative z-[-10]">
                            {below_description_prefix} <span className="text-[#009ca5] font-bold">{below_description_highlight}</span>  {below_description_suffix}
                        </p>
                    </div>
                </div>

                <div className="hidden lg:block mt-[72px]">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        autoplay={{ delay: 0 }} 
                        loop
                        slidesPerView={2}
                        watchOverflow
                        speed={12000} 
                        spaceBetween={10}
                    >
                        {updates?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="min-h-full h-auto mb-[2em] w-full max-w-[400px] lg:max-w-[480px]">
                                    <Image src={item.image} width={130} height={120} alt="" className="w-[60px] em:w-[80px] xl:w-[130px]" />
                                    <h5 className="font-bold text-[#9370E4] text-[20px] em:text-[26px] lg:text-[32px] font-DM leading-[30px] em:leading-[35px] sm:leading-[42px] pt-[10px] md:pt-[28px]">
                                        {item.title}
                                    </h5>
                                    <Link href={item.link}>
                                        <p className="text-[14px] sm:text-[16px] text-[#404040] font-medium underline underline-offset-8 mt-[10px] font-DM mb-[1em]">
                                            {item.text}
                                        </p>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

                {/* responsive-tablet */}
                <div className="hidden md:block lg:hidden">
                    <div className="mx-[60px] my-0 px-0 font-DM mt-[50px] md:mt-[100px]  relative grid  grid-cols-2 gap-x-[50px] gap-y-[50px]">
                        {updates?.map((item, index) => (
                        <div className='mb-[50px]' key={index} >
                            <div className="flex justify-start">
                                <Image src={item.image} width={130} height={120} alt={""} className='w-[60px] em:w-[80px] xl:w-[130px]' />
                            </div>
                            <h5 className='font-bold text-[#9370E4] text-[20px] em:text-[26px]  font-DM leading-[30px] em:leading-[35px]  pt-[10px] md:pt-[28px]'>{item.title}</h5>

                            <Link href={item.link}>
                                <p className="text-[14px] sm:text-[16px] text-[#404040] font-medium underline underline-offset-8 mt-[10px] font-DM mb-[1em] ">{item.text}</p>
                            </Link>
                        </div>
                        ))} 
                    </div>
                </div>

                {/* responsive-mobile */}
                <div className="block md:hidden">
                    <div className="mx-[20px]  my-0 px-0 font-DM mt-[50px] md:mt-[100px]  relative grid  grid-cols-1 text-center">
                        {updates?.map((item, index) => (
                        <div className='mb-[50px]' key={index}>
                            <div className="flex justify-center">
                                <Image src={item.image} width={130} height={120} alt={""} className='w-[60px] em:w-[80px] xl:w-[130px]' />
                            </div>

                            <h5 className='font-bold text-[#9370E4] text-[20px] em:text-[26px] md:text-[32px] font-DM leading-[30px] em:leading-[35px] sm:leading-[42px] pt-[10px] md:pt-[28px]'>{item.title}</h5>

                            <Link href={item.link}>
                                <p className="text-[14px] sm:text-[16px] text-[#404040] font-medium underline underline-offset-8 mt-[10px] font-DM mb-[1em] ">{item.text}</p>
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-[100%] sm:max-w-[90%] lg:max-w-[80%] mx-auto my-0 px-[10px] sm:px-[16px] md:px-[32px] pb-[10px]">
                    <div className="max-w-[100%] sm:max-w-[85%] lg:max-w-[80%] mx-auto text-center mt-[20px] sm:mt-[40px] md:mt-[80px]">
                        <Link href="/our-story"><button className="bg-[#9370E4]  py-[10px] sm:py-[15px] px-7 sm:px-10  rounded-[0.2em] text-[16px] sm:text-[18px] text-[#f1f1f1] font-normal  hover:shadow-btn leading-[23px] font-DM transition duration-300 ease-in-out">
                            Learn More About Our Journey
                        </button></Link>
                    </div>
                </div>

            </div>


        </>
    );
};

export default OurMission;
