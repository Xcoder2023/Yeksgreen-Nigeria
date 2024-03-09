import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Space } from "antd";
import logo from "../../assets/nav/Brand 3 -  desktop 💻.png";
import loginIcon from "../../assets/nav/log-in.png";
import userIcon from "../../assets/nav/user.png";
import menuvariant from "../../assets/mobile/menu-variant.png";
import { RxCross2 } from "react-icons/rx";

const NavOne = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
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
      <div
        className="hidden md:block"
        style={{ fontFamily: "work sans", fontWeight: 400, fontSize: 24 }}
      >
        <div className="hidden md:flex justify-between items-center py-3 gap-12 w-[90%] mx-auto">
        <div>
          <Link to="/">
            <img src={logo} alt="brand logo" />
          </Link>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <Link to="/Contents">About us</Link>
            </li>
            <Space className="">
              <Dropdown
                menu={{
                  items,
                }}
              >
                <Button>Recipe</Button>
              </Dropdown>
            </Space>
            <li>
              <Link to="/Head">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="flex items-center">
            <Link to="/Form2">
              <button
                className="flex items-center gap-2 text-[23px]"
                style={{ fontFamily: "work sans", fontWeight: 400 }}
              >
                Login <img src={loginIcon} alt="login-icon" className="w-5" />
              </button>
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <Link to="/Form">
              <button
                className="flex items-center gap-2 bg-[green] px-2 py-1 rounded-md text-white"
                style={{ fontWeight: 200 }}
              >
                <img src={userIcon} alt="user-icon" /> Register
              </button>
            </Link>
          </div>
        </div>
        </div>
      </div>
      {/* mobile section  */}
      <nav
        className="md:hidden flex justify-between items-center p-5"
        style={{ fontFamily: "work sans" }}
      >
        <div className="flex justify-between items-center gap-5">
          <img src={menuvariant} alt="side bar" onClick={handleMenu} />
          <Link to='/'><img src={logo} alt="brand logo" /></Link>
        </div>
        <button className="bg-[#058B42] px-3 py-3 rounded-md text-white font-normal text-[16px]">
          <Link to='/Form2'>Login </Link>/ <Link to='/Form'>Register</Link>
        </button>
      </nav>
      {/* side bar  */}
      <div className={showMenu ? "menu active bg-[white] w-full" : "menu"}>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between p-5">
            <img src={logo} alt="" />
            <RxCross2 onClick={handleMenu} className="text-[50px]" />
          </div>
          <ul
            className="flex flex-col gap-5 p-5 justify-start items-start"
            style={{ fontWeight: 500, fontSize: 23, fontFamily: "work sans" }}
          >
            <li><Link to="/Contents">About us</Link></li>
            <li><Space className="relative right-5">
              <Dropdown
                menu={{
                  items,
                }}
              >
                <Button>Recipe</Button>
              </Dropdown>
            </Space></li>
            <li><Link to="/Head">Blog</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavOne;
