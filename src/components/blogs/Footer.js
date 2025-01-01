import React from "react";
import { VscRocket } from "react-icons/vsc"; // Import VscRocket icon
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa"; // Import social icons
import { IoLogoTiktok } from "react-icons/io5"; // Import TikTok icon
import bottomLogo from "../../assets/images/Br-logo-new.jpg"; // Adjust the path to your logo

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#2B0F3F] to-[#0B0111] py-10 text-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between gap-10 lg:items-start">
        {/* Navigation Sections */}
        <div className="flex flex-wrap gap-12">
          <div>
            <h3 className="font-semibold mb-4 text-xl">Course</h3>
            <p className="text-xs opacity-60">Instruments</p>
            <p className="text-xs opacity-60">Vocals</p>
            <p className="text-xs opacity-60">Certificates</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-xl">Blogs</h3>
            <p className="text-xs opacity-60">Post</p>
            <p className="text-xs opacity-60">Tips and tricks</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-xl">Support</h3>
            <p className="text-xs opacity-60">Contact us</p>
            <p className="text-xs opacity-60">FAQ</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-xl">Legal</h3>
            <p className="text-xs opacity-60">Privacy</p>
            <p className="text-xs opacity-60">Policy</p>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="items-center">
          <h2 className="text-5xl font-bold mb-5">Subscribe to our News Letter</h2>
          <p className="text-xs opacity-60 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid.
          </p>
          <form className="flex items-left">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-full bg-[#4D3B5E] text-white placeholder-white text-xs outline-none"
            />
            <button
              type="submit"
              className="ml-2 bg-purple-600 p-3 rounded-full hover:bg-purple-500"
            >
              <VscRocket className="text-white text-lg" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-[#4D3B5E] pt-6 flex flex-col lg:flex-row justify-between items-center">
        {/* Logo */}
        <div>
          <img src={bottomLogo} alt="Logo" className="h-15 bg-white-900 p-2 rounded-lg" />
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4 lg:mt-0">
          <FaTwitter className="hover:text-purple-400 cursor-pointer text-lg" />
          <a
            href="https://www.linkedin.com/company/beyondriffs/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            <FaLinkedinIn className="hover:text-purple-400 cursor-pointer text-lg" />
          </a>
          <IoLogoTiktok className="hover:text-purple-400 cursor-pointer text-lg" />
          <FaYoutube className="hover:text-purple-400 cursor-pointer text-lg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;