import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postData } from "../../utils/api";
import { fetchingErrorHandling } from "../../utils/helpers";

export const createTransaction = createAsyncThunk(
    "transaction/getTransaction",
    async function (data) {
        console.log(data)
        try {
            return postData( "payment/addTransaction/paymob/onlinecard" ,data);
        } catch (error) {
            fetchingErrorHandling(error, "fetchCases");
        }
    }
);

const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
        transactionStatus: "idle",
        transactionData: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createTransaction.pending, (state) => {
                state.transactionStatus = "loading";
                state.transactionData = null;
                state.error = null;
            })
            .addCase(createTransaction.fulfilled, (state, action) => {
                state.transactionStatus = "finished";
                console.log(action.payload)
                state.transactionData = action.payload;
                state.error = null;
            })
            .addCase(createTransaction.rejected, (state, action) => {
                state.transactionStatus = "failed";
                state.transactionData = null;
                state.error = action.error.message;
            });
    },
});



export default transactionSlice.reducer;
