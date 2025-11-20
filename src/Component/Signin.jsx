import React from "react";
import keyicon from "../assets/icons8-access-64.png";
import mailicon from "../assets/icons8-mail-50.png";
import { useState } from "react";
import * as yup from "yup";
import showpassword from "../assets/show eye.svg";
import hidepassword from "../assets/hide eye.svg";
import feelathomeLogo from "../assets/feelathome.png";
import xicon from "../assets/xicon.png";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../../Firebase";
import { doc, setDoc } from "firebase/firestore";
import { dataBase } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Signin = () => {
  const [showPasword, setShowPassword] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [loginSubmissionStatus, setLoginSubmissionStatus] = useState("");
  const [closeModal, setCloseModal] = useState("");
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
  function resetForm() {
    setLoginFormData({
      email: "",
      password: "",
    });
  }

  async function handleLoginFormSubmit(e) {
    e.preventDefault();
    try {
      await schema.validate(loginFormData, { abortEarly: false });
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginFormData.email,
        loginFormData.password
      );
      const user = userCredential.user;
      setLoginSubmissionStatus(true);
      setErrorMessages({});
      resetForm();
      window.location.href = "/profile";
    } catch (err) {
      if (err.inner) {
        const errors = {};
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setErrorMessages(errors);
      } else {
        setErrorMessages({ general: err.message });
      }
      setLoginSubmissionStatus(false);
    }
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPasword);
  }
  function handleCloseModal() {
    setCloseModal("closemodal");
  }
  function handleSignupForm() {
    navigate("/registration");
  }
  return (
    <>
      <section className="bg-[#F7F7F7] mx-auto p-20 w-full flex flex-col gap-10 font-display max-[600px]:px-5">
        <div className="flex justify-center items-center max-[800px]:flex-col">
          <div className=" bg-[#E7C873] flex flex-col gap-2  p-10 rounded-4xl w-full h-[450px]">
            <h1 className="text-white text-center text-3xl font-bold mb-2">
              Sign In
            </h1>
            <div className="flex items-center justify-center gap-10">
              <img className="w-10" src={mailicon} alt="mailicon" />
              <img className="w-10" src={keyicon} alt="keyicon" />
            </div>
            <form
              onSubmit={handleLoginFormSubmit}
              className="flex flex-col relative"
            >
              <input
                onChange={handleLoginFormChange}
                className="w=full p-4 outline-0 bg-white rounded-2xl mt-3"
                name="email"
                type="email"
                placeholder="EMAIL"
                value={loginFormData.email}
              />
              {errorMessages.email && (
                <p className="text-red-600">{errorMessages.email}</p>
              )}

              <div className="relative flex flex-col">
                <input
                  onChange={handleLoginFormChange}
                  className="w=full p-4 outline-0 bg-white rounded-2xl mt-3"
                  name="password"
                  value={loginFormData.password}
                  type={`${showPasword ? "text" : "password"}`}
                  placeholder="PASSWORD"
                />
                {errorMessages.password && (
                  <p className="text-red-600">{errorMessages.password}</p>
                )}
                <img
                  onClick={togglePasswordVisibility}
                  className="w-7 absolute top-7 right-3 cursor-pointer"
                  src={`${showPasword ? hidepassword : showpassword}`}
                  alt="showpassword"
                />
              </div>
              <div className="mx-auto flex flex-col gap-5 mt-5">
                <p className="text-center"> Forgot Your Password?</p>
                <button className="border-[#1F4B43] border-4 p-2.5 rounded-2xl w-25 text-center text-white mx-auto font-bold cursor-pointer hover:bg-[#1F4B43] hover:text-[#E7C873]">
                  SIGN IN
                </button>
              </div>
            </form>
          </div>
          <div className="bg-[#1F4B43] text-white flex flex-col gap-10 justify-center items-center p-10 rounded-4xl w-full h-[450px]">
            <h1 className="font-bold text-4xl"> Hello, Friend!</h1>
            <p className="font-display">
              {" "}
              Enter your personal details and start your journey with us.
            </p>
            <button
              onClick={handleSignupForm}
              className=" font-bold border-4 border-[#E7C873] p-2.5 rounded-2xl w-25 text-center text-white mx-auto mt-2 cursor-pointer hover:bg-[#E7C873] hover:text-[#1F4B43]"
            >
              {" "}
              SIGN UP
            </button>
          </div>
          {loginSubmissionStatus && (
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
                <p className="text-green-600 font-bold text-2xl">
                  Welcome Back!
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
        </div>
      </section>
    </>
  );
};
export default Signin;
