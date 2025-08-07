import React from "react";
import Image from "next/image";
import {
  frame45,
  frame46,
  group59,
  play,
  rectangle,
  vectore,
  barchart,
  group48,
  logo1,
} from "../assets";

const Homepage = () => {
  return (
    <>
      <div
        className="flex justify-center m-auto  w-full mx-auto mt-[150] max-xl:mt-[120]  max-xl:flex-col max-md:mt-[80] max-xl:justify-center
    "
      >
        <div className="w-4xl flex flex-col px-[80px]  max-xl:w-auto max-w-md:w-auto  ">
          <h1 className="text-7xl font-bold leading-[90px] mb-[50] max-md:text-5xl ">
            We’re here to Increase your Productivity
          </h1>
          <Image className="mb-[50]" src={vectore} alt="" />
          <p className="mb-[50] leading-[1.8rem]">
            Let's make your work more organize and easily using <br /> the
            Taskio Dashboard with many of the latest <br />
            featuresin managing work every day.
          </p>
          <div className="flex items-center">
            <a
              className="mr-[20] px-[20px] py-[12px] bg-[#54BD95] rounded-4xl text-[#FFFFFF] "
              href=""
            >
              Try free trial
            </a>
            <div className="flex items-center">
              <a href="">
                <Image className="mr-[10]" src={play} alt="" />
              </a>
              <a href="">
                <p>View Demo</p>
              </a>
            </div>
          </div>
        </div>
        <div className="w-2xl flex  justify-end px-[80px] max-xl:w-auto max-xl:justify-center max-xl:mt-[80] max-xl:m-auto">
          {/* <div className="w-30 h-20 bg-[#FFFFFF]"></div> */}
          <div className="flex relative  w-100 h-max top-[0]">
            <Image className="" src={frame46} alt="" />
            <span className="absolute left-[-43] top-[180] z-50 text-[#FFFFFF] ">
              &#10003;
            </span>
            <Image
              className="absolute left-[-60] top-[170]"
              src={rectangle}
              alt=""
            />
            <Image
              className="absolute right-[-30] top-[20]"
              src={group59}
              alt=""
            />
            <Image
              className="absolute right-[-100] bottom-[50]"
              src={frame45}
              alt=""
            />
            <Image
              className="absolute right-[30] bottom-[-30]"
              src={group48}
              alt=""
            />

            <form className="flex flex-col h-17 w-60 absolute top-[30] ml-[-150] bg-[#FFFFFF] p-[10] leading-[20] px-[25px] py-[8px] rounded-xl">
              <input
                className="text-xs text-[#A9A7B6] leading-[1.8] w-30"
                type="amount"
                defaultValue=""
                placeholder="Enter amount"
              />
              <input
                className="font-medium text-base"
                type="amount"
                defaultValue="$450.00"
              />
              <a
                className="absolute top-[15] right-[20] text-xs text-[#FFFFFF] bg-[#54BD95]  px-[20px] py-[8px] rounded-xl cursor-pointer"
                href=""
              >
                Send
              </a>
              <hr className="opacity-10" />
            </form>
            <form className="flex flex-col h-15 w-35 absolute bottom-[30] ml-[-70] bg-[#FFFFFF] p-[10] leading-[20] px-[15px] py-[7px] rounded-xl">
              <input
                className="text-xs text-[#A9A7B6] leading-[1.8] w-30"
                type="amount"
                defaultValue=""
                placeholder="Total Income"
              />
              <input
                className="font-medium text-base"
                type="amount"
                defaultValue="$245.00"
              />
              <Image
                className="absolute top-[30] right-[15]"
                src={barchart}
                alt=""
              />
            </form>
          </div>
        </div>
      </div>
      <div className="w-full h-auto m-auto mt-[100] mb-[100] px-[30px]  ">
        <h2 className="text-center text-[40px] font-bold">
          More than 25,000 teams use Collabs
        </h2>
        <div className="flex justify-center mt-[50]">
          <Image className="" src={logo1} alt="" />
        </div>
      </div>
    </>
  );
};

export default Homepage;
