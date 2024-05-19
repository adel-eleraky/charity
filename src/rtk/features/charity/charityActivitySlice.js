import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData } from "../../../utils/api";
import { createFormData, fetchingErrorHandling } from "../../../utils/helpers";

// Async action to send documents (the only one tested here)
export const sendDocs = createAsyncThunk(
  "charities/sendDocs",
  async function (docsData) {
    try {
      const formData = createFormData(docsData);
      return postData("charities/send-docs", formData, true);
    } catch (error) {
      fetchingErrorHandling(error, "send documents");
    }
  }
);

// Async action to book a used item
export const bookUsedItem = createAsyncThunk(
  "charities/bookUsedItem",
  async function (bookingData) {
    try {
      return postData("charities/book-used-item", bookingData);
    } catch (error) {
      fetchingErrorHandling(error, "book used item");
    }
  }
);

// Async action to cancel booking of a used item
export const cancelBookingOfUsedItem = createAsyncThunk(
  "charities/cancelBookingOfUsedItem",
  async function (bookingId) {
    try {
      return postData("charities/cancel-booking-used-item", { bookingId });
    } catch (error) {
      fetchingErrorHandling(error, "cancel booking of used item");
    }
  }
);

// Async action to confirm booking receipt
export const confirmBookingReceipt = createAsyncThunk(
  "charities/confirmBookingReceipt",
  async function (receiptData) {
    try {
      return postData("charities/confirm-booking-receipt", receiptData);
    } catch (error) {
      fetchingErrorHandling(error, "confirm booking receipt");
    }
  }
);

const charityActionsSlice = createSlice({
  name: "charityActions",
  initialState: {
    sendDocsStatus: "idle",
    bookUsedItemStatus: "idle",
    cancelBookingOfUsedItemStatus: "idle",
    confirmBookingReceiptStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducers for sendDocs action
      .addCase(sendDocs.pending, (state) => {
        state.sendDocsStatus = "loading";
      })
      .addCase(sendDocs.fulfilled, (state) => {
        state.sendDocsStatus = "finished";
      })
      .addCase(sendDocs.rejected, (state, action) => {
        state.sendDocsStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for bookUsedItem action
      .addCase(bookUsedItem.pending, (state) => {
        state.bookUsedItemStatus = "loading";
      })
      .addCase(bookUsedItem.fulfilled, (state) => {
        state.bookUsedItemStatus = "finished";
      })
      .addCase(bookUsedItem.rejected, (state, action) => {
        state.bookUsedItemStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for cancelBookingOfUsedItem action
      .addCase(cancelBookingOfUsedItem.pending, (state) => {
        state.cancelBookingOfUsedItemStatus = "loading";
      })
      .addCase(cancelBookingOfUsedItem.fulfilled, (state) => {
        state.cancelBookingOfUsedItemStatus = "finished";
      })
      .addCase(cancelBookingOfUsedItem.rejected, (state, action) => {
        state.cancelBookingOfUsedItemStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for confirmBookingReceipt action
      .addCase(confirmBookingReceipt.pending, (state) => {
        state.confirmBookingReceiptStatus = "loading";
      })
      .addCase(confirmBookingReceipt.fulfilled, (state) => {
        state.confirmBookingReceiptStatus = "finished";
      })
      .addCase(confirmBookingReceipt.rejected, (state, action) => {
        state.confirmBookingReceiptStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default charityActionsSlice.reducer;
