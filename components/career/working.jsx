import Image from "next/image";
import React from "react";

const working = ({ block, dataBinding }) => {
  const { title, cards } = block;

  return (
    <div className='pb-[20px] em:pb-[40px] lg:pb-[100px]' data-cms-bind={dataBinding}>
      <div className='max-w-[90%] xl:max-w-[1280px] mx-auto px-0 em:px-4 my-[50px] md:my-[80px] lg:my-[120px] font-DM'>
        <h2 className='font-DM text-[#3D405B] text-[24px] em:text-[28px] md:text-[30px] lg:text-[46px] font-bold text-center'>
          {title}
        </h2>

        {cards.map((card, index) => (
          <div
            key={index}
            className={` ${index % 2 === 0 ? "bg-[#F6F6F6] rounded-[10px]" : ""
              } px-[20px] em:px-[50px] lg:px-[100px] xl:px-[140px] py-[30px] lg:py-[40px] mt-[20px] em:mt-[30px] md:mt-[50px]`}
          >
            <ul className={`${card.right ? "lg:flex-row-reverse" : "lg:flex-row"
              } flex flex-col justify-between items-center`}>
              <li className='w-[100%] lg:w-[65%]'>
                <p className='font-DM text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] text-center lg:text-left'>
                  {card.description_prefix}  <span className='text-[#9370E4] font-bold text-[16px] md:text-[20px] lg:text-[24px]'>
                    {card.description_highlight} </span> {card.description_middle} <span className='text-[#9370E4] font-bold text-[16px] md:text-[20px] lg:text-[24px]'>
                    {card.description_highlightTwo} </span> {card.description_text} <span className='text-[#9370E4] font-bold text-[16px] md:text-[20px] lg:text-[24px]'> {card.description_highlightThree} </span>
                  {card.description_suffix}
                </p>
              </li>
              <li className={`w-[100%] mx-auto xl:mx-[0px] mt-[30px] lg:mt-[0px] max-w-[50%] xl:max-w-[30%] flex justify-center  `}>
                <Image src={card.image} width={200} height={200} alt={`card-image-${index}`} unoptimized />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default working;
