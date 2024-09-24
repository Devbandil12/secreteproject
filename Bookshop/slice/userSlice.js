import { createSlice, nanoid } from "@reduxjs/toolkit";



// Connect to the socket.io server





const userSlice=createSlice({
    name:"user",
    initialState:{
        userinfo:[],
        isShopkeeper:false,
        shopID:null,
      
        cart:[]
      
    },
    reducers:{
        addUser:(state,action)=>{
               state.userinfo.push(action.payload)
           
               
                },
        addtocart:(state,action)=>{
          state.cart.push(action.payload)
           

        },
        removefromcart:(state,action)=>{
       
        state.cart.pop()
        

        },
        clearCart:(state)=>{
            state.cart=[]
        },
       createShop:(state)=>{
        state.isShopkeeper=true
        if(state.isShopkeeper){
          state.shopID=nanoid()
        }
       }

    },
   


})

export const{addUser,addtocart,removefromcart,clearCart} =userSlice.actions;
export default userSlice.reducer;