import Image from "next/image";
import React from "react";


const Opening = ({ block, dataBinding }) => {
  const { title, description, cards } = block;
  return (
    <div data-cms-bind={dataBinding}>
    <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4' id='homebloglist' data-cms-bind={dataBinding}>
      <div className='my-[50px] md:my-[100px] lg:my-[180px] font-DM'>
        <h2 className='text-[#3D405B] text-[24px] em:text-[28px] md:text-[30px] lg:text-[46px] font-bold text-center'>
          {title}
        </h2>
        <p className='text-[#3D405B] text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] md:leading-[30px] font-[400] mx-auto pt-[10px] max-w-[100%] em:max-w-[90%] md:max-w-[82%] text-center'>
          {description}
        </p>
        <div className='pt-[50px] lg:pt-[100px]'>
          <ul className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px] max-w-[100%] sm:max-w-[60%] lg:max-w-[100%] mx-auto'>
            {cards.map((card, index) => (
              <li key={index}>
                <div>
                  <div>
                    <Image src={card.image} width={408} height={260} alt={`opening-image-${index}`} className='w-[100%]' />
                  </div>
                  <div className='text-center lg:text-left'>
                    <div className='my-[16px] items-center max-w-[100%]'>
                      <h6 className='text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] text-[#404040] font-bold'>
                        {card.title}
                      </h6>
                      <p className='text-[14px] text-[#404040] pt-[10px] tracking-[0.14px] leading-[18px]'>
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <div className='text-center lg:text-left'>
                    <a className='text-[#2F69E5] text-[16px] font-[500] cursor-pointer border-b-2 border-[#2F69E5] mt-[0px] md:mt-[10px] inline-block hover:opacity-80'>
                      {card.button_text}
                    </a>
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

export default Opening;
