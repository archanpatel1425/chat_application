import Image from "next/image";
import React from "react";

const KeyPoints = ({ block, dataBinding }) => {

  const { points } = block;
  
  return (
    <div data-cms-bind={dataBinding} className="py-[70px] sm:py-[100px] md:py-[170px]">
      <div className="max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 font-DM">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-[35px] gap-y-[30px] md:gap-y-[60px]">
          {points.map((item, index) => (
            <li
              key={index}
              className="flex flex-col justify-center  border-[3px] border-[#3d405b] rounded-[10px] pt-[35px] pb-[50px] px-[40px] em:px-[30px]"
            >
              <Image
                src={item.image}
                alt={item.image_alt}
                width={518}
                height={240}
                className="w-[90%] ml-auto sm:ml-0 mr-auto h-[100%] lg:h-[200px] xl:h-[240px]"
              />
              <div className="text-center sm:text-left">
                <h5 className="block text-[22px] md:text-[26px] lg:text-[32px] font-bold text-[#3D405B] leading-[32px] sm:leading-[40px] xl:leading-[35px] pt-[40px] pb-[20px]">
                  {item.title}
                </h5>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[27px] md:leading-[30px] text-[#3D405B]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KeyPoints;
