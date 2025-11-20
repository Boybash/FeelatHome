import React from "react";
import property1 from "../assets/property 1.png";
import property2 from "../assets/property 2.png";
import property3 from "../assets/property 3.png";
import property4 from "../assets/property 4.png";
import property5 from "../assets/property 5.png";
import property6 from "../assets/property 6.png";
import icon7 from "../assets/Icon 7.png";
import icon8 from "../assets/Icon 8.png";
import icon9 from "../assets/Icon 9.png";
import arrow from "../assets/arrow.png";
import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { useEffect } from "react";
import { useState } from "react";
const Features = () => {
  const { searchTerm } = useContext(SearchContext);
  let [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const properties = [
    {
      id: 1,
      image: property1,
      title: "Modern Apartment",
      price: "#200,000/mo",
      location: "Lagos, Nigeria",
      roomImages: icon7,
      rooms: "3",
      toiletImages: icon8,
      toilets: "2",
      areaImages: icon9,
      area: "1500 sqft",
      status: "For Rent",
    },
    {
      id: 2,
      image: property2,
      title: "Luxury Villa",
      price: "#150,000/mo",
      location: "Abuja, Nigeria",
      roomImages: icon7,
      rooms: "4",
      toiletImages: icon8,
      toilets: "3",
      areaImages: icon9,
      area: "2500 sqft",
      status: "For Rent",
    },
    {
      id: 3,
      image: property3,
      title: "Cozy Townhouse",
      price: "#100,000/mo",
      location: "Port Harcourt, Nigeria",
      roomImages: icon7,
      rooms: "2",
      toiletImages: icon8,
      toilets: "1",
      areaImages: icon9,
      area: "1200 sqft",
      status: "For Sale",
    },
    {
      id: 4,
      image: property4,
      title: "Spacious Bungalow",
      price: "#300,000/mo",
      location: "Kano, Nigeria",
      roomImages: icon7,
      rooms: "5",
      toiletImages: icon8,
      toilets: "4",
      areaImages: icon9,
      area: "3000 sqft",
      status: "For Sale",
    },
    {
      id: 5,
      image: property5,
      title: "Downtown Condo",
      price: "#400,000/yr",
      location: "Ibadan, Nigeria",
      roomImages: icon7,
      rooms: "3",
      toiletImages: icon8,
      toilets: "2",
      areaImages: icon9,
      area: "1800 sqft",
      status: "For Sale",
    },
    {
      id: 6,
      image: property6,
      title: "Suburban Home",
      price: "#500,000/yr",
      location: "Enugu, Nigeria",
      roomImages: icon7,
      rooms: "4",
      toiletImages: icon8,
      toilets: "3",
      areaImages: icon9,
      area: "2200 sqft",
      status: "For Rent",
    },
  ];

  const searchFilteredProperty = properties.filter((property) => {
    const propertyData =
      `${property.title} ${property.Author} ${property.typeoflisting} ${property.propertytype} ${property.location}`.toLowerCase();
    return propertyData.includes(searchTerm.toLowerCase());
  });

  const itemsToPaginate = searchTerm ? searchFilteredProperty : properties;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itemsToPaginate.slice(indexOfFirstItem, indexOfLastItem);

  function handleNextPage() {
    if (currentPage < Math.ceil(itemsToPaginate.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <section
      id="featured"
      className="bg-[#F7F7F7] mx-auto py-5 w-full font-display"
    >
      <div className="mx-auto text-center my-0">
        <h2 className="my-1 font-bold text-3xl">Featured Properties</h2>
        <p>Check out all the properties available</p>
      </div>
      <ul className="flex justify-center items-center gap-5 mx-auto my-5 max-[410px]:flex-col">
        <li className="rounded-4xl border-2 border-solid border-[#1F4B43] py-2 px-4 cursor-pointer bg-[#1F4B43] text-white">
          All Properties
        </li>
        <li className="rounded-4xl border-2 border-solid border-[#1F4B43] py-2 px-4 cursor-pointer bg-[#1F4B43] text-white ">
          For Sale
        </li>
        <li className="rounded-4xl border-2 border-solid border-[#1F4B43] py-2 px-4 bg-[#1F4B43] text-white cursor-pointer">
          For Rent
        </li>
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mx-auto max-w-7xl w-full my-10 px-4">
        {currentItems.map((property) => (
          <div
            key={property.id}
            className="relative cursor-pointer w-full max-w-sm shadow-lg rounded-xl overflow-hidden transition duration-300 hover:shadow-xl"
          >
            <div className="relative">
              <img
                className="w-full h-64 object-cover rounded-t-xl"
                src={property.image}
                alt={property.title}
              />

              <div className="flex gap-2 my-2 absolute top-2 left-2 z-10">
                <h3 className="bg-[#1F4B43] p-1.5 px-3 text-xs rounded-full uppercase text-white font-medium">
                  {property.status}
                </h3>
                <h3 className="bg-[#E7C873] p-1.5 px-3 text-xs rounded-full uppercase text-black font-medium">
                  Featured
                </h3>
              </div>
            </div>

            <div className="flex flex-col justify-center items-start bg-[#E7C873] w-full rounded-b-xl p-3">
              <div>
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <p className="text-sm text-gray-700">{property.location}</p>
                <h2 className="text-xl font-bold text-[#EB664E] mt-1">
                  {property.price}
                </h2>
              </div>

              <div className="flex flex-wrap gap-4 mt-3 text-sm">
                <div className="flex items-center gap-1">
                  <img
                    src={property.areaImages}
                    alt="area icon"
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{property.area}</span>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src={property.roomImages}
                    alt="room icon"
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{property.rooms} Rooms</span>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src={property.toiletImages}
                    alt="toilet icon"
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{property.toilets} Toilet</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center flex-wrap gap-5 mx-auto items-center mt-5">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={` mb-10 bg-[#E7C873] py-2 px-4 w-50 rounded-4xl cursor-pointer ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={indexOfLastItem >= itemsToPaginate.length}
          className={`mb-10 bg-[#E7C873] py-2 px-4 w-50 rounded-4xl cursor-pointer ${
            indexOfLastItem >= itemsToPaginate.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Features;
