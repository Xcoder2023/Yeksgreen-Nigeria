import React from "react";
import dance from "../../assets/jollof/dance.gif";

const CheffShow = () => {
  return (
    <div className="md:bg-[#FAFAFA] bg-white py-5 md:py-14" style={{fontFamily:"work sans"}}>
      <div className="flex flex-col lg:w-[50%] w-[100%] m-auto gap-5 px-5 lg:px-0">
        <img src={dance} alt="this is a cheff" />
        <p>
          It is fair to say that this delicious rice dish is pretty easy to make
          anywhere in the world because the ingredients are easy to find. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Porta nisi,
          condimentum fusce sed ut condimentum ac. Volutpat ac, maecenas aliquam
          lectus eget consectetur ut tincidunt aenean.
        </p>
      </div>
    </div>
  );
};

export default CheffShow;
