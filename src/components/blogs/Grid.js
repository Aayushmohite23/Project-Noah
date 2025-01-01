import React from "react";
import { Link } from "react-router-dom";
import guitarfg from "../../assets/images/guitar-fg1.jpg";
import pianofg from "../../assets/images/piano-fg.jpg";
import childfg from "../../assets/images/child-fg.jpg";
import drumfg from "../../assets/images/drums-fg.jpg";
import nodesfg from "../../assets/images/nodes-fg.jpg";
import bandfg from "../../assets/images/bandfg.jpg";
import naturefg from "../../assets/images/naturefg.jpg";
import microfg from "../../assets/images/micro-fg.jpg";
import guitaistfg from "../../assets/images/guitarist-fg.jpg";
import StarryBackground from "../StarryBackground";

const MusicSections = () => {
  return (
    <section className="mt-12 relative min-h-screen flex flex-col justify-center items-center px-4 md:px-20 overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 -z-10">
        <StarryBackground />
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
       {/* Guitar Section */}
       <div className="relative group">
          <Link to={"/about/individualblog"}>
           <img
             src={guitarfg}
             alt="guitar"
             className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
             <p className="text-white text-lg font-semibold">Guitar</p>
             <p className="text-white text-sm font-medium mt-2">Unlocking the Secrets of Guitar Chords</p>
            </div>
          </Link>
        </div>

        {/* Piano Section */}
        <div className="relative group">
          <Link to={"/about/individualblog"}>
            <img
              src={pianofg}
              alt="piano"
              className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">Piano</p>
              <p className="text-white text-sm font-medium mt-2">Unlocking the Secrets of Piano Chords</p>
            </div>
          </Link>
        </div>

        {/* Child Music Section */}
        <div className="relative group">
          <Link to={"/about/individualblog"}>
            <img
              src={childfg}
              alt="child music"
              className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">Child Music</p>
              <p className="text-white text-sm font-medium mt-2">Unlocking the Secrets of Child Music </p>
            </div>
          </Link>
        </div>

        {/* Drums Section */}
        <div className="relative group">
          <Link to={"/about/individualblog"}>
            <img
              src={drumfg}
              alt="drums"
              className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">Drums</p>
              <p className="text-white text-sm font-medium mt-2">Unlocking the Secrets of Drums</p>
            </div>
          </Link>
        </div>

        {/* Notes Section */}
        <div className="relative group">
          <Link to={"/about/individualblog"}>
            <img
              src={nodesfg}
              alt="nodes"
              className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">Nodes</p>
              <p className="text-white text-sm font-medium mt-2">Unlocking the Secrets of Nodes</p>
            </div>
          </Link>
        </div>

        {/* Band Section */}
        <div className="relative group">
          <Link to={"/about/individualblog"}>
            <img
              src={bandfg}
              alt="band"
              className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">Band</p>
              <p className="text-white text-sm font-medium mt-2">Unlocking the Secrets of Band Chords</p>
            </div>
          </Link>
        </div>

        {/* Nature Music Section */}
        <div className="relative group">
          <Link to={"/about/individualblog"}>
            <img
              src={naturefg}
              alt="nature music"
              className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">Nature Music</p>
              <p className="text-white text-sm font-medium mt-2">Unlocking the Secrets of Nature Music</p>
            </div>
          </Link>
        </div>

        {/* Microphone Section */}
        <div className="relative group">
          <Link to={"/about/individualblog"}>
            <img
              src={microfg}
              alt="microphone"
              className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">Microphone</p>
              <p className="text-white text-sm font-medium mt-2">Unlocking the Secrets of Microphone</p>
            </div>
          </Link>
        </div>

        {/* Guitarist Section */}
        <div className="relative group">
          <Link to={"/about/individualblog"}>
            <img
              src={guitaistfg}
              alt="guitarist"
              className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">Guitarist</p>
              <p className="text-white text-sm font-medium mt-2">Unlocking the Secrets of Guitarist Chords</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Centered "View All" Button */}
      <div className="flex justify-center items-center mt-10 mb-5">
        <button className="bg-purple-600 px-5 py-2 rounded-full text-white hover:opacity-80 transition duration-300">
          View All
        </button>
      </div>
    </section>
  );
};

export default MusicSections;
