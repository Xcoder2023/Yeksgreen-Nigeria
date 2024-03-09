import React from "react";
import send from "../../assets/recipe/featured-recipe/send.png";
import send2 from "../../assets/mobile/send.png";

const Newsletter = () => {
  return (
    <>
      <div
        className="hidden bg-[url('/src/assets/recipe/tray.jpg')] bg-center bg-no-repeat bg-cover lg:flex flex-col text-white  items-center gap-5 w-[90%] m-auto py-10 object-contain"
        style={{ fontFamily: "work sans"}}
      >
        <h3 style={{fontWeight:600}} className="text-[24px]">
          Don't miss out!
        </h3>
        <p className="w-[480px] leading-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
          tristique pellentesque arcu morbi rhoncus viverra nisi integer. Dui
          est, scelerisque amet, cursus. Dui convallis.
        </p>
        <div className="flex items-center w-[430px]">
          <input
            type="text"
            placeholder="Email address"
            className="bg-[transparent] p-2 border-[1px] w-[85%] outline-none rounded-l-md placeholder:text-white placeholder:text-[18px"
          />
          <button className="bg-white p-[11px] rounded-r-[4px] flex justify-center w-[12%]">
            <img src={send} alt="search-icon" className="w-[20px]" />
          </button>
        </div>
      </div>
      {/* mobile section  */}
      <section className="px-5 mt-10 rounded-md lg:hidden flex flex-col items-center " style={{ fontFamily:"work sans"}}>
      <div
        className="bg-[url('/src/assets/mobile/missout2.jpg')] bg-center bg-no-repeat bg-cover flex flex-col text-[#ffff] gap-10 object-contain rounded-lg p-5 h-[400px]"
      >
        <h3 style={{fontWeight:600}} className="text-[34px]">
          Don't miss out!
        </h3>
        <p className="leading-[32px]" style={{fontWeight:500,fontSize:14}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
          tristique pellentesque arcu morbi rhoncus viverra nisi integer. Dui
          est, scelerisque amet, cursus. Dui convallis.
        </p>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Email address"
            className="bg-white p-3 border-[1px] w-[80%] outline-none rounded-l-md placeholder:text-[18px]"
          />
          <button className="bg-[#04471C] p-[14px] rounded-r-[10px] flex justify-center">
            <img src={send2} alt="search-icon"/>
          </button>
        </div>
      </div>
      </section>
    </>
  );
};

export default Newsletter;
