import React from "react";
import Image from "next/image";
import {
  logo1,
  star,
  command,
  piechart,
  barchart,
  activity,
  startg,
} from "../assets";

const Company = () => {
  return (
    <>
      <div className="flex w-full max-w-[82rem] h-auto py-[100px] m-auto bg-[#F9F8FE] justify-center max-xl:flex-col max-xl:justify-center max-xl:content-center ">
        <div className=" w-1/2 w-full h-auto mt-[auto] px-[40px]  max-xl:shrink max-xl:justify-center max-xl:m-10 sm:px-[auto] ">
          <div className="flex w-auto h-auto flex-col">
            <h2 className="text-5xl font-semibold leading-[1.2] mb-[50] max-md:text-4xl ">
              How we support our <br />
              partner all over the world
            </h2>
            <p className="text-[16px font-medium] mb-[50] text-[#A6A6A6] tracking-wide">
              SaaS become a common delivery model for many business application,
              including
              <br /> office software, messaging software, payroll processing
              software, DBMS software,
              <br /> management software
            </p>
          </div>
          <div className="flex gap-[100] ">
            <div>
              <div className="flex gap-[5] mb-[10] sm:mb-[5] ">
                <Image src={star} alt="" />
                <Image src={star} alt="" />
                <Image src={star} alt="" />
                <Image src={star} alt="" />
                <Image src={star} alt="" />
              </div>
              <p className="text-[#191A15 text-[18px] mb-[10] sm:mb-[5]">
                4.9 / 5 rating
              </p>
              <p className="text-[18px] text-[#A6A6A6]">databricks</p>
            </div>
            <div>
              <div className="flex gap-[5] mb-[10]">
                <Image src={star} alt="" />
                <Image src={star} alt="" />
                <Image src={star} alt="" />
                <Image src={star} alt="" />
                <Image src={startg} alt="" />
              </div>
              <p className="text-[#191A15 text-[18px] mb-[10]">
                4.9 / 5 rating
              </p>
              <p className="text-[18px] text-[#A6A6A6]">databricks</p>
            </div>
          </div>
        </div>

        <div className="w-2/5 flex  mr-[150] max-xl:shrink max-xl:m-auto max-xl:mt-[auto] sm:px-[auto]  sm:w-full ">
          <div className="grid grid-cols-[0.3fr_1fr] gap-4 grid-rows-<1fr_1fr_1fr> gap-4">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-[#FFFFFF] flex justify-center items-center">
                <Image className="w-9 h-9" src={activity} alt="" />
              </div>
            </div>
            <div>
              <h2 className="font-bold text-3xl max-md:text-2xl">Publishing</h2>
              <p className="text-lg font-medium leading-[2] text-[#A6A6A6] tracking-wide">
                Plan, collaborate, and publishing your content <br />
                that drives meaningful engagement and growth <br />
                for your brand
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-[#FFFFFF] flex justify-center items-center">
                <Image className="w-9 h-9" src={piechart} alt="" />
              </div>
            </div>
            <div>
              <h2 className="font-bold text-3xl max-md:text-2xl">Analytics</h2>
              <p className="text-lg font-medium leading-[2] text-[#A6A6A6] tracking-wide">
                Analyze your performance and create goegeous
                <br /> report
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-[#FFFFFF] flex justify-center items-center">
                <Image className="w-9 h-9" src={command} alt="" />
              </div>
            </div>
            <div>
              <h2 className="font-bold text-3xl max-md:text-2xl">Engagement</h2>
              <p className="text-lg font-medium leading-[2] text-[#A6A6A6] tracking-wide">
                Quickly navigate you anda engage with your adience
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
