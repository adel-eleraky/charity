import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchingErrorHandling } from './../../utils/helpers';
import { getData } from "./../../utils/api";

export const getCases = createAsyncThunk(
    "cases/getCases",
    async function (endpoint) {
        // let endpoint = 'charities/allCases';
        // endpoint += queryString ? `?${queryString}` : '';
        // console.log(endpoint)
        try {
            return getData(endpoint);
        } catch (error) {
            fetchingErrorHandling(error, "fetchCases");
        }
    }
)

export const getCampaigns = createAsyncThunk(
    "cases/getCampaigns",
    async function () {
        try {
            return getData("charities/allCases?mainType=Campaigns");
        } catch (error) {
            fetchingErrorHandling(error, "fetchCampaigns");
        }
    }
)

const CasesSlice = createSlice({
    name: "cases",
    initialState: {
        cases: [],
        campaigns: [],
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
                // console.log(action.payload)
                state.cases = action.payload.cases;
            })
            .addCase(getCases.rejected, (state, action) => {
                state.getCasesStatus = "failed";
                state.error = action.error.message;
            })

            // get all campaigns
            .addCase(getCampaigns.pending, (state) => {
                state.getCasesStatus = "loading";
            })
            .addCase(getCampaigns.fulfilled, (state, action) => {
                state.getCasesStatus = "finished";
                // console.log(action.payload)
                state.campaigns = action.payload.cases;
            })
            .addCase(getCampaigns.rejected, (state, action) => {
                state.getCasesStatus = "failed";
                state.error = action.error.message;
            });
    },
});


export default CasesSlice.reducer;
