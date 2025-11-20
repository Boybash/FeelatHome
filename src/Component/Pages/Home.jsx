import Hero from "../Hero";
import React from "react";
import Introduction from "../Introduction";
import Features from "../Features";
import City from "../City";
import Testimonial from "../Testimonial";
import Team from "../Team";
import Property from "../Property";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Hero />
      <Introduction />
      <Property />
      <Features />
      <City />
      <Testimonial />
      <Team />
    </>
  );
};

export default Home;
