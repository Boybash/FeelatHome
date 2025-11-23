import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import icon7 from "../assets/Icon 7.png";
import icon8 from "../assets/Icon 8.png";
import icon9 from "../assets/Icon 9.png";
import arrow from "../assets/arrow.png";
import whiteArrow from "../assets/white arrow.png";
import { SearchContext } from "./SearchContext";
import { useContext } from "react";
import { dataBase } from "../../Firebase";
import { Fade } from "react-awesome-reveal";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
const Property = () => {
  const { searchTerm } = useContext(SearchContext);
  let [currentPage, setCurrentPage] = useState(1);
  const [allProperties, setAllProperties] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProperty = async () => {
      const querySnapshot = await getDocs(collection(dataBase, "listing"));
      const propertyData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllProperties(propertyData);
    };
    fetchProperty();
  }, []);

  const typeFilteredProperties = allProperties.filter((property) => {
    if (activeFilter === "All") {
      return true;
    }
    return property.typeoflisting === activeFilter;
  });

  const searchFilteredProperties = typeFilteredProperties.filter((property) => {
    const propertyData =
      `${property.title} ${property.Author} ${property.typeoflisting} ${property.propertytype} ${property.city} ${property.state}`.toLowerCase();
    return propertyData.includes(searchTerm.toLowerCase());
  });

  const itemsToPaginate = searchFilteredProperties;
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
  }, [searchTerm, activeFilter]);

  function handlePropertyDetails(propertyId) {
    navigate(`/propertydetails/${propertyId}`);
  }

  function handleForSale() {
    setActiveFilter("For Sale");
    setCurrentPage(1);
  }

  function handleForRent() {
    setActiveFilter("For Rent");
    setCurrentPage(1);
  }

  function handleAllProperties() {
    setActiveFilter("All");
    setCurrentPage(1);
  }

  return (
    <>
      <Fade>
        <section
          id="listing"
          className="bg-[#F7F7F7] flex flex-col justify-center items-center mx-auto py-20 w-full font-display"
        >
          <div className="mx-auto text-center my-0">
            <h2 className="my-1 font-bold text-3xl">Listed Properties</h2>
            <p>Check out all the Listed properties available</p>
          </div>
          <ul className="flex justify-center items-center gap-5 mx-auto my-5 max-[410px]:flex-col">
            <li
              onClick={handleAllProperties}
              className="rounded-4xl border-2 border-solid border-[#1F4B43] py-2 px-4 cursor-pointer bg-[#1F4B43] text-white"
            >
              All Properties
            </li>
            <li
              onClick={handleForSale}
              className="rounded-4xl border-2 border-solid border-[#1F4B43] py-2 px-4 cursor-pointer bg-[#1F4B43] text-white "
            >
              For Sale
            </li>
            <li
              onClick={handleForRent}
              className="rounded-4xl border-2 border-solid border-[#1F4B43] py-2 px-4 bg-[#1F4B43] text-white cursor-pointer"
            >
              For Rent
            </li>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mx-auto max-w-7xl w-full my-10 px-4">
            {currentItems.map((property) => (
              <div
                key={property.id}
                className="relative group cursor-pointer w-full max-w-sm shadow-lg rounded-xl overflow-hidden transition duration-300 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    className="w-full h-64 object-cover rounded-t-xl"
                    src={property.images}
                    alt={property.title}
                  />

                  <div className="flex gap-2 my-2 absolute top-2 left-2 z-10">
                    <h2 className="bg-[#1F4B43] p-1.5 px-3 text-xs rounded-full uppercase text-white font-medium">
                      {property.typeoflisting}
                    </h2>
                    <h2 className="bg-[#E7C873] p-1.5 px-3 text-xs rounded-full uppercase text-black font-medium">
                      {property.propertytype}
                    </h2>
                  </div>

                  <div
                    onClick={() => {
                      handlePropertyDetails(property.id);
                    }}
                    className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <img
                      src={whiteArrow}
                      alt="View Details Arrow"
                      className="w-15 h-15 p-2 bg-black/50 rounded-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 bg-[#E7C873] w-full rounded-b-xl p-4">
                  <div>
                    <h1 className="text-xl font-bold">{property.title}</h1>
                    <div className="mt-1">
                      <h2 className="text-sm text-gray-700">
                        {property.city}, {property.state}
                      </h2>
                      <h1 className="text-lg font-extrabold text-[#EB664E] mt-1">
                        #{property.price}/{property.duration}
                      </h1>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-3 text-sm">
                      <div className="flex items-center gap-1">
                        <img
                          src={icon9}
                          alt="Location Icon"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <img
                          src={icon7}
                          alt="Bedroom Icon"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">
                          {property.bedroom} Rooms
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <img
                          src={icon8}
                          alt="Toilet Icon"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">
                          {property.toilet} Toilets
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-5 mt-5 max-[600px]:flex-col">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`flex justify-center items-center gap-1 mb-10 bg-[#E7C873] py-2 px-4 w-[200px] mx-auto rounded-4xl cursor-pointer max-[600px]:mb-2 ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={indexOfLastItem >= itemsToPaginate.length}
              className={`flex justify-center items-center gap-1 mb-10 bg-[#E7C873] py-2 px-4 w-[200px] mx-auto rounded-4xl cursor-pointer ${
                indexOfLastItem >= itemsToPaginate.length
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Next
            </button>
          </div>
        </section>
      </Fade>
    </>
  );
};

export default Property;
