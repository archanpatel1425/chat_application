'use client'
import React,{useState} from "react";
import Image from "next/image";

const HoverCard = ({ block, dataBinding }) => {
    const { title, hoverCards } = block;
    const [hoverCards_1,hoverCards_2,hoverCards_3,hoverCards_4,hoverCards_5,hoverCards_6,hoverCards_7,hoverCards_8,hoverCards_9,hoverCards_10,hoverCards_11] = hoverCards
    const [isFlipped, setFlipped] = useState(false);
    const [cardFlipped, setCardFlipped] = useState(false);
    const [trainingFlipped, setTrainingFlipped] = useState(false);
    const [reportFlipped, setReportFlipped] = useState(false);
    const [simpleFlipped, setSimpleFlipped] = useState(false);
    const [report, setReport] = useState(false);
    const [machine, setMachine] = useState(false);
    const [robot, setRobot] = useState(false);
    const [computer, setComputer] = useState(false);
  
    const cardClick = () => {
      setFlipped(!isFlipped);
    }

    const reportClick = () => {
      setReport(!report);
    }

    const machineClick = () => {
      setMachine(!machine);
    }

    const eamilCardClick = () => {
      setCardFlipped(!cardFlipped);
    }
 
    const trainingCardClick = () => {
      setTrainingFlipped(!trainingFlipped);
    }

    const reportCardClick = () => {
      setReportFlipped(!reportFlipped);
    }

    const simpleCardClick = () => {
      setSimpleFlipped(!simpleFlipped);
    }
  
    const roboticsCardClick = () => {
      setRobot(!robot);
    }

    const computerCardClick = () => {
      setComputer(!computer);
    }

    return (
        <div className="mt-12" data-cms-bind={dataBinding}>
              <div className='bg-[#F0F6FF] py-[60px] md:py-[130px] my-[30px] md:my-[50px]'>
         <div className=''>
         <div>
             <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4 font-DM'>
                  <div>
                        <h2 className="text-[#3D405B] text-2xl md:text-[42px] lg:text-[48px] not-italic font-bold leading-[36px] sm:leading-[40px] md:leading-[58px] text-center max-w-[99%] em:max-w-[95%] lg:max-w-[68%] mx-auto">
                        {title}
                         </h2>
                  </div>
                  <div className='mt-[50px] md:mt-[90px]'>
                          <div>
                            <ul className='block xl:flex justify-between font-DM '>

                               {/* sales  */}
                                <div className={`w-[100%] xl:w-[58%]  card hidden sm:block`} >
                                <div className={`sales-inner h-[370px] sm:h-[400px] md:h-[500px] xl:h-[660px] ${isFlipped ? 'flipped' : ''}`}>
                                  <li style={{ backgroundImage: `url(${hoverCards_1.card_bg})` }}className={`bg-[#9370E4] py-[50px] em:py-[80px] sm:py-[100px] xl:py-[230px] px-[15px] em:px-[20px] sm:px-[0px] rounded-[10px] bg-hidden bg-no-repeat bg-salesRespo xl:bg-sales bg-salesSizeRespo xl:bg-salesSize mt-[0] flex justify-center card-front items-center `}>
                                    <div className='flex flex-col justify-center items-center mx-auto'>
                                      <h2 className='text-[55px] em:text-[65px] md:text-[80px] lg:text-[120px] xl:text-[140px] font-bold text-[#FFF] uppercase leading-[60px] em:leading-[80px] lg:leading-[100px] xl:leading-[160px]'>{hoverCards_1.title_highlight}</h2>
                                      <h3 className='text-[26px] em:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[62px] font-normal leading-[10px] text-[#FFFFFF] uppercase pt-[10px] md:pt-[30px]'>{hoverCards_1.title}</h3>
                                    </div>
                                  </li>
                                  <li className={`bg-[#9370E4] py-[30px] sm:py-[50px] px-[15px] em:pl-[30px] rounded-[10px] mt-[0] justify-center items-center flex   h-[370px] sm:h-[400px] md:h-[500px] xl:h-[660px] card-back`}>
                                    <div className='flex flex-col justify-center items-center mx-auto'>
                                      <p className='text-[16px] em:text-[18px] sm:text-[22px] md:text-[28px] lg:text-[38px] leading-[30px] em:leading-[35px] sm:leading-[40px] md:leading-[42px] lg:leading-[46px] font-medium text-[#fff] max-w-[95%] capitalize text-center xl:text-left'>{hoverCards_1.hover_text}</p>
                                    </div>
                                  </li>
                                </div>
                                </div>


                                <div className={`w-[100%] xl:w-[58%]   block sm:hidden`} >
                                    <div className={`sales-inner `}>
                                      <li style={{ backgroundImage: `url(${hoverCards_1.card_bg})` }}    className={`bg-[#9370E4] py-[50px] em:py-[80px] sm:py-[100px] xl:py-[230px] px-[15px] em:px-[20px] sm:px-[0px] rounded-[10px] bg-hidden bg-no-repeat bg-salesRespo xl:bg-sales bg-salesSizeRespo xl:bg-salesSize mt-[0] hidden justify-center items-center `}>
                                        <div className='flex flex-col justify-center items-center mx-auto'>
                                          <h2 className='text-[55px] em:text-[65px] md:text-[80px] lg:text-[120px] xl:text-[140px] font-bold text-[#FFF] uppercase leading-[60px] em:leading-[80px] lg:leading-[100px] xl:leading-[160px]'>{hoverCards_1.title_highlight}</h2>
                                          <h3 className='text-[26px] em:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[62px] font-normal leading-[10px] text-[#FFFFFF] uppercase pt-[10px] md:pt-[30px]'>{hoverCards_1.title}</h3>
                                        </div>
                                      </li>
                                      <li className={`bg-[#9370E4] py-[30px] sm:py-[50px] px-[15px] em:pl-[30px] rounded-[10px] mt-[0] justify-center items-center flex `}>
                                        <div className='flex flex-col justify-center items-center mx-auto'>
                                          <p className='text-[16px] em:text-[18px] sm:text-[22px] md:text-[28px] lg:text-[36px] leading-[30px] em:leading-[35px] sm:leading-[40px] md:leading-[42px] lg:leading-[46px] font-medium text-[#fff] max-w-[95%] capitalize text-center xl:text-left'>{hoverCards_1.hover_text} </p>
                                        </div>
                                      </li>
                                    
                                    </div>
                                </div>
                               {/* sales  */}

                                <li className='grid grid-cols-1 gap-y-[36px] w-[100%] xl:w-[39%] mt-[30px] xl:mt-[0]' >

                                {/* OPPORTUNITY REPORT  */}
                                  <div className='hidden sm:block card'>
                                    <div className={`report-inner h-[324px]  ${report ? 'flipped' : ''}`}>
                                        <li style={{ backgroundImage: `url(${hoverCards_2.card_bg})` }} className={`bg-[#9370E4] py-[60px] xl:py-[30px] rounded-[10px] text-center flex items-center  bg-no-repeat bg-salesRespo xl:bg-sales bg-chatbot  h-[324px]  card-front`}>
                                        <h5 className='text-[22px] em:text-[28px] md:text-[32px] lg:text-[40px] font-bold text-[#FFFFFF] leading-[40px] md:leading-[48px] lg:leading-[50px] uppercase max-w-[80%] sm:max-w-[60%] mx-auto'>{hoverCards_2.title}</h5>
                                        </li>

                                        <li className={`bg-[#9370E4] py-[60px] xl:py-[30px] px-[50px] rounded-[10px] text-center flex items-center  h-[324px] card-back`}>
                                        <p className='text-[18px] sm:text-[22px] lg:text-[24px]  font-medium text-[#FFFFFF] leading-[40px] md:leading-[32px] lg:leading-[34px] ml-0 mr-auto text-center xl:text-left'>{hoverCards_2.hover_text}</p>
                                        </li>
                                    </div>
                                  </div>

                                  <div className='block sm:hidden '>
                                    <div className={` report-inner h-auto `}>
                                        <li style={{ backgroundImage: `url(${hoverCards_2.card_bg})` }} className={`bg-[#9370E4] py-[60px] xl:py-[30px] rounded-[10px] text-center  items-center  bg-no-repeat bg-[100%] bg-cover  hidden`}>
                                        <h5 className='text-[22px] em:text-[28px] md:text-[32px] lg:text-[40px] font-bold text-[#FFFFFF] leading-[40px] md:leading-[48px] lg:leading-[50px] uppercase max-w-[80%] sm:max-w-[60%] mx-auto'>{hoverCards_2.title}</h5>
                                        </li>

                                        <li className={`bg-[#9370E4] py-[30px] px-[15px] em:px-[30px] sm:px-[50px] rounded-[10px] text-center flex items-center `}>
                                        <p className='text-[16px] em:text-[18px] sm:text-[20px] lg:text-[24px]  font-medium text-[#FFFFFF] leading-[30px] md:leading-[32px] lg:leading-[34px]  max-w-[100%] ml-0 mr-auto text-center'>{hoverCards_2.hover_text}</p>
                                        </li>
                                    </div>
                                  </div>
                                {/* OPPORTUNITY REPORT  */}
                                 

                                {/* MACHINE LEARNING  */}
                                <div className='hidden sm:block card'>
                                      <div className={`machine-inner h-[294px]  ${machine ? 'flipped' : ''}`}>
                                          <div style={{ backgroundImage: `url(${hoverCards_3.card_bg})` }} className='bg-[#009CA5] py-[60px] xl:py-[30px] rounded-[10px] text-center flex items-center  card-front  bg-no-repeat bg-salesRespo xl:bg-sales bg-chatbot'>
                                                  <h5 className='text-[22px] em:text-[28px] md:text-[32px] lg:text-[40px] font-bold text-[#FFFFFF] leading-[40px] md:leading-[45px]  uppercase max-w-[80%] sm:max-w-[60%] mx-auto'>{hoverCards_3.title}</h5>
                                                  
                                          </div>
                                          <div className='bg-[#009CA5] py-[60px] xl:py-[30px] px-[30px] rounded-[10px] text-center flex items-center card-back'>
                                                  <p className='text-[24px] md:text-[28px] lg:text-[32px]  font-medium text-[#FFFFFF] leading-[38px] md:leading-[42px]  max-w-[95%] mx-auto text-center xl:text-left'>{hoverCards_3.hover_text}</p>
                                                  
                                          </div>
                                      </div>
                                    </div>

                                    <div className='block sm:hidden '>
                                      <div className={`machine-inner h-auto `}>
                                          <div style={{ backgroundImage: `url(${hoverCards_3.card_bg})` }} className='bg-[#009CA5] py-[60px] xl:py-[30px] rounded-[10px] text-center hidden items-center  bg-no-repeat bg-[100%] bg-cover '>
                                                  <h5 className='text-[22px] em:text-[28px] md:text-[32px] lg:text-[40px] font-bold text-[#FFFFFF] leading-[40px] md:leading-[45px]  uppercase max-w-[80%] sm:max-w-[60%] mx-auto'>{hoverCards_3.title}</h5>
                                                  
                                          </div>
                                          <div className='bg-[#009CA5] py-[40px] sm:py-[60px] px-[20px] sm:px-[30px] rounded-[10px] text-center flex items-center '>
                                                  <p className='text-[16px] em:text-[18px] sm:text-[20px] leading-[28px] em:leading-[30px] text-[#fff] font-medium max-w-[100%] sm:max-w-[95%] mx-auto text-center'>{hoverCards_3.hover_text}</p>
                                                  
                                          </div>
                                      </div>
                                    </div>
                                {/* MACHINE LEARNING  */}
                                
                                </li>
                            </ul>
                          </div>
                          <div className='mt-[35px] relative'>
                                 
                               {/* ONLY-BOY IMAGES   */}
                               <div className='absolute top-[-10%] lg:top-[-6.5%] xl:top-[-12%] 3xl:top-[-18%] left-[-7%] mxl:left-[-12%] hidden lg:block'>
                                      <Image src={hoverCards_4.card_bg} width={502} height={471} alt={""} unoptimized className='w-[450px] 3xl:w-[502px]'/>
                                </div>
                             {/* ONLY-BOY IMAGES   */}
                            <ul className='block xl:flex justify-between font-DM'> 

                            <li className='grid grid-cols-1 gap-y-[36px]  w-[100%] xl:w-[58%] mt-[30px] xl:mt-[0]'>
                              <div className='block lg:grid grid-cols-[100%_100%] lg:grid-cols-[48.5%_48.5%] xl:grid-cols-[320px_370px] justify-between '>
                                  <div className='bg-[#F9CFE6] py-[60px] xl:py-[30px] rounded-[10px] text-center hidden lg:flex items-center h-[301px]'> 
                                  </div>

                                  {/* CONVERSATIONAL AI  */}
                                      <div className={`card hidden sm:block`} >
                                     <div className={`email-inner h-[301px] ${cardFlipped ? 'flipped' : ''}`}>
                                          <div className='bg-[#472BE3] py-[60px] xl:py-[30px] rounded-[10px] text-center  items-center mt-[0px] lg:mt-[0] flex group-hover:hidden  card-front'>
                                              <h5 className='text-[22px] em:text-[28px] md:text-[30px]  font-bold text-[#FFFFFF] leading-[40px] md:leading-[48px] lg:leading-[45px] uppercase max-w-[85%]  mx-auto'>{hoverCards_5.title}</h5>
                                          </div>
                                          <div className='bg-[#472BE3] py-[60px] xl:py-[30px] px-[25px] rounded-[10px] text-center items-center mt-[0px] lg:mt-[0]  mx-auto card-back'>
                                              <p className='text-[16px] em:text-[18px] sm:text-[20px] md:text-[24px] leading-[35px] xl:leading-[30px]  font-medium text-[#fff] max-w-[95%] mx-auto text-center lg:text-left'>{hoverCards_5.hover_text}</p> 
                                          </div>
                                     </div>
                                      </div>

                                      <div className={` block sm:hidden `} >
                                      <div className={`h-auto`}>
                                            <div className='bg-[#472BE3] py-[60px] xl:py-[30px] rounded-[10px] text-center  items-center mt-[0px] lg:mt-[0] hidden'>
                                                <h5 className='text-[22px] em:text-[28px] md:text-[34px]  font-bold text-[#FFFFFF] leading-[40px] md:leading-[48px] lg:leading-[45px] uppercase max-w-[85%]  mx-auto'>{hoverCards_5.title}</h5>
                                            </div>
                                            <div className='bg-[#472BE3] py-[30px] rounded-[10px] text-center items-center mt-[0px] lg:mt-[0]  mx-auto'>
                                                <p className='text-[16px] em:text-[18px] sm:text-[20px] md:text-[24px]  leading-[30px]  font-medium text-[#fff] max-w-[90%] mx-auto capitalize'>{hoverCards_5.hover_text}</p> 
                                            </div>
                                      </div>
                                      </div>
                                  {/* CONVERSATIONAL AI  */}
                                 
                              </div>
                               
                                {/* NATURAL LANGUAGE PROCESSING  */}
                                  <div className={`card hidden sm:block`} >
                                    <div className={`training-inner h-[330px] md:h-[376px] ${trainingFlipped  ? 'flipped' : ''}`}>
                                        <div style={{ backgroundImage: `url(${hoverCards_8.card_bg})` }} className='bg-[#F9CFE6]  py-[30px] em:py-[50px] sm:py-[60px] px-[15px]  rounded-[10px]  items-center justify-center flex  bg-hidden  bg-no-repeat bg-[100%] bg-Natural xl:bg-NaturalRepo card-front'>
                                                <h2 className='text-[22px] em:text-[28px] sm:text-[40px] md:text-[60px] lg:text-[70px] xl:text-[72px] leading-[40px] sm:leading-[60px] md:leading-[70px] lg:leading-[90px] font-bold uppercase text-[#FFF] text-center'>{hoverCards_8.title}</h2>
                                        </div>
                                        <div className='bg-[#F9CFE6]  py-[30px] em:py-[50px] sm:py-[40px] px-[60px] md:px-[90px]  rounded-[10px] flex  items-center card-back'>
                                            <p className='text-[16px] em:text-[24px] md:text-[28px] lg:text-[34px] leading-[28px] em:leading-[32px] sm:leading-[37px] lg:leading-[40px]  font-medium text-[#fff] max-w-[99%] capitalize mx-auto text-center xl:text-left'>{hoverCards_8.hover_text}</p>
                                        </div>
                                    </div>
                                  </div>

                                  <div className={` block sm:hidden`} >
                                    <div className={`h-auto`}>
                                      <div className='bg-[#F9CFE6]  py-[30px] em:py-[50px] sm:py-[60px] px-[15px]  rounded-[10px]  items-center justify-center hidden'>
                                                <h2 className='text-[22px] em:text-[28px] sm:text-[46px] md:text-[60px] lg:text-[70px] xl:text-[72px] leading-[40px] sm:leading-[60px] md:leading-[70px] lg:leading-[90px] font-bold uppercase text-[#FFF] text-center'>{hoverCards_8.title}</h2>
                                        </div>
                                        <div className='bg-[#F9CFE6] py-[30px]  px-[15px]  rounded-[10px] flex  items-center'>
                                            <p className='text-[16px] em:text-[18px] sm:text-[20px] lg:text-[26px] leading-[28px] em:leading-[32px] sm:leading-[35px] lg:leading-[40px]  font-medium text-[#fff] max-w-[95%] capitalize mx-auto text-center xl:text-left'>{hoverCards_8.hover_text}</p>
                                        </div>
                                    </div>
                                  </div>
                                 {/* NATURAL LANGUAGE PROCESSING  */}
                              
                             </li>

                                   {/* ROBOTICS PROCESS AUTOMATION  */}

                                  <div className={`card hidden sm:block  w-[100%] xl:w-[39%] mt-[36px] xl:mt-[0]  justify-center items-center`}>
                                     <div  className={`robot-inner h-[400px] lg:h-[550px] xl:h-[713px] ${robot ? 'flipped' : ''}`}>
                                          <div style={{ backgroundImage: `url(${hoverCards_6.card_bg})` }} className='flex flex-col justify-center items-center mx-auto bg-[#472BE3] py-[30px] em:py-[50px] sm:py-[100px] lg:py-[270px] px-[15px] em:px-[20px] sm:px-[0px] rounded-[10px] bg-hidden bg-no-repeat bg-salesRespo xl:bg-sales bg-chatbot h-[713px] card-front'>
                                            <h3 className='text-[22px] em:text-[28px] sm:text-[30px] md:text-[38px] lg:text-[50px] xl:text-[60px] font-bold leading-[50px] md:leading-[70px] text-[#FFFFFF] uppercase  text-center max-w-[80%] xl:max-w-[100%]'>{hoverCards_6.title}</h3>
                                          </div>
                                          <div className='flex flex-col justify-center items-center mx-auto bg-[#472BE3] py-[30px] em:py-[50px] sm:py-[100px] lg:py-[270px] px-[15px] em:px-[50px] rounded-[10px] card-back'>
                                          <p className='text-[16px] em:text-[18px] sm:text-[28px] lg:text-[36px] leading-[28px] em:leading-[32px] sm:leading-[38px] lg:leading-[44px]  font-normal text-[#fff] max-w-[100%] capitalize mx-auto text-center '>{hoverCards_6.hover_text} <span className='font-bold'>{hoverCards_6.title}</span> </p>
                                          </div>
                                     </div>
                                  </div> 

                                  <div className={` block sm:hidden  w-[100%] xl:w-[39%] mt-[36px] xl:mt-[0]  justify-center items-center`} >
                                     <div  className={`robot-inner h-auto`}>
                                          <div style={{ backgroundImage: `url(${hoverCards_6.card_bg})` }} className=' flex-col justify-center items-center mx-auto bg-[#472BE3] py-[30px] em:py-[50px] sm:py-[100px] lg:py-[270px] px-[15px] em:px-[20px] sm:px-[0px] rounded-[10px] hidden bg-no-repeat bg-salesRespo xl:bg-sales bg-chatbot '>
                                            <h3 className='text-[22px] em:text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[40px] em:leading-[70px] text-[#FFFFFF] uppercase  text-center'>{hoverCards_6.title}</h3>
                                          </div>
                                          <div className='flex flex-col justify-center items-center mx-auto bg-[#472BE3] py-[30px] em:py-[50px] sm:py-[100px] lg:py-[270px] px-[15px] em:px-[20px] sm:px-[0px] rounded-[10px]'>
                                          <p className='text-[16px] em:text-[18px] sm:text-[20px] lg:text-[34px] leading-[28px] em:leading-[32px] sm:leading-[35px] lg:leading-[40px]  font-normal text-[#fff] max-w-[95%] capitalize mx-auto text-center xl:text-left'>{hoverCards_6.hover_text}<span className='font-bold'>{hoverCards_6.title}</span> </p>
                                          </div>
                                     </div>
                                  </div>
                                
                                    
                                {/* ROBOTICS PROCESS AUTOMATION  */}
                                
                            </ul>    
                          </div>

                          <div className='mt-[35px]'>
                            <ul className='block xl:flex justify-between  font-DM '>
                               <div className='w-[100%] xl:w-[42%]'>
                                  <div className={`card hidden sm:block`} >
                                    <div className={`report-inner h-[350px] md:h-[400px] ${reportFlipped ? 'flipped' : ''}`}>
                                    <li style={{ backgroundImage: `url(${hoverCards_7.card_bg})` }} className='bg-[#9370E4] py-[30px] em:py-[50px] sm:py-[70px] px-[15px] em:px-[30px] sm:px-[40px] rounded-[10px]  flex items-center  group-hover:hidden  card-front hidden  bg-no-repeat bg-salesRespo xl:bg-sales bg-chatbot'>
                                      <div className='text-center sm:text-left mx-auto '>
                                          <h5 className='text-[22px] em:text-[32px] md:text-[42px] lg:text-[50px] font-bold text-[#FFFFFF] leading-[45px] md:leading-[55px] lg:leading-[60px] uppercase max-w-[100%] sm:max-w-[80%]  mx-auto text-center'>{hoverCards_7.title}</h5>
                                      </div>
                                  </li>
                                  <li className='bg-[#9370E4] py-[30px] em:py-[50px] sm:py-[70px] px-[15px] em:px-[30px] sm:px-[40px] rounded-[10px]  items-center hidden group-hover:flex  card-back'>
                                      <div className='text-center sm:text-left mx-auto '>
                                          <p className='text-[16px] em:text-[18px] sm:text-[28px] lg:text-[34px] leading-[28px] em:leading-[32px] sm:leading-[38px] lg:leading-[42px]  font-medium text-[#fff] max-w-[90%] md:max-w-[85%] capitalize mx-auto text-center xl:text-left'>{hoverCards_7.hover_text}</p>
                                      </div>
                                  </li>
                                    </div>
                                  </div>

                                  <div className={`block sm:hidden`} >
                                    <div className={`h-auto`}>
                                    <li className='bg-[#9370E4] py-[30px] em:py-[50px] sm:py-[70px] px-[15px] em:px-[30px] sm:px-[40px] rounded-[10px] hidden'>
                                      <div className='text-center sm:text-left mx-auto hidden'>
                                          <h5 className='text-[22px] em:text-[28px] md:text-[32px] lg:text-[50px] font-bold text-[#FFFFFF] leading-[45px] md:leading-[48px] lg:leading-[60px] uppercase max-w-[100%] sm:max-w-[80%]  mx-auto text-center'>{hoverCards_7.title}</h5>
                                      </div>
                                  </li>
                                  <li className='bg-[#9370E4] py-[30px] em:py-[50px] sm:py-[70px] px-[15px] em:px-[30px] sm:px-[40px] rounded-[10px]  items-center block'>
                                      <div className='text-center sm:text-left mx-auto '>
                                          <p className='text-[16px] em:text-[20px] leading-[28px] em:leading-[32px] sm:leading-[35px] lg:leading-[40px]  font-medium text-[#fff] max-w-[100%] em:max-w-[95%] capitalize mx-auto text-center xl:text-left'>{hoverCards_7.hover_text}</p>
                                      </div>
                                  </li>
                                    </div>
                                  </div>
                                  
                               </div>
                               
                               {/* COMPUTER-VISION  */}
                               <div className=' w-[100%] xl:w-[55%] mt-[30px] xl:mt-[0]'>
                                  <div className={`card hidden sm:block`} >
                                    <div className={`report-inner h-[350px] lg:h-[400px] ${computer ? 'flipped' : ''}`}>
                                       <div style={{ backgroundImage: `url(${hoverCards_9.card_bg})` }} className='bg-[#472BE3]  py-[30px] em:py-[50px] sm:py-[70px] px-[15px] em:px-[30px] sm:px-[50px]  rounded-[10px] h-[368px] card-front bg-hidden  bg-no-repeat bg-salesRespo xl:bg-sales bg-chatbot'>
                                        <div className='text-center mx-auto'>
                                          <h3 className='text-[22px] em:text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[54px] font-bold leading-[40px] em:leading-[45px] sm:leading-[60px] lg:leading-[70px] text-[#FFFFFF] uppercase'>{hoverCards_9.title}</h3>
                                        </div>
                                       </div>
                                        <div className='bg-[#472BE3]  py-[30px] em:py-[50px] sm:py-[70px] px-[15px] em:px-[30px] sm:px-[50px]  rounded-[10px] h-[368px] card-back'>
                                        <div className='text-center mx-auto'>
                                        <p className='text-[16px] em:text-[18px] sm:text-[26px] lg:text-[34px] leading-[28px] em:leading-[32px] sm:leading-[35px] lg:leading-[40px]  font-medium text-[#fff] max-w-[90%] capitalize mx-auto text-center xl:text-left'>{hoverCards_9.hover_text}</p>
                                        </div>
                                        </div>
                                    </div>
                                     
                                  </div>
                                  <div className={` block sm:hidden`}>
                                    <div className={`report-inner h-auto`}>
                                       <div className='bg-[#472BE3]  py-[30px] em:py-[50px] sm:py-[70px] px-[15px] em:px-[30px] sm:px-[50px]  rounded-[10px] hidden '>
                                        <div className='text-center mx-auto'>
                                          <h3 className='text-[22px] em:text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[54px] font-bold leading-[40px] em:leading-[45px] sm:leading-[60px] lg:leading-[70px] text-[#FFFFFF] uppercase'>{hoverCards_9.title}</h3>
                                        </div>
                                       </div>
                                        <div className='bg-[#472BE3]  py-[30px] em:py-[50px] sm:py-[70px] px-[15px] em:px-[30px] sm:px-[50px]  rounded-[10px]  '>
                                        <div className='text-center mx-auto'>
                                        <p className='text-[16px] em:text-[18px] sm:text-[20px] lg:text-[34px] leading-[28px] em:leading-[32px] sm:leading-[35px] lg:leading-[40px]  font-medium text-[#fff] max-w-[95%] capitalize mx-auto text-center xl:text-left'>{hoverCards_9.hover_text}</p>
                                        </div>
                                        </div>
                                    </div>
                                     
                                  </div>
                               </div>
                                
                             {/* COMPUTER-VISION  */}
                            </ul>
                          </div>

                          <div className='mt-[35px]'>
                            <ul className='block xl:flex justify-between  font-DM '>
                              {/* SIMPLE  */}
                                  <div className=' w-[100%] xl:w-[62%]'>
                                  <div className={`card hidden sm:block`} >
                                    <div className={`simple-inner h-[380px] ${simpleFlipped ? 'flipped' : ''}`}>
                                    <li className='bg-[#F9CFE6] py-[30px] em:py-[30px] px-[15px] em:px-[30px] sm:px-[40px] rounded-[10px] flex items-center group-hover:hidden  card-front'>
                                    <div className='text-center sm:text-left'>
                                        <h5 className='text-[23px] em:text-[28px] sm:text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-bold text-[#FFFFFF] leading-[38px] em:leading-[45px] sm:leading-[60px] md:leading-[80px] xl:leading-[98px] uppercase max-w-[100%] md:max-w-[90%] mx-auto text-center'>{hoverCards_10.title}</h5>
                                    </div>
                                </li>
                                <li className='bg-[#F9CFE6] py-[30px] em:py-[45px] px-[15px] em:px-[30px] sm:px-[40px] rounded-[10px]  hidden items-center group-hover:flex  card-back'>
                                    <div className='text-center sm:text-left'>
                                      <p className='text-[16px] em:text-[18px] sm:text-[26px] lg:text-[34px] leading-[28px] em:leading-[32px] sm:leading-[35px] lg:leading-[40px]  font-medium text-[#fff] max-w-[99%] capitalize mx-auto text-center xl:text-left'>{hoverCards_10.hover_text}</p> 
                                    </div>
                                </li>
                                    </div>
                                  </div>

                                  <div className={`block sm:hidden`} >
                                    <div className={``}>
                                    <li className='bg-[#F9CFE6] py-[30px] em:py-[30px] px-[15px] em:px-[30px] sm:px-[40px] rounded-[10px] hidden'>
                                    <div className='text-center sm:text-left'>
                                        <h5 className='text-[23px] em:text-[28px] sm:text-[45px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-bold text-[#FFFFFF] leading-[38px] em:leading-[45px] sm:leading-[60px] md:leading-[80px] xl:leading-[98px] uppercase max-w-[100%] md:max-w-[90%] mx-auto text-center'>{hoverCards_10.title}</h5>
                                    </div>
                                </li>
                                <li className='bg-[#F9CFE6] py-[30px] em:py-[45px] px-[15px] em:px-[30px] sm:px-[40px] rounded-[10px]  block items-center '>
                                    <div className='text-center sm:text-left'>
                                      <p className='text-[16px] em:text-[18px] sm:text-[20px] lg:text-[34px] leading-[28px] em:leading-[32px] sm:leading-[35px] lg:leading-[40px] font-medium text-[#fff] max-w-[100%] em:max-w-[95%] capitalize mx-auto text-center xl:text-left'>{hoverCards_10.hover_text}</p> 
                                    </div>
                                </li>
                                    </div>
                                  </div>
                                
                                  </div>
                              {/* SIMPLE  */}
                                
                            <li style={{ backgroundImage: `url(${hoverCards_11.card_bg})` }} className='bg-[#9370E4] h-[220px] em:h-[300px] sm:h-[400px] xl:h-auto  rounded-[10px]  w-[100%] xl:w-[35%] mt-[35px] xl:mt-[0] bg-[url("/assets/images/cartoon-bg.png")] bg-no-repeat  bg-eyes bg-cartoonSubRespo em:bg-cartoonRespo sm:bg-cartoon'>
                               
                            </li>
                            </ul>
                          </div>
                  </div>
                   
             </div>
         </div>
        </div>
    </div>
        </div>
    );
};

export default HoverCard;
