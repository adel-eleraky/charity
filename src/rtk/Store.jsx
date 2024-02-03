// store.js
import { configureStore } from "@reduxjs/toolkit";
import casesReducer from "./features/CasesSlice";
import userAuthReucer from "./features/userAuthSlice";
const Store = configureStore({
  reducer: {
    cases: casesReducer,
    userAuth: userAuthReucer,
  },
});

export default Store;
