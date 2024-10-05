import {configureStore} from "@reduxjs/toolkit"
import userSlice from "../slice/userSlice"
import ProfileSlice from "../slice/ProfileSlice";
import shopSlice from "../slice/shopSlice";

const store=configureStore({
    reducer:{
        user:userSlice,
        profile:ProfileSlice,
        shope:shopSlice
    }
    
})

export default store;