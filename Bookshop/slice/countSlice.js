import { createSlice } from '@reduxjs/toolkit';

const ShopkeeperSlice = createSlice({
  name:"shopkeeper",
  initialState:{
  
    shopName:"",
    productList:[],

    
  },
  reducers:{
    addName:(state,action)=>{
      state.name=action.payload;
    },
    addShopName:(state,action)=>{
      state.shopName=action.payload
    }, 
    addProduct:(state,action)=>{
      state.productList.push(action.payload)
    },
    removeProduct:(state,action)=>{
      state.productList=state.productList.filter((val,index)=>{
                val.id!=action.payload
      
      })
    },
    

  }
})