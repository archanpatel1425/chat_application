import React from "react";
import Image from "next/image";

const OurProjects = ({ block, dataBinding }) => {
    const { title, description, sections } = block;
    const [firstSection, secondSection, thirdSection] = sections;

    return (
        <div className="bg-[#F3F5FC] py-[50px] md:py-[100px]" data-cms-bind={dataBinding} >
            <div className="max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-4 font-DM">
                <div className=" font-Inter">
                    <h3 className="text-center  font-Inter font-semibold leading-[40px] em:leading-[45px] md:leading-[51px] text-[26px] em:text-[28px] md:text-[34px] lg:text-[36px] xl:text-[42px] text-[#3D405B] ">
                        {title}
                    </h3>
                    <p className="font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pb-2 text-center pt-[10px] max-w-[90%] sm:max-w-[83%] mx-auto">
                        {description}
                    </p>
                </div>
            </div>

            <div className='max-w-[90%] xl:max-w-[1280px] mx-auto  font-DM bg-hidden xl:bg-[url("/assets/images/bg-academy.png")]  bg-center bg-no-repeat bg-full bg-[transparent] em:bg-[#fff] rounded-[10px] py-[25px] md:py-[50px] xl:py-[120px] text-[0] em:px-[30px] md:px-[60px] xl:px-[100px] my-[20px] em:my-[50px] bg-white'>

                <h5 className="block text-[22px] em:text-[24px] lg:text-[34px] font-bold font-DM text-[#9370E4] leading-[35px] text-center pb-[20px] md:pb-[50px]">
                    {firstSection?.title}
                </h5>

                {firstSection?.subsections &&
                    firstSection?.subsections.map((subItem, subIndex) => {
                        return (
                            <div key={subIndex}>
                                <div className=" bg-[#9370E4] py-[20px] sm:py-[30px] px-[20px] sm:px-[30px] rounded-[10px] my-6 ">
                                    <div className="block lg:flex justify-between items-center">
                                        <div className="w-[100%] lg:w-[70%] text-center sm:text-left">
                                            <h6 className="text-[20px] em:text-[22px] lg:text-[28px] text-[#fff] font-bold">
                                                {subItem?.title}
                                            </h6>
                                            <p className="text-[16px] md:text-[20px] text-[#fff] font-normal mt-[10px] leading-[25px]">
                                                {subItem?.description}
                                            </p>
                                        </div>

                                        <div className="w-[100%] lg:w-[20%] flex justify-center lg:justify-end mt-[50px] lg:mt-[0]">
                                            <Image
                                                src={subItem?.image}
                                                width={200}
                                                height={140}
                                                alt={""}
                                                className="w-[150px] sm:w-[200px] h-auto"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

            </div>

            <div className='max-w-[90%] xl:max-w-[1280px] mx-auto   font-DM bg-hidden xl:bg-[url("/assets/images/bg-foundation.png")] bg-[100%_100%] bg-no-repeat  bg-[transparent] em:bg-[#fff]  rounded-[10px] py-[25px] md:py-[50px] xl:py-[110px] px-[0] em:px-[30px] md:px-[60px] xl:px-[100px] my-[20px] em:my-[60px] md:my-[120px] bg-white '>
                <div className='mx-auto '>
                    <h5 className="text-[22px] em:text-[24px] lg:text-[34px] font-bold font-DM text-[#009CA5] leading-[35px] text-center">
                        {secondSection?.title}
                    </h5>

                    <div className=" bg-[#009CA5] py-[20px] sm:py-[50px] px-[20px] sm:px-[30px] rounded-[10px] mt-[20px] md:mt-[40px]">
                        <div className="block lg:flex justify-between items-center">
                            <div className="w-[100%] lg:w-[65%] text-center sm:text-left">
                                <h6 className="text-[20px] em:text-[22px] lg:text-[28px] text-[#fff] font-bold">
                                    {secondSection.heading}
                                </h6>
                                <p className="text-[16px] md:text-[20px] text-[#fff] font-normal mt-[10px] leading-[27px]">
                                    {secondSection.description}
                                </p>

                            </div>

                            <div className="w-[100%] lg:w-[30%] flex justify-center lg:justify-end mt-[50px] lg:mt-[0]">
                                <Image
                                    src="/assets/images/foundation1.png"
                                    width={210}
                                    height={140}
                                    alt={""}
                                    className="w-[150px] sm:w-[210px] h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0  font-DM  bg-hidden xl:bg-[url("/assets/images/inovation-bg.png")] bg-center bg-contain bg-no-repeat bg-[transparent] em:bg-[#fff]  rounded-[10px] py-[25px] md:py-[50px] xl:py-[60px]  px-[0] em:px-[30px] md:px-[60px] xl:px-[100px]  mt-[20px] em:mt-[60px] md:mt-[0] bg-white'>
                <div className=''>
                    <h5 className="text-[22px] em:text-[24px] lg:text-[34px] font-bold font-DM text-[#FAC7DF] leading-[35px] text-center">
                        {thirdSection?.title}
                    </h5>

                    <div className=" bg-[#FAC7DF] py-[20px] sm:py-[30px] px-[20px] sm:px-[30px] rounded-[10px] mt-[20px] md:mt-[50px]">
                        <div className="block lg:flex justify-between items-center">
                            <div className="w-[100%] lg:w-[68%] text-center sm:text-left">
                                <h6 className="text-[20px] em:text-[22px] lg:text-[28px] text-[#fff] font-bold">
                                    {thirdSection.heading}
                                </h6>
                                <p className="text-[16px] md:text-[20px] text-[#fff] font-normal mt-[10px] leading-[27px]">
                                    {thirdSection.description}
                                </p>

                            </div>

                            <div className="w-[100%] lg:w-[20%] flex justify-center lg:justify-end mt-[50px] lg:mt-[0]">
                                <Image
                                    src="/assets/images/inovation1.png"
                                    width={200}
                                    height={140}
                                    alt={""}
                                    className="w-[150px] sm:w-[200px] h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default OurProjects;