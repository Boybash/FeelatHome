import React from "react";
import icon4 from "../assets/Icon 4.png";
import icon5 from "../assets/Icon 5.png";
import icon6 from "../assets/Icon 6.png";
import { Fade, Slide } from "react-awesome-reveal";
const Introduction = () => {
  return (
    <>
      <section className="bg-[#F7F7F7] w-full mx-auto font-display">
        <div className="flex flex-col justify-center items-center gap-1 mx-auto w-full text-center py-10 px-5 mb-10">
          <h1 className="font-bold text-4xl">Why You Should Work With Us</h1>
          <Slide direction="left">
            <p className="flex flex-col w-[500px] mt-5 max-[520px]:w-[300px]">
              <span className="font-bold">Local Expertise</span>Our team has
              in-depth knowledge of the City/Region market, ensuring you get the
              best advice and guidance every step of the way.
            </p>
            <p className="flex flex-col w-[500px] max-[520px]:w-[300px]">
              <span className="font-bold">Personalized Service</span>We take the
              time to understand your unique needs and goals, tailoring our
              approach to fit your lifestyle and budget.
            </p>
          </Slide>
          <Slide direction="right">
            <p className="flex flex-col w-[500px] max-[520px]:w-[300px]">
              <span className="font-bold">Proven Result</span>Our track record
              speaks for itself we've helped countless clients buy, sell, and
              rent their properties with ease.
            </p>
            <p className="flex flex-col w-[500px] max-[520px]:w-[300px]">
              <span className="font-bold">Integrity and Transparency</span>We
              operate with honesty, integrity, and transparency, ensuring you
              feel confident and informed throughout the entire process.
            </p>
          </Slide>
        </div>

        <Slide direction="bottom">
          <div className="flex flex-wrap justify-center items-center gap-10 mx-auto">
            <div className="w-[350px] text-center my-3 bg-[#1F4B43] p-10 rounded-2xl text-white">
              <img className="mx-auto my-3" src={icon4} alt="icon4" />
              <h3 className="font-bold text-2xl mb-1">
                Wide Range of Properties
              </h3>
              <p>
                We offer expert legal help for all related property items in
                Nigeria.
              </p>
            </div>

            <div className="w-[350px] text-center my-3 bg-[#1F4B43] p-10 rounded-2xl text-white">
              <img className="mx-auto my-3" src={icon5} alt="icon5" />
              <h3 className="font-bold text-2xl mb-1">Buy or Rent Homes</h3>
              <p>
                We sell your home at the best market price and very quickly as
                well.
              </p>
            </div>

            <div className="w-[350px] text-center my-3 bg-[#1F4B43] p-10 rounded-2xl text-white">
              <img className="mx-auto my-3" src={icon6} alt="icon6" />
              <h3 className="font-bold text-2xl mb-1">Trusted by Thousands</h3>
              <p>
                We offer you free consultancy to get a loan for your new home.
              </p>
            </div>
          </div>
        </Slide>
      </section>
    </>
  );
};

export default Introduction;
