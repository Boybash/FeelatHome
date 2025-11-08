import React from "react";
import icon4 from "../assets/Icon 4.png";
import icon5 from "../assets/Icon 5.png";
import icon6 from "../assets/Icon 6.png";
const Introduction = () => {
  return (
    <>
      <section className="bg-[#F7F7F7] w-full nx-auto">
        <div className="flex flex-col justify-center items-center gap-1 mx-auto w-[800px] text-center py-10 mb-10">
          <h1 className="font-bold text-2xl">Why You Should Work With Us</h1>
          <p>
            -<span className="font-bold">Local Expertise</span>: Our team has
            in-depth knowledge of the City/Region market, ensuring you get the
            best advice and guidance every step of the way.
          </p>
          <p>
            -<span className="font-bold">Personalized Service</span>: We take
            the time to understand your unique needs and goals, tailoring our
            approach to fit your lifestyle and budget.
          </p>
          <p>
            <span className="font-bold">-Proven Result</span>: Our track record
            speaks for itself - we've helped countless clients buy, sell, and
            rent their properties with ease.
          </p>
          <p>
            -<span className="font-bold">Integrity and Transparency</span>: We
            operate with honesty, integrity, and transparency, ensuring you feel
            confident and informed throughout the entire process.
          </p>
        </div>

        <div className="flex justify-center items-center gap-10 mx-auto">
          <div className="w-[300px] text-center my-3">
            <img className="mx-auto my-3" src={icon4} alt="icon4" />
            <h3 className="font-bold text-2xl mb-1">
              Wide Range of Properties
            </h3>
            <p>
              We offer expert legal help for all related property items in
              Dubai.
            </p>
          </div>

          <div className="w-[300px] text-center my-3">
            <img className="mx-auto my-3" src={icon5} alt="icon5" />
            <h3 className="font-bold text-2xl mb-1">Buy or Rent Homes</h3>
            <p>
              We sell your home at the best market price and very quickly as
              well.
            </p>
          </div>

          <div className="w-[300px] text-center my-3">
            <img className="mx-auto my-3" src={icon6} alt="icon6" />
            <h3 className="font-bold text-2xl mb-1">Trusted by Thousands</h3>
            <p>
              We offer you free consultancy to get a loan for your new home.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
