import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, removefromcart } from "../../slice/userSlice";
import { nanoid } from "@reduxjs/toolkit";

const Card = ({ name, price, image, incart }) => {
  const userinfo = useSelector((S) => S.user);
  const dispatch = useDispatch();
  

  return (
    <div>
      <div className="bg-white border-[1px] border-stone-950 shadow-lg rounded-lg overflow-hidden">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-white bold">{price}</p>
          {incart ? (
            <>
              <button
                onClick={() => {
                  let obj = {
                    id: nanoid(),
                    name: name,
                    price: price,
                  };

                  dispatch(addtocart(obj));
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Add to Cart 
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  dispatch(removefromcart());
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                remove from cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
