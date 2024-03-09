import React from "react";
import NavTwo from "../navbars/NavTwo";
import RecipeForBreakfast from "./RecipeForBreakfast";
import Newsletter from "../landingPage/Newsletter";
import Footer from "../footer/Footer";
import Footer2 from "../footer/Footer2";

const Holder = () => {
  return (
    <>
     <div className=" sticky top-0 bg-white z-10">
     <NavTwo />
     </div>
      <RecipeForBreakfast />
      <div className="lg:pt-20 lg:w-[94%] md:w-[100%] md:flex mx-auto relative lg:right-5 hidden">
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

export default Holder;
