import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchingErrorHandling } from './../../utils/helpers';
import { getData } from "./../../utils/api";

export const getCases = createAsyncThunk(
    "cases/getCases",
    async function () {
        try {
            return getData("charities/allCases");
        } catch (error) {
            fetchingErrorHandling(error, "fetchCases");
        }
    }
)


const CasesSlice = createSlice({
    name: "cases",
    initialState: {
        cases: [],
        getCasesStatus: "idle",
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCases.pending, (state) => {
                state.getCasesStatus = "loading";
            })
            .addCase(getCases.fulfilled, (state, action) => {
                state.getCasesStatus = "finished";
                console.log(action.payload)
                state.cases = action.payload;
            })
            .addCase(getCases.rejected, (state, action) => {
                state.getCasesStatus = "failed";
                state.error = action.error.message;
            });
    },
});


export default CasesSlice.reducer;
