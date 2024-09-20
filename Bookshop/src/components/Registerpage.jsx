import React, { useState } from 'react';
import Marketplace from './Marketplace';

import { useDispatch, useSelector } from 'react-redux';
import { addname } from '../../slice/userSlice';

const Registerpage = () => {
  const [isRegistering, setIsRegistering] = useState(false);



  const UserInfo=useSelector(s=>s.user)
  const dispatch=useDispatch()
  
  
  
  
  // const handleform=(e)=>{
  //   e.preventDefault()
 
    
    

  // }

  const toggleAuthMode = () => {
    setIsRegistering((prev) => !prev);
  };

  return (
    <>
    {

<div className="h-screen bg-zinc-500 shadow-md w-full flex items-center justify-center  bg-cover bg-center">
      <div className="animated-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 p-8 rounded-lg shadow-lg w-full max-w-md transform transition-transform duration-500 ease-in-out">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isRegistering ? 'Create an Account' : 'Login to Study Hub'}
        </h2>
        <form className="space-y-6">
          {isRegistering && (
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input onChange={(e)=>dispatch(addname(e.target.value))}
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="John Doe"
                />
            </div>
          )}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your password"
            />
          </div>
          {isRegistering && (
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Confirm password"
                />
            </div>
          )}
          <button
          onClick={(e)=>{
            e.preventDefault()
           
          }}
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            {isRegistering ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          {isRegistering ? 'Already have an account?' : "Don't have an account?"}
          <span
            onClick={toggleAuthMode}
            className="text-blue-500 font-semibold cursor-pointer hover:underline ml-2"
          >
            {isRegistering ? 'Log In' : ' Create Account'}
          </span>
        </p>
      </div>
    </div>

    }
    
                </>
  );
};

export default Registerpage;
