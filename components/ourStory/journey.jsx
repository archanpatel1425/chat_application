import React from "react";
import Image from "next/image";

const Journey = ({ block, dataBinding }) => {
  const { Journey } = block;
  return (
    <div className='relative overflow-hidden ' data-cms-bind={dataBinding}>
      {Journey.map((item, index) => (
        <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 font-DM ' key={index}>
          <div className="relative">
            <div className={`pb-[30px] md:pb-[60px] px-[0px] xl:px-[50px] rounded-[10px] my-[80px] lg:my-[100px] relative flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`absolute top-[21em] mxl:top-[19em] 2xl:top-[16em] 3xl:top-[18em] ${index % 2 === 0 ? 'left-[-2%] mxl:left-[-7%] 2xl:left-[-11%] 3xl:left-[-16%]' : 'right-[-2%] mxl:right-[-7%] 2xl:right-[-11%] 3xl:right-[-16%]'}`}>
                {index !=4  &&  <Image src={item.half_circle} width={348} height={324} alt={item.half_circle_alt} className="w-[200px] mxl:w-[250px] 2xl:w-[348px] hidden xl:block" />}
                
              </div>
              
              <div className='w-[100%] lg:w-[57%] text-center md:text-left'>
                <h4 className="font-DM text-[32px] em:text-[40px] md:text-[54px] lg:text-[64px] font-bold fill">{item.year}</h4>
                <h5 className='font-bold text-[#3D405B] text-[20px] em:text-[24px] md:text-[28px] font-DM leading-[32px] em:leading-[42px]'>{item.title}</h5>
                <p className='text-[16px] md:text-[18px] font-normal leading-[25px] md:leading-[28px] text-[#3D405B] pt-[5px]'>{item.description}</p>
              </div>
              
              <div className='w-[100%] mx-auto xl:mx-[0px] max-w-[50%] em:max-w-[50%] xl:max-w-[30%] flex justify-center lg:justify-start'>
                <Image src={item.image} width={345} height={345} alt={item.image_alt} className="h-[100%] lg:h-[345px]" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Journey;
