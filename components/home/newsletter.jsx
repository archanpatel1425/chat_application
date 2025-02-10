import React, { useState } from "react";
import Image from "next/image";

const Newsletter = ({ block, dataBinding }) => {
  const [isError, setError] = useState(false);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);
  let email;

  const { title, description, form } = block;

  const submit = (e) => {
    e.preventDefault();
    if (email && email.value.includes("@")) {
      setError(false);
      setStatus("success");
      setMessage("Subscription successful!");
      console.log("Subscribed with email:", email.value);
    } else {
      setError(true);
      setStatus("error");
      setMessage("Email is invalid");
    }
  };

  return (
    <div className="my-[50px] em:my-[80px] md:my-[150px]">
      <div className="max-w-[90%] xl:max-w-[1280px] mx-auto px-0 em:px-4">
        <div className="max-w-[1223px] mx-auto px-1 md:px-5">
          <div className="px-[30px] md:px-[67px] py-[30px] md:py-[47px] bg-[#9370E4] rounded-[10px] block lg:flex items-center justify-between font-NeueMontreal">
            <div className="w-[100%] lg:w-[60%] text-center em:text-left">
              <h5 className="text-[22px] em:text-[26px] md:text-[30px] xl:text-[34px] leading-[26px] em:leading-[32px] md:leading-[40px] font-bold tracking-[0.03em] text-[#FFFFFF]">
                {title}
              </h5>
              <p className="text-[16px] md:text-[18px] font-normal mt-[10px] md:mt-[5px] leading-[22px] xl:leading-[30px] text-[#FFFFFF]">
                {description}
              </p>
            </div>

            <div className="mx-auto block md:flex text-center justify-center mt-[30px] lg:mt-0">
              <form onSubmit={submit} className="block sm:flex">
                <input
                  className={`mr-[25px] bg-[transparent] block p-[10px] md:p-[15px] w-full text-[15px] md:text-[20px] text-gray-900 rounded-[10px] border-2 ${
                    isError ? "border-[red] border-opacity-50" : "border-[#FFFFFF]"
                  } focus:border-white bg-transparent  placeholder-text-[20px] text-[#FFFFFF] dark:text-white placeholder-[#FFFFFF]`}
                  ref={(node) => (email = node)}
                  type="email"
                  placeholder="Enter a mail"
                />
                <button
                  className="flex items-center text-[16px] md:text-[18px] text-black bg-[#FFFFFF] rounded-[10px] mt-[20px] sm:mt-0 mx-auto md:mx-0 hover:shadow-contact"
                  type="submit"
                >
                  <span className="flex items-center py-[10px] sm:py-[15px] pr-[30px] md:pr-[50px] pl-[30px] md:pl-[40px] transition duration-300 ease-in-out bg-white bg-repeat font-normal leading-none text-[#9370E4]">
                    Subscribe{" "}
                    <Image
                      src="/assets/images/contact-arrow-right.svg"
                      width={27}
                      height={27}
                      alt=""
                      className="mx-auto h-[27px] ml-[10px]"
                    />
                  </span>
                </button>
              </form>

              {status && (
                <div className="newsError mt-2">
                  {status === "error" && <div style={{ color: "red" }}>{message}</div>}
                  {status === "success" && <div style={{ color: "green" }}>{message}</div>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;