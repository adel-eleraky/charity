/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteData, getData, postData } from "../../utils/api";
import { fetchingErrorHandling } from "../../utils/helpers";

export const AddUsedItem = createAsyncThunk(

    "usedItem/AddUsedItem",
    async function (data) {
        try {
            return postData("usedItem", data);
        } catch (error) {
            fetchingErrorHandling(error, "usedItem");
        }
    }
)

export const getAllUsedItems = createAsyncThunk(

    "usedItem/getAllUsedItems",
    async function () {
        try {
            return getData("usedItem/getAllUsedItems");
        } catch (error) {
            fetchingErrorHandling(error, "usedItem");
        }
    }
)

export const getUsedItem = createAsyncThunk(

    "usedItem/getUsedItem",
    async function (id) {
        try {
            return getData(`usedItem/${id}`);
        } catch (error) {
            fetchingErrorHandling(error, "usedItem");
        }
    }
)
export const deleteUsedItem = createAsyncThunk(

    "usedItem/deleteUsedItem",
    async function (id) {
        try {
            return deleteData(`usedItem/${id}`);
        } catch (error) {
            fetchingErrorHandling(error, "usedItem");
        }
    }
)

const usedItemSlice = createSlice({
    name: "usedItem",
    initialState: {
        usedItems: [],
        usedItem: {},
        AddItemStatus: "idle",
        getItemsStatus: "idle",
        getOneItemStatus: "idle",
        deleteItemStatus: "idle",
        error: null
    },
    reducers: {},

    extraReducers: (builder) => {

        builder
        // Reducers for AddUsedItem action
        .addCase(AddUsedItem.pending, (state, action) => {
            state.AddItemStatus = "loading";
        })
        .addCase(AddUsedItem.fulfilled, (state, action) => {
            state.AddItemStatus = "finished";
        })
        .addCase(AddUsedItem.rejected, (state, action) => {
            state.AddItemStatus = "failed";
            state.error = action.error.message;
        })

        // Reducers for getAllUsedItems action
        .addCase(getAllUsedItems.pending, (state, action) => {
            state.getItemsStatus = "loading";
        })
        .addCase(getAllUsedItems.fulfilled, (state, action) => {
            state.getItemsStatus = "finished";
            state.usedItems = action.payload;
        })
        .addCase(getAllUsedItems.rejected, (state, action) => {
            state.getItemsStatus = "failed";
            state.error = action.error.message;
        })

        // Reducers for deleteUsedItem action
        .addCase(deleteUsedItem.pending, (state, action) => {
            state.deleteItemStatus = "loading";
        })
        .addCase(deleteUsedItem.fulfilled, (state, action) => {
            state.deleteItemStatus = "finished";
        })
        .addCase(deleteUsedItem.rejected, (state, action) => {
            state.deleteItemStatus = "failed";
            state.error = action.error.message;
        })

        // Reducers for get One Used Item action 
        .addCase(getUsedItem.pending, (state, action) => {
            state.getOneItemStatus = "loading";
        })
        .addCase(getUsedItem.fulfilled, (state, action) => {
            state.getOneItemStatus = "finished";
            state.usedItem = action.payload;
        })
        .addCase(getUsedItem.rejected, (state, action) => {
            state.getOneItemStatus = "failed";
            state.error = action.error.message;
        })
    }
});

export default usedItemSlice.reducer