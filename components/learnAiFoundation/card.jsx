import Image from "next/image";
import React from "react";

const Card = ({ block, dataBinding }) => {
    const { round_text, round_desc, cards } = block;

    return (
        <div>
            <div className="py-[20px] md:py-[50px] relative" data-cms-bind={dataBinding}>
                <div className="max-w-[90%] xl:max-w-[1220px] mx-auto my-0 px-0 em:px-4 font-DM">

                    <div className="flex justify-center">
                        <div className="absolute top-[37em] em:top-[36.3em] md:top-[15em] lg:top-[13em] xl:top-[10em]">
                            <div className="flex flex-col justify-center items-center py-[100px] px-[50px] bg-[#9370E4] rounded-full w-[250px] em:w-[270px] lg:w-[350px] xl:w-[415px] h-[250px] em:h-[270px] lg:h-[350px] xl:h-[410px] shadow-2xl">
                                <h4 className="text-[20px] em:text-[24px] lg:text-[32px] xl:text-[42px] font-bold text-[#fff]">{round_text}</h4>
                                <p className="text-[16px] lg:text-[20px] font-normal text-[#fff] text-center max-w-[100%] em:max-w-[95%] lg:max-w-[80%] pt-[10px] leading-[27px]">{round_desc}</p>
                            </div>
                        </div>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[30px] md:gap-y-[35px]">
                        {cards.map((card, index) => (
                            <li
                                key={index}
                                className="flex flex-col justify-between border-[1px] border-[#9370E4] rounded-[10px] py-[25px] lg:py-[35px] px-[25px] lg:px-[35px] mt-[180px] md:mt-[0]"
                            >
                                <div className={`text-center ${index % 2 === 0 ? "md:text-left" : "md:text-end"}`}>
                                    <h5 className="block text-[20px] em:text-[22px] md:text-[26px] lg:text-[32px] font-bold text-[#3D405B] leading-[28px] em:leading-[32px] sm:leading-[32px] lg:leading-[40px] max-w-[100%] em:max-w-[75%] ml-auto md:ml-0 mr-auto">
                                        {card.title}
                                    </h5>
                                </div>

                                <div className={`mt-[40px] flex justify-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                                    <Image src={card.image} width={220} height={146} alt={card.title} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;
