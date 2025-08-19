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
  ellipse61,
} from "../assets";

const Footer = () => {
  return (
    <>
      <div className="bg-[#161C28] h-auto w-full max-w-[82rem] m-auto px-[2.5rem] py-[2.5rem] gap-[2.5rem] flex  max-lg:flex-col max-lg:items-center  max-sm:py-[0] max-sm:px-[0]">
        <div className="w-auto h-auto  px-[1.5rem] py-[1.5rem]  max-sm:py-[0] max-sm:px-[0] ">
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
            <div className="flex gap-[20] flex-wrap ">
              <Image className="" src={elipse54} alt="" />
              <Image src={elipse55} alt="" />
              <Image src={elipse56} alt="" />
              <Image src={elipse57} alt="" />
              <Image src={group215} alt="" />
            </div>
          </div>
        </div>
        <div className="w-auto h-auto px-[1.5rem] py-[1.5rem] max-sm:py-[auto] max-sm:px-[auto] max-sm:w-full">
          <div className="w-auto h-[588] bg-[#222938] rounded-[20]  gap-[10] px-[2rem] py-[1rem] max-sm:w-[auto] max-sm:h-[auto] max-sm:py-[auto] max-sm:px-[auto] ">
            <Image className="m-auto mt-[20] mb-[20]" src={vector2} alt="" />
            <h2 className="text-center text-3xl text-[#FFFFFF] font-medium max-sm:text-sm">
              Get Started
            </h2>
            <form className="w-[auto] h-[340] flex flex-col px-[1rem] py-[1rem] gap-[15] m-auto max-sm:w-[auto] max-sm:h-[auto]">
              <label
                className="text-left text-lg font-medium text-[#FFFFFF]"
                htmlFor=""
              >
                Email
              </label>

              <input
                className="text-sm text-[#A9A7B6] bg-[#FFFFFF] leading-[1.8] w-[440] h-[50] rounded-[10] px-[1rem] max-xl:w-[auto] max-xl:h-[auto] max-sm:w-[auto] max-sm:h-[auto]  "
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
                className="font-medium text-sm bg-[#FFFFFF] text-[#A6A6A6] w-[440] h-[122] rounded-[10] align-text-top px-[1rem] py-[1rem]  max-xl:w-[auto] max-xl:h-[auto] max-sm:w-[auto] max-sm:h-[auto] "
                type="text"
                defaultValue=""
                placeholder="What are you say"
              />

              <a
                className=" w-[440] h-[60] text-xs text-[#FFFFFF] bg-[#54BD95]  px-[20] py-[20] rounded-xl cursor-pointer text-center max-xl:w-[auto] max-xl:h-[auto] max-sm:w-[auto] max-sm:h-[auto]"
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
      <div className="h-[auto] w-full max-w-[82rem] m-auto py-[3rem] px-[1rem] bg-[#161C28]">
        <div className="w-full h-auto flex gap-[20] justify-between max-lg:flex-col">
          <div className="w-[600] py-[2rem] px-[2rem] flex flex-col gap-[20] max-lg:w-[1/2] ">
            <a
              className="w-[160] h-[30] font-semibold text-3xl text-[#52bd94] "
              href=""
            >
              Biccas
            </a>
            <p className="text-[#A6A6A6] text-lg font-medium">
              Get started now try our product
            </p>
            <div className="relative w-[350] h-[60]text-xs text-[#A9A7B6] border-1 leading-[1.8] rounded-full border-[#A6A6A6] max-sm:w-[300] ">
              <input
                className="relative w-[350] h-[60] text-xs text-[#A9A7B6] px-[1rem] py-[1rem] leading-[1.8] rounded-full border-[#A6A6A6] border-1 border-solid max-sm:w-[300] text-[#A6A6A6] text-lg font-medium"
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
          <div className="w-full flex justify-around gap-[30] py-[2rem] px-[2.5rem]  max-sm:flex-wrap max-sm:justify-start">
            <ul className="leading-[2.5rem]">
              <li>
                <a
                  className="text-[#FFFFFF] text-lg font-medium max-sm:text-sm"
                  href=""
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  className="text-[#A6A6A6] font-medium text-lg max-sm:text-sm"
                  href=""
                >
                  Help centre
                </a>
              </li>
              <li>
                <a
                  className="text-[#A6A6A6] font-medium text-lg max-sm:text-sm"
                  href=""
                >
                  Account information
                </a>
              </li>
              <li>
                <a
                  className="text-[#A6A6A6] font-medium text-lg max-sm:text-sm"
                  href=""
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-[#A6A6A6] font-medium text-lg max-sm:text-sm"
                  href=""
                >
                  Contact us
                </a>
              </li>
            </ul>
            <ul className="leading-[2.5rem]">
              <li>
                <a
                  className="text-[#FFFFFF] text-lg font-medium max-sm:text-sm"
                  href=""
                >
                  Help and Solution
                </a>
              </li>
              <li>
                <a
                  className="text-[#A6A6A6] font-medium text-lg max-sm:text-sm"
                  href=""
                >
                  Talk to support
                </a>
              </li>
              <li>
                <a
                  className="text-[#A6A6A6] font-medium text-lg max-sm:text-sm"
                  href=""
                >
                  Support docs
                </a>
              </li>
              <li>
                <a
                  className="text-[#A6A6A6] font-medium text-lg max-sm:text-sm"
                  href=""
                >
                  System status
                </a>
              </li>
              <li>
                <a
                  className="text-[#A6A6A6] font-medium text-lg max-sm:text-sm"
                  href=""
                >
                  Covid response
                </a>
              </li>
            </ul>
            <ul className="leading-[2.5rem]">
              <li>
                <a
                  className="text-[#FFFFFF] text-lg font-medium max-sm:text-sm"
                  href=""
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  className="text-[#A6A6A6] font-medium text-lg max-sm:text-sm"
                  href=""
                >
                  Update
                </a>
              </li>
              <li>
                <a
                  className="text-[#A6A6A6] font-medium text-lg max-sm:text-sm"
                  href=""
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  className="text-[#A6A6A6] font-medium text-lg max-sm:text-sm"
                  href=""
                >
                  Beta test
                </a>
              </li>
              <li>
                <a
                  className="text-[#A6A6A6] font-medium text-lg max-sm:text-sm"
                  href=""
                >
                  Pricing product
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex h-[10] gap-[10] justify-between items-center mt-[2rem] px-[2rem] py-[2rem]">
          <p className="text-[#FFFFFF] text-lg font-medium max-sm:text-xs">
            © 2022 Biccas Inc. Copyright and rights reserved
          </p>
          <div className="flex items-center gap-[20] px-[2rem] py-[2rem]">
            <p className="text-[#FFFFFF] text-lg font-medium max-sm:text-xs">
              Terms and Condtions
            </p>
            <span>
              <Image src={ellipse61} alt="" />
            </span>
            <p className="text-[#FFFFFF] text-lg font-medium max-sm:text-xs">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
