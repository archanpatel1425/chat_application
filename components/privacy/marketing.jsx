
const Marketing = ({ block, dataBinding }) => {
  const {
    title,
    qusetion1,
    description1,
    qusetion2,
    description2,
    description3,
    qusetion3,
    description4,
    qusetion4,
    description5,
    description6
  } = block;
  return (
    <div>
      <div className='max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4'>
        <div className='mt-[50px] md:mt-[100px]' data-cms-bind={dataBinding}>
          <h5 className='text-[26px] md:text-[34px] leading-[30px] text-[#3D405B] font-DM font-bold pt-[20px] pb-[20px] md:pb-[40px]'>8. {title}</h5>

          <div>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion1}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description1}</p>
          </div>

          <div className='pt-[20px]'>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion2}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description2}</p>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description3}</p>
          </div>

          {/* table  */}

          <div className='my-[50px] md:my-[120px]'>
            <table className='w-full '>
              <tbody className='bg-[#F0F6FF] border border-[#D6D6D6] text-[#3D405B] font-DM text-[16px] em:text-[20px] md:text-[28px] lg:text-[34px] leading-[25px] em:leading-[30px] md:leading-[38px] lg:leading-[44px] font-normal'>
                <tr className='border border-[#D6D6D6]'>
                  <td className='py-[25px] px-[25px] border-r-[1px] border-[#D6D6D6]'>First and Last Name</td>
                  <td className='py-[25px] px-[30px]'>Your first and last name will be used to address you in a more personal way.</td>
                </tr>
                <tr className='border border-[#D6D6D6]'>
                  <td className='py-[25px] px-[25px] border-r-[1px] border-[#D6D6D6]'>Email Address</td>
                  <td className='py-[25px] px-[30px]'>To deliver tailored emails and ads that could relate to the company or institution you are associated with.</td>
                </tr>
                <tr className='border border-[#D6D6D6]'>
                  <td className='py-[25px] px-[25px] border-r-[1px] border-[#D6D6D6]'>Timezone</td>
                  <td className='py-[25px] px-[30px]'>This allows us to send you emails when it makes sense for you: during working hours and not in the middle of the night.</td>
                </tr>
                <tr className='border border-[#D6D6D6]'>
                  <td className='py-[25px] px-[25px] border-r-[1px] border-[#D6D6D6]'>Phone Number</td>
                  <td className='py-[25px] px-[30px]'>If you provide your phone number we might call or text you promotions or product updates.</td>
                </tr>
                <tr className='border border-[#D6D6D6]'>
                  <td className='py-[25px] px-[25px] border-r-[1px] border-[#D6D6D6]'>Mobile Device ID</td>
                  <td className='py-[25px] px-[30px] border-r-[1px] border-[#D6D6D6]'>To be able to send push marketing notifications to your mobile device.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className=''>
            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description4}</p>
          </div>

          {/* table  */}

          <div className='my-[50px] md:my-[120px]'>
            <table className='w-[100%] lg:w-[90%] mx-auto'>

              <thead className=' bg-[#F0F6FF] font-DM  text-[16px] em:text-[20px] md:text-[28px] lg:text-[34px] leading-[25px] em:leading-[30px] md:leading-[38px] lg:leading-[44px] text-[#3D405B] font-bold border border-[#D6D6D6]'>
                <tr className=''>
                  <th className='py-[20px] md:py-[30px] px-[5px] em:px-[10px] sm:px-[40px] md:px-[50px] border-r-[1px] border-[#D6D6D6]'>
                    Used Personal Data
                  </th>
                  <th className='py-[20px] md:py-[30px] px-[5px] em:px-[10px] sm:px-[40px] md:px-[50px]'>
                    What We Do We Use This For?
                  </th>
                </tr>
              </thead>
              <tbody className='bg-[#F0F6FF] border border-[#D6D6D6] text-[#3D405B] font-DM text-[14px] sm:text-[18px] md:text-[22px] lg:text-[24px] leading-[25px] lg:leading-[31px] font-bold'>

                <tr className='border border-[#D6D6D6]'>
                  <td className='em:py-[20px] md:py-[30px] px-[20px] em:px-[40px] sm:px-[60px] md:px-[75px] border-r-[1px] border-[#D6D6D6]'>Google Ads</td>
                  <td className='py-[20px] md:py-[30px] px-[20px] em:px-[40px] sm:px-[75px] md:px-[90px] border-r-[1px] border-[#D6D6D6] text-[#472BE3]'><a href="https://policies.google.com/technologies/partner-sites">Privacy Policy Google Ads</a></td>
                </tr>
                <tr className='border border-[#D6D6D6]'>
                  <td className='py-[20px] md:py-[30px] px-[20px] em:px-[40px] sm:px-[60px] md:px-[75px] border-r-[1px] border-[#D6D6D6]'>Outbrain Ads</td>
                  <td className='py-[20px] md:py-[30px] px-[20px] em:px-[40px] sm:px-[75px] md:px-[90px] border-r-[1px] border-[#D6D6D6] text-[#472BE3]'><a href="https://www.outbrain.com/legal/#privacy-policy">Privacy Policy Outbrain</a></td>
                </tr>
                <tr className='border border-[#D6D6D6]'>
                  <td className='py-[20px] md:py-[30px] px-[20px] em:px-[40px] sm:px-[60px] md:px-[75px] border-r-[1px] border-[#D6D6D6]'>Quora Ads</td>
                  <td className='py-[20px] md:py-[30px] px-[20px] em:px-[40px] sm:px-[75px] md:px-[90px] border-r-[1px] border-[#D6D6D6] text-[#472BE3]'><a href="https://www.quora.com/about/pixel_privacy">Privacy Policy Quora Pixel</a></td>
                </tr>
                <tr className='border border-[#D6D6D6]'>
                  <td className='py-[20px] md:py-[30px] px-[20px] em:px-[40px] sm:px-[60px] md:px-[75px] border-r-[1px] border-[#D6D6D6]'>Bing Ads</td>
                  <td className='py-[20px] md:py-[30px] px-[20px] em:px-[40px] sm:px-[75px] md:px-[90px] border-r-[1px] border-[#D6D6D6] text-[#472BE3]'><a href="https://privacy.microsoft.com/en-us/PrivacyStatement">Privacy Policy Bing Ads</a></td>
                </tr>
                <tr className='border border-[#D6D6D6]'>
                  <td className='py-[20px] md:py-[30px] px-[20px] em:px-[40px] sm:px-[60px] md:px-[75px] border-r-[1px] border-[#D6D6D6]'>Facebook Ads</td>
                  <td className='py-[20px] md:py-[30px] px-[20px] em:px-[40px] sm:px-[75px] md:px-[90px] border-r-[1px] border-[#D6D6D6] text-[#472BE3]'><a href="https://www.facebook.com/about/privacy/update">Privacy Policy Facebook</a></td>
                </tr>
                <tr className='border border-[#D6D6D6]'>
                  <td className='py-[20px] md:py-[30px] px-[20px] em:px-[40px] sm:px-[60px] md:px-[75px] border-r-[1px] border-[#D6D6D6]'>LinkedIn Ads</td>
                  <td className='py-[20px] md:py-[30px] px-[20px] em:px-[40px] sm:px-[75px] md:px-[90px] border-r-[1px] border-[#D6D6D6] text-[#472BE3]'><a href="https://www.linkedin.com/legal/privacy-policy">Privacy Policy LinkedIn</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className=''>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion3}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description5}</p>
          </div>

          <div className='pt-[20px]'>
            <h6 className='font-DM font-bold text-[18px] md:text-[20px] text-[#3D405B]'>{qusetion4}</h6>

            <p className='font-DM  text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[25px] md:leading-[30px] text-[#3D405B] pt-[20px]'>{description6}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Marketing;
