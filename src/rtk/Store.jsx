// store.js
import { configureStore } from "@reduxjs/toolkit";
import casesReducer from "./features/casesSlice";
import userAuthReucer from "./features/userAuthSlice";
const store = configureStore({
  reducer: {
    cases: casesReducer,
    userAuth: userAuthReucer,
  },
});

export default store;
