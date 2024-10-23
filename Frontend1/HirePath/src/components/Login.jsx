import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault(); 
    try {
        const response = await axios.post("http://localhost:5000/api/login", {
          email: e.target[0].value,
          password: e.target[1].value,
        });
        
        // Check if the response was successful
        console.log('Response:', response.data);
        navigate("/MarketPlace"); // Use navigate to change routes
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        // Optional: Inform the user of the error
        alert("Login failed. Please check your email and password."); 
      }
    
   
   
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
      <div className="hidden md:flex w-full md:w-1/2 h-full">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/027/205/841/small_2x/login-and-password-concept-3d-illustration-computer-and-account-login-and-password-form-page-on-screen-3d-illustration-png.png"
          alt="Login"
          className="object-cover w-full h-full"
          data-aos="flip-left"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="bg-gradient-to-r from-orange-200 to-transparent 
          border hover:shadow-xl transition ease-in-out delay-150 
          hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-red-600 rounded-lg p-8 max-w-md w-full">
          <form onSubmit={handleLogin}> {/* Attach handleLogin to form submission */}
            <h4 className="text-2xl font-bold text-center mb-6 text-gray-800">
              LOGIN FORM
            </h4>

            <div className="mb-4">
              <input
                type="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                id="exampleInputEmail1"
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
              />
            </div>

            <div className="flex justify-end mb-4">
              <button
                type="button"
                className="text-sm text-blue-500 hover:underline focus:outline-none"
              >
                Forgot Password
              </button>
            </div>

            <button
              type="submit" // Keep this as "submit"
              className="w-full bg-red-400 text-black font-bold py-2 px-4 rounded-full hover:bg-red-700 focus:outline-none transition-all"
            >
              LOGIN
            </button>

            <p className="mt-4 text-center text-sm">
              New Customer?{" "}
              <Link to="/Register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>

            <p className="mt-2 text-center text-xs text-gray-600">
              <Link to="/policy" className="text-blue-500 hover:underline">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link to="/policy" className="text-blue-500 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}


// Devloper is used Tailwind Css In this componenet
