import React from "react";
import feetathome from "../assets/feelathome.png";
import facebooklogo from "../assets/FACEBOOK LOGO.png";
import IGlogo from "../assets/INSTAGRAM LOGO.png";
import Linkedinlogo from "../assets/WHITE LINKEDIN.png";
const Footer = () => {
  return (
    <>
      <section
        id="contact"
        className="bg-[#1F4B43] w-full mx-auto my-0 font-display p-4"
      >
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 p-4 max-w-7xl mx-auto">
          <img
            className="w-[100px] bg-white rounded-full flex-shrink-0"
            src={feetathome}
            alt="feelathomeLogo"
          />
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 w-full sm:w-auto">
            <input
              className="w-full sm:w-auto max-w-xs md:max-w-md rounded-2xl p-2.5 bg-white text-gray-700 placeholder-gray-500 flex-grow"
              placeholder="Subscribe"
            />
            <button className="bg-[#E7C873] p-2.5 px-4 rounded-2xl text-white font-roboto font-bold hover:bg-opacity-90 transition duration-300 flex-shrink-0">
              Send
            </button>
          </div>
        </div>
        <hr className="w-full text-white border-t border-white/20 my-4 max-w-7xl mx-auto" />
        <div className="flex flex-wrap justify-around items-start gap-4 py-5 max-w-7xl mx-auto text-white">
          <div className="flex flex-col sm:flex-row gap-8 min-w-[280px]">
            <div>
              <h2 className="font-bold text-2xl text-white mb-4">Follow Us</h2>
              <div className="flex flex-row sm:flex-col gap-2">
                <img className="w-10 " src={facebooklogo} alt="facebooklogo" />
                <img className="w-10" src={IGlogo} alt="Instagram logo" />
                <img className="w-10" src={Linkedinlogo} alt="LinkedinLogo" />
              </div>
            </div>
            <ul className="text-white">
              <li className="font-bold mb-5 text-xl">Discover</li>
              <li className="mt-2 hover:text-[#E7C873] cursor-pointer">
                Lagos
              </li>
              <li className="mt-2 hover:text-[#E7C873] cursor-pointer">Oyo</li>
              <li className="mt-2 hover:text-[#E7C873] cursor-pointer">
                Abuja
              </li>
              <li className="mt-2 hover:text-[#E7C873] cursor-pointer">
                Ilorin
              </li>
              <li className="mt-2 hover:text-[#E7C873] cursor-pointer">
                Ekiti
              </li>
            </ul>
          </div>
          <div className="flex gap-4 sm:gap-8 min-w-[300px] justify-between">
            <ul className="text-white text-sm">
              <li className="font-bold mb-4 text-xl">Quick Links</li>
              <li className="mt-2 hover:text-[#E7C873] cursor-pointer">
                Listings
              </li>
              <li className="mt-2 hover:text-[#E7C873] cursor-pointer">
                Featured
              </li>
              <li className="mt-2 hover:text-[#E7C873] cursor-pointer">
                Property
              </li>
              <li className="mt-2 hover:text-[#E7C873] cursor-pointer">Blog</li>
              <li className="mt-2 hover:text-[#E7C873] cursor-pointer">
                Contact
              </li>
            </ul>

            <ul className="text-white text-sm">
              <li className="font-bold mb-4 text-xl invisible">Placeholder</li>
              <li className="mt-2 hover:text-[#E7C873] cursor-pointer">
                Privacy Policy
              </li>
              <li className="mt-2 hover:text-[#E7C873] cursor-pointer">
                Terms And Condition
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
