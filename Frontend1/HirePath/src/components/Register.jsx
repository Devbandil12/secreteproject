import axios from "axios";
import React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm();
  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/getstarted', {
        name: data.fullName,
        email: data.email,
        password: data.password,
        skills: data.skills,
      });
      console.log(response);
      if(response.data){
         window.location.href="/home"
        

          console.log('Response:', response.data);
      }
      // Optionally handle successful registration (e.g., redirect or show a success message)
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      // Optionally handle error (e.g., show error message to user)
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-6 w-full max-w-lg p-8 bg-white shadow-2xl rounded-lg'>
        <h1 className='text-center text-2xl font-bold'>REGISTER YOURSELF</h1>

        {/* Full Name */}
        <label className="w-full">
          <p className="text-sm text-gray-700 mb-1">
            Full Name: <sup className="text-pink-500">*</sup>
          </p>
          <input
            type="text"
            placeholder="Enter Full Name"
            {...register('fullName', { required: true, minLength: { value: 3, message: "Minimum length is 3" } })}
            className="bg-gray-100 rounded-lg w-full p-3 text-gray-700 border border-gray-300 outline-none focus:border-blue-500"
          />
          {errors.fullName && <span className="text-pink-500 text-xs">{errors.fullName.message}</span>}
        </label>

        {/* Email */}
        <label className="w-full">
          <p className="text-sm text-gray-700 mb-1">
            Email Address: <sup className="text-pink-500">*</sup>
          </p>
          <input
            type="email"
            placeholder="Enter your email address"
            {...register('email', { required: true })}
            className="bg-gray-100 rounded-lg w-full p-3 text-gray-700 border border-gray-300 outline-none focus:border-blue-500"
          />
          {errors.email && <span className="text-pink-500 text-xs">Email is required</span>}
        </label>

        {/* Skills */}
        <label className="w-full">
          <p className="text-sm text-gray-700 mb-1">
            Skills: <sup className="text-pink-500">*</sup>
          </p>
          <input
            type="text"
            placeholder="Skills..."
            {...register('skills', { required: true, minLength: { value: 3, message: "Minimum length is 3" } })}
            className="bg-gray-100 rounded-lg w-full p-3 text-gray-700 border border-gray-300 outline-none focus:border-blue-500"
          />
          {errors.skills && <span className="text-pink-500 text-xs">{errors.skills.message}</span>}
        </label>

        {/* Password and Confirm Password */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Create Password */}
          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">
              Create Password: <sup className="text-pink-500">*</sup>
            </p>
            <input
              type="password"
              placeholder="Enter Password"
              {...register('password', {
                required: true,
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/,
                  message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
                }
              })}
              className="bg-gray-100 rounded-lg w-full p-3 text-gray-700 border border-gray-300 outline-none focus:border-blue-500"
            />
            {errors.password && <span className="text-pink-500 text-xs">{errors.password.message}</span>}
          </label>

          {/* Confirm Password */}
          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">
              Confirm Password: <sup className="text-pink-500">*</sup>
            </p>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register('confirmPassword', {
                required: true,
                validate: value => value === password || "Passwords do not match",
              })}
              className="bg-gray-100 rounded-lg w-full p-3 text-gray-700 border border-gray-300 outline-none focus:border-blue-500"
            />
          </label>
        </div>

        {errors.confirmPassword && (
          <span className="text-pink-500 text-xs">{errors.confirmPassword.message}</span>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className='bg-yellow-400 py-2 px-4 rounded-lg mt-6 font-medium text-gray-900 w-full border border-gray-300 hover:bg-yellow-300'
          disabled={isSubmitting}
        >
          {isSubmitting ? "REGISTERING..." : "REGISTER"}
        </button>

        <div>
          <p className='text-center'>Existing user? <a href="/Login" className='text-blue-500'>Login</a></p>
          <p className='text-center'>
            <a href="#" className='text-blue-500'>Terms of Use</a> and <a href="#" className='text-blue-500'>Privacy Policy</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
