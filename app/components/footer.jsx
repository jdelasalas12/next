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
} from "../assets";

const Footer = () => {
  return (
    <>
      <div className="bg-[#161C28] h-auto w-full max-w-[82rem]  px-[2.5rem] py-[2.5rem] flex ">
        <div className="w-1/2 w-auto h-auto px-[1.5rem] py-[1.5rem]">
          <h1>People are Saying About DoWhith</h1>
          <p>
            Everything you need to accept to payment and grow your money of
            manage anywhere on planet
          </p>
          <Image src={group212} alt="" />
          <p>
            I am very helped by this E-wallet application , my days are very
            easy to use this application and its very helpful in my life , even
            I can pay a short time 😍
          </p>
          <p>_ Aria Zinanrio</p>
          <div className="flex gap-[20]">
            <Image src={elipse54} alt="" />
            <Image src={elipse55} alt="" />
            <Image src={elipse56} alt="" />
            <Image src={elipse57} alt="" />
            <Image src={group215} alt="" />
          </div>
        </div>
        <div className="w-1/2 w-auto h-auto">
          <div className="w-[612] h-[588] bg-[#A6A6A6] rounded-[20]  gap-[10] ">
            <form className="w-auto h-auto ">
              <Image className="" src={vector2} alt="" />
              <h2 className="">Get Started</h2>

              <label className="" htmlFor="">
                Email
              </label>

              <input
                className="text-xs text-[#A9A7B6] bg-[#FFFFFF] leading-[1.8] w-[440] h-[50] rounded-[10] "
                type=""
                defaultValue=""
                placeholder="Enter your email"
              />
              <label htmlFor="">Message</label>
              <input
                className="font-medium text-base  bg-[#FFFFFF] w-[440] h-[122]"
                type=""
                defaultValue=""
                placeholder="Message"
              />
              <a
                className=" text-xs text-[#FFFFFF] bg-[#54BD95]  px-[20px] py-[8px] rounded-xl cursor-pointer"
                href=""
              >
                Request Demo
              </a>
              <p>or start free trial</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
