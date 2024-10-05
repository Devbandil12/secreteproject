import { createSlice } from "@reduxjs/toolkit";


const shopSlice=createSlice({
    name:"shopSlice",
    initialState:{
        shopId:null,
        shopName:"",
        products:[],
        pendingRequest:[],
        order:[]
    },
    reducers:{
        changeShopName:(state,action)=>{
                state.shopName=action.payload
        },
        changeShopId:(state,action)=>{
            state.shopId=action.payload
    },
    addProducts:(state,action)=>{
        state.products.push(action.payload)
},
    pendingRequest:(state,action)=>{
    state.pendingRequest.push(action.payload)
},
order:(state,action)=>{
    state.order.push(action.payload)
}
    }
})

export const{changeShopId,changeShopName,addProducts,pendingRequest,order}=shopSlice.actions

export default shopSlice.reducer;