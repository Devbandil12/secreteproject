import {configureStore} from "@reduxjs/toolkit"
import userSlice from "../slice/userSlice"
import ProfileSlice from "../slice/ProfileSlice";

const store=configureStore({
    reducer:{
        user:userSlice,
        profile:ProfileSlice
    }
    
})

export default store;