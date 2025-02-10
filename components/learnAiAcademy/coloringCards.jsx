import Image from "next/image";
import React from "react";
import Link from "next/link";

const ColoringCards = ({ block, dataBinding }) => {
  const { cards } = block;
  const [card_one, card_two, card_three, card_four, card_five] = cards

  return (
    <>
      <div className='pb-[0px] em:pb-[50px] md:pb-[100px] mt-[-10px] em:mt-[-90px] sm:mt-[-120px] md:mt-[-100px] lg:mt-[-140px]' data-cms-bind={dataBinding}>
        <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 font-DM'>
          <div>
            <ul className='block xl:flex justify-between  font-DM'>
              <li className='bg-[#D1BDFF] pt-[30px] em:pt-[50px] sm:pt-[70px] pb-[30px] em:pb-[50px] sm:pb-[45px] px-[15px] em:px-[30px] sm:px-[40px] rounded-[10px] w-[100%] xl:w-[57.5%]'>
                <div className='text-center sm:text-left'>
                  <h5 className='text-[20px] em:text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#263238] leading-[25px] lg:leading-[30px]'>{card_one.title}</h5>
                  <h3 className='text-[18px] em:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-bold leading-[25px] sm:leading-[30px] md:leading-[34px] text-[#263238] pt-[20px] sm:pt-[30px] pb-[10px] sm:pb-[30px]  max-w-[100%] lg:max-w-[92%]'>{card_one.description}</h3>
                  <h3 className='text-[18px] em:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-bold leading-[25px] sm:leading-[30px] md:leading-[34px] text-[#263238] pt-[0px] em:pt-[10px] lg:pt-[10px] pb-[30px] max-w-[100%] lg:max-w-[95%]'>{card_one.descriptionTwo}</h3>
                  <div className="text-center sm:text-left">
                    <Link href={card_one.btn_link}>
                      <button className="font-DM text-[16px] lg:text-[18px] text-[#fff] py-[10px] em:py-[12px] lg:py-[15px] px-[20px] sm:px-[30px]  rounded-[5px] font-normal bg-[#9370E4] hover:shadow-btn">
                        {card_one.btn_text}
                      </button>
                    </Link>
                  </div>
                </div>
              </li>
              <li className='bg-[#D1BDFF]  py-[30px] em:py-[50px] sm:py-[70px] px-[15px] em:px-[30px] sm:px-[40px]  rounded-[10px]  w-[100%] xl:w-[40%] mt-[30px] xl:mt-[0]'>
                <div className='flex justify-center'>
                  <Image src={card_two.image} width={416} height={323} alt={""} className="" />
                </div>
              </li>
            </ul>
          </div>

          <div className='mt-[30px]'>
            <ul className='block xl:flex justify-between font-DM'>

              <li className='bg-[#FAC7DF] py-[30px] em:py-[50px] sm:py-[70px] px-[15px] em:px-[30px] sm:px-[40px] rounded-[10px] bg-hidden xl:bg-[url("/assets/images/hand.png")] bg-[800px_60px] xl:bg-[220px_420px] bg-academy overflow-hidden bg-no-repeat w-[100%] xl:w-[44.5%]'>
                <div className='text-center sm:text-left'>
                  <h5 className='text-[20px] em:text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#3D405B] leading-[25px] lg:leading-[30px]'>{card_three.title}</h5>
                  <h3 className='text-[18px] em:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-bold leading-[25px] sm:leading-[30px] md:leading-[34px] text-[#3D405B] pt-[20px] sm:pt-[25px] pb-[10px] sm:pb-[25px] max-w-[100%] lg:max-w-[90%]'>{card_three.description}</h3>
                  <h3 className='text-[18px] em:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-bold leading-[25px] sm:leading-[30px] md:leading-[34px] text-[#3D405B] pt-[0px] em:pt-[10px] lg:pt-[10px] pb-[30px] max-w-[100%] lg:max-w-[87%]'>{card_three.descriptionTwo}</h3>
                  <div className="text-center sm:text-left ">
                    <Link href={card_three.btn_link}>
                      <button className="font-DM text-[16px] lg:text-[18px] text-[#fff] py-[12px] lg:py-[15px] px-[20px] sm:px-[30px]  rounded-[5px] font-normal bg-[#FF76B6] hover:shadow-btn">
                        {card_three.btn_text}
                      </button>
                    </Link>
                  </div>
                </div>
              </li>

              <li className='grid grid-cols-1 gap-y-[30px] w-[100%] xl:w-[54%] mt-[30px] xl:mt-[0]'>
                <div className='bg-[#4BC3CB] py-[30px] em:py-[50px] sm:py-[70px] px-[15px] em:px-[30px] sm:px-[40px] rounded-[10px] text-center sm:text-left'>
                  <h5 className='text-[20px] em:text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#3D405B] leading-[25px] lg:leading-[30px]'>{card_four.title}</h5>
                  <h3 className='text-[18px] em:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-bold leading-[25px] sm:leading-[30px] md:leading-[34px] text-[#3D405B] pt-[20px] sm:pt-[25px] pb-[10px] sm:pb-[25px] max-w-[100%] xl:max-w-[95%]'>{card_four.description} </h3>
                  <h3 className='text-[18px] em:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-bold leading-[25px] sm:leading-[30px] md:leading-[34px] text-[#3D405B] pt-[0px] em:pt-[10px] lg:pt-[10px] pb-[30px] max-w-[100%] xl:max-w-[95%]'>{card_four.descriptionTwo} </h3>
                  <div className="text-center sm:text-left ">
                    <Link href='/'>
                      <button className="font-DM text-[16px] lg:text-[18px] text-[#fff] py-[12px] lg:py-[15px] px-[20px] sm:px-[30px]  rounded-[5px] font-normal bg-[#007E85] hover:shadow-btn">
                        {card_four.btn_text}
                      </button>
                    </Link>
                  </div>
                </div>
                <div className='block  bg-[#C2DBFF] py-[30px] em:py-[40px] sm:py-[55px] px-[15px] em:px-[23px]  rounded-[10px] text-center sm:text-left'>
                  <div className=''>
                    <h5 className='text-[18px] md:text-[18px] lg:text-[20px] font-medium leading-[25px] lg:leading-[30px] text-[#3D405B] text-center'>{card_five.title}</h5>
                  </div>
                  <div className="text-center mt-5">
                    <Link href={card_five.btn_link}>
                      <button className="font-DM text-[16px] lg:text-[18px] text-[#fff] py-[10px] sm:py-[15px] px-[40px] lg:px-[45px]  rounded-[5px] font-bold bg-[#472BE3] hover:shadow-btn">
                        {card_five.btn_text}
                      </button>
                    </Link>
                  </div>
                </div>
              </li>

            </ul>
          </div>

        </div>

      </div>
    </>
  );
};

export default ColoringCards;
