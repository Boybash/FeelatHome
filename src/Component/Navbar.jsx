import React from "react";
import FeelAtHomeLogo from "../assets/feelathome.png";
import phoneLogo from "../assets/phone.png";
import userLogo from "../assets/user.png";
const Navbar = () => {
  return (
    <>
      <section>
        <div className="bg-white absolute top-5 left-0 right-0 flex justify-between items-center gap-5 py-0 w-[1500px] h-15 mx-auto rounded-4xl px-2 ">
          <div className="flex justify-center items-center gap-1">
            <img className="w-[120px]" src={FeelAtHomeLogo} alt="Feelathome" />
            <button className="rounded-4xl py-1.5 px-4 border-2 border-solid border-[#1F4B43]">
              Add Property
            </button>
          </div>
          <div>
            <ul className="flex justify-center items-center gap-10 font-roboto">
              <li>Home</li>
              <li>Listings</li>
              <li>Members</li>
              <li>Pages</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-2 px-3">
            <img src={phoneLogo} alt="Phonelogo" />
            <h4>+2348110110111</h4>
            <img className="cursor-pointer" src={userLogo} alt="userlogo" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Navbar;
