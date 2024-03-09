import React from "react";
import NavOne from "../navbars/NavOne";
import Login from "./Login";


const Center = () => {
  return (
    <>
      <div className=" sticky top-0 bg-white shadow-sm">
        <NavOne />
      </div>
      <Login />
    </>
  );
};

export default Center;
