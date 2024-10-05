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
        
        <div className=" bg-pink-200">
      
    
  
        <div className="grid mt-3 grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         
              <Card
                name={item.productName}
                price={item.price}
                image={item.image}
                incart={false}
              />
              
            </div>
       
        </div>
     
    
    
    
)}
</>
  
    }
      
    </>
  );
};

export default Cart;
