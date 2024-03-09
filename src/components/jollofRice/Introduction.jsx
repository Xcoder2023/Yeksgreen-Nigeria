import React from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Space } from "antd";
import love from "../../assets/recipe/featured-recipe/love.png";

const Introduction = () => {
  const items = [
    {
      key: "1",
      label: <Link to="/Breakfast">Breakfast</Link>,
    },
    {
      key: "2",
      label: <Link to="/Lunch">Lunch</Link>,
    },
    {
      key: "3",
      label: <Link to="/Dinner">Dinner</Link>,
    },
  ];

  return (
    <>
      <div style={{fontFamily:'work sans'}}>
        <div
          className="bg-[#04471C] flex justify-between md:px-[7.5rem] p-5 text-white gap-3"
          style={{fontSize: 24 }}
        >
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-[18px]">Jollof Rice & Chicken</p>
            <p className="font-normal text-[13px]">Updated 8/02/2024</p>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <img src={love} alt="" />
            <button className="bg-green-600 px-1 rounded-md">Print</button>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-5 px-5 lg:px-[7.5rem] md:pb-[7.5rem] pb-5 md:p-5 shadow-xl">
          <div className="flex flex-col lg:w-[50%] w-[100%]  items-start gap-5 lg:gap-20 m-auto">
            <p style={{ lineHeight: 2}} className="pt-5 lg:pt-[50px]">
              Jollof rice, is a rice dish from West Africa. The dish is
              typically made with long-grain rice, tomatoes, onions, spices,
              vegetables and meat in a single pot, although its ingredients and
              preparation methods vary across different regions. Tellus diam
              felis, vel, ut pulvinar est amet aliquam. Id id nunc, id
              facilisis. Nec elementum, purus morbi consectetur iaculis gravida
              libero. Non tellus suspendisse nulla metus morbi vulputate lectus
              eu. Aenean mauris pharetra facilisi.
            </p>
            <Space className="jumpTorecipe">
              <Dropdown
                menu={{
                  items,
                }}
              >
                <Button>Jump to recipe</Button>
              </Dropdown>
            </Space>
          </div>
          <div className="bg-[url('/src/assets/jollof/ricesample.png')] bg-no-repeat bg-cover bg-center lg:w-[812px]  h-[450px] rounded-md hidden md:block"></div>
          {/* mobile view image */}
          <div className="bg-[url('/src/assets/mobile/Frame.png')] bg-no-repeat bg-cover bg-center w-[100%] h-[232px] rounded-md md:hidden"></div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
