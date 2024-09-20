import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Header = ({title,Logopath,profile}) => {


const info=useSelector(s=>s.user)


  return (
    <>
    <header className='bg-white opacity-0.5 py-3 items-center flex justify-between px-3'>
       
        <h1 className='text-[3vw] font-bold text-center '>{title}</h1>

        <SearchBar />

       <div className='flex gap-1  justify-around'>
       <Link to={"/cart"}>
         <h5 className='text-green-900 font-bold mt-2 '>Cart:{info.cart.length}</h5>
       </Link>
       <Link to={"/Profile"}>
         <img className='size-10' src={profile} alt="" />
       </Link>
       </div>
        

    </header>



    
    </>
  )
}

export default Header