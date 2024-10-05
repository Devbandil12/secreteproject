import { useEffect, useState } from "react";
import React from "react";
import { io } from "socket.io-client";

// Sample notification data with images
const socket=io()


const Notification= () => {

  const [notification, setNotification] = useState([
    {
      id: 1,
      message: "You have a new message from John",
      timestamp: "2024-10-01T10:00:00Z",
      image: "https://via.placeholder.com/40", // Replace with actual image URL
    },
    {
      id: 2,
      message: "Your order has been shipped!",
      timestamp: "2024-10-01T09:00:00Z",
      image: "https://via.placeholder.com/40", // Replace with actual image URL
    },
    {
      id: 3,
      message: "New comment on your post",
      timestamp: "2024-09-30T15:30:00Z",
      image: "https://via.placeholder.com/40", // Replace with actual image URL
    },
    // Add more notifications as needed
  ])

useEffect(() => {
  



  // socket.on("marketplace",messagedata)
  setNotification([ {
    id: 1,
    message: "helo",
    timestamp: "2024-10-01T10:00:00Z",
    image: "https://via.placeholder.com/40", // Replace with actual image URL
  }])


},[])

const handleClear=()=>{
  setNotification([])
}
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
      <div className="flex justify-between px-3">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
       <button onClick={handleClear} className="hover:bg-red-500 hover:ring-sky-500 rounded-full text-center px-3 "> <h4 >clear all</h4></button>
      </div>
      <ul className="space-y-2">
        {notification.length>0?notification.slice().reverse().map((notification) => (
          <li
            key={notification.id}
            className="flex items-start border-b last:border-b-0 py-2"
          >
            <img
              src={notification.image}
              alt="Profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-gray-800">{notification.message}</p>
              <span className="text-gray-500 text-sm">
                {new Date(notification.timestamp).toLocaleString()}
              </span>
            </div>
          </li>
        )):<><h3 className="text-red-600 ">no notification</h3></>}
      </ul>
    </div>
  );
};

export default Notification;
