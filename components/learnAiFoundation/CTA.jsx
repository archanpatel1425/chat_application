import React from "react";



const CTA = ({ block, dataBinding }) => {
    const { description, btn_text, btn_link } = block;
    return (

        <div data-cms-bind={dataBinding}>
            <div className='max-w-[90%] xl:max-w-[1220px] mx-auto my-0 px-0 em:px-4  pt-[30px] md:pt-[100px] pb-[20px] sm:pb-[50px] md:pb-[150px]'>
                <div className='px-[15px] em:px-[30px] md:px-[77px] py-[30px] md:py-[42px] bg-[#9370E4] rounded-[15px] block lg:flex items-center justify-between font-DM'>
                    <div className='w-[100%] lg:w-[60%] text-center lg:text-left'>
                        <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[27px] md:leading-[30px] text-[#F1F1F1]   mx-auto'>{description}</p>
                    </div>

                    <div className='font-DM ml-auto block md:flex text-center justify-center mt-[30px] lg:mt-0'>
                        <button className='flex items-center text-[16px] md:text-[18px] text-black bg-[#FFFFFF] rounded-[3px] mt-[20px] md:mt-0 mx-auto md:mx-0 '><a href={btn_link} className='flex items-center bg-[100%] py-[10px] md:py-[15px] pr-[30px] md:pr-[50px] pl-[30px] md:pl-[40px] transition duration-300  bg-repeat font-bold leading-[27px] text-[#9370E4]  hover:shadow-btn ease-in-out'>{btn_text}</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CTA;
