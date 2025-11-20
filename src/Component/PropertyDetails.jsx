import React, { useState } from "react";
import { dataBase } from "../../Firebase";
import { auth } from "../../Firebase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import icon7 from "../assets/Icon 7.png";
import icon8 from "../assets/Icon 8.png";
import feelathomeLogo from "../assets/feelathome.png";
import xicon from "../assets/xicon.png";
import icon9 from "../assets/Icon 9.png";
const PropertyDetails = () => {
  const { propertyId } = useParams();
  const [propertyDetails, setPropertyDetails] = useState(null);
  const [closeModal, setCloseModal] = useState("");
  const [booking, setBooking] = useState("");
  const [isVerify, setIsVerifying] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      const docRef = doc(dataBase, "listing", propertyId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPropertyDetails(docSnap.data());
      } else {
        console.warn("No such post found for ID:", propertyId);
        setPropertyDetails(null);
      }
    };
    fetchPropertyDetails();
  }, [propertyId]);

  function handleCloseModal() {
    setCloseModal(true);
    setBooking(false);
    setIsVerifying(false);
  }

  function handleShowModal() {
    setBooking(true);
    setCloseModal(false);
    setIsVerifying(false);
  }
  function handleVerification() {
    setIsVerifying(true);
    setBooking(false);
    setCloseModal(false);
  }
  function handleProfileCheck(creatorId) {
    navigate(`/creatorprofile/${creatorId}`);
  }

  return (
    <>
      <section className="bg-[#F7F7F7] mx-auto p-20 w-full flex flex-col gap-10 font-display max-[550px]:px-5">
        {!propertyDetails ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto my-8 shadow-2xl rounded-xl">
            <div className="relative w-full md:w-1/2">
              <img
                className="w-full min-h-[600px] h-auto object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl md:h-full"
                src={propertyDetails.images}
                alt="propertyImage"
              />
              <div className="flex gap-2 my-2 absolute top-2 left-2">
                <h1 className="bg-[#1F4B43] p-2 px-4 text-xs md:text-sm rounded-full uppercase text-white">
                  {propertyDetails.typeoflisting}
                </h1>
                <h1 className="bg-[#E7C873] p-2 px-4 text-xs md:text-sm rounded-full uppercase text-black">
                  {propertyDetails.propertytype}
                </h1>
              </div>
            </div>
            <div className="w-full md:w-1/2 min-h-[600px] bg-[#E7C873] flex flex-col gap-2 p-5 rounded-b-xl md:rounded-bl-none md:rounded-r-xl">
              <h1 className="text-xl font-bold mb-2">
                {propertyDetails.title}
              </h1>
              <h1 className="text-sm">
                <span className="font-semibold">Description:</span>{" "}
                {propertyDetails.description}
              </h1>
              <h1 className="text-sm">
                <span className="font-semibold">City:</span>{" "}
                {propertyDetails.city}
              </h1>
              <h1 className="text-sm">
                <span className="font-semibold">State:</span>{" "}
                {propertyDetails.state}
              </h1>
              <h1 className="text-sm">
                <span className="font-semibold">Location:</span>{" "}
                {propertyDetails.location}
              </h1>
              <h1 className="text-lg font-extrabold text-[#EB664E]">
                #{propertyDetails.price}/{propertyDetails.duration}
              </h1>

              <div className="flex gap-4">
                <div className="flex items-center gap-1 text-xs">
                  <img src={icon7} className="w-4 h-4" alt="Bedroom Icon" />
                  <span className="text-sm">
                    {propertyDetails.bedroom} Rooms
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <img src={icon8} className="w-4 h-4" alt="Toilet Icon" />
                  <span className="text-sm">
                    {propertyDetails.toilet} Toilets
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="bg-[#1F4B43] p-2 px-4 text-sm rounded-full uppercase text-white text-center">
                  {propertyDetails.status}
                </h2>
                <button
                  onClick={handleShowModal}
                  className="font-bold border-4 border-[#1F4B43] p-3 rounded-xl w-full max-w-xs text-center text-[#1F4B43] hover:bg-[#1F4B43] hover:text-white transition duration-300 mx-auto cursor-pointer"
                >
                  Book For Inspection
                </button>
              </div>
            </div>
          </div>
        )}

        {booking && (
          <div
            className={`${
              closeModal ? "hidden" : ""
            }bg-[#00000090] fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center`}
          >
            <div
              className={`${
                closeModal ? "hidden" : ""
              } bg-[#E7C873] flex flex-col gap-1 justify-center items-center p-5 rounded-4xl w-[400px] relative max-[410px]:w-[300px]`}
            >
              <img
                className="w-[200px]"
                src={feelathomeLogo}
                alt="feelathomeLogo"
              />

              <div
                className={`flex flex-col justify-center items-center gap-4`}
              >
                <p className="text-green-600 font-bold text-2xl text-center">
                  Make Payment For Inspection
                </p>
                <div className="text-white items-center text-lg font-bold">
                  <p>Bank Transfer of #5,000</p>
                  <p>Account Number: 0938465525</p>
                  <p>Account Name: FeelatHome</p>
                  <p>Bank Name: GT Bank</p>
                </div>
                <button
                  onClick={handleVerification}
                  className="mb-4 font-bold border-4 border-[#1F4B43] p-2.5 rounded-2xl w-50 text-center text-white mx-auto cursor-pointer mt-2"
                >
                  Paid
                </button>
              </div>
              <img
                onClick={handleCloseModal}
                className="absolute top-2 right-2 w-10 cursor-pointer"
                src={xicon}
                alt="xicon"
              />
            </div>
          </div>
        )}

        {isVerify && (
          <div
            className={`${
              closeModal ? "hidden" : ""
            }bg-[#00000090] fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center`}
          >
            <div
              className={`${
                closeModal ? "hidden" : ""
              } bg-[#E7C873] flex flex-col gap-1 justify-center items-center p-5 rounded-4xl w-[400px] relative max-[410px]:w-[300px]`}
            >
              <img
                className="w-[200px]"
                src={feelathomeLogo}
                alt="feelathomeLogo"
              />
              <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="text-green-600 font-bold text-2xl text-center">
                  Verifying Payment.....
                </h1>
                <button
                  onClick={() => {
                    handleProfileCheck(propertyDetails.creatorId);
                  }}
                  className="mb-4 font-bold border-4 border-[#1F4B43] p-2.5 rounded-2xl w-50 text-center text-white mx-auto cursor-pointer mt-2"
                >
                  Make Contact
                </button>
              </div>

              <img
                onClick={handleCloseModal}
                className="absolute top-2 right-2 w-10 cursor-pointer"
                src={xicon}
                alt="xicon"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default PropertyDetails;
