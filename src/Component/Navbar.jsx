import React, { useEffect, useState } from "react";
import FeelAtHomeLogo from "../assets/feelathome.png";
import phoneLogo from "../assets/phone.png";
import userLogo from "../assets/user.png";
import greenUserLogo from "../assets/green user.png";
import hamburger from "../assets/icons8-menu-50.png";
import Xicon from "../assets/icons8-x-96.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import { dataBase } from "../../Firebase";
import { doc, getDoc } from "firebase/firestore";
const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userStatus, setUserStatus] = useState(null);
  const [displayClass, setDisplayClas] = useState("");

  const scrollToListing = () => {
    const aboutSection = document.getElementById("listing");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFeatured = () => {
    const skillsSection = document.getElementById("featured");
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProperties = () => {
    const portFolioSection = document.getElementById("properties");
    portFolioSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user !== null);
    });
    return unsubscribe;
  }, []);

  const fetchUserdata = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(dataBase, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUserStatus(userData.status);
        }
      }
    });
  };

  useEffect(() => {
    fetchUserdata();
  }, []);

  function toggleSidebar() {
    setDisplayClas(displayClass === "active" ? "" : "active");
  }

  const handleUserClick = () => {
    navigate("/signin");
  };
  const handleHomeClick = () => {
    navigate("/");
  };

  const handleAddproperty = () => {
    navigate("/listform");
  };

  const handleProfileCheck = () => {
    navigate("/profile");
  };

  return (
    <>
      <div className="bg-[#E7C873] sticky z-50 left-0 right-0 bottom-0 top-0 flex justify-between items-center gap-5 py-8 w-full h-15 mx-auto  px-2 font-display">
        <div className="flex justify-center items-center gap-1">
          <img
            className="w-[120px] cursor-pointer"
            onClick={handleHomeClick}
            src={FeelAtHomeLogo}
            alt="Feelathome"
          />
          <button
            onClick={
              userStatus === "LANDLORD" || userStatus === "AGENT"
                ? handleAddproperty
                : handleUserClick
            }
            className="font-bold text-white rounded-4xl py-1.5 px-4 border-4 border-solid border-[#1F4B43] hover:bg-[#1F4B43] hover:text-[#E7C873] cursor-pointer max-[550px]:hidden"
          >
            List Property
          </button>
        </div>
        <div
          className={`${
            displayClass === "active" ? "block" : "hidden"
          } min-[1050px]:block max-[1050px]:absolute top-15 right-0`}
        >
          <ul className=" font-bold flex justify-center items-center gap-10 font-display   text-white text-lg max-[1050px]:flex max-[1050px]:flex-col max-[1050px]:p-10 max-[1050px]:bg-[#E7C873]">
            <li
              className="cursor-pointer hover:text-[#1F4B43]"
              onClick={handleHomeClick}
            >
              Home
            </li>
            <li
              onClick={scrollToListing}
              className="cursor-pointer hover:text-[#1F4B43]"
            >
              Listings
            </li>
            <li
              onClick={scrollToFeatured}
              className="cursor-pointer hover:text-[#1F4B43]"
            >
              Featured
            </li>
            <li
              onClick={scrollToProperties}
              className="cursor-pointer hover:text-[#1F4B43]"
            >
              Properties
            </li>
            <li
              onClick={scrollToContact}
              className="cursor-pointer hover:text-[#1F4B43]"
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2 px-3 ">
          <img
            className="max-[1050px]:hidden"
            src={phoneLogo}
            alt="Phonelogo"
          />
          <h4 className=" text-white font-bold hover:text-[#1F4B43] max-[1050px]:hidden ">
            +2348110110111
          </h4>
          <img
            onClick={isLoggedIn ? handleProfileCheck : handleUserClick}
            className="cursor-pointer"
            src={isLoggedIn ? greenUserLogo : userLogo}
            alt="userlogo"
          />
          <img
            onClick={toggleSidebar}
            className="w-10 h-10 hidden max-[1050px]:block mr-1"
            src={displayClass === "active" ? Xicon : hamburger}
          />
        </div>
      </div>
    </>
  );
};
export default Navbar;
