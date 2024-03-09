import React from "react";
import NavTwo from "../navbars/NavTwo";

import Newsletter from "../landingPage/Newsletter";
import Footer from "../footer/Footer";
import Footer2 from "../footer/Footer2";
import Introduction from "./Introduction";
import CheffShow from "./CheffShow";
import Ingredients from "./Ingredients";

const Center = () => {
  return (
    <>
      <div className=" sticky top-0 bg-white z-10">
        <NavTwo />
      </div>
      <Introduction />
      <CheffShow />
      <Ingredients />
      <div className="pb-20 lg:flex hidden w-[92%] mx-auto relative right-5">
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
