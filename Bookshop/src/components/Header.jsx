import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Header = ({menu,title,Logopath,profile}) => {


const info=useSelector(s=>s.user)


  return (
    <>
    <header className='bg-white opacity-0.5 py-3 items-center flex justify-between px-3'>
     <button>  <img className='size-8' src={menu} alt="" /></button>
        <h1 className='text-[2rem] font-bold text-center '>{title}</h1>

       

       <div className='flex gap-1  justify-around'>
       <div className='flex'>
       <Link to={"/cart"}>
         <img className='size-10' src={Logopath} alt="" />
       </Link>
      
       <h1 className=' font-bold text-red-600 rounded-full text-center'>{info.cart.length}</h1>
       </div>
       <Link to={"/Profile"}>
         <img className='size-10' src={profile} alt="" />
       </Link>
       </div>
        

    </header>



    
    </>
  )
}

export default Header