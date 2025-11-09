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

        <div className="mx-auto flex justify-center items-center  mt-50 bg-white p-20 gap-10  rounded-xl relative">
          <div className="grid grid-cols-2 gap-5 w-[600px] h-[500px] relative">
            <img
              className="w-[320px] h-40 rounded-xl absolute top-0 left-0"
              src={house1}
              alt="house1"
            />
            <img
              className="w-[250px] h-70 rounded-xl absolute top-43 left-55"
              src={house2}
              alt="house2"
            />
            <img
              className="w-[200px] h-40 rounded-xl absolute top-43 left-0"
              src={house3}
              alt="house3"
            />
          </div>
          <div className="bg-white w-[200px] rounded-2xl p-3 flex items-center gap-2 absolute top-53 left-95">
            <img
              className="w-[30px] bg-green-200 rounded-4xl p-2"
              src={feelathome}
              alt="feelathome"
            />
            <span>
              <p>Properties for Sale</p>
              <h2 className="font-bold">14K</h2>
            </span>
          </div>

          <div>
            <h2 className="font-bold text-2xl">How it Works?</h2>
            <h2 className="font-bold text-2xl">Find Perfect Home</h2>

            <div className="flex items-center gap-2 mt-4 ">
              <img
                className="bg-yellow-400 p-2 rounded-4xl"
                src={houseicon1}
                alt="houseicon1"
              />
              <h3 className="text-sm">Find Real Estate</h3>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <img
                className="bg-yellow-400 p-2 rounded-4xl"
                src={houseicon2}
                alt="houseicon1"
              />
              <h3>Meet Realtor</h3>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <img
                className="bg-yellow-400 p-2 rounded-4xl"
                src={houseicon3}
                alt="houseicon1"
              />
              <h3>Take The Keys</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default City;
