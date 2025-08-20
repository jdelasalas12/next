import React from "react";
import Image from "next/image";
import {
  F247,
  F53,
  F54,
  subtract,
  rectangle48,
  elipse33,
  group109,
  group113,
  barchart,
  circle1,
} from "../assets";

import PricingPlan from "../pricing";

function Features() {
  return (
    <>
      <div className="mt-[3em] w-full max-w-[82rem] h-full m-auto py-[2.5rem] px-[1rem]">
        <div className="flex justify-between  items-center mb-[2em] w-full h-auto m-auto px-[2.5rem] py-[2rem] max-xl:flex-col max-xl:px-[auto] max-xl:gap-[2em] max-xl:items-center  max-xl:h-[auto] max-xl:w-[auto] ">
          <h2 className="px-[1.em] font-semibold text-5xl text-[#191A15] w-[331] h-[122] max-md:w-auto max-xl:h-[auto] max-xl:w-[auto] max-md:text-4xl">
            Our Features you can get
          </h2>
          <p className="w-[461] h-[90] px-[auto] py-[auto] text-lg font-medium max-md:text-center text-[#A6A6A6] tracking-wide leading-[1.5] max-xl:h-[auto] max-xl:w-[auto] max-sm:text-xs">
            We offer a variety of interesting features that you can help
            increase yor productivity at work and manage your project easily
          </p>
          <a
            className=" w-[162] h-[66] flex  py-[10px] px-[10px] bg-[#54BD95] items-center justify-center rounded-[70] text-lg font-medium text-[#FFFFFF] max-xl:h-[auto] max-xl:w-[auto] max-sm:text-xs"
            href=""
          >
            Get Started
          </a>
        </div>
        <div className="w-full h-150 flex justify-between gap-[20] px-[2em] m-auto max-lg:flex-col max-lg:items-center max-lg:w-auto max-lg:h-auto max-lg:justify-center mb-[2.5em]  ">
          <div className="w-[340] h-[430] py-[2em] px-[2em]  max-lg:h-auto ">
            <Image className="mb-[1em]" src={F247} alt="" />
            <h2 className="text-[#191A15] text-3xl font-semibold mb-[1em] ">
              Collboration Teams{" "}
            </h2>
            <p className="text-[#A6A6A6] font-medium  text-lg max-sm:text-xs">
              Here you can handle projects together with team virtually
            </p>
          </div>
          <div className="w-[340] h-[430] py-[2em] px-[2em] max-lg:h-auto ">
            <Image className="mb-[1em]" src={F53} alt="" />
            <h2 className="text-[#191A15] text-3xl font-semibold mb-[1em]">
              Cloud Storage
            </h2>
            <p className="text-[#A6A6A6] font-medium  text-lg max-sm:text-xs">
              No need to worry about storage because we provide storage up to 2
              TB
            </p>
          </div>
          <div className="w-[340] h-[430] py-[2em] px-[2em] max-lg:h-auto ">
            <Image className="mb-[1em]" src={F54} alt="" />
            <h2 className="text-[#191A15] text-3xl font-semibold mb-[1em]">
              Daily Analytics{" "}
            </h2>
            <p className="text-[#A6A6A6] font-medium  text-lg max-sm:text-xs">
              We always provide useful information to make it easier for you
              every day
            </p>
          </div>
        </div>
        <div className="w-full h-auto flex px-[2.5em] py-[2em] gap-[2em] mb-[2.5rem] justify-between max-xl:flex-col max-xl:items-center">
          <div className="w-1/2 max-w-lg h-auto mb-[20] px-[2em] max-md:px-[auto] max-md:w-auto max-md:h-full">
            <h2 className="mb-[1.05em] font-bold text-[50px] max-md:text-3xl">
              What Benefit Will You Get
            </h2>
            <div className="flex gap-[10] items-center mb-[1.5em] ">
              <Image
                className="max-md:w-auto max-md:h-[auto]"
                src={subtract}
                alt=""
              />
              <p>Free Consulting With Experet Saving Money</p>
            </div>
            <div className="flex gap-[10] items-center mb-[1.5em]">
              <Image
                className="max-md:w-auto max-md:h-[auto]"
                src={subtract}
                alt=""
              />
              <p>Online Banking</p>
            </div>
            <div className="flex gap-[10] items-center mb-[1.5em]">
              <Image
                className="max-md:w-auto max-md:h-[auto]"
                src={subtract}
                alt=""
              />
              <p>Investment Report Every Month</p>
            </div>
            <div className="flex gap-[10] items-center mb-[1.5em] ">
              <Image
                className="max-md:w-auto max-md:h-[auto]"
                src={subtract}
                alt=""
              />
              <p>Saving Money For The Future</p>
            </div>
            <div className="flex gap-[10] items-center mb-[1.5em]">
              <Image
                className="max-md:w-auto max-md:h-[auto]"
                src={subtract}
                alt=""
              />
              <p>Online Transaction</p>
            </div>
          </div>
          <div className="w-1/2 flex justify-end px-[2em] max-md:px-[auto] max-sm:w-80 max-md:justify-center">
            <div className=" relative h-auto w-auto top-[0]">
              <Image
                className="absolute bottom-[190] left-[-80] max-md:hidden"
                src={group113}
                alt=""
              />
              <form className="flex flex-col h-15 w-35 absolute top-[130] right-[-70] bg-[#FFFFFF] p-[10] leading-[20] px-[15px] py-[7px] rounded-xl max-md:hidden">
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
              <Image src={rectangle48} alt="" />

              <div className="absolute w-[304] h-[82] flex items-center top-[40] left-[-120] gap-[20] px-[1em] py-[1.3em] bg-[#FFFFFF] rounded-[10] max-md:hidden">
                <Image src={elipse33} alt="" />
                <div>
                  <p className="text-[#191A15] text-base mb-[0.5em]">
                    Amanda Young
                  </p>
                  <p className="text-xs text-[#A6A6A6]">Expert Saving Money</p>
                </div>
                <Image src={group109} alt="" />
              </div>
              <div className="absolute w-[302] h-[68] flex items-center content-center bottom-[40] left-[-120] gap-[10] px-[1em] py-[1em] bg-[#FFFFFF] rounded-[10] max-md:hidden">
                <Image className="" src={circle1} alt="" />
                <p className="text-[#191A15]  font-normal text-lg">
                  Money Transfer Succesfull
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-auto h-auto mb-[2.5rem] px-[1.5rem] py-[1.5rem]">
          <h2 className="text-[50px] font-bold text-center mb-[2.5rem] max-sm:text-3xl">
            Choose Plan That’s Right For You
          </h2>
          <p className="text-center mb-[2.5rem] text-lg font-bold text-[#A6A6A6] tracking-wide">
            Choose plan that works best for you, feel free to contact us
          </p>

          <PricingPlan />
        </div>
        {/* Plans */}
      </div>
    </>
  );
}

export default Features;
