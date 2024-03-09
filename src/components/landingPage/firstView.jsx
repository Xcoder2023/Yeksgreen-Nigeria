import React from "react";
import Slider from "react-slick";
import search from "../../assets/bodyimage/search.svg";
import search2 from "../../assets/mobile/search.png";
import mobilelunc from "../../assets/recipe/featured-recipe/yam.png";
import akarapap from "../../assets/mobile/Akara.png";
import frame from "../../assets/recipe/featured-recipe/beans.png";
import frame2 from "../../assets/mobile/spicySpaghetti.jpg";
import Rice from "../../assets/mobile/RiceJ.png";

const FirstView = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="hidden md:flex flex-col overflow-hidden pb-10">
        <Slider {...settings}>
          <div className="bg-[url('/src/assets/bodyimage/MacBook.svg')] bg-center bg-no-repeat bg-cover h-[100vh] flex md:px-[2rem] lg:px-[4rem] text-white overflow-hidden object-fill">
            <div className="flex flex-col gap-10 py-5">
              <div className="flex flex-col">
                <p
                  className="w-[645px] leading-tight"
                  style={{
                    fontSize: 80,
                    fontWeight: 600,
                    fontFamily: "work sans",
                  }}
                >
                  Learn to cook<span className="text-[#058B42]"> healthy </span>
                  Nigerian recipes
                </p>
                <p
                  className="text-[#16DC65] tracking-wide"
                  style={{fontSize:20, fontWeight:200}}
                >
                  Ranging from meals to dessert to drinks.
                </p>
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search recipe"
                  className="bg-[transparent] p-[10px] border-[1px] w-[35%] outline-none rounded-l-md placeholder:text-white"
                />
                <button className="bg-white p-[13px] w-14 rounded-r-[5px] flex justify-center">
                  <img src={search} alt="search-icon" className="w-[20px]" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[url('/src/assets/mobile/akarapap2.png')] bg-center bg-no-repeat bg-cover h-[100vh] flex md:px-[2rem] lg:px-[4rem] text-white overflow-hidden object-fill">
            <div className="flex flex-col gap-10 pt-5">
              <div className="flex flex-col">
                <p
                  className="w-[645px] leading-tight"
                  style={{
                    fontSize: 80,
                    fontWeight: 600,
                    fontFamily: "work sans",
                  }}
                >
                  Learn to cook<span className="text-[#058B42]"> healthy </span>
                  Nigerian recipes
                </p>
                <p
                 className="text-[#16DC65] tracking-wide"
                 style={{fontSize:20, fontWeight:200}}
                >
                  Ranging from meals to dessert to drinks.
                </p>
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search recipe"
                  className="bg-[transparent] p-[10px] border-[1px] w-[35%] outline-none rounded-l-md placeholder:text-white"
                />
                <button className="bg-white p-[13px] w-14 rounded-r-[5px] flex justify-center">
                  <img src={search} alt="search-icon" className="w-[20px]" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[url('/src/assets/slider/Nigerian-rice.webp')] bg-center bg-no-repeat bg-cover h-[100vh] flex md:px-[2rem] lg:px-[4rem] text-white overflow-hidden object-fill">
            <div className="flex flex-col gap-10 pt-5">
              <div className="flex flex-col">
                <p
                  className="w-[645px] leading-tight"
                  style={{
                    fontSize: 80,
                    fontWeight: 600,
                    fontFamily: "work sans",
                  }}
                >
                  Learn to cook<span className="text-[#058B42]"> healthy </span>
                  Nigerian recipes
                </p>
                <p
                className="text-[#16DC65] tracking-wide"
                style={{fontSize:20, fontWeight:200}}
                >
                  Ranging from meals to dessert to drinks.
                </p>
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search recipe"
                  className="bg-[transparent] p-[10px] border-[1px] w-[35%] outline-none rounded-l-md placeholder:text-white"
                />
                <button className="bg-white p-[13px] w-14 rounded-r-[5px] flex justify-center">
                  <img src={search} alt="search-icon" className="w-[20px]" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[url('/src/assets/slider/vegies.jpg')] bg-center bg-no-repeat bg-cover h-[100vh] flex md:px-[2rem] lg:px-[4rem] text-white overflow-hidden object-fill">
            <div className="flex flex-col gap-10 pt-5">
              <div className="flex flex-col">
                <p
                  className="w-[645px] leading-tight"
                  style={{
                    fontSize: 80,
                    fontWeight: 600,
                    fontFamily: "work sans",
                  }}
                >
                  Learn to cook<span className="text-[#058B42]"> healthy </span>
                  Nigerian recipes
                </p>
                <p
                 className="text-[#16DC65] tracking-wide"
                 style={{fontSize:20, fontWeight:200}}
                >
                  Ranging from meals to dessert to drinks.
                </p>
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search recipe"
                  className="bg-[transparent] p-[10px] border-[1px] w-[35%] outline-none rounded-l-md placeholder:text-white"
                />
                <button className="bg-white p-[13px] w-14 rounded-r-[5px] flex justify-center">
                  <img src={search} alt="search-icon" className="w-[20px]" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[url('/src/assets/slider/burger2.webp')] bg-center bg-no-repeat bg-cover h-[100vh] flex md:px-[2rem] lg:px-[4rem] text-white overflow-hidden object-fill">
            <div className="flex flex-col gap-10 pt-5">
              <div className="flex flex-col">
                <p
                  className="w-[645px] leading-tight"
                  style={{
                    fontSize: 80,
                    fontWeight: 600,
                    fontFamily: "work sans",
                  }}
                >
                  Learn to cook<span className="text-[#058B42]"> healthy </span>
                  Nigerian recipes
                </p>
                <p
                 className="text-[#16DC65] tracking-wide"
                 style={{fontSize:20, fontWeight:200}}
                >
                  Ranging from meals to dessert to drinks.
                </p>
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search recipe"
                  className="bg-[transparent] p-[10px] border-[1px] w-[35%] outline-none rounded-l-md placeholder:text-white"
                />
                <button className="bg-white p-[13px] w-14 rounded-r-[5px] flex justify-center">
                  <img src={search} alt="search-icon" className="w-[20px]" />
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* mobile view */}
      <div
        className="md:hidden flex flex-col gap-10 p-5"
        style={{ fontFamily: "work sans" }}
      >
        <p className="font-extrabold text-[46px] text-[#04471C]">
          Home for healthy Nigerian recipes
        </p>
        <p className="font-normal text-xl ">
          Ranging from meals to dessert to drinks.
        </p>
        <div className="flex items-center w-full">
          <input
            type="text"
            placeholder="Search recipe"
            className="bg-[transparent] p-[9px] border-[1px] border-[#04471C] w-[100%] outline-none rounded-l-md"
          />
          <button className="bg-[#04471C] text-white p-[14px] w-12 rounded-r-[5px] flex justify-center">
            <img src={search2} alt="search-icon" className="w-[20px]" />
          </button>
        </div>
        {/* carousel */}

        <div className="flex flex-col">
          <Slider {...settings}>
            <div>
              <img src={mobilelunc} alt={mobilelunc} />
            </div>
            <div>
              <img src={frame} alt="" />
            </div>
            <div>
              <img src={akarapap} alt="" />
            </div>
            <div>
              <img src={frame2} alt="" />
            </div>
            <div>
              <img src={Rice} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FirstView;
