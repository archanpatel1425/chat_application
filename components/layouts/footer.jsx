import React from "react";
import FooterData from "../../data/footer.json";
import Link from "next/link";
import Image from "next/image";


const Footer = () => {

  const { title, description, social_links, main_links, other_links, cta_text, cta_link, title_two } =
    FooterData;


  return (
    <div className='bg-[#009CA5] mx-[15px] em:mx-[30px]  rounded-[20px] mb-[30px] mt-[50px] md:mt-0'>
      <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 font-DM px-2'>
        <div className='py-[30px] md:py-[50px] xl:py-[100px] text-[#f1f1f1] block md:flex justify-between text-center sm:text-start'>

          <div className='w-[100%] lg:w-[47%]'>
             <h5 className='font-DM text-[22px] em:text-[24px] md:text-[30px] xl:text-[38px] font-bold'>{title}</h5>
             <h5 className='font-DM text-[22px] em:text-[24px] md:text-[30px] xl:text-[38px] font-bold'>{title_two}</h5>

            <p className='font-DM text-[16px] xl:text-[24px] font-normal mt-[12px] md:mt-[16px] leading-[30px] xl:leading-[35px]'>
              <Link href={cta_link}>
              <span className="font-bold hover:opacity-90 opacity-100 underline underline-offset-8">{cta_text}</span>
              </Link>
              {description}
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <div className="flex items-center justify-center sm:justify-start">
              {social_links?.map((item, index) => {
                return (
                  <div className="ml-[0px] lg:ml-[40px]" key={index}>
                    <Link href={item.url || "#"}>
                      <Image className="max-w-[70%] xl:max-w-[100%]" src={item.logo} alt="logo" width="35" height="35" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>











      <div className="py-[24px] xl:py-[40px] border-t-[1px] border-[#f1f1f1]">
        <div className="max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-4">
          <div className="text-[#f1f1f1] font-DM">
            <div className="flex justify-center items-center flex-wrap">
              {main_links?.map((item, index) => {
                return (
               
                    <Link href={item.url || "#"} className=" m-0 tracking-widest font-DM font-normal text-[12px] lg:text-[16px] xl:text-[24px]  opacity-100 transition duration-300 ease-in-out flex"  key={index}>
                      <span className='block px-4'>{item.text}</span>
                      <span className=" block w-[3px] nth-3:none">.</span>
                    </Link>
              
                 
                );
              })}
            </div>
          </div>
          <div className="block md:flex justify-center items-center group">
            <div className="block md:flex justify-center items-center text-[#f1f1f1] text-center pt-[10px] font-DM ">
              {other_links?.map((item, index) => {
                return (
                  
                  <div className="text-[12px] xl:text-[16px] font-[300]  flex items-center justify-center opacity-100 hover:opacity-75" key={index}>
                    
                    <Link className="text-[12px] xl:text-[16px] font-[300]  flex items-center justify-center" href={item?.url || "#"}>
                      <span className='block mx-[10px]'>{item.text}</span>
                      <span className="hidden md:block mx-[10px] group-last\:hidden">|</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;