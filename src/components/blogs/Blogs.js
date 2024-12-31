import React from 'react';
import NavBar from "../NavBar";
import Explores from './Explores';
import StarryBackground from "../StarryBackground";
import Featured from './Featured';
import Footer from './Footer';
import Grid from './Grid'

export default function Blogs() {
  return (
    <div className="w-full h-full relative bg-black min-h-screen overflow-y-auto">
      {/* Starry Background */}
      <StarryBackground />

      {/* NavBar - Pinned over the Explores Background */}
      <div className="absolute top-0 left-0 w-full z-20">
        <NavBar />
      </div>

      {/* Explores Section with Background */}
      <section className="relative w-full h-screen">
        {/* Explores Content */}
        <div className="relative z-10">
          <Explores />
        </div>

        {/* Background Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900 to-black opacity-80 z-0"></div>
      </section>
      <Featured/>
      <Grid/>
      <Footer/>
    </div>
  );
}
