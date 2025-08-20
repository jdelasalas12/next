import { useState } from "react";
import Image from "next/image";
import { subtract } from "./assets";

export default function PricingPlans() {
  const [billing, setBilling] = useState("monthly");

  const prices = {
    monthly: { free: 0, pro: 8, business: 16 },
    yearly: { free: 0, pro: 96, business: 192 },
  };

  return (
    <div className="flex flex-col items-center py-10 px-4 bg-gray-50 min-h-screen">
      {/* Toggle */}
      <div className="mb-10">
        <div className="flex bg-white border border-gray-300 rounded-[10] shadow-sm overflow-hidden">
          <button
            className={`px-5 py-4 text-sm font-medium ${
              billing === "monthly"
                ? "bg-[#54BD95]  text-[#191A15]"
                : "text-gray-700"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Bill Monthly
          </button>
          <button
            className={`px-5 py-2 text-sm font-medium ${
              billing === "yearly"
                ? "bg-[#54BD95] text-[#191A15]"
                : "text-gray-700"
            }`}
            onClick={() => setBilling("yearly")}
          >
            Bill Yearly
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Free Plan */}
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h2 className="text-3xl font-bold mb-2">Free</h2>
          <p className="text-center text-[#A6A6A6] leading-[2rem] font-medium text-lg max-sm:text-base">
            Have a go and test your superpowers
          </p>
          <span className="relative  h-[190] w-[300]">
            <p className="text-center absolute text-[#A6A6A6] font-medium text-lg  top-[0] left-[-45]">
              $
            </p>
          </span>

          <p className="text-[50px] text-[#A6A6A6] font-medium mb-4">
            {prices[billing].free}
          </p>
          <ul className="mb-6 space-y-3  bg-[#F9FAFB] py-4  rounded-[10]">
            <li className="px-4 py-2 flex items-center gap-4 max-sm:px-2 ">
              <Image src={subtract} alt="" />
              <span className="text-black max-sm:text-xs">2 Users</span>
            </li>
            <li className="px-4 py-2 flex items-center gap-4 max-sm:px-2">
              <Image src={subtract} alt="" />
              <span className="text-black max-sm:text-xs">2 File</span>
            </li>
            <li className="px-4 py-2 flex items-center gap-4 max-sm:px-2 max-sm:gap-2">
              <Image src={subtract} alt="" />
              <span className="text-black max-sm:text-xs ">
                Public Share & Comments
              </span>
            </li>
            <li className="px-4 py-2 flex items-center gap-4 max-sm:px-2 ">
              <Image src={subtract} alt="" />
              <span className="text-black max-sm:text-xs">Chat Support</span>
            </li>
            <li className="px-4 py-2 flex items-center gap-4 max-sm:px-2">
              <Image src={subtract} alt="" />
              <span className="text-black max-sm:text-xs">New income apps</span>
            </li>
            <button className="text-lg text-[#54BD95] bg-[#FFFFF] font-semibold  px-4 py-2 rounded-[20] hover:bg-gray-300 max-sm:text-sm">
              Signup for free
            </button>
          </ul>
        </div>

        {/* Pro Plan - Highlighted */}
        <div className="bg-[#54BD95] text-[#FFFFFF]  rounded-[20]  shadow-xl p-8 text-center transform scale-105 z-10 relative">
          <h2 className="text-3xl font-bold mb-2">Pro</h2>
          <p className="text-lg font-medium  text-center  leading-[2rem] max-sm:text-base mb-2">
            Experiment the power of infinite possibilities
          </p>
          <span className="relative  h-[190] w-[300]">
            {" "}
            <p className=" absolute  font-medium text-lg  top-[0] left-[-45]">
              $
            </p>
          </span>
          <p className="text-[50px]  font-medium text-[#FFFFFF] mb-4 max-sm:text-4xl ">
            {prices[billing].pro}
          </p>
          <a
            className="w-auto h-auto px-3 py-3 bg-[#85DAB9] rounded-[20] text-center text-sm font-semibold text-[#FFFFFF] max-sm:text-xs"
            href=""
          >
            Save $50 a year
          </a>
          <ul className="mb-8 space-y-2 h-auto py-4 bg-[#FFFFFF] rounded-[10] mt-10 ">
            <li className="px-4 py-2 flex items-center gap-4 max-sm:px-2 ">
              <Image src={subtract} alt="" />
              <span className="text-black max-sm:text-xs">4 Users</span>
            </li>
            <li className="px-4 py-2 flex items-center gap-4 max-sm:px-2">
              <Image src={subtract} alt="" />
              <span className="text-black max-sm:text-xs">All apps</span>
            </li>
            <li className="px-4 py-2 flex items-center gap-4 max-sm:px-2 max-sm:gap-1">
              <Image src={subtract} alt="" />
              <span className="text-black max-sm:text-[11px] ">
                Unlimited editable exports
              </span>
            </li>
            <li className="px-4 py-2 flex items-center gap-4 max-sm:px-2 max-sm:gap-1">
              <Image src={subtract} alt="" />
              <span className="text-black max-sm:text-xs">
                Folders and collaboration{" "}
              </span>
            </li>
            <li className="px-4 py-2 flex items-center gap-4 max-sm:px-2">
              <Image src={subtract} alt="" />
              <span className="text-black max-sm:text-xs">
                All incoming apps
              </span>
            </li>
            <button className="text-white px-4 py-2 bg-[#54BD95] rounded-[20] hover:bg-[#85DAB9]">
              Go to pro
            </button>
          </ul>
        </div>

        {/* Business Plan */}
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h2 className="text-[#191A15] text-3xl font-semibold mb-2">
            Business
          </h2>
          <p className="text-lg text-[#A6A6A6] font-medium text-center leading-[2rem] max-sm:text-base max-sm:leading-[auto] mb-2">
            Unveil new superpowers and join the Design Leaque
          </p>
          <span className="relative  h-[190] w-[300]">
            {" "}
            <p className=" absolute text-[#A6A6A6]  font-medium text-lg  top-[-5] left-[-45]">
              $
            </p>
          </span>
          <p className="text-[50px]  font-medium text-[#191A15] mb-4">
            {prices[billing].business}
          </p>
          <ul className="mb-8 space-y-2 h-auto py-4 bg-[#F9FAFB] rounded-[10] ">
            <li className="px-4 py-2 flex items-center gap-4 max-sm:px-2 ">
              <Image src={subtract} alt="" />
              <span className="text-black max-sm:text-xs">
                All the features of pro plan
              </span>
            </li>
            <li className="px-4 py-2 flex items-center gap-4 max-sm:px-2">
              <Image src={subtract} alt="" />
              <span className="text-black max-sm:text-xs">All apps</span>
            </li>
            <li className="px-4 py-2 flex items-center gap-4 max-sm:px-2 max-sm:gap-1">
              <Image src={subtract} alt="" />
              <span className="text-black max-sm:text-[11px] ">
                Account success Manager
              </span>
            </li>
            <li className="px-4 py-2 flex items-center gap-4 max-sm:px-2 max-sm:gap-1">
              <Image src={subtract} alt="" />
              <span className="text-black max-sm:text-xs">
                Single Sign-On (SSO)
              </span>
            </li>
            <li className="px-4 py-2 flex items-center gap-4 max-sm:px-2">
              <Image src={subtract} alt="" />
              <span className="text-black max-sm:text-xs">
                Co-conception pogram
              </span>
            </li>
            <button className="text-white px-4 py-2 bg-[#54BD95] rounded-[20] hover:bg-gray-900">
              Go to Business
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
