import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    
    const postData = async () => {
        try {
          const response = await axios.post("http://localhost:5000/api/login", data);
      
          console.log('Response:', response.data);  window.location.href = '/Marketplace';
        } catch (error) {
          console.error('Error:', error.response ? error.response.data : error.message);
        }
      };
      
      postData();
      
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-gradient">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
              className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Password is required' })}
              className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
