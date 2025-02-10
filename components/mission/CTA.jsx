import Image from "next/image";
import Link from "next/link";


const CardSection = ({ block, dataBinding }) => {
  const { cards } = block
  const [cards1, cards2, cards3] = cards

  return (
    <div data-cms-bind={dataBinding} className='bg-none md:bg-[url("/assets/images/mission-piller-bg.png")] bg-center bg-mission bg-no-repeat'>
      <div className=' max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 rounded-[15px] pb-[40px] md:pb-[80px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-x-[30px] gap-y-[50px] xl:gap-y-[0] auto-rows-auto my-[0px] md:my-[50px] font-DM'>
          <div className='group'>
            <div className='h-[100%] rounded-[10px] max-w-[38%] xl:max-w-[100%] mx-auto hidden xl:block'>
              <div className='flex flex-col justify-center items-center  group-hover:bg-[#9370E4] rounded-[10px]  py-[40px] px-[10px] em:px-[20px] text-center bg-[#9370E4] overflow-hidden group-hover:h-[550px] h-[550px]'>
                <div className='translate-x-[100px]  group-hover:translate-y-[200px] translate-y-[152%]  transition duration-700 ease-in-out group-hover:origin-left group-hover:rotate-[-30deg] origin-bottom mb-2 rotate-10 xl:block'>
                  <Image src={cards1.main} width={214} height={333} alt={""} className='object-contain' />
                </div>
                <div className='transition duration-700  ease-in-out delay-100 translate-y-[210px] group-hover:translate-y-[-150px] group-hover:block mt-10'>
                  <Image src={cards1.icon} width={100} height={100} alt={""} className='object-contain' />
                </div>
                <div className='group-hover:py-[0] py-[52px]'>
                  <div className='translate-y-[200px] group-hover:translate-y-[20px] group-hover:block transition duration-700 ease-in-out delay-100'>
                    <h6 className='text-center text-[22px] md:text-[28px] leading-[24px] text-[#FFF]  font-bold pb-[20px]'>{cards1.title}</h6>
                  </div>
                  <div className=''>
                    <p className='font-normal text-[18px] md:text-[20px] text-[#FFF]  leading-[27px] md:leading-[30px] max-w-[79%] mx-auto  transition duration-700 ease-in-out  group-hover:translate-y-[50px] translate-y-[550px] '>{cards1.hover_text}</p>
                  </div>
                  <div className='text-center group-hover:mt-[0] mt-[70px] translate-y-[-150px] group-hover:translate-y-[87px] group-hover:block transition duration-700 ease-in-out delay-100'>
                    <Link href={cards1.buttonLink}>
                      <button className='font-DM text-[14px] bg-[#FFFFFF] text-[#9370E4] font-normal py-[10px] px-[60px] em:px-[90px] rounded hover:shadow-btn'>{cards1.button_text}</button></Link>
                  </div>
                </div>

                <div className='transition duration-700 ease-in-out delay-100 translate-y-[-120px] group-hover:translate-y-[200px] group-hover:block'>
                  <Image src={cards1.bottomBlue} width={160} height={150} alt={""} className='object-contain' />
                </div>
                <div className='translate-x-[-90px] mr-4 translate-y-[-440px] group-hover:translate-y-[100px]  transition duration-700 ease-in-out delay-100 group-hover:origin-top group-hover:rotate-[30deg] origin-left rotate-0'>
                  <Image src={cards1.bottomCrop} width={214} height={400} alt={""} className='object-contain' />
                </div>
              </div>
            </div>

            <div className='h-[100%] rounded-[10px]  block xl:hidden'>
              <div className='flex flex-col justify-center items-center  group-hover:bg-[#9370E4] rounded-[10px]  py-[40px] px-[10px] em:px-[20px] text-center bg-[#9370E4] overflow-hidden h-[100%] sm:h-[400px] lg:h-[500px]'>


                <div className=''>
                  <h6 className='text-center text-[22px] md:text-[28px] leading-[24px] text-[#FFF]  font-bold '>{cards1.title}</h6>
                </div>
                <div className='py-[25px] px-[5px] em:px-[20px] lg:px-[0]'>
                  <p className='font-normal text-[16px] sm:text-[18px] md:text-[20px] text-[#FFF]  leading-[27px] md:leading-[30px] '>{cards1.hover_text}</p>
                </div>
                <div className='text-center'>
                  <Link href={cards1.buttonLink}>
                    <button className='font-DM text-[14px] bg-[#FFFFFF] text-[#9370E4] font-normal py-[10px] px-[60px] em:px-[90px] rounded hover:shadow-btn '>{cards1.button_text}</button>
                  </Link>

                </div>

              </div>
            </div>
          </div>

          <div className='group'>
            <div className='h-[100%] rounded-[10px] max-w-[38%] xl:max-w-[100%] mx-auto  hidden xl:block'>
              <div className='flex flex-col justify-center items-center  group-hover:bg-[#009CA5] rounded-[10px]  py-[40px] px-[10px] em:px-[20px] text-center bg-[#009CA5] overflow-hidden group-hover:h-[550px] h-[550px]'>
                <div className='translate-x-[100px]  group-hover:translate-y-[200px] translate-y-[154%]  transition duration-700 ease-in-out group-hover:origin-left group-hover:rotate-[-30deg] origin-bottom mb-12 rotate-10'>
                  <Image src={cards2.main} width={214} height={333} alt={""} className='object-contain' />
                </div>
                <div className='transition duration-700 ease-in-out delay-100 translate-y-[206px] group-hover:translate-y-[-150px] group-hover:block'>
                  <Image src={cards2.icon} width={100} height={100} alt={""} className='object-contain' />
                </div>
                <div className='group-hover:py-[0] py-[52px]'>
                  <div className='translate-y-[200px] group-hover:translate-y-[30px] group-hover:block transition duration-700 ease-in-out delay-100'>
                    <h6 className='text-center text-[22px] md:text-[28px] leading-[24px] text-[#FFF] font-bold '>{cards2.title}</h6>
                  </div>
                  <div className=''>
                    <p className='font-normal text-[18px] md:text-[20px] text-[#FFF]  leading-[27px] md:leading-[30px] max-w-[79%] mx-auto  transition duration-700 ease-in-out  group-hover:translate-y-[60px] translate-y-[550px] '>{cards2.hover_text}</p>
                  </div>
                  <div className='text-center group-hover:mt-[0] mt-[40px] translate-y-[-130px] group-hover:translate-y-[100px] group-hover:block transition duration-700 ease-in-out delay-100'>
                    <Link href={cards2.buttonLink}>
                      <button className='font-DM text-[14px] bg-[#FFFFFF] text-[#009CA5] font-normal py-[10px] px-[60px] em:px-[90px] rounded hover:shadow-btn '>{cards2.button_text}</button>
                    </Link>

                  </div>
                </div>

                <div className='transition duration-700 ease-in-out delay-100 translate-y-[-120px] group-hover:translate-y-[200px] group-hover:block'>
                  <Image src={cards2.bottomBlue} width={160} height={150} alt={""} className='object-contain h-[150px]' />
                </div>
                <div className='translate-x-[-30px] translate-y-[-420px] group-hover:translate-y-[100px]  transition duration-700 ease-in-out delay-100 group-hover:origin-top group-hover:rotate-[30deg] origin-left rotate-0'>
                  <Image src={cards2.bottomCrop} width={350} height={550} alt={""} className='object-contain' />
                </div>
              </div>
            </div>
            <div className='h-[100%] rounded-[10px]  block xl:hidden'>
              <div className='flex flex-col justify-center items-center  group-hover:bg-[#009CA5] rounded-[10px]  py-[40px] px-[10px] em:px-[20px] text-center bg-[#009CA5] overflow-hidden h-[100%] sm:h-[400px] lg:h-[500px]'>


                <div className=''>
                  <h6 className='text-center text-[22px] md:text-[28px] leading-[24px] text-[#FFF]  font-bold '>{cards2.title}</h6>
                </div>
                <div className='py-[20px] px-[5px] em:px-[20px] lg:px-[0]'>
                  <p className='font-normal text-[16px] sm:text-[18px] md:text-[20px] text-[#FFF]  leading-[27px] md:leading-[30px]'>{cards2.hover_text}</p>
                </div>
                <div className='text-center'>
                  <Link href={cards2.buttonLink}>
                    <button className='font-DM text-[14px] bg-[#FFFFFF] text-[#009CA5] font-normal py-[10px] px-[60px] em:px-[90px] rounded hover:shadow-btn '>{cards2.button_text}</button>
                  </Link>

                </div>

              </div>
            </div>
          </div>

          <div className='group'>
            <div className='h-[100%] rounded-[10px] max-w-[38%] xl:max-w-[100%] mx-auto hidden xl:block'>
              <div className='flex flex-col justify-center items-center  group-hover:bg-[#FAC7DF] rounded-[10px]  py-[40px] px-[10px] em:px-[20px] text-center bg-[#FAC7DF] overflow-hidden group-hover:h-[550px] h-[550px]'>
                <div className='translate-x-[100px]  group-hover:translate-y-[200px] translate-y-[144%]  transition duration-700 ease-in-out group-hover:origin-left group-hover:rotate-[-30deg] origin-bottom  mb-12 rotate-10'>
                  <Image src={cards3.main} width={214} height={333} alt={""} className='object-contain' />
                </div>
                <div className='transition duration-700 ease-in-out delay-100 translate-y-[200px] group-hover:translate-y-[-150px] group-hover:block'>
                  <Image src={cards3.icon} width={100} height={100} alt={""} className='object-contain' />
                </div>
                <div className='group-hover:py-[0] py-[52px]'>
                  <div className='translate-y-[190px] group-hover:translate-y-[20px] group-hover:block transition duration-700 ease-in-out delay-100'>
                    <h6 className='text-center text-[22px] md:text-[28px] leading-[24px] text-[#FFF]  font-bold '>{cards3.title}</h6>
                  </div>
                  <div className=''>
                    <p className='font-normal text-[18px] md:text-[20px] text-[#FFF]  leading-[27px] md:leading-[30px]   transition duration-700 ease-in-out  group-hover:translate-y-[50px] translate-y-[600px] max-w-[98%] mx-auto'>{cards3.hover_text}</p>
                  </div>
                  <div className='text-center group-hover:mt-[0] mt-[40px] translate-y-[-145px] group-hover:translate-y-[87px] group-hover:block transition duration-700 ease-in-out delay-100'>
                    <Link href={cards3.buttonLink}>
                      <button className='font-DM text-[14px] bg-[#FFF] mt-1 text-[#9370E4] font-normal py-[10px] px-[60px] em:px-[90px] rounded hover:shadow-btn '>{cards3.button_text}</button>
                    </Link>

                  </div>
                </div>

                <div className='transition duration-700 ease-in-out delay-100 translate-y-[-130px] group-hover:translate-y-[200px] group-hover:block'>
                  <Image src={cards3.bottomBlue} width={212} height={150} alt={""} className='object-contain h-[155px' />
                </div>
                <div className='translate-x-[-30px] translate-y-[-420px] group-hover:translate-y-[100px]  transition duration-700 ease-in-out delay-100 group-hover:origin-top group-hover:rotate-[30deg] origin-left rotate-0'>
                  <Image src={cards3.bottomCrop} width={350} height={550} alt={""} className='object-contain' />
                </div>
              </div>
            </div>
            <div className='h-[100%] rounded-[10px]  block xl:hidden'>
              <div className='flex flex-col justify-center items-center  group-hover:bg-[#FAC7DF] rounded-[10px]  py-[40px] px-[10px] em:px-[20px] text-center bg-[#FAC7DF] overflow-hidden h-[100%] sm:h-[400px] lg:h-[500px]'>


                <div className=''>
                  <h6 className='text-center text-[22px] md:text-[28px] leading-[24px] text-[#fff]  font-bold '>{cards3.title}</h6>
                </div>
                <div className='py-[20px] px-[5px] em:px-[20px] lg:px-[0]'>
                  <p className='font-normal text-[16px] sm:text-[18px] md:text-[20px] text-[#fff]  leading-[27px] md:leading-[30px] '>{cards3.hover_text}</p>
                </div>
                <div className='text-center'>
                  <Link href={cards3.buttonLink}>
                    <button className='font-DM text-[14px] bg-[#FFF]  text-[#9370E4] font-normal py-[10px] px-[60px] em:px-[90px] rounded hover:shadow-btn '>{cards3.button_text}</button>
                  </Link>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default CardSection;
