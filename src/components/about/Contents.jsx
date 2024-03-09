import React from "react";
import NavTwo from "../navbars/NavTwo";
import Footer from "../footer/Footer";
import AboutUs from "./AboutUs";
import Footer2 from "../footer/Footer2";


const Center = () => {
  return (
    <>
      <div className=" sticky top-0 bg-white">
        <NavTwo />
      </div>
    <AboutUs />
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
