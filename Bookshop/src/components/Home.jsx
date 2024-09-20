import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
  

  return (
    <div className='w-full h-screen grid grid-rows-[auto_1fr_auto] gap-2'>
     
      <header className='bg-blue-400 border-5 border-black flex justify-between p-5 px-12'>
        <img className='size-16' src="school-flag-svgrepo-com.svg" alt="School Flag" />
      
      </header>


      <main className='bg-[url("bg.jpg")] bg-cover bg-center bg-no-repeat flex items-center justify-center'>
      <Link to={"/getstarted"} >  <button  className='p-5 mx-5 bg-green-500'>
          Get Started
        </button></Link>
      </main>

     
      <footer className='bg-blue-400 border-5 border-black flex justify-around p-5 text-xl font-bold'>
        <div>Contact Us</div>
        <div>About Us</div>
        <div>Policy</div>
      </footer>
    </div>
  );
};

export default Home;


























  


