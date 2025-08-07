"use client";

import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Company from "./components/company";
import Features from "./components/features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Company />
      <Features />
    </>
  );
}
