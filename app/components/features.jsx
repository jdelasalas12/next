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
          <div className="w-[340] h-[70] bg-[#FFFFFF] px-[1rem] py-[2.5rem] m-auto rounded-[10] flex justify-center items-center content-center gap-[20] shadow-sm max-sm:w-[300] max-sm:h-[50]">
            <p className="text-[#191A15] font-medium text-lg max-sm:text-sm">
              Bill Monthly
            </p>

            <a
              className="px-[40] py-[20] font-medium text-lg text-[#FFFFFF] bg-[#54BD95] rounded-[10] max-sm:text-sm"
              href=""
            >
              Bill Yearly
            </a>
          </div>
        </div>
        {/* Plans */}

        <div className="w-full max-w-[82rem] px-[2rem] py-[2rem] h-auto flex gap-[2.5rem] max-xl:flex-col max-xl:items-center mb-[2.5rem]">
          <div className="w-1/3 h-auto flex flex-col justify-center  px-[2rem] py-[1.5rem] shadow-sm rounded-[10]  max-xl:w-auto">
            <div className="relative h-[190] w-[300] m-auto  mt-[0]">
              <p className="text-center text-3xl font-bold leading-[3rem]">
                Free
              </p>
              <p className="text-center text-[#A6A6A6] leading-[2rem] font-medium text-lg max-sm:text-base">
                Have a go and test your superpowers
              </p>

              <p className="text-center absolute text-[#A6A6A6] font-medium text-lg top-[120] left-[100]">
                $
              </p>

              <p className="text-center absolute text-[50px] text-[#191A15] font-semibold bottom-[0] left-[120]">
                0
              </p>
            </div>
            <div className="bg-[#F9FAFB] w-auto m-auto h-auto py-[1.5rem] px-[2.5rem] rounded-[10] flex justify-center  flex-col">
              <div className="flex gap-[10] items-center mb-[1.5em] ">
                <Image
                  className="max-md:w-auto max-md:h-[auto]"
                  src={subtract}
                  alt=""
                />
                <p>2 Users</p>
              </div>
              <div className="flex gap-[10] items-center mb-[1.5em]">
                <Image
                  className="max-md:w-auto max-md:h-[auto]"
                  src={subtract}
                  alt=""
                />
                <p>2 File</p>
              </div>
              <div className="flex gap-[10] items-center mb-[1.5em]">
                <Image
                  className="max-md:w-auto max-md:h-[auto]"
                  src={subtract}
                  alt=""
                />
                <p>Public Share & Comments</p>
              </div>
              <div className="flex gap-[10] items-center mb-[1.5em]">
                <Image
                  className="max-md:w-auto max-md:h-[auto]"
                  src={subtract}
                  alt=""
                />
                <p>Chat Support </p>
              </div>
              <div className="flex gap-[10] items-center mb-[1.5em]">
                <Image
                  className="max-md:w-auto max-md:h-[auto]"
                  src={subtract}
                  alt=""
                />
                <p>New income apps</p>
              </div>
              <a
                className="  w-auto px-[20] py-[10] bg-[#FFFFFF] font-semibold text-center text-lg text-[#54BD95] rounded-[20] m-auto max-md:w-auto max-md:w-auto max-sm:text-sm"
                href=""
              >
                Signup for free
              </a>
            </div>
          </div>
          <div className=" w-1/3 h-auto flex flex-col px-[2rem] py-[1.5rem] bg-[#54BD95] justify-center shadow-sm rounded-[20]  max-xl:w-auto">
            <div className="w-[300]  h-[250] relative m-auto mt-[0]">
              <p className="text-[#FFFFFF] text-center text-3xl font-semibold leading-[3rem] ">
                Pro
              </p>
              <p className="text-lg font-medium text-[#FFFFFF] text-center  leading-[2rem] max-sm:text-base">
                Have a go and test your superpowers
              </p>
              <p className="absolute text-lg font-medium text-[#FFFFFF] text-center top-[120] left-[110]">
                $
              </p>
              <p className="absolute text-[50px]  font-medium text-[#FFFFFF] text-center bottom-[50] left-[130]">
                0
              </p>
              <a
                className="absolute bottom-[0] left-[80] w-auto h-auto px-[15] py-[15] bg-[#85DAB9] rounded-[20] text-center text-sm font-semibold text-[#FFFFFF]"
                href=""
              >
                Save 50$ a year
              </a>
            </div>
            <div className="h-auto w-auto px-[1.5rem] py-[1.5rem] bg-[#FFFFFF] flex justify-center flex-col mt-[2rem] rounded-[10]">
              <div className="flex gap-[10] items-center mb-[1.5em]">
                <Image
                  className="max-md:w-auto max-md:h-[auto]"
                  src={subtract}
                  alt=""
                />
                <p>2 Users</p>
              </div>

              <div className="flex gap-[10] items-center mb-[1.5em]">
                <Image
                  className="max-md:w-auto max-md:h-[auto]"
                  src={subtract}
                  alt=""
                />
                <p>2 Users</p>
              </div>
              <div className="flex gap-[10] items-center mb-[1.5em]">
                <Image
                  className="max-md:w-auto max-md:h-[auto]"
                  src={subtract}
                  alt=""
                />
                <p>Public Share & Comments</p>
              </div>
              <div className="flex gap-[10] items-center mb-[1.5em]">
                <Image
                  className="max-md:w-auto max-md:h-[auto]"
                  src={subtract}
                  alt=""
                />
                <p>Chat Support </p>
              </div>
              <div className="flex gap-[10] items-center mb-[1.5em]">
                <Image
                  className="max-md:w-auto max-md:h-[auto]"
                  src={subtract}
                  alt=""
                />
                <p>New income apps</p>
              </div>

              <a
                className="m-auto w-auto h-auto px-[40] py-[10] bg-[#54BD95] rounded-[20] text-center text-lg font-semibold text-[#FFFFFF] max-sm:w-auto max-sm:text-sm"
                href=""
              >
                Go to pro
              </a>
            </div>
          </div>
          <div className="w-1/3 flex flex-col justify-center h-auto max-xl:w-auto  px-[2rem] py-[1.5rem] shadow-sm rounded-[10]">
            <div className="w-[300]  h-[190] relative m-auto mt-[0]">
              <p className="text-[#191A15] text-3xl font-semibold text-center leading-[3rem]">
                Business
              </p>
              <p className="text-lg text-[#A6A6A6] font-medium text-center leading-[2rem] max-sm:text-base max-sm:leading-[auto]">
                Unveil new superpowers and join the Design Leaque
              </p>
              <p className="absolute text-lg font-medium text-[#A6A6A6] text-center top-[120] left-[110]">
                $
              </p>
              <p className="absolute text-[50px]  font-medium text-[#191A15] text-center bottom-[0] left-[130]">
                0
              </p>
            </div>
            <div className="bg-[#F9FAFB] py-[1.5rem] py-[1.5rem] px-[2.5rem] rounded-[10] flex justify-center flex-col">
              <div className="flex gap-[10] items-center mb-[1.5em]">
                <Image
                  className="max-md:w-auto max-md:h-[auto]"
                  src={subtract}
                  alt=""
                />
                <p>2 Users</p>
              </div>

              <div className="flex gap-[10] items-center mb-[1.5em]">
                <Image
                  className="max-md:w-auto max-md:h-[auto]"
                  src={subtract}
                  alt=""
                />
                <p>2 Users</p>
              </div>
              <div className="flex gap-[10] items-center mb-[1.5em]">
                <Image
                  className="max-md:w-auto max-md:h-[auto]"
                  src={subtract}
                  alt=""
                />
                <p>Public Share & Comments</p>
              </div>
              <div className="flex gap-[10] items-center mb-[1.5em]">
                <Image
                  className="max-md:w-auto max-md:h-[auto]"
                  src={subtract}
                  alt=""
                />
                <p>Chat Support </p>
              </div>
              <div className="flex gap-[10] items-center mb-[1.5em]">
                <Image
                  className="max-md:w-auto max-md:h-[auto]"
                  src={subtract}
                  alt=""
                />
                <p>New income apps</p>
              </div>
              <a
                className=" w-auto px-[20] py-[10] bg-[#FFFFFF] font-semibold text-center text-lg text-[#54BD95] rounded-[20] m-auto max-md:w-auto max-sm:text-sm"
                href=""
              >
                Go to business
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
