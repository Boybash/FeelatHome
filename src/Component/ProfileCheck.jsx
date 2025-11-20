import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dataBase } from "../../Firebase";
import { doc, getDoc, getDocs } from "firebase/firestore";
import { auth } from "../../Firebase";
import { useLocation } from "react-router-dom";
const ProfileCheck = () => {
  const { creatorId } = useParams();
  const [creatorDetails, setCreatorDetails] = useState();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const fetchUserdata = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(dataBase, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setCreatorDetails(userData);
        } else {
        }
      } else {
        setCreatorDetails(null);
      }
    });
  };

  useEffect(() => {
    fetchUserdata();
  }, [creatorId]);
  return (
    <>
      <section className="bg-[#F7F7F7] mx-auto p-8 md:p-20 w-full flex flex-col gap-10 font-display">
        {!creatorDetails ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-col md:flex-row justify-center items-stretch max-w-5xl mx-auto w-full shadow-2xl rounded-2xl">
            <div className="bg-[#E7C873] flex flex-col items-center justify-center gap-4 p-8 md:p-10 w-full md:w-1/2 rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl">
              <img
                className="w-full max-w-xs rounded-2xl object-cover aspect-square"
                src={creatorDetails.image}
                alt="userimage"
              />
            </div>
            <div className="bg-[#1F4B43] text-white text-base md:text-lg flex flex-col gap-3 md:gap-5 justify-center p-8 md:p-10 w-full md:w-1/2 rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl">
              <h2>Fullname: {creatorDetails.fullname}</h2>
              <h2>Email: {creatorDetails.email}</h2>
              <h2>Number: {creatorDetails.number}</h2>
              <h2>Occupation: {creatorDetails.occupation}</h2>
              <h2>Gender: {creatorDetails.gender}</h2>
              <h2>Status: {creatorDetails.status}</h2>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ProfileCheck;
