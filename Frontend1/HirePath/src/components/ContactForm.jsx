import React, { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://your-api-url.com/endpoint', {
        name,
        email,
        message,
      }, { withCredentials: true });

      setStatusMessage("Your message has been sent!");
    } catch (error) {
      setStatusMessage("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg opacity-70"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')"
        }}
      ></div>

      <div className="relative bg-white bg-opacity-80 rounded-lg p-8 max-w-lg w-full shadow-lg z-10">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Contact Us
          </h2>

          {statusMessage && (
            <p className="text-center text-green-500 mb-4">{statusMessage}</p>
          )}

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
