import React, { useState } from "react";
import * as yup from "yup";
import { auth } from "../../Firebase";
import { dataBase } from "../../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import feelathomeLogo from "../assets/feelathome.png";
import xicon from "../assets/xicon.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const ListForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errorMessages, setErrorMessages] = useState({});
  const [closeModal, setCloseModal] = useState("");
  const [listFormData, setListFormData] = useState({
    typeoflisting: "",
    propertytype: "",
    images: [],
    title: "",
    status: "",
    duration: "",
    description: "",
    price: "",
    location: "",
    city: "",
    state: "",
    bedroom: "",
    toilet: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  function handleChange(e) {
    if (e.target.name === "images") {
      const files = Array.from(e.target.files);
      const readers = files.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(file);
        });
      });

      Promise.all(readers).then((images) => {
        setListFormData({ ...listFormData, images });
      });
    } else {
      setListFormData({ ...listFormData, [e.target.name]: e.target.value });
    }
    console.log(listFormData);
  }

  const schema = yup.object().shape({
    typeoflisting: yup.string().required("Type of listing is required"),
    propertytype: yup.string().required("Property type is required"),
    images: yup.array().min(1, "At least one image is required"),
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    price: yup.string().required("Price is required"),
    location: yup.string().required("Location is required"),
    city: yup.string().required("City is required"),
    status: yup.string().required("Status is required"),
    duration: yup.string().required("Status is required"),
    state: yup.string().required("State is required"),
    bedroom: yup.string().required("Number of bedrooms is required"),
    toilet: yup.string().required("Number of toilets is required"),
  });

  async function handleListProperty(e) {
    e.preventDefault();
    try {
      await schema.validate(listFormData, { abortEarly: false });
      setSubmissionStatus(true);
      setErrorMessages({});
      const user = auth.currentUser;
      if (user) {
        const addProperty = async () => {
          try {
            await addDoc(collection(dataBase, "listing"), {
              ...listFormData,
              creatorId: auth.currentUser.uid,
            });
            setSubmissionStatus(true);
            window.location.href = "/";
            await new Promise((resolve) => setTimeout(resolve, 500));
          } catch (error) {
            console.error("Error adding document: ", error);
          }
        };
        addProperty();
      }
    } catch (error) {
      const errors = {};
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
      setErrorMessages(errors);
      setSubmissionStatus(false);
    }
  }

  function handleCloseModal() {
    setCloseModal("closemodal");
  }

  return (
    <>
      <section className="bg-[#F7F7F7] mx-auto p-20 w-full flex flex-col gap-10 font-display max-[600px]:px-5">
        <form
          onSubmit={handleListProperty}
          className="flex flex-col lg:flex-row justify-center items-stretch w-full max-w-6xl mx-auto p-4"
        >
          <div className="bg-[#1F4B43] flex flex-col p-6 lg:p-10 rounded-4xl w-full lg:w-1/2 relative">
            <select
              onChange={handleChange}
              name="typeoflisting"
              className="w-full p-4 outline-0 bg-white rounded-2xl mt-5"
            >
              <option>TYPE OF LISTING</option>
              <option value="For Rent">FOR RENT</option>
              <option value="For Sale">FOR SALE</option>
            </select>
            {errorMessages.typeoflisting && (
              <p className="text-red-400 text-sm mt-1">
                {errorMessages.typeoflisting}
              </p>
            )}
            <select
              onChange={handleChange}
              name="propertytype"
              className="w-full p-4 outline-0 bg-white rounded-2xl mt-5"
            >
              <option>PROPERTY TYPE</option>
              <option value="Apartment">APARTMENT</option>
              <option value="House">HOUSE</option>
              <option value="Condo">CONDO</option>
              <option value="Land">LAND</option>
              <option value="Commercial Property">COMMERCIAL PROPERTY</option>
            </select>
            {errorMessages.propertytype && (
              <p className="text-red-400 text-sm mt-1">
                {errorMessages.propertytype}
              </p>
            )}
            <input
              onChange={handleChange}
              className="w-full p-4 outline-0 bg-white rounded-2xl mt-5 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
              type="file"
              multiple
              name="images"
              accept=".jpg, .jpeg, .png, .gif"
            />
            {errorMessages.images && (
              <p className="text-red-400 text-sm mt-1">
                {errorMessages.images}
              </p>
            )}
            <input
              onChange={handleChange}
              className="w-full p-4 outline-0 bg-white rounded-2xl mt-5"
              type="text"
              name="title"
              placeholder="TITLE"
            />
            {errorMessages.title && (
              <p className="text-red-400 text-sm mt-1">{errorMessages.title}</p>
            )}
            <input
              onChange={handleChange}
              className="w-full p-4 outline-0 bg-white rounded-2xl mt-5"
              type="text"
              name="description"
              placeholder="DESCRIPTION"
            />
            {errorMessages.description && (
              <p className="text-red-400 text-sm mt-1">
                {errorMessages.description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row justify-between gap-5 mt-5 max-[640px]:gap-0">
              <div className="flex flex-col w-full sm:w-1/2">
                <input
                  onChange={handleChange}
                  className="w-full p-4 outline-0 bg-white rounded-2xl"
                  type="text"
                  name="price"
                  placeholder="PRICE IN NAIRA"
                />
                {errorMessages.price && (
                  <p className="text-red-400 text-sm mt-1">
                    {errorMessages.price}
                  </p>
                )}
              </div>
              <div className="flex flex-col w-full sm:w-1/2 mt-5 sm:mt-0">
                <select
                  onChange={handleChange}
                  name="duration"
                  className="w-full p-4 outline-0 bg-white rounded-2xl"
                >
                  <option>DURATION</option>
                  <option value="Year">PER YEAR</option>
                  <option value="Month">PER MONTH</option>
                  <option value="Week">PER WEEK</option>
                  <option value="Day">PER DAY</option>
                </select>
                {errorMessages.duration && (
                  <p className="text-red-400 text-sm mt-1">
                    {errorMessages.duration}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="bg-[#E7C873] flex flex-col p-6 lg:p-10 rounded-4xl w-full lg:w-1/2  lg:mt-0">
            <input
              onChange={handleChange}
              className="w-full p-4 outline-0 bg-white rounded-2xl mt-5"
              type="text"
              name="location"
              placeholder="LOCATION"
            />
            {errorMessages.location && (
              <p className="text-red-600">{errorMessages.location}</p>
            )}
            <input
              onChange={handleChange}
              className="w-full p-4 outline-0 bg-white rounded-2xl mt-5"
              type="text"
              name="city"
              placeholder="CITY"
            />
            {errorMessages.city && (
              <p className="text-red-600">{errorMessages.city}</p>
            )}
            <input
              onChange={handleChange}
              className="w-full p-4 outline-0 bg-white rounded-2xl mt-5"
              type="text"
              name="state"
              placeholder="STATE"
            />
            {errorMessages.state && (
              <p className="text-red-600">{errorMessages.state}</p>
            )}
            <select
              onChange={handleChange}
              name="status"
              className="w-full p-4 outline-0 bg-white rounded-2xl mt-5"
            >
              <option>STATUS</option>
              <option value="Agent">AGENT</option>
              <option value="Landlord">LANDLORD</option>
            </select>
            {errorMessages.status && (
              <p className="text-red-600">{errorMessages.status}</p>
            )}
            <div className="flex flex-col sm:flex-row justify-between gap-5 mt-5 max-[640px]:gap-0">
              <div className="flex flex-col w-full sm:w-1/2">
                <input
                  onChange={handleChange}
                  className="w-full p-4 outline-0 bg-white rounded-2xl"
                  type="number"
                  name="bedroom"
                  placeholder="NUMBER OF BEDROOM"
                />
                {errorMessages.bedroom && (
                  <p className="text-red-600">{errorMessages.bedroom}</p>
                )}
              </div>
              <div className="flex flex-col w-full sm:w-1/2 mt-5 sm:mt-0">
                <input
                  onChange={handleChange}
                  className="w-full p-4 outline-0 bg-white rounded-2xl"
                  type="number"
                  name="toilet"
                  placeholder="NUMBER OF TOILETS"
                />
                {errorMessages.toilet && (
                  <p className="text-red-600">{errorMessages.toilet}</p>
                )}
              </div>
            </div>
            <div className="flex mx-auto items-center justify-center mt-8 w-full">
              <button className="font-bold border-4 border-[#1F4B43] p-2.5 rounded-2xl w-full max-w-sm text-center text-[#1F4B43] mx-auto cursor-pointer hover:bg-[#1F4B43] hover:text-[#E7C873] transition duration-300">
                LIST PROPERTY
              </button>
            </div>
          </div>
        </form>
        {submissionStatus && (
          <div
            className={`${
              closeModal === "closemodal" ? "hidden" : ""
            }bg-[#00000090] fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center`}
          >
            <div
              className={`${
                closeModal === "closemodal" ? "hidden" : ""
              } bg-[#E7C873] flex flex-col gap-5 justify-center items-center p-10 rounded-4xl w-[400px] relative max-[410px]:w-[300px]`}
            >
              <img src={feelathomeLogo} alt="feelathomeLogo" />
              <p className="text-green-600 font-bold text-2xl text-center">
                Property Listed Successfully
              </p>
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

export default ListForm;
