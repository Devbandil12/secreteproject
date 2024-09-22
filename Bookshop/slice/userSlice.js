import { createSlice } from "@reduxjs/toolkit";



// Connect to the socket.io server





const userSlice=createSlice({
    name:"user",
    initialState:{
        userinfo:[],
      
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

    },
   


})

export const{addUser,addtocart,removefromcart,clearCart} =userSlice.actions;
export default userSlice.reducer;