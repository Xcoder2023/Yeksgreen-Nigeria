import React from "react";
import clock from "../../assets/ingredents/clock.png";
import thumbs from "../../assets/ingredents/thumbs-up.png";
import Ingredient from "../../assets/ingredents/ingrdents.png";

const Ingredients = () => {
  return (
    <>
      <div style={{ fontFamily: "work sans" }} className="py-5 md:py-20 w-[100%] lg:w-[82%] m-auto px-5 lg:px-0">
        <div className="bg-[#FAFAFA] border-[2px] md:border-[1px] border-dashed p-5 md:p-3 flex flex-col gap-5 rounded-lg md:rounded-none">
          <p style={{fontWeight:500}}>Recipe Facts</p>
          <div className="flex md:gap-20 gap-5 items-center text-[14px]"  style={{fontWeight:400}}>
            <div className="flex gap-2">
              <div>
                <img src={clock} alt="" />
              </div>
              <div className="">
                <p>Active: 20mins</p>
                <p>Total: 60mins</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={thumbs} alt="" />
              <p>4-6 servings</p>
            </div>
          </div>
        </div>

        {/* ingredents for cooking jollof rice  */}
        <div className="flex justify-between py-5 md:gap-5 gap-0 lg:gap-0 md:py-20 items-center">
          <div className="flex flex-col gap-5 items-justify">
            <p style={{ fontWeight: 700, fontSize: 28}}>Ingredients</p>
            <ul style={{ fontWeight: 400, fontSize: 15 }} className="list-disc leading-8 pl-9 md:pl-6">
              <li>+ 4 cups of rice</li>
              <li>+ Tomato puree</li>
              <li>+ 1 bulb of red onions</li>
              <li>+ 4 pcs of scotch bonnet pepper</li>
              <li>+ Thyme</li>
              <li>+ Carrot & Peas (optional)</li>
            </ul>
            <button
              className="md:bg-[#04471C] bg-green-600 rounded-md p-3 md:p-2 text-white"
            >
              + Add to shopping list
            </button>
          </div>
          <img
            src={Ingredient}
            alt="this is jollof rice ingredents"
            className="w-[450px] hidden md:block"
          />
        </div>
        <hr className="hidden md:block"/>

        {/* Directions for cooking jollof rice  */}

        <div
          style={{ fontSize: 14, fontWeight: 400 }}
          className="flex flex-col gap-10 leading-9 md:py-24 py-5"
        >
          <p style={{ fontWeight: 700, fontSize: 28 }}>Directions</p>
          <p className="flex flex-col">
            <span>Step 1</span>In a blender, combine tomatoes, scotch bonnet
            pepper and onions; purée. Pour out half the purée into a bowl; set
            aside. Add the bell peppers to the purée remaining in the blender
            and pulse until smooth. Add to the mixture that was set aside and
            stir to combine.
          </p>
          <p className="flex flex-col">
            <span>Step 2</span>Heat vegetable oil in a large pot over medium
            heat. Add blended vegetables along with the salt, curry powder,
            ground chile pepper, garlic powder, onion powder, bay leaves, ginger
            and thyme. Bring mixture to a boil.
          </p>
          <p className="flex flex-col">
            <span>Step 3</span>Stir in the rice until well mixed, then reduce
            the heat to low.
          </p>
          <p className="flex flex-col">
            <span>Step 4</span>Cover pot and let cook until rice is al dente,
            about 45 minutes. Check after 30 minutes; if rice is sauce-logged,
            remove the lid to cook off the excess sauce. If rice seems dry, stir
            in 1 to 2 cups water. Allow the rice at the bottom of the pot to
            char a bit to infuse it with a smoky flavor.
          </p>
        </div>
        {/* Quantity of nutriens  */}

        <div className="bg-[#FAFAFA] border-[2px] md:border-[1px] border-dashed p-5 md:p-3 flex flex-col gap-5 rounded-lg md:rounded-none">
          <p style={{fontWeight:600}} className="text-[15px] ">Nutrition Facts (per serving)</p>
          <div className="flex justify-between md:justify-normal md:gap-16 gap-0  items-center text-[14px]" style={{fontWeight:400}}>
            <div>
              <p>445</p>
              <p>Caloris</p>
            </div>
            <div>
              <p>10g</p>
              <p>Fat</p>
            </div>
            <div>
              <p>89kg</p>
              <p>Carbs</p>
            </div>
            <div>
              <p>7g</p>
              <p>Protein</p>
            </div>
          </div>
        </div>

        {/* preservin leftover ingredents  */}
        <div className=" flex flex-col gap-12 pt-20 mx-auto pl-4" style={{fontFamily:'work sans'}}>
          <p style={{fontSize:28, fontWeight:600}}>Preserving leftover ingredients</p>

          <ol className="flex flex-col gap-10 space-y-1 list-decimal text-[14px] leading-9" style={{fontWeight:400}}>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquam ac tristique velit, justo, porttitor. Eget mattis a
              curabitur augue. Pellentesque urna tristique.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquam ac tristique velit, justo, porttitor. Eget mattis a
              curabitur augue. Pellentesque urna tristique.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquam ac tristique velit, justo, porttitor. Eget mattis a
              curabitur augue. Pellentesque urna tristique.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquam ac tristique velit, justo, porttitor. Eget mattis a
              curabitur augue. Pellentesque urna tristique.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Ingredients;
