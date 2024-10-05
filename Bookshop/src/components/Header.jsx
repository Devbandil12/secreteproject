import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Header = ({menu,title,cart,cartpath,profile,profilePath,anotherbutton,anotherbuttonPath}) => {


const info=useSelector(s=>s.user)


  return (
    <>
    <header className='bg-white opacity-0.5 py-3 px-8 items-center flex justify-between px-3'>
  
        <h1 className='text-[2rem] font-bold text-center '>{title}</h1>
        
       

       <div className='flex gap-1  justify-around'>
       <div className='flex'>
       <Link to={cartpath}>
         <img className='size-10' src={cart} alt="" />
       </Link>
      
       <h1 className=' font-bold text-red-600 rounded-full text-center'>{info.cart.length}</h1>
       </div>
       <Link to={profilePath}>
         <img className='size-10' src={profile} alt="" />
       </Link>
      
       <div className='flex  '>
       <Link to={anotherbuttonPath}>
       <h1 className=' absolute end-8 font-bold  text-red-600 rounded-full text-center'>{info.cart.length}</h1>
        <button className='text-5xl '>{anotherbutton}</button>
       </Link>
      
       </div>
       </div>
        

    </header>



    
    </>
  )
}

export default Header