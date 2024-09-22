import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../slice/userSlice";
import { Link } from "react-router-dom";
import axios from "axios"

const Registerform = () => {
  const userinfo = useSelector((s) => s.user);

  

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="h-screen bg-zinc-500 shadow-md w-full flex items-center justify-center  bg-cover bg-center">
      <div className="animated-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 p-8 rounded-lg shadow-lg w-full max-w-md transform transition-transform duration-500 ease-in-out">
        <h2 className="text-3xl font-bold text-center mb-6"></h2>
        <form
          onSubmit={handleSubmit((data) => {
            
            
            let obj = {
              name: data.fullname,
              email: data.email,
              password: data.password,
            };
 dispatch(addUser(obj));
 const postData = async () => {
  try {
    const response = await axios.post("http://localhost:5000/api/getstarted", obj);

    console.log('Response:', response.data);  window.location.href = '/Marketplace';
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

postData();

 
          
 

        
          })}
          className="space-y-6"
        >
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              {...register("fullname", { required: true, minLength: 5 })}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              {...register("email", { required: true, minLength: 5 })}
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              {...register("password", { required: true, minLength: 5 })}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your password"
            />
          </div>

          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              {...register("confirmpassword", { required: true, minLength: 5 })}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm password"
            />
          </div>

        <button className="w-full bg-blue-500 text-white font-semibold mt- py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            sign up
          </button>
   
        </form>

        <p className="text-center text-gray-600 mt-6">
          <span className="text-blue-500 font-semibold cursor-pointer hover:underline ml-2"></span>
        </p>
      </div>
    </div>
  );
};

export default Registerform;
