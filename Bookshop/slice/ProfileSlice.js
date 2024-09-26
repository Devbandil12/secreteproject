
 
// store/profileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: 'Your Name',
    pendingOrders: 3,
    successfulOrders: 12,
    profileImage: 'your-profile-image-url.jpg',
    backgroundImage: 'your-background-image-url.jpg',
    isCreatingShop: false,
    shopName: '',
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setPendingOrders(state, action) {
      state.pendingOrders = action.payload;
    },
    setSuccessfulOrders(state, action) {
      state.successfulOrders = action.payload;
    },
    setProfileImage(state, action) {
      state.profileImage = action.payload;
    },
    setBackgroundImage(state, action) {
      state.backgroundImage = action.payload;
    },
    toggleCreateShop(state) {
      state.isCreatingShop = !state.isCreatingShop;
    },
    setShopName(state, action) {
      state.shopName = action.payload;
    },
  },
});

export const {
  setName,
  setPendingOrders,
  setSuccessfulOrders,
  setProfileImage,
  setBackgroundImage,
  toggleCreateShop,
  setShopName,
} = profileSlice.actions;

export default profileSlice.reducer;
