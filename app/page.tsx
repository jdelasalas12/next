"use client";

import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Company from "./components/company";
import Features from "./components/features";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Company />
      <Features />
      <Footer />
    </>
  );
}
