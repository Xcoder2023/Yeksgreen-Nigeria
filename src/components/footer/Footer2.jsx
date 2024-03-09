import React,{ useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import brandLogo from "../../assets/footer/Brand Logo.png";
import ScrollToTopButton from '../../ScrollToTop';

const Footer2 = () => {
  const [currentYear, setCurrentYear] = useState();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <>
      {/* mobile section  */}
      <div className="flex justify-end text-[34px]">
        <ScrollToTopButton />
      </div>
      <div
        className="lg:hidden flex flex-col text-white bg-black p-5"
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
  )
}

export default Footer2