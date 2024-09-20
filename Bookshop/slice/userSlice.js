import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:"user",
    initialState:{
        name:"",
        username:"",
      
        cart:[]
      
    },
    reducers:{
        addname:(state,action)=>{
             state.name=action.payload;

        },
        addusername:(state,action)=>{
            state.username=action.payload
        },
        addtocart:(state,action)=>{
          state.cart.push(action.payload)
           

        },
        removefromcart:(state,action)=>{
       
        state.cart.pop()
        

        },
        clearCart:(state)=>{
            state.cart=[]
        }
    }


})

export const{addname,addusername,addtocart,removefromcart,clearCart} =userSlice.actions;
export default userSlice.reducer;