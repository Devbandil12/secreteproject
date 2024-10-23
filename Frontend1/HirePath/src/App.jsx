import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import ContactForm from './components/ContactForm';
import MarketPlace from './components/MarketPlace';
import JobProfileSection from './components/Profile';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
       <Route path="/" element={<Login />} />
        <Route path="*" element={<Home/>} /> 
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<ContactForm/>} /> 
        <Route path="/MarketPlace" element={<MarketPlace/>} /> 
        <Route path="/profile" element={<JobProfileSection/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
