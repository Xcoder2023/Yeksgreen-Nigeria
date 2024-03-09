import React from "react";
import burger from "../../assets/breakfast/burger.png";
import breadTea from "../../assets/breakfast/teabread.png";
import pancakeTea from "../../assets/breakfast/fruits$veges.png";
import jollofRice from "../../assets/recipe/featured-recipe/jollofRice.png";
import friesegg from "../../assets/breakfast/fries.png";
import okpa from "../../assets/breakfast/okpa.png";
import jollofbeans from "../../assets/recipe/featured-recipe/beans.png";
import beansplantain from "../../assets/breakfast/beansplaintain.png";
import breadveggies from "../../assets/breakfast/breadvegies.png";
import fruitsveggies from "../../assets/breakfast/fruitvegies.png";
import love from "../../assets/recipe/featured-recipe/love.png";
import star from "../../assets/recipe/featured-recipe/star.png";
import eclipse from "../../assets/recipe/featured-recipe/Ellipse 4.png";
import pancake from "../../assets/mobile/pancakes.png";
import eggNoodles from "../../assets/mobile/eggnoodles.png";
import toastedbread from "../../assets/mobile/toastedbread.png";
import akaraPap from '../../assets/mobile/akaraPap.png';

const breakfastRecipe = [
  {
    id: 1,
    name: "Bread🧇 Toast & Tea ☕",
    rating: "High in carbs",
    serves: "4 servings",
    image: breadTea,
  },
  {
    id: 2,
    name: "Pancake🥞 & Tea☕",
    rating: "High in Carbs",
    serves: "4 servings",
    image: pancakeTea,
  },
  {
    id: 3,
    name: "Jollof Rice & Chicken",
    rating: "High in Carbs",
    serves: "6 servings",
    image: jollofRice,
  },
  {
    id: 4,
    name: "Fries🍟 & Egg Sauce",
    rating: "High in Protein",
    serves: "3 servings",
    image: friesegg,
  },
  {
    id: 5,
    name: "Okpa & Pap",
    rating: "High in protein",
    serves: "6 servings",
    image: okpa,
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
    name: "Bread🧇 & Veggies",
    rating: "High in Vitamins",
    serves: "4 servings",
    image: breadveggies,
  },
  {
    id: 9,
    name: "Fruits & Veggies",
    rating: "High in Vitamins",
    serves: "6 servings",
    image: fruitsveggies,
  },
];

const mobilebreakfastRecipe = [
  {
    id: 1,
    name: "Pancakes",
    rating: "High in carbs",
    serves: "3 servings",
    image: pancake,
  },
  {
    id: 2,
    name: "Akara & Pap",
    rating: "High in Protein",
    serves: "4 servings",
    image: akaraPap,
  },
  {
    id: 3,
    name: "Noodles & Eggs",
    rating: "High in protein",
    serves: "2 servings",
    image: eggNoodles,
  },
  {
    id: 4,
    name: "Okpa & Pap",
    rating: "High in protein",
    serves: "4 servings",
    image: okpa,
  },
  {
    id: 5,
    name: "Toasted Bread & Tea",
    rating: "High in Carbs",
    serves: "4 servings",
    image: toastedbread,
  },
  
];

const RecipeForBreakfast = () => {
  return (
    <>
      <div className="flex flex-col md:gap-14 gap-5" style={{ fontFamily: "work sans" }}>
        <div className="bg-[#04471C] flex items-center gap-2 px-5 md:px-[7.5rem] text-white">
          <img src={burger} alt="this is a buger" />
          <p style={{ fontSize: 30, fontWeight: 300 }}>Breakfast recipe</p>
        </div>
        <main className="flex flex-col gap-10 justify-center items-center px-5 lg:px-[7.5rem]">
          <section
            style={{ fontSize:15}}
            className="flex justify-center items-center text-[23px] font-normal leading-8 pb-5 md:pb-0"
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
            Among English speakers, "breakfast" can be used to refer to this meal or to refer to a meal composed of traditional breakfast foods (such as eggs, oatmeal), although it must be eaten in the morning. Breakfast foods are prepared with a multitude of ingredients, including oats, wheat, maize, barley, noodles, starches, eggs, meats, and other foods
            </p>
          </section>
          <section className="md:flex flex-col hidden">
            <div className="grid grid-cols-3 gap-5">
              {breakfastRecipe.map(({ ids, name, rating, serves, image }) => (
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
      <div className="flex flex-col gap-5 pb-10 px-5 md:hidden">
              {mobilebreakfastRecipe.map(({ ids, name, rating, serves, image }) => (
                <div key={ids} className="">
                  <img src={image} alt={name} className="" />
                  <div className="flex justify-between items-center py-2 px-1 font-medium text-[15px]">
                    {name} <img src={love} alt={love} className="w-[20px]" />
                  </div>
                  <div className="flex gap-2 justify-between shadow-md pb-2 px-1">
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
      {/* </section> */}
    </>
  );
};

export default RecipeForBreakfast;
