import React from "react";
import noodletin from "../../assets/lunch/noodles-thin.png";
import jollofbeans from "../../assets/recipe/featured-recipe/beans.png";
import beansplantain from "../../assets/breakfast/beansplaintain.png";
import yam from "../../assets/recipe/featured-recipe/yam.png";
import swallow from "../../assets/lunch/swallow.png";
import okroSoup from "../../assets/lunch/okroSoup.png";
import egusi from "../../assets/recipe/featured-recipe/egusi.png";
import spaghetti from "../../assets/lunch/spaghetti.png";
import Noodles from "../../assets/lunch/spag&veggies.png";
import plantainp from "../../assets/lunch/carbage.png";
import love from "../../assets/recipe/featured-recipe/love.png";
import star from "../../assets/recipe/featured-recipe/star.png";
import eclipse from "../../assets/recipe/featured-recipe/Ellipse 4.png";
import jollof from "../../assets/recipe/featured-recipe/jollofRice.png";
import friedYam from "../../assets/mobile/frieyam.png";
import NoodleEgg from "../../assets/mobile/eggnoodles.png";

const lunchRecipe = [
  {
    id: 1,
    name: "Yam Porridge",
    rating: "High in carbs",
    serves: "4 servings",
    image: yam,
  },
  {
    id: 2,
    name: "Oha Soup & Garri",
    rating: "High in Nutrients",
    serves: "4 servings",
    image: swallow,
  },
  {
    id: 3,
    name: "Okro Soup & Semo",
    rating: "High in Vitamins",
    serves: "6 servings",
    image: okroSoup,
  },
  {
    id: 4,
    name: "Egusi Soup & Semo",
    rating: "High in Nutrients",
    serves: "4 servings",
    image: egusi,
  },
  {
    id: 5,
    name: "Spaghetti",
    rating: "High in Carbs",
    serves: "4 servings",
    image: Noodles,
  },
  {
    id: 6,
    name: "Jollof Rice🍙 & Beans",
    rating: "High in Carbs",
    serves: "6 servings",
    image: jollofbeans,
  },
  {
    id: 7,
    name: "Beans & Plantains",
    rating: "High in Carbs",
    serves: "6 servings",
    image: beansplantain,
  },
  {
    id: 8,
    name: "Noodles🧇 & Veggies",
    rating: "High in Vitamins",
    serves: "4 servings",
    image: spaghetti,
  },
  {
    id: 9,
    name: "plantain Porridge",
    rating: "High in Fibre",
    serves: "6 servings",
    image: plantainp,
  },
];

const mobilelunchRecipe = [
  {
    id: 1,
    name: "Jollof Rice & Chicken",
    rating: "High in carbs",
    serves: "6 servings",
    image: jollof,
  },
  {
    id: 2,
    name: "Fried Yam & Egg",
    rating: "High in Protein",
    serves: "4 servings",
    image: friedYam,
  },
  {
    id: 3,
    name: "Noodles & Eggs",
    rating: "High in Vitamins",
    serves: "6 servings",
    image: NoodleEgg,
  },
  {
    id: 4,
    name: "Yam Porridge",
    rating: "High in carbs",
    serves: "4 servings",
    image: yam,
  },
  {
    id: 3,
    name: "Okro Soup & Semo",
    rating: "High in Vitamins",
    serves: "6 servings",
    image: okroSoup,
  },
];

const RecipeForBreakfast = () => {
  return (
    <>
      <div
        className="flex flex-col md:gap-14 gap-5"
        style={{ fontFamily: "work sans" }}
      >
        <div className="bg-[#04471C] flex items-center gap-2 px-5 md:px-[7.5rem] text-white">
          <img src={noodletin} alt="this is a buger" />
          <p style={{ fontSize: 30, fontWeight: 300 }}>Lunch recipe</p>
        </div>
        <main className="flex flex-col gap-10 justify-center items-center px-5 lg:px-[7.5rem]">
          <section
            style={{ fontSize: 15 }}
            className="flex justify-center items-center text-[23px] font-normal leading-8"
          >
            <p className="hidden md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in
              aliquam tristique lacinia tellus libero massa proin suspendisse.
              Ante tempus mauris nec neque ullamcorper tempor commodo. Nunc
              vitae velit non et. Nunc id tristique vestibulum enim tincidunt a
              tellus. Malesuada amet tincidunt sit id egestas libero. Praesent
              lectus est quis pretium velit, in. Mi nisi, velit egestas sapien
              quam mi netus.
            </p>
            <p className="block md:hidden">
            Lunch, the most informal and unassuming of meals, defies easy definition. A relatively late entry into the cycle of dining, it is replete with socioeconomic forms and meanings.
            </p>
          </section>
          <section
            className="hidden md:flex flex-col"
            style={{ fontFamily: "sans" }}
          >
            <div className="grid grid-cols-3 gap-5 pb-10">
              {lunchRecipe.map(({ ids, name, rating, serves, image }) => (
                <div key={ids} className="">
                  <img src={image} alt={name} className="" />
                  <div className="flex justify-between items-center px-3 py-2 font-medium text-[15px]">
                    {name} <img src={love} alt={love} className="w-[20px]" />
                  </div>
                  <div className="flex gap-2 justify-between shadow-md px-3 pb-2">
                    <div className="flex gap-2 justify-center items-center font-normal text-[14px] opacity-60">
                      <p className="text-green-500">{rating}</p>
                      <img
                        src={eclipse}
                        alt={eclipse}
                        className="flex rounded-full h-2"
                      />
                      <p>{serves}</p>
                    </div>
                    <div className="flex items-center">
                      4.5 <img src={star} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <hr className="bg-[gray] h-[1px] w-[83 %] mx-[8rem] hidden lg:flex" />
      </div>
      {/* mobile section  */}
      <section
        className="flex flex-col md:hidden p-5"
        style={{ fontFamily: "sans" }}
      >
        <div className="flex flex-col gap-5 my-5">
          {mobilelunchRecipe.map(({ ids, name, rating, serves, image }) => (
            <div key={ids} className="">
              <img src={image} alt={name} className="" />
              <div className="flex justify-between items-center px-1 py-2 font-medium text-[15px]">
                {name} <img src={love} alt={love} className="w-[20px]" />
              </div>
              <div className="flex gap-2 justify-between shadow-md px-1 pb-2">
                <div className="flex gap-2 justify-center items-center font-normal text-[14px] opacity-60">
                  <p className="text-green-500">{rating}</p>
                  <img
                    src={eclipse}
                    alt={eclipse}
                    className="flex rounded-full h-2"
                  />
                  <p>{serves}</p>
                </div>
                <div className="flex items-center">
                  4.5 <img src={star} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RecipeForBreakfast;
