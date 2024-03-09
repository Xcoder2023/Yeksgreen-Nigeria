import React from "react";
import lunch from "../../assets/recipe/Desktop 💻 dark shade card.png";
import breakfast from "../../assets/recipe/lunch.png";
import dinner from "../../assets/recipe/dinner.png";
import pepper from "../../assets/recipe/Hot Peppers.png";
import onion from "../../assets/recipe/Onion.png";
import mobilelunch from "../../assets/mobile/Mobile dark shade card.png";
import mobilebreakfast from "../../assets/mobile/Mobilebreakfast.png";
import mobiledinner from "../../assets/mobile/mobiledinner.png";

const recipe = [
  {
    id: 1,
    name: "",
    image: lunch,
  },
  {
    id: 2,
    name: "",
    image: breakfast,
  },
  {
    id: 3,
    name: "",
    image: dinner,
  },
];
const mobileRecipe = [
  {
    id: 1,
    name: "",
    image: mobilebreakfast,
  },
  {
    id: 2,
    name: "",
    image: mobilelunch,
  },
  {
    id: 3,
    name: "",
    image: mobiledinner,
  },
];

const Recipecard = () => {
  return (
    <>
      <div className="hidden md:flex flex-col items-center my-20 w-[90%] mx-auto" style={{ fontFamily: "work sans"}}>
        <div className="flex flex-col">
          <div className="flex justify-between items-center text-[50px] font-bold">
            <p style={{fontWeight:400 }}>
              suggestions
            </p>
            <img src={pepper} alt="this is peper" />
          </div>

          <section className="flex">
            <div className="lg:flex justify-center items-center relative right-[4.5rem] -mr-20 bottom-5 hidden">
              <img
                src={onion}
                alt="this is an onion"
                className=""
              />
            </div>
            <div className="flex gap-5 justify-center items-center">
              {recipe.map(({ ids, name, image }) => (
                <div key={ids} className="">
                  <img src={image} alt={name} className="flex lg:h-[320px] md:h-[250px] w-[441px]" />
                  {name}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      {/* mobile view section */}
      <section
        className="md:hidden px-5 my-5 bg-[#FAFAFA]"
        style={{ fontFamily: "work sans" }}
      >
        <div className="flex flex-col gap-10">
          <div className="font-bold text-[50px] py-3 md:text-center">
            <p>suggestions</p>
          </div>

          <section className="">
            <div className="flex flex-col gap-5 justify-center items-center">
              {mobileRecipe.map(({ ids, name, image }) => (
                <div key={ids} className="">
                  <img src={image} alt={name} className="flex h-[232px] w-[380px]" />
                  {name}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Recipecard;
