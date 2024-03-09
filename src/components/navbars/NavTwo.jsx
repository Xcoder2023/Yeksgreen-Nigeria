import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Button, Dropdown, Space } from "antd";
import logo from "../../assets/nav/Brand 3 -  desktop 💻.png";
import fileText from "../../assets/nav/file-text.svg";
import nopicture from "../../assets/nav/No picture.png";
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
      <div className='flex justify-between items-center md:px-[7.5rem] py-5 px-5' style={{fontFamily:'work sans', fontSize:24}}>
        <div className='flex justify-center items-center gap-2'>
          <img src={menuvariant} alt="" onClick={handleMenu} className='md:hidden'/>
          <Link to='/'><img src={logo} alt="brand logo" /></Link>
        </div>
        <div>
          <ul className='md:flex gap-5 hidden'>
            <li><Link to='/Contents'>About us</Link></li>
            <Space className="">
              <Dropdown
                menu={{
                  items,
                }}
              >
                <Button>Recipe</Button>
              </Dropdown>
            </Space>
            <li><Link to='/Head'>Blog</Link></li>
          </ul>
        </div>
        <div className='flex gap-5'>
         <img src={fileText} alt="message-icon" />
         <img src={nopicture} alt="" />
        </div>
      </div>
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
  )
}

export default NavOne