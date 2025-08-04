import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full flex align-center justify-around h-40px px-[10px] py-[20px] ">
        <a
          className="w-160px h-30px font-semibold text-3xl text-[#54BD95] "
          href=""
        >
          Biccas
        </a>
        <ul className="flex items-center gap-[40]">
          <li className="">
            <a className="text-lg font-medium]" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="text-base font-medium text-[#A6A6A6]" href="#product">
              Product
            </a>
          </li>
          <li>
            <a className="text-base font-medium text-[#A6A6A6]" href="#fact">
              Fact
            </a>
          </li>
          <li>
            <a className="text-base font-medium text-[#A6A6A6]" href="#blog">
              Blog
            </a>
          </li>
          <li>
            <a className="text-base font-medium text-[#A6A6A6]" href="#about">
              About Us
            </a>
          </li>
        </ul>
        <div className="self-center">
          <a
            className="text-base font-medium text-[#A6A6A6] pr-[20]"
            href="#login"
          >
            Login
          </a>
          <a
            className="text-base font-medium text-[#F8F8FA] w-80 h40  bg-[#54BD95] px-[5px] py-[5px] rounded-lg"
            href="#signup"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
