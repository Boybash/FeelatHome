import React from "react";
import city1 from "../assets/city 1.png";
import city2 from "../assets/city 2.jpg";
import city3 from "../assets/city 3.avif";
import city4 from "../assets/city 4.webp";
import city5 from "../assets/city 5.png";
import house1 from "../assets/house 1.webp";
import house2 from "../assets/house 2.webp";
import house3 from "../assets/house 3.jpg";
import houseicon1 from "../assets/house icon 1.png";
import houseicon2 from "../assets/house icon 2.png";
import houseicon3 from "../assets/house icon 3.png";
import feelathome from "../assets/feelathome.png";

const City = () => {
  const Cities = [
    {
      Image: city1,
      location: "Abuja",
      property: "1 property",
    },
    {
      Image: city2,
      location: "Lagos",
      property: "1 property",
    },
    {
      Image: city3,
      location: "Ibadan",
      property: "1 property",
    },
    {
      Image: city4,
      location: "Portharcourt",
      property: "1 property",
    },
    {
      Image: city5,
      location: "Kano",
      property: "1 property",
    },
  ];
  return (
    <>
      <section className="bg-[#F7F7F7] w-full p-3 md:p-10 lg:p-10 mx-auto font-display">
        <div>
          <h2 className="text-3xl text-center font-bold">
            Find Properties in These Cities
          </h2>
          <p className="text-sm text-center mt-1">
            Explore and Find the Home of Your Choice
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
          {Cities.map((city, index) => (
            <div key={index} className="relative">
              <img
                src={city.Image}
                alt={city.location}
                className="w-full h-100 object-cover rounded-lg mt-5"
              />

              <div className=" absolute top-8 left-2 text-white bg-[#00000090] bg-opacity-50 py-1 px-5 rounded-lg">
                <h3 className="text-xl font-semibold">{city.location}</h3>
                <p className="text-white t">{city.property}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center mt-10 max-w-6xl bg-white p-4 md:p-10 gap-10 rounded-xl">
          {/* 1. Responsive Image Gallery (Flexes to occupy available space) */}
          <div className="relative w-full max-w-xl">
            {/* CSS Grid for Image Layout (4 total slots: 2x2 grid) */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[400px] md:h-[500px]">
              {/* House 1: Top Left - Spans 1 row, 1 column */}
              <img
                className="w-full h-full object-cover rounded-xl col-span-1 row-span-1"
                src={house1}
                alt="house1"
              />

              {/* House 2: Top Right - Spans 1 column, 1 row */}
              <img
                className="w-full h-full object-cover rounded-xl col-span-1 row-span-1"
                src={house2}
                alt="house2"
              />

              {/* House 3: Bottom Left - Spans 1 column, 1 row */}
              <img
                className="w-full h-full object-cover rounded-xl col-span-1 row-span-1"
                src={house3}
                alt="house3"
              />

              {/* Stats Card (Bottom Right - Occupies the final grid slot) */}
              <div className="bg-white rounded-2xl p-3 flex items-center gap-2 w-full h-full justify-center shadow-lg">
                <img
                  className="w-8 h-8 md:w-10 md:h-10 bg-green-200 rounded-full p-2 object-contain"
                  src={feelathome}
                  alt="feelathome"
                />
                <span>
                  <p className="text-xs md:text-sm text-gray-600">
                    Properties for Sale
                  </p>
                  <h2 className="font-bold text-xl md:text-2xl">14K</h2>
                </span>
              </div>
            </div>
          </div>

          {/* 2. Text Content & Steps (Full width on mobile, side-by-side on large) */}
          <div className="w-full max-w-md lg:w-auto mt-10 lg:mt-0">
            <h2 className="font-bold text-3xl mb-4 leading-snug">
              How it Works? <br /> **Find Perfect Home**
            </h2>

            {/* Step 1 */}
            <div className="flex items-center gap-4 mt-6">
              <img
                className="w-10 h-10 bg-yellow-400 p-2 rounded-full object-contain"
                src={houseicon1}
                alt="Find Real Estate Icon"
              />
              <h3 className="text-base font-semibold">Find Real Estate</h3>
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-4 mt-4">
              <img
                className="w-10 h-10 bg-yellow-400 p-2 rounded-full object-contain"
                src={houseicon2}
                alt="Meet Realtor Icon"
              />
              <h3 className="text-base font-semibold">Meet Realtor</h3>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-4 mt-4">
              <img
                className="w-10 h-10 bg-yellow-400 p-2 rounded-full object-contain"
                src={houseicon3}
                alt="Take The Keys Icon"
              />
              <h3 className="text-base font-semibold">Take The Keys</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default City;
