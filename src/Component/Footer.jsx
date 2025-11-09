import React from "react";
import feetathome from "../assets/feelathome.png";
import facebooklogo from "../assets/FACEBOOK LOGO.png";
import IGlogo from "../assets/INSTAGRAM LOGO.png";
import Linkedinlogo from "../assets/WHITE LINKEDIN.png";
const Footer = () => {
  return (
    <>
      <section className="bg-[#1F4B43] mx-ato w-fill my-0 font-display">
        <div className="flex justify-around items-center p-4">
          <img
            className="w-[180px] bg-white rounded-full"
            src={feetathome}
            alt="feelathomeLogo"
          />
          <div className="flex justify-between items-center gap-5">
            <input
              className="w-[500px] rounded-2xl p-2.5 bg-white"
              placeholder="Subscribe"
            />
            <button className="bg-[#E7C873] p-2.5 px-4 rounded-2xl text-white font=roboto">
              Send
            </button>
          </div>
        </div>
        <hr className="w-full text-white" />
        <div className="flex justify-around items-center py-5">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl text-white">Follow Us</h2>
            <div className="flex justify-center items-center gap-2">
              <img src={facebooklogo} alt="facebooklogo" />
              <img src={IGlogo} alt="Instagram logo" />
              <img src={Linkedinlogo} alt="LinkedinLogo" />
            </div>
          </div>
          <ul className="text-white">
            <li className="font-bold mb-5">Discover</li>
            <li className="mt-5">Lagos</li>
            <li>Oyo</li>
            <li>Abuja</li>
            <li>Ilorin</li>
            <li>Ekiti</li>
          </ul>
          <ul className="text-white">
            <li className="font-bold mb-5">Quick Links</li>
            <li>About</li>
            <li>Contact</li>
            <li>FAQ's</li>
            <li>Blog</li>
            <li>Pricing Plan</li>
            <li>Privacy Policy</li>
            <li>Terms And Condition</li>
            <li></li>
          </ul>
          <ul className="text-white">
            <li className="font-bold mb-5">Quick Links</li>
            <li>About</li>
            <li>Contact</li>
            <li>FAQ's</li>
            <li>Blog</li>
            <li>Pricing Plan</li>
            <li>Privacy Policy</li>
            <li>Terms And Condition</li>
            <li></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
