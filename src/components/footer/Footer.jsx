import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/footer/Brand Logo.png";
import facebook from "../../assets/footer/facebook.png";
import twitter from "../../assets/footer/twitter.png";
import instagram from "../../assets/footer/instagram.png";
import ScrollToTopButton from "../../ScrollToTop";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <>
      <div className="flex justify-end pr-10 text-[34px]">
        <ScrollToTopButton />
      </div>
      <div className="hidden lg:flex flex-col text-white bg-black px-24 gap-10">
        <div
          className="flex items-center justify-between font-sans"
          style={{ fontWeight: 500, fontSize: 23 }}
        >
          <div className="flex flex-col gap-5">
            <div>
              <Link to="/">
                <img src={brandLogo} alt="this is the company logo" />
              </Link>
            </div>
            <p style={{ fontSize: 19, fontWeight: 400, width: 342 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              condimentum quis eget adipiscing eu ut. Nullam eget nibh tincidunt
              eget.
            </p>
          </div>

          <ul className="flex flex-col gap-5">
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
          </ul>

          <div>
            <p>Social</p>
            <ul className="flex gap-3">
              <li className="bg-white rounded-full p-1">
                <img src={facebook} alt="" />
              </li>
              <li className="bg-white rounded-full p-1">
                <img src={twitter} alt="" />
              </li>
              <li className="bg-white rounded-full p-1">
                <img src={instagram} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <hr className="flex bg-white h-[1px] w-full" />
        <div className="flex justify-between">
          <p>&copy;Copyright {currentYear} All rights reserved</p>
        </div>
      </div>
      {/* mobile section  */}
      <div
        className="lg:hidden flex flex-col text-white bg-[#0D2819] p-5"
        style={{ fontFamily: "work sans" }}
      >
        <div
          className="flex flex-col items-center"
          style={{ fontWeight: 500, fontSize: 23 }}
        >
          <div className="flex flex-col items-center justify-center gap-5 py-5">
            <div>
              <Link to="/">
                <img src={brandLogo} alt="this is the company logo" />
              </Link>
            </div>
            <p
              style={{ fontSize: 16, fontWeight: 400 }}
              className="leading-[24px]flex text-center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              condimentum quis eget adipiscing eu ut. Nullam eget nibh tincidunt
              eget.
            </p>
          </div>

          <ul className="flex flex-col gap-5 py-10">
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
        <hr className="flex bg-white w-full" />
        <div className="flex justify-center py-3">
          <p>&copy;Copyright {currentYear} All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
