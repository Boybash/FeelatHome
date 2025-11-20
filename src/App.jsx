import Navbar from "./Component/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Component/Pages/Home";
import Footer from "./Component/Footer";
import Registration from "./Component/Registration";
import Signin from "./Component/Signin";
import Profile from "./Component/Profile";
import ListForm from "./Component/ListForm";
import PropertyDetails from "./Component/PropertyDetails";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProfileCheck from "./Component/ProfileCheck";
import { SearchProvider } from "./Component/SearchContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <SearchProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/listform" element={<ListForm />}></Route>
            <Route
              path="/propertydetails/:propertyId"
              element={<PropertyDetails />}
            ></Route>
            <Route
              path="/creatorprofile/:creatorId"
              element={<ProfileCheck />}
            ></Route>
          </Routes>
          <Footer />
        </SearchProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
