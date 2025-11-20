import React from "react";
import SearchLogo from "../assets/Search Button.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { Fade } from "react-awesome-reveal";
const Hero = () => {
  const { setSearchTerm } = useContext(SearchContext);

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }
  return (
    <>
      <section
        className={`bg-[url('https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?cs=srgb&dl=pexels-thelazyartist-1642125.jpg&fm=jpg')] bg-cover bg-center  w-full font-display`}
      >
        <Fade>
          <div className="mx-auto flex flex-col justify-center items-center gap-5 py-15 ">
            <h2 className="text-white rounded-4xl border-4 border-solid border-[#1F4B43] bg-[#00000090] text-center p-3 px-5 font-bold uppercase text-xl font-roboto ">
              let us guide your home
            </h2>
            <h1 className="uppercase font-bold text-4xl text-center mt-3 text-[#E7C873]">
              believe in finding it
            </h1>
            <p className=" font-bold text-white max-[400px]:w-[250px] text-center">
              Search propreties for sales and to rent in Nigeria
            </p>

            <div className="relative">
              <input
                onChange={handleSearch}
                type="text"
                className="w-[690px] bg-white rounded-4xl p-4 mt-5 outline-0 max-[700px]:w-[400px] max-[410px]:w-[250px]"
                placeholder="Enter Name, Keyword..."
              />
              <img
                className="w-[50px] absolute top-5.5 right-1 cursor-pointer"
                src={SearchLogo}
                alt="search"
              />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-10 mt-5 max-[410px]:flex-col">
              <div className="flex justify-center items-center gap-2 rounded-4xl bg-[#00000090] bg-opacity-50% py-1.5 px-2.5">
                <img src={icon1} alt="icon1" />
                <span className="text-center text-white">Apartment</span>
              </div>

              <div className="flex justify-center items-center gap-2 rounded-4xl bg-[#00000090] py-1.5 px-2.5">
                <img src={icon2} alt="icon2" />
                <span className="text-center text-white">Condo Chill</span>
              </div>

              <div className="flex justify-center items-center gap-2 rounded-4xl bg-[#00000090] py-1.5 px-2.5">
                <img src={icon3} alt="icon3" />
                <span className="text-center text-white">Town House</span>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Hero;
