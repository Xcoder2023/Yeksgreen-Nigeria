import React from "react";
import NavOne from "../navbars/NavOne";
import Register from "./Register";


const Center = () => {
  return (
    <>
      <div className=" sticky top-0 bg-white shadow-sm">
        <NavOne />
      </div>
      <Register />
    </>
  );
};

export default Center;
