// store.js
import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./features/user/userAuthSlice";
import cartReducer from "./features/CartSlice";
import userProfileReducer from "./features/user/userProfileSlice";
import charityAuthReducer from "./features/charity/charityAuthSlice";
import charityProfileReducer from "./features/charity/charityProfileSlice";
import charityCaseReducer from "./features/charity/charityCaseSlice";

const Store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    userProfile: userProfileReducer,
    charityAuth: charityAuthReducer,
    charityProfile: charityProfileReducer,
    charityCase: charityCaseReducer,
    casesCart: cartReducer,
  },
});

export default Store;
