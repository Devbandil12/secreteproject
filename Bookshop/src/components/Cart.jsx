import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removefromcart } from "../../slice/userSlice";
import Card from "./Card";

const Cart = () => {
  const cartlist = useSelector((s) => s.user);

  const dispatch = useDispatch();
  return (
    <>

   <h1 className='text-[3rem] font-bold text-center '>cart item </h1>
   
    {
     
        <>
        {cartlist.cart.map((item) => 
        
    <div key={item.id}>
    
    <Card  name={item.name} price={item.price} image={item} incart={false}/>
    </div>
    
    
    
)}
</>
  
    }
      
    </>
  );
};

export default Cart;
