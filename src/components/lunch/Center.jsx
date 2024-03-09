import React from "react";
import NavTwo from "../navbars/NavTwo";
import LunchRecipe from "../lunch/LunchRecipe";
import Newsletter from "../landingPage/Newsletter";
import Footer from "../footer/Footer";
import Footer2 from "../footer/Footer2";

const Center = () => {
  return (
    <>
     <div className=" sticky top-0 bg-white z-10">
     <NavTwo />
     </div>
      <LunchRecipe />
      <div className=" lg:pb-20 w-[94%] md:flex mx-auto relative lg:right-5 hidden">
      <Newsletter />
      </div>
      <div className="hidden md:block">
    <Footer />
    </div>
      <div className="md:hidden">
      <Footer2 />
      </div>
    </>
  );
};

export default Center;
