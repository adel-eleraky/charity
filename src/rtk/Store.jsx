// store.js
import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./features/user/userAuthSlice";
import cartReducer from "./features/CartSlice";
import userProfileReducer from "./features/user/userProfileSlice";
import charityAuthReducer from "./features/charity/charityAuthSlice";
import charityProfileReducer from "./features/charity/charityProfileSlice";
import charityCaseReducer from "./features/charity/charityCaseSlice";
import adminReducer from "./features/user/adminSlice";
import UsedItemSlice from "./features/UsedItemSlice";
import CasesSlice from "./features/CasesSlice";
import chatReducer from "./features/chatSlice";
import transactionReducer from "./features/TransactionSlice";

const Store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    userProfile: userProfileReducer,
    charityAuth: charityAuthReducer,
    charityProfile: charityProfileReducer,
    charityCase: charityCaseReducer,
    casesCart: cartReducer,
    admin: adminReducer,
    usedItems: UsedItemSlice,
    cases: CasesSlice,
    chat: chatReducer,
    transaction: transactionReducer
  },
});

export default Store;
