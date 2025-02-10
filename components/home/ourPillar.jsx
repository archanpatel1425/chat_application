import Image from "next/image";
import Link from "next/link";
import React from "react";


const OurPillars = ({ block, dataBinding }) => {
    const { title, description, pillars } = block;
    const[first_Card, second_Card, third_Card] = pillars;
    return (
            <div className="">
                <div className="max-w-[90%] xl:max-w-[1280px] mx-auto mt-[100px] mb-[60px] md:mb-[150px] px-0 em:px-2" data-cms-bind={dataBinding}>
                    <div>
                        <h2 className="font-DM text-[#3D405B] text-center font-bold text-[26px] em:text-[28px] md:text-[30px] lg:text-[46px]">
                            {title}
                        </h2>
                        <p className="pt-2 font-DM  font-normal text-[16px] md:text-[18px] lg:text-[20px] max-w-[100%] md:max-w-[70%] text-center mx-auto leading-[25px] md:leading-[30px] tracking-[0.24px] text-[#3D405B]">
                            {description}
                        </p>
                        <div className="mt-[50px]">
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 xl:gap-8">
                                <div>

                                    <li style={{backgroundImage: `url(${first_Card.icon_background})`}} className="bg-[#9370E4] bg-center bg-pillars py-[60px] flex flex-col justify-center rounded-[10px] w-[95%] em:w-[80%] sm:w-[60%] md:w-[100%] mx-auto">
                                        <div>
                                            <Image
                                                src={first_Card.icon}
                                                width={124}
                                                height={100}
                                                alt={""}
                                                className="mx-auto w-[100%] h-[80px] em:h-[100px] object-contain"
                                            />
                                        </div>
                                        <div className="text-center mt-[30px] em:mt-[60px] mb-[30px] em:mb-[40px]">
                                            <h5 className="text-[22px] md:text-[28px] lg:text-[34px] font-medium font-DM text-[#fff] leading-[30px] md:leading-[40px] ">
                                                {first_Card.title}
                                            </h5>
                                            <h5 className="text-[22px] md:text-[28px] lg:text-[34px] font-medium font-DM text-[#fff] leading-[30px] md:leading-[40px] ">
                                                {first_Card.title_suffix}
                                            </h5>
                                        </div>
                                    </li>

                                    <div className="text-center  mt-[20px]">
                                        <Link href={first_Card.link}>
                                            <button className="font-DM text-[16px] md:text-[18px] text-[#fff] py-[10px] sm:py-[15px] px-[20px] sm:px-[30px]  rounded-[5px] font-normal bg-[#9370E4] hover:shadow-btn">
                                                {first_Card.btn}
                                            </button>
                                        </Link>
                                    </div>

                                </div>


                                <div>

                                    <li style={{backgroundImage: `url(${second_Card.icon_background})`}} className="bg-[#009CA5] bg-center bg-pillars py-[60px] flex flex-col justify-center rounded-[10px] w-[95%] em:w-[80%] sm:w-[60%] md:w-[100%] mx-auto">
                                        <div>
                                            <Image
                                                src={second_Card.icon}
                                                width={100}
                                                height={100}
                                                alt={""}
                                                className="mx-auto h-[80px] em:h-[100px] object-contain"
                                            />
                                        </div>
                                        <div className="text-center mt-[30px] em:mt-[60px] mb-[30px] em:mb-[40px]">
                                            <h5 className="text-[22px] md:text-[28px] lg:text-[34px] font-medium font-DM text-[#fff] leading-[30px] md:leading-[40px] ">
                                                {second_Card.title}
                                            </h5>
                                            <h5 className="text-[22px] md:text-[28px] lg:text-[34px] font-medium font-DM text-[#fff] leading-[30px] md:leading-[40px] ">
                                                {second_Card.title_suffix}
                                            </h5>
                                        </div>


                                    </li>

                                    <div className="text-center  mt-[20px]">
                                        <Link href={second_Card.link}>
                                            <button className="font-DM text-[16px] md:text-[18px] text-[#fff] py-[10px] sm:py-[15px] px-[20px] sm:px-[30px]  rounded-[5px] font-normal bg-[#009CA5] hover:shadow-btn">
                                                {second_Card.btn}
                                            </button>
                                        </Link>

                                    </div>

                                </div>


                                <div>

                                    <li style={{backgroundImage: `url(${third_Card.icon_background})`}} className="bg-[#FAC7DF] bg-center bg-pillars py-[60px] flex flex-col justify-center rounded-[10px] w-[95%] em:w-[80%] sm:w-[60%] md:w-[100%] mx-auto">
                                        <div>
                                            <Image
                                                src="/assets/images/learnAi3.png"
                                                width={85}
                                                height={100}
                                                alt={""}
                                                className="mx-auto h-[80px] em:h-[100px] object-contain"
                                            />
                                        </div>

                                        <div className="text-center mt-[30px] em:mt-[60px] mb-[30px] em:mb-[40px]">
                                            <h5 className="text-[22px] md:text-[28px] lg:text-[34px] font-medium font-DM text-[#fff] leading-[30px] md:leading-[40px] ">
                                                {third_Card.title}
                                            </h5>
                                            <h5 className="text-[22px] md:text-[28px] lg:text-[34px] font-medium font-DM text-[#fff] leading-[30px] md:leading-[40px] ">
                                                {third_Card.title_suffix}
                                            </h5>
                                        </div>
                                   </li>

                                    <div className="text-center  mt-[20px]">
                                        <Link href={third_Card.link}>
                                            <button className="font-DM text-[16px] md:text-[18px] text-[#fff] py-[10px] sm:py-[15px] px-[20px] sm:px-[30px]  rounded-[5px] font-normal bg-[#FAC7DF] hover:shadow-btn">
                                                {third_Card.btn}
                                            </button>
                                        </Link>
                                    </div>

                                </div>  
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
    );
};

export default OurPillars;
