import React from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import StarryBackground from "../StarryBackground";

export default function Explores() {
  return (
    <div
      className="flex justify-center items-center text-white font-sans min-h-screen relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #430054, #2B0037,rgb(12, 5, 14))",
      }}
    >
      <StarryBackground />

      {/* Oval Background */}
      <div
        className="absolute w-[70%] h-[70%] rounded-half"
        style={{
          background: "linear-gradient(to bottom,rgb(134, 18, 155), #550066,rgb(32, 4, 40),rgb(13, 6, 14))",
          filter: "blur(100px)",
        }}
      ></div>

      {/* Header Section */}
      <header className="relative  p-10 w-5/6 max-w-4xl text-center">
        {/* Search Bar */}
        <div className="flex justify-center items-center mb-8">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-5 pr-12 rounded-full bg-[#4D3B5E] text-gray-300 outline-none placeholder-gray-400"
            />
            <div className="absolute top-0 right-0 h-full flex items-center pr-4 space-x-3">
              <FiSearch className="text-gray-400 text-lg cursor-pointer" />
              <FiFilter className="text-gray-400 text-lg cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="mt-5 text-5xl md:text-6xl font-Montserrat">
          <span className="text-white">Beyond</span>
          <span className="text-[#A16EFF]">Riffs</span>
          <span
            style={{
              background: "linear-gradient(to bottom, #A16EFF, #FFFFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Academy
          </span>
        </h1>
        <p className="mt-4 text-lg opacity-80">
          Unleashing Your Musical Potential Online
        </p>
        <button className="mt-4 bg-[#A14FFF] px-8 py-3 text-lg rounded-full hover:opacity-80 transition duration-300">
          Book free trial
        </button>
      </header>
    </div>
  );
}
