// store.js
import { configureStore } from "@reduxjs/toolkit";
import casesReducer from "./features/CasesSlice";
import userAuthReducer from "./features/userAuthSlice";
import cartReducer from "./features/CartSlice";

const Store = configureStore({
  reducer: {
    cases: casesReducer,
    userAuth: userAuthReducer,
    casesCart: cartReducer,
  },
});

export default Store;
