import React from "react";
import { auth } from "../../Firebase";
import { dataBase } from "../../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useLocation } from "react-router-dom";
const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [userStatus, setUserStatus] = useState(null);
  const navigate = useNavigate();
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
          setUserDetails(userData);
          setUserStatus(userData.status === "TENANT");
        } else {
        }
      } else {
        setUserDetails(null);
      }
    });
  };

  useEffect(() => {
    fetchUserdata();
  }, []);

  function handleListProperty() {
    navigate("/listform");
  }

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      window.location.href = "/signin";
    } catch (error) {}
  };

  return (
    <>
      <section className="bg-[#F7F7F7] mx-auto p-20 w-full flex flex-col gap-10 font-display max-[500px]:px-5">
        {userDetails ? (
          <div className="flex flex-col lg:flex-row justify-center items-stretch w-full max-w-screen-xl mx-auto p-4 ">
            <div className="bg-[#E7C873] flex flex-col items-center justify-center gap-4 p-8 rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl w-full lg:w-1/2 min-h-[300px]">
              <img
                className="w-full max-w-[250px] rounded-4xl h-auto object-cover"
                src={userDetails.image}
                alt="userimage"
              />
            </div>

            <div className="bg-[#1F4B43] text-white text-base lg:text-lg flex flex-col gap-3 lg:gap-5 justify-center items-start p-8 rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl w-full lg:w-1/2 min-h-[300px]">
              <h2 className="text-center w-full">
                Fullname: {userDetails.fullname}
              </h2>
              <h2 className="text-center w-full">Email: {userDetails.email}</h2>
              <h2 className="text-center w-full">
                Number: {userDetails.number}
              </h2>
              <h2 className="text-center w-full">
                Occupation: {userDetails.occupation}
              </h2>
              <h2 className="text-center w-full">
                Gender: {userDetails.gender}
              </h2>
              <h2 className="text-center w-full">
                Status: {userDetails.status}
              </h2>

              <div className="flex flex-col justify-center items-center gap-3 mt-4 w-full max-w-xs mx-auto">
                <button
                  onClick={handleListProperty}
                  className={`${
                    userStatus ? "hidden" : ""
                  } font-bold border-4 border-[#E7C873] p-2.5 rounded-2xl w-full text-center text-white cursor-pointer transition duration-300 hover:bg-[#E7C873] hover:text-[#1F4B43]`}
                >
                  List Property
                </button>
                <button
                  onClick={handleSignOut}
                  className="font-bold border-4 border-[#E7C873] p-2.5 rounded-2xl w-full text-center text-white cursor-pointer transition duration-300 hover:bg-[#E7C873] hover:text-[#1F4B43]"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </>
  );
};

export default Profile;
