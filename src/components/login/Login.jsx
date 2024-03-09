import React, { useState } from "react";
import { Link } from "react-router-dom";
import apple from "../../assets/register/Apple Auth.png";
import facebook from "../../assets/register/Facebook Auth.png";
import google from "../../assets/register/Google Auth.png";
import line from "../../assets/register/Line 7.png";
import {useNavigate } from "react-router-dom";

const Register = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: ''
  };
  const navigate = useNavigate();
  const validateForm = () => {
    navigate("/");
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData(initialFormData);
    setTimeout(() => {
      setSubmitted(false);
      validateForm();
    }, 3000);
    
  };
  return (
    <>
      
      <div
        className="flex justify-between w-[100%] lg:w-[90%] md:w-[90%]  m-auto h-[100%] px-5 md:px-0 gap-10"
        style={{ fontFamily: "work sans" }}
      >
        <div className="bg-[url('/src/assets/register/kichensink.png')] bg-no-repeat bg-center bg-cover w-[50%] h-[545px] hidden md:block"></div>

        <div className="flex flex-col w-[100%] md:w-[40%] md:h-[80%] h-[100%] my-auto gap-5 md:gap-8">
          <p style={{ fontWeight: 700, fontSize: 30 }} className="lg:hidden">Login to continue where you left off</p>
          <p className="hidden lg:block" style={{ fontWeight: 700, fontSize: 30 }}>Login to do more</p>
          {submitted && <p className="text-green-500 font-medium text-[34px]">Login successful!</p>}
          <form
            onSubmit={handleSubmit}
            action=""
            method=""
            className="flex flex-col gap-5 md:gap-10"
          >
            <input
              placeholder="✉️ Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-[1px] md:p-1 p-5 md:rounded-md rounded-xl outline-none"
            />
            <input
              type="passord"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="🔒 Password"
              required
              className="border-[1px] md:p-1 p-5 md:rounded-md rounded-xl outline-none"
            />
            <button
              className="md:bg-[#04471C] bg-green-700 md:rounded-md rounded-xl flex text-white justify-center md:p-1 p-5 font-normal text-[20px]"
              style={{ fontWeight: 200 }}
              type="submit"
            >
              Sign up with Email
            </button>
          </form>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-center gap-1 font-medium text-[15px] w-[100%] m-auto">
              <img src={line} alt="" className="h-[1px] w-20" />
              <p>Or With</p>
              <img src={line} alt="" className="h-[1px] w-20" />
            </div>
            <div className="flex gap-5 justify-center">
              <img src={apple} alt="" className="w-[40px]" />
              <img src={facebook} alt="" className="w-[40px]" />
              <img src={google} alt="" className="w-[40px]" />
            </div>
            <hr />
            <div className="flex justify-center font-medium text-[20px]">
              <p>
                Don't Have An Account?{" "}
                <span>
                  <Link to="/Form">Register here</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
