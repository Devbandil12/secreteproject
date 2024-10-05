// ProfileSection.js
import React, { useEffect } from 'react';
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import {
  setName,
  setProfileImage,
  setBackgroundImage,
  toggleCreateShop,
  setShopName,
} from '../../slice/ProfileSlice';
import { io } from 'socket.io-client';

const ProfileSection = () => {
  
  const dispatch = useDispatch();
  const {
    name,
    pendingOrders,
    successfulOrders,
    profileImage,
    backgroundImage,
    isCreatingShop,
    shopName,
  } = useSelector((state) => state.profile);

  const handleEditName = (newName) => {
    dispatch(setName(newName));
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setProfileImage(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackgroundImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setBackgroundImage(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleCreateShop = () => {

    console.log('Shop created:', shopName);
   
    // Logic to create a shop can be added here
  };
  useEffect(()=>{
      const socket=io();
      socket.emit("profiledata",{namee: name,
        

        profileimage:profileImage,
        bgimage:backgroundImage,
       })
  },[])
  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg overflow-hidden animate-fade-in">
      
      <div className="relative">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-32 object-cover rounded-t-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-between p-2">
          <label className="bg-white text-blue-500 px-3 py-1 rounded hover:bg-blue-100 transition duration-300 cursor-pointer text-sm">
            Background
            <input
              type="file"
              accept="image/*"
              onChange={handleBackgroundImageChange}
              className="hidden"
            />
          </label>
          <label className="bg-white text-blue-500 px-3 py-1 rounded hover:bg-blue-100 transition duration-300 cursor-pointer text-sm">
            Profile
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
              className="hidden"
            />
          </label>
          <button
            onClick={() => handleEditName(prompt("Enter new name", name))}
            className="bg-white text-blue-500 px-3 py-1 rounded hover:bg-blue-100 transition duration-300 text-sm"
          >
            Edit Name
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center space-x-4">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-white">{name}</h2>
            <p className="text-white">@username</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium text-white">Orders</h3>
          <div className="flex justify-between mt-2">
            <div className="text-center">
              <p className="text-gray-200">Pending</p>
              <p className="font-semibold text-white">{pendingOrders}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-200">Successful</p>
              <p className="font-semibold text-white">{successfulOrders}</p>
            </div>
          </div>
        </div>

        {/* Create New Shop Section */}
        <div className="mt-6">
          {!isCreatingShop ? (
          <Link to={"/shop"}>

            <button
              onClick={() => dispatch(toggleCreateShop())}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 text-sm"
              >
              Create New Shop
            </button>
              </Link>
        
          ) : (
            <div className="mt-4">
              <input
                type="text"
                value={shopName}
                onChange={(e) => dispatch(setShopName(e.target.value))}
                className="border rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What is your shop name?"
              />
              <div className="flex justify-between mt-2">
                <button
                  onClick={handleCreateShop}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300 text-sm"
                >
                  Create Shop
                </button>
                <button
                  onClick={() => dispatch(toggleCreateShop())}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300 text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Wishlist and Order List Section */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <h3 className="text-xl font-semibold text-gray-800">My Wishlist</h3>
        <ul className="mt-2">
          <li className="text-gray-700">Item 1</li>
          <li className="text-gray-700">Item 2</li>
          <li className="text-gray-700">Item 3</li>
        </ul>

        <h3 className="mt-4 text-xl font-semibold text-gray-800">Order List</h3>
        <ul className="mt-2">
          <li className="text-gray-700">Order 1</li>
          <li className="text-gray-700">Order 2</li>
          <li className="text-gray-700">Order 3</li>
        </ul>

        <h3 className="mt-4 text-xl font-semibold text-gray-800">
          Transactions
        </h3>
        <ul className="mt-2">
          <li className="text-gray-700">Transaction 1</li>
          <li className="text-gray-700">Transaction 2</li>
          <li className="text-gray-700">Transaction 3</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSection;
