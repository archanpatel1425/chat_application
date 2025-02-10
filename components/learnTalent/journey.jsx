import Image from "next/image";
import React from "react";

const Journey = ({ block, databinding }) => {
  const { description, heading, roadmap_img, roadmap_cards } = block;
  return (
    <div>
      <section>
        <div className="my-[50px] md:my-[100px]">
          <div className="max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 font-DM">
            <div className="bg-[#F0F6FF] py-[30px] sm:py-[50px] md:py-[70px] lg:py-[90px] px-[15px] em:px-[30px] md:px-[50px] text-center rounded-[10px] border-[2px] border-[#8AB9FF]">
              <p className="text-[18px] sm:text-[22px] lg:text-[28px] leading-[28px] sm:leading-[30px] lg:leading-[35px] text-[#3D405B] font-normal  max-w-[100%] em:max-w-[80%] lg:max-w-[65%] mx-auto">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-[50px] md:pt-[70px] mb-[50px] sm:mb-[100px] md:mb-[150px]">
          <div className="">
            <div className="max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 font-DM">
              <div>
                <h2 className="text-[#3D405B] text-[20px] em:text-2xl sm:text-3xl md:text-[42px] lg:text-[52px] not-italic font-bold leading-[36px] sm:leading-[40px] md:leading-[58px] text-center max-w-[99%] em:max-w-[90%] lg:max-w-[80%] mx-auto">
                  {heading}
                </h2>
              </div>
            </div>
          </div>

          <div className='bg-hidden xl:bg-[url("/assets/images/roadmap-bg.png")] bg-journey  overflow-hidden bg-no-repeat hidden xl:block'>
            <div className="max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 font-DM">
              <div className="pt-[0px]">
                <div className="flex flex-col xl:flex-row justify-between text-center">
                  <div className="w-[90%] xl:w-[32%] relative top-[3em] ml-auto xl:ml-0 mr-auto">
                    <div className="flex justify-center xl:justify-start">
                      <Image
                        src="/assets/images/roadmap1.png"
                        alt="image"
                        width={260}
                        height={174}
                        className=""
                      />
                    </div>

                    <h6 className="text-[28px] xl:text-[32px] leading-[35px] xl:leading-[40px] font-medium text-[#9370E4] relative top-[20px] text-center xl:text-left max-w-[99%]">
                      Student is eager to learn and grow their skills for future
                      jobs. Hop in LearnAI Academy website and find a course
                    </h6>
                  </div>
                  <div className="flex flex-col xl:flex-row items-center w-[100%] xl:w-[42%] mr-[80px] relative top-[10em]">
                    <Image
                      src="/assets/images/roadmap2.png"
                      alt="image"
                      width={220}
                      height={220}
                      className=""
                    />
                    <h6 className="text-[28px] xl:text-[32px] leading-[35px] xl:leading-[40px] font-medium text-[#9370E4] text-center xl:text-left">
                      After some studying and learning new concepts... student
                      gets a diploma{" "}
                    </h6>
                  </div>
                </div>

                <div className="pt-[310px] relative bottom-[-1em] flex justify-between">
                  <div></div>
                  <div className="flex items-center max-w-[50%] mr-[130px]">
                    <Image
                      src="/assets/images/roadmap3.png"
                      alt="image"
                      width={220}
                      height={220}
                      className=""
                    />
                    <h6 className="text-right text-[32px] leading-[35px] xl:leading-[40px] font-medium text-[#9370E4]">
                      New skills are added to their digital profile
                    </h6>
                  </div>
                </div>

                <div className="pt-[100px] relative top-[8.5em] flex justify-between">
                  <div className="flex items-center  ml-[170px]">
                    <h6 className="text-left text-[32px] leading-[35px] xl:leading-[40px] font-medium text-[#9370E4] max-w-[50%]">
                      Searches for opportunities through the portal
                    </h6>
                    <Image
                      src="/assets/images/roadmap4.png"
                      alt="image"
                      width={220}
                      height={220}
                      className=""
                    />
                  </div>
                  <div></div>
                </div>

                <div className="pt-[120px] relative top-[3em] flex justify-between">
                  <div className="flex items-center  ml-[70px]">
                    <h6 className="text-left text-[28px] xl:text-[32px] leading-[40px] font-medium text-[#9370E4] max-w-[50%]">
                      Finds the ideal job opportunity
                    </h6>
                    <Image
                      src="/assets/images/roadmap5.png"
                      alt="image"
                      width={220}
                      height={220}
                      className=""
                    />
                  </div>
                  <div></div>
                </div>

                <div className="py-[90px] relative top-[1.5em] flex justify-between items-baseline">
                  <div className="flex items-center max-w-[45%] ml-[200px]">
                    <h6 className="text-left text-[28px] xl:text-[32px] leading-[35px] xl:leading-[40px] font-medium text-[#9370E4]">
                      With one-click create a one page resume with the added
                      skills
                    </h6>
                    <Image
                      src="/assets/images/roadmap6.png"
                      alt="image"
                      width={220}
                      height={220}
                      className=""
                    />
                  </div>
                  <div className="flex flex-col items-center max-w-[28%] ">
                    <h6 className="text-left text-[28px] xl:text-[32px] leading-[35px] xl:leading-[40px] font-medium text-[#9370E4]">
                      Gets accepted to the job with a fair salary and the
                      necessary skills to succeed
                    </h6>
                    <Image
                      src="/assets/images/roadmap7.png"
                      alt="image"
                      width={250}
                      height={168}
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 font-DM hidden md:block xl:hidden">
              <div className="py-[100px]">
                <div className='after:content-[url("/assets/images/roadmap-cut-1.png")] after:bg-center  overflow-hidden after:bg-no-repeat after:relative after:top-[-12em] lg:after:top-[-6em] after:left-[52%] lg:after:left-[60%]'>
                  <div className="relative top-[0em]">
                    <div className="flex justify-start">
                      <Image
                        src="/assets/images/roadmap1-tablet.png"
                        alt="image"
                        width={238}
                        height={142}
                        className=""
                      />
                    </div>
                    <div className="text-left max-w-[50%]">
                      <h6 className="text-[24px] lg:text-[32px]  leading-[32px] lg:leading-[40px]  font-medium text-[#9370E4] relative top-[20px] ">
                        Student is eager to learn and grow their skills for
                        future jobs.
                      </h6>
                      <h6 className="text-[24px] lg:text-[32px]  leading-[32px] lg:leading-[40px]  font-medium text-[#9370E4] relative top-[20px] ">
                        Hop in LearnAI Academy website and find a course
                      </h6>
                    </div>
                  </div>
                </div>

                <div className='py-[0px] after:content-[url("/assets/images/roadmap-cut-4.png")] after:bg-center  overflow-hidden after:bg-no-repeat after:relative after:top-[-6em] lg:after:top-[-6em] after:left-[5%] lg:after:left-[10%] '>
                  <div className="relative top-[-1em]">
                    <div className="flex justify-end">
                      <Image
                        src="/assets/images/roadmap2-tablet.png"
                        alt="image"
                        width={187}
                        height={187}
                        className=""
                      />
                    </div>
                    <div className="text-end max-w-[35%] lg:max-w-[30%] ml-auto">
                      <h6 className="text-[24px] lg:text-[32px]  leading-[32px] lg:leading-[40px]  font-medium text-[#9370E4]  top-[0px] relative ">
                        After some studying and learning new concepts... student
                        gets a diploma{" "}
                      </h6>
                    </div>
                  </div>
                </div>

                <div className='py-[0px] after:content-[url("/assets/images/roadmap-cut-3.png")] after:bg-center  overflow-hidden after:bg-no-repeat after:relative after:top-[-7em] lg:after:top-[-6em] after:left-[36%] lg:after:left-[53%]'>
                  <div className="relative top-[-1.5em]">
                    <div className="flex justify-start">
                      <Image
                        src="/assets/images/roadmap3-tablet.png"
                        alt="image"
                        width={166}
                        height={221}
                        className=""
                      />
                    </div>
                    <div className="text-left max-w-[35%]">
                      <h6 className="text-[24px] lg:text-[32px]  leading-[32px] lg:leading-[40px]  font-medium text-[#9370E4] relative top-[0px] ">
                        New skills are added to their digital profile
                      </h6>
                    </div>
                  </div>
                </div>

                <div className='py-[0px] after:content-[url("/assets/images/roadmap-cut-4.png")] after:bg-center  overflow-hidden after:bg-no-repeat after:relative after:top-[-5em] after:left-[8%]  lg:after:left-[10%]'>
                  <div className="relative top-[-1.5em]">
                    <div className="flex justify-end">
                      <Image
                        src="/assets/images/roadmap4-tablet.png"
                        alt="iamge"
                        width={220}
                        height={220}
                        className=""
                      />
                    </div>
                    <div className="text-end max-w-[35%] lg:max-w-[25%] ml-auto">
                      <h6 className="text-[24px] lg:text-[32px] leading-[32px] lg:leading-[40px]  font-medium text-[#9370E4] relative top-[0px] ">
                        Searches for opportunities through the portal
                      </h6>
                    </div>
                  </div>
                </div>

                <div className='py-[0px]  after:content-[url("/assets/images/roadmap-cut-5.png")] after:bg-center  overflow-hidden after:bg-no-repeat after:relative after:top-[-8em] lg:after:top-[-4em] after:left-[32%] lg:after:left-[53%]'>
                  <div className="relative top-[-1em]">
                    <div className="flex justify-start">
                      <Image
                        src="/assets/images/roadmap5-tablet.png"
                        alt="iamge"
                        width={170}
                        height={170}
                        className=""
                      />
                    </div>
                    <div className="text-left max-w-[35%]">
                      <h6 className="text-[24px] lg:text-[32px]  leading-[32px] lg:leading-[40px]  font-medium text-[#9370E4] relative top-[10px] ">
                        Finds the ideal job opportunity
                      </h6>
                    </div>
                  </div>
                </div>

                <div className='py-[0px] after:content-[url("/assets/images/roadmap-cut-4.png")] after:bg-center  overflow-hidden after:bg-no-repeat after:relative after:top-[-4em] after:left-[8%] lg:after:left-[10%]'>
                  <div className="relative top-[-1em]">
                    <div className="flex justify-end">
                      <Image
                        src="/assets/images/roadmap6-tablet.png"
                        alt="image"
                        width={220}
                        height={220}
                        className=""
                      />
                    </div>
                    <div className="text-end max-w-[35%] lg:max-w-[30%] ml-auto">
                      <h6 className="text-[24px] lg:text-[32px]  leading-[32px] lg:leading-[40px]  font-medium text-[#9370E4] relative top-[0px] ">
                        With one-click create a one page resume with the added
                        skills
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="py-[0px]">
                  <div className="flex justify-start">
                    <Image
                      src="/assets/images/roadmap7-tablet.png"
                      alt="image"
                      width={178}
                      height={118}
                      className=""
                    />
                  </div>
                  <div className="text-left max-w-[45%]">
                    <h6 className="text-[24px] lg:text-[32px]  leading-[32px] lg:leading-[40px]  font-medium text-[#9370E4] relative top-[10px] ">
                      Gets accepted to the job with a fair salary and the
                      necessary skills to succeed
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 font-DM block md:hidden">
              <div className="py-[20px] sm:py-[50px]">
                <div className="">
                  <div className="">
                    <div className="flex justify-center">
                      <Image
                        src="/assets/images/roadmap1-tablet.png"
                        alt="image"
                        width={238}
                        height={142}
                        className=""
                      />
                    </div>
                    <div className="text-center max-w-[70%] mx-auto">
                      <h6 className="text-[16px] em:text-[20px] leading-[25px] em:leading-[28px]  font-medium text-[#9370E4]">
                        Student is eager to learn and grow their skills for
                        future jobs.
                      </h6>
                      <h6 className="text-[16px] em:text-[20px] leading-[25px] em:leading-[28px]  font-medium text-[#9370E4]">
                        Hop in LearnAI Academy website and find a course
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="pt-[25px] em:pt-[50px] pb-[30px] em:pb-[50px]">
                  <div className="flex justify-center">
                    <Image
                      src="/assets/images/vertical-roadmap.png"
                      alt="image"
                      width={40}
                      height={170}
                      className=""
                    />
                  </div>
                </div>

                <div className="">
                  <div className="relative top-[-1em]">
                    <div className="flex justify-center">
                      <Image
                        src="/assets/images/roadmap2-tablet.png"
                        alt="image"
                        width={187}
                        height={187}
                        className=""
                      />
                    </div>
                    <div className="text-center max-w-[70%] mx-auto">
                      <h6 className="text-[16px] em:text-[20px] leading-[25px] em:leading-[28px] font-medium text-[#9370E4]  top-[0px] relative ">
                        After some studying and learning new concepts... student
                        gets a diploma{" "}
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="pt-[20px] em:pt-[50px] pb-[30px] em:pb-[50px]">
                  <div className="flex justify-center">
                    <Image
                      src="/assets/images/vertical-roadmap.png"
                      alt="image"
                      width={40}
                      height={170}
                      className=""
                    />
                  </div>
                </div>

                <div className="">
                  <div className="relative top-[-1.5em]">
                    <div className="flex justify-center">
                      <Image
                        src="/assets/images/roadmap3-tablet.png"
                        alt="image"
                        width={166}
                        height={221}
                        className=""
                      />
                    </div>
                    <div className="text-center max-w-[70%] mx-auto">
                      <h6 className="text-[16px] em:text-[20px] leading-[25px] em:leading-[28px]  font-medium text-[#9370E4] relative top-[0px] ">
                        New skills are added to their digital profile
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="pt-[0px] em:pt-[50px] pb-[30px] em:pb-[50px]">
                  <div className="flex justify-center">
                    <Image
                      src="/assets/images/vertical-roadmap.png"
                      alt="image"
                      width={40}
                      height={170}
                      className=""
                    />
                  </div>
                </div>

                <div className="">
                  <div className="relative top-[-1.5em]">
                    <div className="flex justify-center">
                      <Image
                        src="/assets/images/roadmap4-tablet.png"
                        alt="image"
                        width={220}
                        height={220}
                        className=""
                      />
                    </div>
                    <div className="text-center max-w-[70%] mx-auto">
                      <h6 className="text-[16px] em:text-[20px] leading-[25px] em:leading-[28px]  font-medium text-[#9370E4] relative top-[0px] ">
                        Searches for opportunities through the portal
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="pt-[0px] em:pt-[50px] pb-[30px] em:pb-[50px]">
                  <div className="flex justify-center">
                    <Image
                      src="/assets/images/vertical-roadmap.png"
                      alt="image"
                      width={40}
                      height={170}
                      className=""
                    />
                  </div>
                </div>

                <div className="">
                  <div className="relative top-[-1em]">
                    <div className="flex justify-center">
                      <Image
                        src="/assets/images/roadmap5-tablet.png"
                        alt="image"
                        width={170}
                        height={170}
                        className=""
                      />
                    </div>
                    <div className="text-center max-w-[70%] mx-auto">
                      <h6 className="text-[16px] em:text-[20px] leading-[25px] em:leading-[28px] font-medium text-[#9370E4] relative top-[10px] ">
                        Finds the ideal job opportunity
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="pt-[20px] em:pt-[50px] pb-[30px] em:pb-[50px]">
                  <div className="flex justify-center">
                    <Image
                      src="/assets/images/vertical-roadmap.png"
                      alt="image"
                      width={40}
                      height={170}
                      className=""
                    />
                  </div>
                </div>

                <div className="">
                  <div className="relative top-[-1em]">
                    <div className="flex justify-center">
                      <Image
                        src="/assets/images/roadmap6-tablet.png"
                        alt="image"
                        width={220}
                        height={220}
                        className=""
                      />
                    </div>
                    <div className="text-center max-w-[70%] mx-auto">
                      <h6 className="text-[16px] em:text-[20px] leading-[25px] em:leading-[28px]  font-medium text-[#9370E4] relative top-[0px] ">
                        With one-click create a one page resume with the added
                        skills
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="pt-[10px] em:pt-[50px] pb-[30px] em:pb-[50px]">
                  <div className="flex justify-center">
                    <Image
                      src="/assets/images/vertical-roadmap.png"
                      alt="image"
                      width={40}
                      height={170}
                      className=""
                    />
                  </div>
                </div>

                <div className="">
                  <div className="flex justify-center">
                    <Image
                      src="/assets/images/roadmap7-tablet.png"
                      alt="image"
                      width={178}
                      height={118}
                      className=""
                    />
                  </div>
                  <div className="text-center max-w-[70%] mx-auto">
                    <h6 className="text-[16px] em:text-[20px] leading-[25px] em:leading-[28px]  font-medium text-[#9370E4] relative top-[10px] ">
                      Gets accepted to the job with a fair salary and the
                      necessary skills to succeed
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;
