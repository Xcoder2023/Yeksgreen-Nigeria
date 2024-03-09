import React from "react";
import cookingthin from "../../assets/lunch/cooking-thin.png";
import jollofbeans from "../../assets/recipe/featured-recipe/beans.png";
import beansplantain from "../../assets/breakfast/beansplaintain.png";
import yam from "../../assets/recipe/featured-recipe/yam.png";
import ricestew from "../../assets/recipe/featured-recipe/riceAndStew.png";
import Africansalad from "../../assets/lunch/AfricnSalad.png";
import egusi from "../../assets/recipe/featured-recipe/egusi.png";
import spaghetti from "../../assets/lunch/spaghetti.png";
import Noodles from "../../assets/lunch/spag&veggies.png";
import plantainp from "../../assets/lunch/carbage.png";
import love from "../../assets/recipe/featured-recipe/love.png";
import star from "../../assets/recipe/featured-recipe/star.png";
import eclipse from "../../assets/recipe/featured-recipe/Ellipse 4.png";
import spicyNoodle from "../../assets/mobile/spicyNoodles.png";

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
    name: "Rice & Stew",
    rating: "High in Nutrients",
    serves: "4 servings",
    image: ricestew,
  },
  {
    id: 3,
    name: "African Salad (Abacha)",
    rating: "High in Vitamins",
    serves: "6 servings",
    image: Africansalad,
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

const dinnerRecipe = [
  {
    id: 1,
    name: "Jollof Rice🍙 & Beans",
    rating: "High in Carbs",
    serves: "6 servings",
    image: jollofbeans,
  },
  {
    id: 2,
    name: "Beans & Plantains",
    rating: "High in Carbs",
    serves: "6 servings",
    image: beansplantain,
  },
  {
    id: 3,
    name: "Rice & Stew",
    rating: "High in Nutrients",
    serves: "4 servings",
    image: ricestew,
  },

  {
    id: 4,
    name: "Yam Porridge",
    rating: "High in carbs",
    serves: "4 servings",
    image: spicyNoodle,
  },
  {
    id: 5,
    name: "plantain Porridge",
    rating: "High in Fibre",
    serves: "6 servings",
    image: plantainp,
  },
];

const RecipeForBreakfast = () => {
  return (
    <>
      <div
        className="flex flex-col md:gap-14 gap-5 my-10 md:my-0"
        style={{ fontFamily: "work sans" }}
      >
        <div className="bg-[#04471C] flex items-center gap-2 px-5 md:px-[7.5rem] text-white">
          <img src={cookingthin} alt="this is a buger" />
          <p style={{ fontSize: 30, fontWeight: 300 }}>Dinner recipe</p>
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
              Dinner usually refers to what is in many Western cultures the
              largest and most formal meal of the day, which is eaten in the
              evening. Historically, the largest meal used to be eaten around
              midday, and called dinner.
            </p>
          </section>
          <section
            className="md:flex flex-col hidden"
            style={{ fontFamily: "sans" }}
          >
            <div className="grid grid-cols-3 gap-5">
              {lunchRecipe.map(({ ids, name, rating, serves, image }) => (
                <div key={ids} className="">
                  <img src={image} alt={name} className="" />
                  <div className="flex justify-between items-center p-2">
                    {name} <img src={love} alt={love} className="w-[20px]" />
                  </div>
                  <div className="flex justify-between items-center px-3 py-2 font-medium text-[15px]">
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
        <hr className="bg-[gray] h-[1px] w-[83 %] lg:mx-[8rem] md:mx-5 hidden md:flex" />
      </div>
      {/* mobile section  */}
      <section
        className="flex flex-col md:hidden px-5 pb-10"
        style={{ fontFamily: "sans" }}
      >
        <div className="flex flex-col gap-5">
          {dinnerRecipe.map(({ ids, name, rating, serves, image }) => (
            <div key={ids} className="">
              <img src={image} alt={name} className="" />
              <div className="flex justify-between items-center p-2">
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
    </>
  );
};

export default RecipeForBreakfast;
