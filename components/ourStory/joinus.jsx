import React from "react";
import Image from "next/image";

const Joinus = ({ block, dataBinding }) => {
  const {
    descriptionOne,
    descriptionTwoPrefix,
    descriptionTwoHighlight,
    descripitonTwoSuffix,
    polygonLeft,
    roundLeft,
    smallRoundLeft,
    RectangleLeft,
    smallRectangleLeft,
    star,
  } = block;
  return (
    <div className='bg-[#F0F6FF]' data-cms-bind={dataBinding}>
      <div className='relative z-[10]  ml-[-5em] xl:ml-[-2em] 2xl:ml-[0]'>
        <div className='absolute right-0 -top-[100px] left-[150px] hidden lg:block'>
          <Image src={polygonLeft} width={57} height={50} alt={""} className='w-[70px] lg:w-[57px] h-[140px] lg:h-[50px] hidden md:block  ' />
        </div>
        <div className='absolute right-0 top-[300px] left-[200px] hidden lg:block'>
          <Image src={roundLeft} width={52} height={52} alt={""} className='w-[52px] h-[52px] hidden md:block ' />
        </div>
        <div className='absolute right-0 top-[10px] left-[300px] hidden lg:block'>
          <Image src={RectangleLeft} width={43} height={43} alt={""} className='w-[43px] h-[43px] hidden md:block ' />
        </div>
        <div className='absolute right-0 top-[100px] left-[100px] 2xl:left-[200px] hidden lg:block'>
          <Image src={smallRoundLeft} width={30} height={30} alt={""} className='w-[30px] h-[30px] hidden md:block ' />
        </div>
        <div className='absolute right-0 top-[450px] left-[120px] hidden lg:block'>
          <Image src={smallRectangleLeft} width={23} height={23} alt={""} className='w-[23px] h-[23px] hidden md:block ' />
        </div>
        <div className='absolute right-0 top-[300px] left-[50px] hidden lg:block'>
          <Image src={RectangleLeft} width={43} height={43} alt={""} className='w-[43px] h-[43px] hidden md:block ' />
        </div>
        <div className='absolute right-0 top-[320px] left-[400px] hidden lg:block'>
          <Image src={star} width={50} height={50} alt={""} className='w-[50px] h-[50px] hidden md:block ' />
        </div>
      </div>

      <div className='relative'>
        <div className='absolute  top-[-100px] right-[350px]  hidden lg:block'>
          <Image src={polygonLeft} width={57} height={50} alt={""} className='w-[70px] lg:w-[57px] h-[140px] lg:h-[50px] hidden md:block  ' />
        </div>
        <div className='absolute  top-[450px] right-[150px] hidden lg:block'>
          <Image src={roundLeft} width={52} height={52} alt={""} className='w-[52px] h-[52px] hidden md:block ' />
        </div>
        <div className='absolute  top-[300px] right-[200px] 2xl:right-[250px] hidden lg:block'>
          <Image src={roundLeft} width={52} height={52} alt={""} className='w-[30px] h-[30px] hidden md:block ' />
        </div>
        <div className='absolute right-0 top-[-150px] right-[50px] hidden lg:block'>
          <Image src={RectangleLeft} width={43} height={43} alt={""} className='w-[43px] h-[43px] hidden md:block ' />
        </div>
        <div className='absolute right-0 top-[50px] right-[20px] 2xl:right-[100px] hidden lg:block'>
          <Image src={star} width={62} height={62} alt={""} className='w-[62px] h-[62px] hidden md:block ' />
        </div>
        <div className='absolute  top-[150px] right-[50px] 2xl:right-[250px] hidden lg:block'>
          <Image src={star} width={62} height={62} alt={""} className='w-[62px] h-[62px] hidden md:block ' />
        </div>
      </div>

      <div className='max-w-[90%] xl:max-w-[1280px] mx-auto px-0 em:px-4 my-[50px] em:my-[100px] md:my-[200px]  lg:my-[330px]'>
        <div className='text-center pt-[50px] md:pt-[80px] pb-[50px] md:pb-[150px]'>
          <p className='font-DM text-[16px] em:text-[18px] md:text-[22px] lg:text-[26px] font-normal leading-[27px] em:leading-[30px] lg:leading-[36px] text-[#3D405B]  max-w-[100%] lg:max-w-[90%] mx-auto'>{descriptionOne}</p>
          <p className='font-DM text-[16px] em:text-[18px] md:text-[22px] lg:text-[26px] font-normal leading-[27px] em:leading-[30px] lg:leading-[36px] text-[#3D405B] pt-[20px] max-w-[100%] lg:max-w-[80%] mx-auto'>{descriptionTwoPrefix} <span className='text-[#9370E4] font-medium'> {descriptionTwoHighlight} </span>{descripitonTwoSuffix} </p>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
