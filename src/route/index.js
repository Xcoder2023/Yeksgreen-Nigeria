import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Contents from "../components/about/Contents";
import Head from "../components/jollofRice/Head";
import Form from "../components/register/Form";
import Form2 from "../components/login/Form2";
import Holder from "../components/breakfast/Holder";
import Center from "../components/lunch/Center";
import Joint from "../components/dinner/Joint";
import ScrollToTop from "../ScrollUp";
const index = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Contents" element={<Contents />} />
        <Route path="/Head" element={<Head />} />
        <Route path="/Breakfast" element={<Holder />} />
        <Route path="/Holder" element={<Holder />} />
        <Route path="/Dinner" element={<Joint />} />
        <Route path="/Lunch" element={<Center />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Form2" element={<Form2 />} />
      </Routes>
    </>
  );
};

export default index;
