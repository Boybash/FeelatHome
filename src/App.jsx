import Navbar from "./Component/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Footer from "./Component/Footer";
import { SearchProvider } from "./Component/SearchContext";

const Home = lazy(() => import("./Component/Pages/Home"));
const Registration = lazy(() => import("./Component/Registration"));
const Signin = lazy(() => import("./Component/Signin"));
const Profile = lazy(() => import("./Component/Profile"));
const ListForm = lazy(() => import("./Component/ListForm"));
const PropertyDetails = lazy(() => import("./Component/PropertyDetails"));
const ProfileCheck = lazy(() => import("./Component/ProfileCheck"));

const LoadingFallback = () => (
  <div style={{ padding: "50px", textAlign: "center" }}>
    <h2>Loading Page...</h2>
  </div>
);

function App() {
  return (
    <>
      <BrowserRouter>
        <SearchProvider>
          <Navbar />
          <Suspense fallback={<LoadingFallback />}>
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
          </Suspense>
          <Footer />
        </SearchProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
