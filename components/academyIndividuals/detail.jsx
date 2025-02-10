import Image from "next/image";
import React from "react";

const Detail = ( { block, dataBinding }) => {
    const {title_prefix, title_highlight, title_suffix, cards, first_para_suffix, first_para, first_para_highlight, second_para} = block
    return (
    <>
         <section className="pt-[50px] em:pt-[80px] lg:pt-[100px] xl:pt-[150px] pb-[50px] em:pb-[80px] lg:pb-[100px] xl:pb-[130px]">
        <div className="max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 font-DM">
            <h2 className="text-[#3D405B] text-2xl md:text-[42px] lg:text-[52px] not-italic font-bold leading-[36px] sm:leading-[40px] md:leading-[58px] text-center max-w-[99%] em:max-w-[90%] lg:max-w-[80%] mx-auto">{title_prefix} <span className="text-[#9370E4]">{title_highlight}</span> {title_suffix}</h2>
        </div>  
      </section>
      <section>
        <div className="max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 font-DM">
            {cards.map((card,index) => 
            <>
          <div className="bg-[#4BC3CB] rounded-[10px] py-[40px] px-[20px] sm:px-[30px] md:py-[60px] md:px-[50px] xl:py-[70px] lg:px-[60px] grid xl:grid-cols-2 items-center gap-5 md:gap-7 mt-14 sm:mt-16 lg:mt-20">
            <div className="md:flex md:items-start">
              <h6 className="text-[rgba(255,255,255,0.36)] text-4xl md:text-5xl lg:text-6xl not-italic font-bold leading-[1] text-center sm:text-left">
                {card.number}
              </h6>
              <div className=" md:pl-5">
                <h4 className="text-[#262626] text-[24px] em:text-[32px] md:text-[38px] lg:text-[48px] leading-[32px] em:leading-[45px] sm:leading-[55px] max-w-[90%] xl:max-w-[60%] ml-auto sm:ml-0 mr-auto font-bold text-center sm:text-left pb-1 md:pb-3 lg:pb-5 ">
                {card.heading}
                </h4>
                <p className="text-[#262626] text-[18px] sm:text-[20px] lg:text-[28px]  font-normal max-w-[100%] md:max-w-[90%] xl:max-w-[85%] leading-[30px] lg:leading-[40px] text-center sm:text-left">
                {card.description}
                </p>
              </div>
            </div>
            <div>
              <div className="relative w-full h-[150px] sm:h-[220px] md:h-[300px] xl:h-[448px] mt-[30px] em:mt-[50px] xl:mt-[0]">
                <Image
                  src={card.side_img}
                  fill
                  className="object-contain"
                  alt="side_img"
                />
              </div>
            </div>
          </div>
          </>
          )}
        </div>
      </section>
      
      <section className="my-[40px] sm:my-[80px] md:my-[120px] lg:my-[150px]  lg:bg-[url('/assets/images/glimps.png')] lg:bg-no-repeat lg:bg-[center_center] ">
        <div className="max-w-[100%] lg:max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 font-DM">
            <div className="px-5 sm:px-8 lg:pt-[120px] lg:pb-[212px] lg:pl-[75px] relative top-0 lg:top-[3em]">
                <p className="text-[#3D405B] text-center text-[18px] em:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] not-italic font-normal leading-[32px] em:leading-[37px] sm:leading-[40px] md:leading-[45px] lg:leading-[50px] ">{first_para} <span className="text-[#009CA5] text-[18px] em:text-[22px] sm:text-[26px] md:text-[32px] lg:text-[40px] font-bold">{first_para_highlight}</span>{first_para_suffix}</p>

                <p className="text-[#3D405B] text-center text-[18px] em:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] not-italic font-bold leading-[32px] em:leading-[37px] sm:leading-[40px] md:leading-[45px] lg:leading-[50px] pt-[30px] md:pt-[50px] max-w-[95%] md:max-w-[80%] mx-auto"> {second_para}</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
