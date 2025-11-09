import React from "react";
import blackImage1 from "../assets/black image 1.jpeg";
import blackImage2 from "../assets/black image 2.jpeg";
import remarkicon from "../assets/remark icon.png";
import amazon from "../assets/amazon.png";
import amd from "../assets/amd.png";
import cisco from "../assets/cisco.png";
import sportify from "../assets/spotify.png";
import dropcom from "../assets/dropcom.png";
import logitech from "../assets/logitech.png";
import buttonleftarrow from "../assets/Button left arrow.png";
import buttonrightarrow from "../assets/Button right arrow.png";
import house4 from "../assets/house 4.jpg";
import house5 from "../assets/house 5.jpg";
import house6 from "../assets/house 6.jpg";
import whitearrow from "../assets/white arrow.png";
import locationicon from "../assets/icon 9.png";
import bedicon from "../assets/icon 7.png";
import toileticon from "../assets/icon 8.png";

const Testimonial = () => {
  return (
    <>
      <section className="bg-[#F7F7F7]  mx-auto p-20 w-full font-display">
        <div className="flex justify-around items-center mx-auto">
          <div className=" w-[300px] h-[400px]">
            <h1 className="font-bold text-2xl">
              What our customers are saying about us
            </h1>
            <p className="my-5">
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose injected humour and the like.
            </p>

            <div className="flex items-center gap-5">
              <div className="flex flex-col">
                <p className="text-xl font-bold text-center">10m+</p>
                <p>Happy People</p>
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-bold text-center">4.88</p>
                <p>Overall rating</p>
              </div>
            </div>
          </div>

          <div className="w-[400px] h-[400px] relative">
            <div>
              <img
                className="absolute top-50 left-0 cursor-pointer"
                src={buttonleftarrow}
                alt="buttonleftarrow"
              />
              <img
                className="absolute top-50 left-20 cursor-pointer"
                src={buttonrightarrow}
                alt="buttonrightarrow"
              />
            </div>
            <div className="flex  items-center gap-3">
              <img
                className="w-[50px] rounded-4xl"
                src={blackImage1}
                alt="blackimage"
              />

              <div>
                <p className="font-bold text-xl">Emmanuel Johnson</p>
                <span className="text-sm">Designer</span>
              </div>

              <div>
                <img
                  className="w-[25px] ml-10"
                  src={remarkicon}
                  alt="remarkicon"
                />
              </div>
            </div>

            <p className="mt-5">
              Their knowledge of the market and attention to detail made the
              home buying process stress-free. I couldn't be happier with the
              outcome!
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-col items-center">
          <h2>Thousands of world’s leading companies trust Space</h2>
          <div className="flex justify-between items-center mx-auto gap-30 mt-10">
            <img src={amazon} alt="amazon" />
            <img src={amd} alt="amd" />
            <img src={cisco} alt="cisco" />
            <img src={sportify} alt="sportify" />
            <img src={dropcom} alt="dropcom" />
            <img src={logitech} alt="logitech" />
          </div>
        </div>
      </section>
      <div className=" mx-auto bg-[#1A1A1A] w-full my-0 p-20 relative font-display">
        <div className="mx-auto flex flex-col justify-center items-center gap-2">
          <h2 className="font-bold text-3xl text-white">Best Properties</h2>
          <p className="text-white text-sm">
            Connect with us and secure your property and the best price
          </p>
        </div>
        <div className="grid grid-cols-[685px_685px] grid-rows-[334px_334px] gap-4 mt-10 mx-auto relative">
          <div className="col-span-1 row-span-2">
            <img
              src={house4}
              alt="house4"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={house5}
              alt="house5"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="col-span-1 row-span-1 grid grid-cols-2 gap-4">
            <img
              src={house6}
              alt="house6"
              className="w-full h-full object-cover col-span-1 rounded-2xl"
            />
            <div className="w-full h-full p-4 flex flex-col justify-center bg-[#E7C873] rounded-2xl relative">
              <h2 className="text-3xl font-bold">280+</h2>
              <span className="block">properties Available</span>
              <p className="mt-10">
                Explore our wide variety of properties to find your dream home
                today.
              </p>
              <img
                src={whitearrow}
                alt="whitearrow"
                className="mt-4 absolute top-60 right-5"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 my-2 absolute top-48 left-25">
          <h3 className="bg-[#1F4B43] p-2 px-4 text-sm rounded-4xl uppercase text-white">
            For Sale
          </h3>
          <h3 className="bg-[#E7C873] p-2 px-4 text-sm rounded-4xl uppercase text-black">
            Featured
          </h3>
        </div>
        <div className=" text-white absolute bottom-25 left-25 flex flex-col bg-[#00000090] p-5 rounded-2xl">
          <h2>Villa One Hyde Park</h2>
          <span className="flex items-center gap-2 mt-1 ">
            <img
              className="bg-white p-2 rounded-4xl"
              src={locationicon}
              alt="locationicon"
            />
            <p className="text-white">23 Bala Avenue, Abuja</p>
          </span>

          <div className="flex items-center gap-3 mt-2">
            <h3>#50,000,000</h3>
            <span className="flex items-center gap-2">
              <img
                className="bg-white p-2 rounded-4xl"
                src={bedicon}
                alt="bedicon"
              />
              <p>4 Beds</p>
            </span>
            <span className="flex items-center gap-2">
              <img
                className="bg-white p-2 rounded-4xl"
                src={toileticon}
                alt="bedicon"
              />
              <p>5 Toilets</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
