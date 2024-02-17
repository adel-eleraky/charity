// store.js
import { configureStore } from "@reduxjs/toolkit";
import casesReducer from "./features/casesSlice";
import userAuthReucer from "./features/userAuthSlice";
import charityAuthReducer from "./features/charityAuthSlice";
import userProfileReducer from "./features/userProfileSlice";
const store = configureStore({
  reducer: {
    cases: casesReducer,
    userAuth: userAuthReucer,
    userProfile: userProfileReducer,
    charityAuth: charityAuthReducer,
  },
});

export default store;
