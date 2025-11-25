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
import bedicon from "../assets/Icon 7.png";
import toileticon from "../assets/Icon 8.png";
import { Slide, Fade } from "react-awesome-reveal";

const Testimonial = () => {
  return (
    <>
      <section className="bg-[#F7F7F7]  mx-auto p-20 w-full font-display max-[600px]:px-5">
        <Slide direction="left">
          <div className="flex flex-wrap justify-around items-start mx-auto max-w-6xl px-4 py-8">
            <div className="w-full md:w-5/12 mb-8 md:mb-0 p-4">
              <h1 className="font-bold text-3xl md:text-4xl text-gray-900 leading-tight">
                What our customers are saying about us
              </h1>
              <p className="my-5 text-lg text-gray-600">
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose injected humour and the like.
              </p>
              <div className="flex items-center gap-8 mt-8">
                <div className="flex flex-col">
                  <p className="text-3xl font-extrabold text-[#1F4B43] text-center">
                    10m+
                  </p>
                  <p className="text-sm text-gray-500">Happy People</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-3xl font-extrabold text-[#1F4B43] text-center">
                    4.88
                  </p>
                  <p className="text-sm text-gray-500">Overall rating</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 relative bg-white p-6 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4">
                <img
                  className="w-14 h-14 rounded-full object-cover shadow"
                  src={blackImage1}
                  alt="blackimage"
                />

                <div>
                  <p className="font-bold text-xl text-gray-900">
                    Emmanuel Johnson
                  </p>
                  <span className="text-sm text-gray-500">Designer</span>
                </div>

                <div className="ml-auto">
                  <img
                    className="w-8 h-8 opacity-75"
                    src={remarkicon}
                    alt="remarkicon"
                  />
                </div>
              </div>

              <p className="mt-6 text-xl italic text-gray-700 leading-relaxed border-t pt-4">
                “Their knowledge of the market and attention to detail made the
                home buying process stress-free. I couldn't be happier with the
                outcome!”
              </p>

              <div className="flex justify-start gap-4 mt-8">
                <button className="p-3 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-colors shadow-lg">
                  &larr;
                </button>
                <button className="p-3 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors shadow-lg">
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </Slide>
        <Fade>
          <div className="mx-auto flex flex-col items-center py-10">
            <h2>Thousands of world’s leading companies trust Feelathome</h2>
            <div className="flex flex-wrap justify-between items-center mx-auto gap-30 mt-10  max-[500px]:flex-col">
              <img src={amazon} alt="amazon" />
              <img src={amd} alt="amd" />
              <img src={cisco} alt="cisco" />
              <img src={sportify} alt="sportify" />
              <img src={dropcom} alt="dropcom" />
              <img src={logitech} alt="logitech" />
            </div>
          </div>
        </Fade>
      </section>

      <div className=" mx-auto bg-[#1A1A1A] w-full my-0 p-20 relative font-display max-[600px]:px-5">
        <div className="mx-auto flex flex-col justify-center items-center gap-2">
          <h2 className="font-bold text-3xl text-white">Best Properties</h2>
          <p className="text-white text-sm">
            Connect with us and secure your property and the best price
          </p>
        </div>
        <Fade>
          <div className="mx-auto mt-10 p-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 gap-4 relative">
              <div className="md:col-span-1 md:row-span-2 relative h-96 md:h-full min-h-[300px]">
                <img
                  src={house4}
                  alt="house4"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="flex gap-2 my-2 absolute top-4 left-4 z-10">
                  <h3 className="bg-[#1F4B43] p-2 px-4 text-sm rounded-full uppercase text-white">
                    For Sale
                  </h3>
                  <h3 className="bg-[#E7C873] p-2 px-4 text-sm rounded-full uppercase text-black">
                    Featured
                  </h3>
                </div>

                <div className="text-white absolute bottom-4 left-4 flex flex-col bg-[#00000090] p-5 rounded-2xl z-10 max-w-[90%]">
                  <h2 className="text-xl font-semibold">Villa One Hyde Park</h2>
                  <span className="flex items-center gap-2 mt-1 ">
                    <img
                      className="bg-white p-2 rounded-full w-8 h-8 object-contain"
                      src={locationicon}
                      alt="locationicon"
                    />
                    <p className="text-white">23 Bala Avenue, Abuja</p>
                  </span>

                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                    <h3 className="text-lg font-bold">#50,000,000</h3>
                    <span className="flex items-center gap-2">
                      <img
                        className="bg-white p-2 rounded-full w-8 h-8 object-contain"
                        src={bedicon}
                        alt="bedicon"
                      />
                      <p>4 Beds</p>
                    </span>
                    <span className="flex items-center gap-2">
                      <img
                        className="bg-white p-2 rounded-full w-8 h-8 object-contain"
                        src={toileticon}
                        alt="toileticon"
                      />
                      <p>5 Toilets</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-1 h-96 lg:h-full min-h-[300px]">
                <img
                  src={house5}
                  alt="house5"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="md:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-2 h-96 lg:h-full min-h-[300px]">
                <div className="col-span-1">
                  <img
                    src={house6}
                    alt="house6"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <Slide direction="right">
                  <div className="col-span-1 w-full h-full p-6 flex flex-col justify-center bg-[#E7C873] rounded-2xl relative">
                    <h2 className="text-4xl font-bold">280+</h2>
                    <span className="block text-xl font-medium">
                      properties Available
                    </span>
                    <p className="mt-4 text-sm md:text-base">
                      Explore our wide variety of properties to find your dream
                      home today.
                    </p>
                    <img
                      src={whitearrow}
                      alt="whitearrow"
                      className="mt-4 absolute bottom-5 right-5 w-8 h-8"
                    />
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Testimonial;
