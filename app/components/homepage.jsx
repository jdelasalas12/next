import React from "react";
import Image from "next/image";
import {
  charlie,
  frame45,
  frame46,
  group59,
  play,
  rectangle,
  vectore,
} from "../assets";

const Homepage = () => {
  return (
    <div
      className="flex justify-center m-auto mt-[80] w-[90%]
    "
    >
      <div className="w-1/2 relative left-[100px]">
        <h1 className="text-7xl font-bold leading-[90px] mb-[50]">
          We’re here to Increase your Productivity
        </h1>
        <Image className="mb-[50]" src={vectore} alt="" />
        <p className="mb-[50] leading-[1.8rem]">
          Let's make your work more organize and easily using <br /> the Taskio
          Dashboard with many of the latest <br />
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
      <div className="w-1/2 relative left-[100px]">
        <Image className="m-auto" src={frame46} alt="" />
      </div>
    </div>
  );
};

export default Homepage;
