// store.js
import { configureStore } from "@reduxjs/toolkit";
import casesReducer from "./features/CasesSlice";
import userAuthReducer from "./features/userAuthSlice";
import cartReducer from "./features/CartSlice";
import userProfileReducer from "./features/userProfileSlice";

const Store = configureStore({
  reducer: {
    cases: casesReducer,
    userAuth: userAuthReducer,
    userProfile: userProfileReducer,
    casesCart: cartReducer,
  },
});

export default Store;
