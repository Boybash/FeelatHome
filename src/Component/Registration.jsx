import React from "react";
import keyicon from "../assets/icons8-access-64.png";
import mailicon from "../assets/icons8-mail-50.png";
import { useState } from "react";
import * as yup from "yup";
import showpassword from "../assets/show eye.svg";
import hidepassword from "../assets/hide eye.svg";

const Registration = () => {
  const [displayform, setDisplayform] = useState("");
  const [showPasword, setShowPassword] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  function handleLoginFormChange(e) {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  }

  function handleLoginFormSubmit(e) {
    e.preventDefault();
    schema
      .validate(loginFormData)
      .then(() => {
        setErrorMessages({});
        console.log("Form is valid");
        // Form is valid, proceed with submission logic
      })
      .catch((err) => {
        setErrorMessages({ ...errorMessages, [err.path]: err.message });
        console.log(err.errors);
      });
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPasword);
  }

  function handleFormDisplay() {
    setDisplayform("formdisplay");
  }
  return (
    <>
      <section className="bg-[#F7F7F7] mx-auto p-50 w-full flex flex-col gap-10 font-display ">
        <div
          className={`${
            displayform === "formdisplay" ? "hidden" : "block"
          } flex justify-center items-center`}
        >
          <div className=" bg-[#E7C873] flex flex-col gap-2  p-10 rounded-4xl w-[600px] h-[450px]">
            <h1 className="text-white text-center text-3xl font-bold mb-2">
              Sign In
            </h1>
            <div className="flex items-center justify-center gap-10 ">
              <img className="w-10" src={mailicon} alt="mailicon" />
              <img className="w-10" src={keyicon} alt="keyicon" />
            </div>
            <form
              onSubmit={handleLoginFormSubmit}
              className="flex flex-col gap-4 relative"
            >
              <input
                onChange={handleLoginFormChange}
                className="w=[500px] p-4 outline-0 bg-white rounded-2xl"
                name="email"
                type="email"
                placeholder="EMAIL"
              />
              {errorMessages.email && <p>{errorMessages.email}</p>}
              <input
                onChange={handleLoginFormChange}
                className="w=[500px] p-4 outline-0 bg-white rounded-2xl "
                name="password"
                type={`${showPasword ? "text" : "password"}`}
                placeholder="PASSWORD"
              />
              {errorMessages.password && <p>{errorMessages.password}</p>}
              <img
                onClick={togglePasswordVisibility}
                className="w-7 absolute top-25.5 right-3 cursor-pointer"
                src={`${showPasword ? hidepassword : showpassword}`}
                alt="showpassword"
              />
              <p className="text-center"> Forgot Your Password?</p>
              <button className="border-[#1F4B43] border-4 p-2.5 rounded-2xl w-25 text-center text-white mx-auto font-bold cursor-pointer">
                SIGN IN
              </button>
            </form>
          </div>

          <div className="bg-[#1F4B43] text-white flex flex-col gap-10 justify-center items-center p-10 rounded-4xl w-[600px] h-[450px]">
            <h1 className="font-bold text-4xl"> Hello, Friend!</h1>
            <p className="font-display">
              {" "}
              Enter your personal details and start your journey with us.
            </p>
            <button
              onClick={handleFormDisplay}
              className=" font-bold border-4 border-[#E7C873] p-2.5 rounded-2xl w-25 text-center text-white mx-auto mt-2 cursor-pointer"
            >
              {" "}
              SIGN UP
            </button>
          </div>
        </div>

        <div
          className={`${displayform === "formdisplay" ? "block" : "hidden"}`}
        >
          <form className="flex justify-center items-center">
            <div className="bg-[#1F4B43] flex flex-col gap-6  p-10 rounded-4xl w-[600px] h-[450px] relative">
              <input
                className="w=[500px] p-4 outline-0 bg-white rounded-2xl"
                name="image"
                type="file"
                accept=".jpg, .jpeg, .png, .gif"
                placeholder="UPLOAD IMAGE"
              />
              <input
                className="w=[500px] p-4 outline-0 bg-white rounded-2xl"
                name="name"
                type="text"
                placeholder="NAME"
              />
              <input
                className="w=[500px] p-4 outline-0 bg-white rounded-2xl"
                name="email"
                type="email"
                placeholder="EMAIL"
              />
              <input
                className="w=[500px] p-4 outline-0 bg-white rounded-2xl"
                name="password"
                type={`${showPasword ? "text" : "password"}`}
                placeholder="PASSWORD"
              />
              <img
                onClick={togglePasswordVisibility}
                className="w-7 absolute top-73.5 right-13 cursor-pointer"
                src={`${showPasword ? hidepassword : showpassword}`}
                alt="showpassword"
              />
              <input
                className="w=[500px] p-4 outline-0 bg-white rounded-2xl"
                name="confirm password"
                type={`${showPasword ? "text" : "password"}`}
                placeholder="CONFIRM PASSWORD"
              />
              <img
                onClick={togglePasswordVisibility}
                className="w-7 absolute top-93.5 right-13 cursor-pointer"
                src={`${showPasword ? hidepassword : showpassword}`}
                alt="showpassword"
              />
            </div>
            <div className=" bg-[#E7C873] flex flex-col gap-6  p-10 rounded-4xl w-[600px] h-[450px]">
              <input
                className="w=[500px] p-4 outline-0 bg-white rounded-2xl"
                name="number"
                type="text"
                placeholder="PHONE NUMBER"
              />
              <input
                className="w=[500px] p-4 outline-0 bg-white rounded-2xl"
                name="location"
                type="text"
                placeholder="LOCATION"
              />
              <input
                className="w=[500px] p-4 outline-0 bg-white rounded-2xl"
                name="occupation"
                type="text"
                placeholder="OCCUPATION"
              />
              <select className="w=[500px] p-4 outline-0 bg-white rounded-2xl">
                <option name="status" value="" disabled selected>
                  STATUS
                </option>
                <option value="BUYER">LANDLORD</option>
                <option value="AGENT">AGENT</option>
                <option value="TENANT">TENANT</option>
              </select>
              <div className="mx-auto flex items-center justify-center">
                <button className=" font-bold border-4 border-[#1F4B43] p-2.5 rounded-2xl w-25 text-center text-white mx-auto mt-2 cursor-pointer">
                  {" "}
                  SIGN UP
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default Registration;
