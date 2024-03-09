import React from "react";
import jollof from "../../assets/recipe/featured-recipe/jollofRice.png";
import akara from "../../assets/recipe/featured-recipe/akara..png";
import yam from "../../assets/recipe/featured-recipe/yam.png";
import beans from "../../assets/recipe/featured-recipe/beans.png";
import jollofRice from "../../assets/recipe/featured-recipe/riceAndStew.png";
import egusi from "../../assets/recipe/featured-recipe/egusi.png";
import chilli from "../../assets/recipe/featured-recipe/Chili.png";
import carrot from "../../assets/recipe/featured-recipe/carrot.png";
import blackonion from "../../assets/recipe/featured-recipe/blackonion.png";
import carrot2 from "../../assets/recipe/featured-recipe/Carrot2.png";
import star from "../../assets/recipe/featured-recipe/star.png";
import love from "../../assets/recipe/featured-recipe/love.png";
import eclipse from "../../assets/recipe/featured-recipe/Ellipse 4.png";

const featuredRecipe = [
  {
    id: 1,
    name: "Jollof Rice🍚 & Chicken🍗",
    rating: "High in carbs",
    serves: "6 servings",
    image: jollof,
  },
  {
    id: 2,
    name: "Akara & Pap",
    rating: "High in Protein",
    serves: "4 servings",
    image: akara,
  },
  {
    id: 3,
    name: "Yam Porridge🍳",
    rating: "High in carbs",
    serves: "4 servings",
    image: yam,
  },
  {
    id: 4,
    name: "Jollof Rice🍚 & Beans",
    rating: "High in carbs",
    serves: "6 servings",
    image: beans,
  },
  {
    id: 5,
    name: "Rice🍚 & Stew",
    rating: "High in Vitamins",
    serves: "4 servings",
    image: jollofRice,
  },
  {
    id: 6,
    name: "Egusi Soup",
    rating: "High in nutrients",
    serves: "6 servings",
    image: egusi,
  },
];
const mobilefeaturedRecipe = [
  {
    id: 1,
    name: "Jollof Rice🍚 & Chicken🍗",
    rating: "High in carbs",
    serves: "6 servings",
    image: jollof,
  },
  {
    id: 2,
    name: "Akara & Pap",
    rating: "High in Protein",
    serves: "4 servings",
    image: akara,
  },
  {
    id: 3,
    name: "Yam Porridge🍳",
    rating: "High in carbs",
    serves: "4 servings",
    image: yam,
  },
];

const FeatureRecipe = () => {
  return (
    <>
      <div
        className="hidden md:flex flex-col my-20 gap-5 w-[90%] mx-auto"
        style={{ fontFamily: "work sans" }}
      >
        <hr className="bg-[gray] h-[1px] w-[100%]" />
        <div
          className="flex text-[50px] items-center font-bold gap-5"
          style={{ fontWeight: 400 }}
        >
          <p>Featured Recipes</p>
          <img src={carrot} alt="this is a carrot" className="w-14 h-14" />
        </div>

        <section className="flex justify-center">
          <div
            className="grid grid-cols-3  gap-5"
            style={{ fontFamily: "work sans" }}
          >
            {featuredRecipe.map(({ ids, name, rating, serves, image }) => (
              <div key={ids} className="">
                <img src={image} alt={name} className="w-[441px] lg:h-[250px] md:h-[150px]" />
                <div className="flex justify-between items-center px-3 pt-3">
                  {name} <img src={love} alt={love} className="w-[20px]" />
                </div>
                <div className="flex gap-2 justify-between shadow-md px-3 pb-3">
                  <div className="flex gap-2 justify-center items-center">
                    <p className="text-green-500">{rating}</p>
                    <img
                      src={eclipse}
                      alt=""
                      className="flex rounded-full h-2"
                    />
                    <p
                      style={{
                        fontFamily: "work sans",
                        fontWeight: 300,
                        fontSize: 19,
                      }}
                    >
                      {serves}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    4.5 <img src={star} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex justify-center items-center relative left-[4rem] -ml-[2.6rem] bottom-[5rem]">
            <img src={chilli} alt="this is a black chilli" className=" w-[50px]" />
          </div>
        </section>
        <div className="flex lg:justify-between md:justify-end lg:pr-16 md:pr-5">
          <img src={blackonion} alt="this is a black onion" className="w-[50px] relative right-16 bottom-14 hidden lg:block" />
          <img src={carrot2} alt="this is a green carrot" className="w-14" />
        </div>
        <div className="bg-[gray] h-[1px] w-[100%] mx-auto">
          <hr />
        </div>
      </div>
      {/* mobile view section  */}
      <div
        className="md:hidden flex flex-col gap-5 px-5"
        style={{ fontFamily: "work sans" }}
      >
        <div
          className="flex text-[50px] md:justify-center"
          style={{ fontWeight: 400 }}
        >
          <p>Featured</p>
        </div>

        <section className="flex gap-3 justify-center">
          <div className="flex flex-col gap-5">
            {mobilefeaturedRecipe.map(
              ({ ids, name, rating, serves, image }) => (
                <div key={ids} className="">
                  <img src={image} alt={name} className="" />
                  <div className="flex justify-between items-center px-3 pt-3">
                    {name} <img src={love} alt={love} className="w-[20px]" />
                  </div>
                  <div className="flex gap-2 justify-between shadow-md px-3 pb-3">
                    <div className="flex gap-2 justify-center items-center">
                      <p className="text-green-500">{rating}</p>
                      <img
                        src={eclipse}
                        alt=""
                        className="flex rounded-full h-2"
                      />
                      <p
                        style={{
                          fontFamily: "work sans",
                          fontWeight: 300,
                          fontSize: 19,
                        }}
                      >
                        {serves}
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      4.5 <img src={star} alt="" />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default FeatureRecipe;
