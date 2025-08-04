import React, { useRef } from "react";
import Image from "next/image";
import { list, close } from "../assets";

const Navbar = () => {
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  return (
    <div>
      <nav className="w-full flex align-center justify-around h-40px px-[10px] py-[40px] ">
        <a
          className="w-160px h-30px font-semibold text-3xl text-[#54BD95] "
          href=""
        >
          Biccas
        </a>
        <ul className="hidden md:flex items-center gap-[40]">
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
        <div className="hidden md:flex items-center justify-center">
          <a
            className="text-base font-medium text-[#A6A6A6] pr-[20]"
            href="#login"
          >
            Login
          </a>
          <a
            className="text-base font-medium text-[#F8F8FA] w-20 h40 text-center bg-[#54BD95] px-[5px] py-[5px] rounded-lg"
            href="#signup"
          >
            Sign Up
          </a>
        </div>
        <button className="block md:hidden" onClick={openMenu}>
          <Image className="size-[30] cursor-pointer" src={list} alt="" />
        </button>

        {/* Mobile menu */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col w-64 gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 z-50 h-screen bg-green-200 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image className="size-[20] cursor-pointer" src={close} alt="" />
          </div>
          <li className="" onClick={closeMenu}>
            <a className="text-lg font-medium]" href="#top">
              Home
            </a>
          </li>
          <li>
            <a
              className="text-base font-medium text-[#A6A6A6]"
              onClick={closeMenu}
              href="#product"
            >
              Product
            </a>
          </li>
          <li>
            <a
              className="text-base font-medium text-[#A6A6A6]"
              onClick={closeMenu}
              href="#fact"
            >
              Fact
            </a>
          </li>
          <li>
            <a
              className="text-base font-medium text-[#A6A6A6]"
              onClick={closeMenu}
              href="#blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="text-base font-medium text-[#A6A6A6]"
              onClick={closeMenu}
              href="#about"
            >
              About Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
