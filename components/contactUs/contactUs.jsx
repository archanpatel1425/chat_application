import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { useState } from "react";

const ContactUsPageSection = ({ block, dataBinding }) => {
    const [getData, setGetData] = useState();
    const [errors, setErrors] = useState([]);
    const [contactVal, setContactVal] = useState({
        firstName: "",
        email: "",
        message: "",
        phone_number: "",
        lastName: "",
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        // const [isValid, err] = validate(contactVal, ["message"]);

        if (
            contactVal.email == "" &&
            contactVal.firstName == "" &&
            contactVal.lastName == "" &&
            contactVal.message == "" &&
            contactVal.reason_for_enquiry == "" &&
            contactVal.phone_number == ""
        ) {
            setErrors(err);
            return false;
        }
        try {

            if (
                data.firstName == "" ||
                data.lastName == "" ||
                data.email == "" ||
                data.message == "" ||
                data.reason_for_enquiry == "" ||
                data.phone_number == ""
            ) {
                setErrors(err);
                return false;
            }
            setGetData(data);
        } catch (error) {
            
        }
        setContactVal({
            firstName: "",
            email: "",
            message: "",
            phone_number: "",
            lastName: "",
        });
    };
    const {
        title,
        description,
        insta_image,
        insta_url,
        linkedin_image,
        linkedin_url,
        submit_btn,
    } = block;

    const isSubmitted = getData && !!getData;

    return (
        <div className="max-w-[90%] xl:max-w-[1280px] mx-auto my-0 px-0 em:px-4" data-cms-bind={dataBinding}>
            <div className="block lg:flex mt-[150px] md:mt-[200px] mb-[70px] md:mb-[150px] shadow-2xl max-w-[100%] sm:max-w-[96%] mx-auto">
                <div className="w-[100%] lg:w-[35%] h-auto">
                    <div className="bg-[#9370E4] bg-center bg-no-repeat bg-cover px-[100px] xl:px-[150px]  font-Inter  h-full flex justify-center items-center py-[100px] sm:py-[150px] lg:py-[0]">
                        <div>
                            <ul className="flex [&>li]:px-[12px]">
                                <li>
                                    <Link href={linkedin_url} target='blank'>
                                        <Image
                                            src={linkedin_image}
                                            width={53}
                                            height={53}
                                            alt={""}
                                            className="max-w-[40px] sm:max-w-[53px]"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={insta_url} target="blank">
                                        <Image
                                            src={insta_image}
                                            width={53}
                                            height={53}
                                            alt={""}
                                            className="max-w-[40px] sm:max-w-[53px]"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-[100%] lg:w-[65%] py-[50px] pl-[20px] em:pl-[30px] sm:pl-[45px] pr-[20px] em:pr-[30px] sm:pr-[60px]">
                    <div className="font-DM">
                        <div>
                            <h4 className="text-[#1F2937] text-[24px] sm:text-[28px] md:text-[34px]  leading-[25px] md:leading-[30px] font-medium">
                                {title}
                            </h4>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#3D405B] py-[10px] sm:py-[20px]">
                                {description}
                            </p>
                            <div className="mt-[25px]">
                                <form onSubmit={handleSubmit}>
                                    <ul>
                                        <li className="mb-[20px]">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
                                                <div>
                                                    <div>
                                                        <input
                                                            className={clsx(
                                                                "bg-[transparent] rounded-[3px] border-[1px] border-[#D7C6FF] focus:border-[#9370E4] focus:outline-[#9370E4] py-[15px] sm:py-[25px] px-[50px] text-[16px] font-[400] text-[6D6D6D] w-[100%] focus:bg-[url('/assets/images/last-name-icon-fill.png')] bg-[url('/assets/images/last-name-icon.png')]  focus:bg-left-[20px]  bg-left-[20px] bg-no-repeat focus:bg-[20px]  bg-[20px] placeholder-[#D7C6FF] placeholder:text-[16px] md:placeholder:text-[18px]",
                                                                {
                                                                    "border-[red]":
                                                                        errors.includes("firstName"),
                                                                }
                                                            )}
                                                            onChange={(e) =>
                                                                setContactVal({
                                                                    ...contactVal,
                                                                    firstName: e.target.value,
                                                                })
                                                            }
                                                            value={contactVal.firstName}
                                                            label="first_name"
                                                            name="firstName"
                                                            type="text"
                                                            placeholder="First Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <input
                                                            className={clsx(
                                                                "bg-[transparent] rounded-[3px] border-[1px] border-[#D7C6FF] focus:border-[#9370E4] focus:outline-[#9370E4] py-[15px] sm:py-[25px] px-[50px] text-[16px] font-[400] text-[6D6D6D] w-[100%] focus:bg-[url('/assets/images/last-name-icon-fill.png')] bg-[url('/assets/images/last-name-icon.png')]  bg-left-[20px] bg-no-repeat bg-[20px] placeholder-[#D7C6FF] placeholder:text-[16px] md:placeholder:text-[18px]",
                                                                {
                                                                    "border-[red]": errors.includes("lastName"),
                                                                }
                                                            )}
                                                            onChange={(e) =>
                                                                setContactVal({
                                                                    ...contactVal,
                                                                    lastName: e.target.value,
                                                                })
                                                            }
                                                            value={contactVal.lastName}
                                                            label="last_name"
                                                            name="lastName"
                                                            type="text"
                                                            placeholder="Last Name"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mb-[20px]">
                                            <div>
                                                <input
                                                    className={clsx(
                                                        "bg-[transparent] rounded-[3px] border-[1px] border-[#D7C6FF] focus:border-[#9370E4] focus:outline-[#9370E4] py-[15px] sm:py-[25px]  px-[50px] text-[16px] font-[400] text-[6D6D6D] w-[100%] focus:bg-[url('/assets/images/mail-input-fill.png')] bg-[url('/assets/images/mail-input.png')]  bg-left-[20px] bg-no-repeat bg-[20px] placeholder-[#D7C6FF] placeholder:text-[16px] md:placeholder:text-[18px]",
                                                        {
                                                            "border-[red]": errors.includes("email"),
                                                        }
                                                    )}
                                                    label="email"
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    value={contactVal?.email}
                                                    onChange={(e) =>
                                                        setContactVal({
                                                            ...contactVal,
                                                            email: e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                        </li>
                                        <li className="mb-[20px]">
                                            <div>
                                                <input
                                                    placeholder="Phone"
                                                    id="phone_number"
                                                    label="phone_number"
                                                    name="phone_number"
                                                    className={clsx(
                                                        "bg-[transparent] rounded-[3px] border-[1px] border-[#D7C6FF] focus:border-[#9370E4] focus:outline-[#9370E4] py-[15px] sm:py-[25px]  px-[50px] text-[16px] font-[400] text-[6D6D6D] w-[100%] focus:bg-[url('/assets/images/phone-input-fill.png')] bg-[url('/assets/images/phone-input.png')]  bg-left-[20px] bg-no-repeat focus:bg-[15px] bg-[20px] placeholder-[#D7C6FF] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:text-[16px] md:placeholder:text-[18px]",
                                                        {
                                                            "border-red-500":
                                                                errors.includes("phone_number"),
                                                        }
                                                    )}
                                                    value={contactVal?.phone_number}
                                                    onChange={(e) =>
                                                        setContactVal({
                                                            ...contactVal,
                                                            phone_number: e.target.value,
                                                        })
                                                    }
                                                    type="number"
                                                />
                                            </div>
                                        </li>
                                        <li>
                                            <textarea
                                                className={clsx(
                                                    "block py-[20px] px-[20px] w-full text-sm text-[#D7C6FF]  focus:border-[#9370E4] focus:outline-[#9370E4] bg-[transparent] rounded-[5px] border-[1px] border-[#D7C6FF]  resize-none placeholder-[#D7C6FF] focus:text-[#9370E4] mb-[20px] placeholder:text-[16px] md:placeholder:text-[18px]",
                                                    {
                                                        "border-[red]":
                                                            errors.includes(""),
                                                    }
                                                )}
                                                value={contactVal?.reason_for_enquiry}
                                                onChange={(e) =>
                                                    setContactVal({
                                                        ...contactVal,
                                                        reason_for_enquiry: e.target.value,
                                                    })
                                                }
                                                label="reason_for_enquiry"
                                                name="reason_for_enquiry"
                                                placeholder="Reason For Enquiry"
                                                rows="2"
                                                id="reason_for_enquiry"
                                            />
                                        </li>
                                        <li>
                                            <textarea
                                                className={clsx(
                                                    "block py-[20px] px-[20px] w-full text-sm text-[#D7C6FF]  focus:border-[#9370E4] focus:outline-[#9370E4] bg-[transparent] rounded-[5px] border-[1px] border-[#D7C6FF]  resize-none placeholder-[#D7C6FF] focus:text-[#9370E4] placeholder:text-[16px] md:placeholder:text-[18px]",
                                                    {
                                                        "border-[red]": errors.includes("message"),
                                                    }
                                                )}
                                                value={contactVal?.message}
                                                onChange={(e) =>
                                                    setContactVal({
                                                        ...contactVal,
                                                        message: e.target.value,
                                                    })
                                                }
                                                label="message"
                                                name="message"
                                                placeholder="Enter Your Message"
                                                rows="5"
                                                id="message"
                                            />
                                        </li>
                                        <div className="">
                                            {!isSubmitted && (
                                                <button
                                                    type="submit"
                                                    className="font-DM font-normal text-[16px] sm:text-[18px] leading-[22px]  text-[#F1F1F1] bg-[#9370E4] hover:shadow-btn  px-[15px] sm:px-[20px] py-[15px] sm:py-[20px] mt-[40px] md:mt-[30px] transition delay-100 duration-200 ease-in  w-[100%] rounded-[3px]"
                                                >
                                                    {submit_btn}
                                                </button>
                                            )}
                                            {isSubmitted && (
                                                <button className="font-DM font-normal text-[16px] sm:text-[18px] leading-[22px]  text-[#F1F1F1] bg-[green] hover:shadow-btn  px-[15px] sm:px-[20px] py-[15px] sm:py-[20px] mt-[40px] md:mt-[30px] transition delay-100 duration-200 ease-in  w-[100%] rounded-[3px]">
                                                    Thank you
                                                </button>
                                            )}
                                        </div>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPageSection;
