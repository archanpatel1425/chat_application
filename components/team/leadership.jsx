import Image from "next/image";
import Link from "next/link"; 
import React from "react";

const Leadership = ({ block, dataBinding }) => {
  const { title, team_members } = block;

  return (
      <div className="max-w-[90%] xl:max-w-[1350px] mx-auto my-0 px-0 em:px-4" data-cms-bind={dataBinding}>
        <div className="text-center pt-[0] em:pt-[50px] md:pt-[10px] pb-[50px] sm:pb-[100px] md:pb-[200px] lg:pb-[250px]">
          <h2 className="font-DM text-[#3D405B] text-[24px] em:text-[28px] md:text-[30px] lg:text-[46px] font-bold text-center">
            {title}
          </h2>
          <div className="pt-[10px] em:pt-[30px] lg:pt-[50px]">
            <div className="flex justify-center flex-wrap gap-x-[30px] gap-y-[80px] lg:gap-y-[50px] auto-rows-auto list-none">
              {team_members.map((item, index) => (
                <div className="w-[80%] em:w-[40%] md:w-[28%] lg:w-[26%] xl:w-[23.2%]  relative" key={index}>
                <li className="group bg-[#fff] flex flex-col justify-end py-[20px] transition duration-300">
                  <div style={{ backgroundImage: `url(${item.image_full})` }} className='hidden lg:block  bg-revert bg-no-repeat bg-leadership  opacity-0 group-hover:opacity-100 transition duration-300  absolute top-0 left-0 right-0 bottom-0 z-0'></div>
                  <Image
                    src={item.image}
                    width={270}
                    height={270}
                    alt={item.image_alt}
                    className="w-[100%] max-w-[85%] mx-auto border-[4px] border-[#fff] rounded-full block group-hover:hidden  z-10"
                  />
                  <div className="relative">
                    <Image
                      src={item.image}
                      width={270}
                      height={270}
                      alt={item.image_alt}
                      className="w-[100%] max-w-[85%] mx-auto border-[4px] border-[#fff] rounded-full hidden group-hover:block z-10"
                    />
                    <Link
                      href={item.linkedin_url}
                      className="absolute bottom-[-20px] z-10 hidden group-hover:hidden lg:group-hover:block left-[50%] translate-x-[-50%]"
                    >
                      <Image
                        src={item.linkedin_logo}
                        width={52}
                        height={52}
                        alt={""}
                        className="mx-auto"
                      />
                    </Link>
                  </div>

                  <div className="text-center pt-[10px] md:pt-[20px] lg:pt-[40px] rounded-b-lg relative font-DM">
                    <p className="font-DM  text-[16px] md:text-[20px] lg:text-[24px] font-bold leading-[20px] md:leading-[30px]  text-[#472BE3]  lg:group-hover:text-[#fff] z-30 capitalize relative">
                      {item.name}
                    </p>
                    <span className="font-DM font-normal  text-[#472BE3] lg:group-hover:text-[#fff] relative text-[14px] md:text-[16px] leading-[16px] capitalize">
                      {item.role}
                    </span>
                  </div>
                  <div>
                  <Link
                      href="/"
                      className="absolute bottom-[-30px] z-10  block lg:hidden left-[50%] translate-x-[-50%]"
                    >
                      <Image
                        src="/assets/images/team-icon-linked.png"
                        width={52}
                        height={52}
                        alt={""}
                        className="mx-auto w-[40px] lg:w-[52px]  h-[40px] lg:h-[52px]"
                      />
                    </Link>
                  </div>
                </li>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Leadership;
