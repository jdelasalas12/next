import React from "react";
import Image from "next/image";

import {
  group212,
  elipse54,
  elipse55,
  elipse56,
  elipse57,
  group215,
  vector2,
  arrowright,
} from "../assets";

const Footer = () => {
  return (
    <>
      <div className="bg-[#161C28] h-auto w-full max-w-[82rem] m-auto px-[2.5rem] py-[2.5rem] gap-[2.5rem] flex max-lg:flex-col max-lg:items-center  max-sm:py-[0] max-sm:px-[0]">
        <div className="w-1/2 w-auto h-auto px-[1.5rem] py-[1.5rem]  max-sm:py-[0] max-sm:px-[0] ">
          <div className="w-[500] h-[588] px-[1rem] py-[1rem]  max-sm:w-[auto] max-sm:h-[auto] max-sm:py-[auto] max-sm:px-[auto]">
            <h1 className="text-[50px] font-bold text-[#FFFFFF] max-md:text-3xl">
              People are Saying About DoWhith
            </h1>
            <p className="text-lg font-medium text-[#A6A6A6] leading-[2] mb-[2rem] max-sm:text-sm">
              Everything you need to accept to payment and grow your money of
              manage anywhere on planet
            </p>
            <Image src={group212} alt="" />
            <p className="text-lg font-medium text-[#A6A6A6] leading-[2] mb-[2rem] mt-[2rem] max-sm:text-sm">
              I am very helped by this E-wallet application , my days are very
              easy to use this application and its very helpful in my life ,
              even I can pay a short time 😍
            </p>
            <p className="text-lg font-medium text-[#A6A6A6] mb-[2rem] max-sm:text-sm">
              _ Aria Zinanrio
            </p>
            <div className="flex gap-[20] ">
              <Image className="" src={elipse54} alt="" />
              <Image src={elipse55} alt="" />
              <Image src={elipse56} alt="" />
              <Image src={elipse57} alt="" />
              <Image src={group215} alt="" />
            </div>
          </div>
        </div>
        <div className="w-1/2 w-auto h-auto px-[1.5rem] py-[1.5rem] max-sm:py-[auto] max-sm:px-[auto] max-sm:w-full">
          <div className="w-[612] h-[588] bg-[#222938] rounded-[20]  gap-[10] px-[1rem] py-[1rem] max-sm:w-[auto] max-sm:h-[auto] max-sm:py-[auto] max-sm:px-[auto] ">
            <Image className="m-auto mb-[20]" src={vector2} alt="" />
            <h2 className="text-center text-3xl text-[#FFFFFF] font-medium max-sm:text-sm">
              Get Started
            </h2>
            <form className="w-[440] h-[340] flex flex-col px-[1rem] py-[1rem] gap-[15] m-auto max-sm:w-[auto] max-sm:h-[auto]">
              <label
                className="text-left text-lg font-medium text-[#FFFFFF]"
                htmlFor=""
              >
                Email
              </label>

              <input
                className="text-sm text-[#A9A7B6] bg-[#FFFFFF] leading-[1.8] w-[440] h-[50] rounded-[10] px-[1rem] max-sm:w-[auto] max-sm:h-[auto]  "
                type="text"
                defaultValue=""
                placeholder="Enter your email"
              />
              <label
                className="text-left text-lg font-medium text-[#FFFFFF]"
                htmlFor=""
              >
                Message
              </label>

              <textarea
                className="font-medium text-sm bg-[#FFFFFF] text-[#A6A6A6] w-[440] h-[122] rounded-[10] align-text-top px-[1rem] py-[1rem] max-sm:w-[auto] max-sm:h-[auto] "
                type="text"
                defaultValue=""
                placeholder="What are you say"
              />

              <a
                className=" w-[440] h-[60] text-xs text-[#FFFFFF] bg-[#54BD95]  px-[20] py-[20] rounded-xl cursor-pointer text-center max-sm:w-[auto] max-sm:h-[auto]"
                href=""
              >
                Request Demo
              </a>
              <p className="text-xs text-[#FFFFFF] font-medium text-end">
                <span className="text-sm font-medium text-[#A6A6A6] mr-[0.5em]">
                  or
                </span>
                start free trial
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="h-[180] w-[410] max-w-[82rem]  px-[1.5rem] py-[1.5rem] bg-[#161C28]">
        <a
          className="w-[160] h-[30] font-semibold text-3xl text-[#52bd94] "
          href=""
        >
          Biccas
        </a>
        <p>Get started now try our product</p>
        <div className="relative w-[350] h-[60] text-xs text-[#A9A7B6] leading-[1.8] rounded-full border-[#A6A6A6]">
          <input
            className="relative w-[350] h-[60] text-xs text-[#A9A7B6] px-[1rem] py-[1rem] leading-[1.8] rounded-full border-[#A6A6A6] border-1 border-solid"
            type="text"
            defaultValue=""
            placeholder="Enter your email here"
          />
          <span className="absolute right-[10] top-[10] px-[10] py-[10] rounded-full bg-[#54BD95]">
            <a href="">
              <Image src={arrowright} alt="" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
