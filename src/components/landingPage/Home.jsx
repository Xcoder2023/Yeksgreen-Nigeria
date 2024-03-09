import React from "react";
import NavOne from "../navbars/NavOne";
import FirstView from "./firstView";
import Recipecard from "./Recipecard";
import FeatureRecipe from "./FeatureRecipe";
import Newsletter from "./Newsletter";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="sticky top-0 bg-white z-10">
        <NavOne />
      </div>
      <FirstView />
      <div className="">
        <Recipecard />
        <FeatureRecipe />
        <div className="lg:pb-20 lg:w-[100%] w-[100%] md:mx-auto ">
          <Newsletter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
