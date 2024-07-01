import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, putData } from "../../../utils/api";
import { fetchingErrorHandling } from "../../../utils/helpers";

//* done
export const getAllCharities = createAsyncThunk(
  "admin/getAllCharities",
  async function () {
    try {
      return getData("admin/AllCharities");
    } catch (error) {
      fetchingErrorHandling(error, "getAllCharities");
    }
  }
);

//* will not be used
export const getAllPendingRequestsCharities = createAsyncThunk(
  "admin/getAllPendingRequestsCharities",
  async function () {
    try {
      return getData("admin/AllRequestsCharities");
    } catch (error) {
      fetchingErrorHandling(error, "getAllPendingRequestsCharities");
    }
  }
);

export const getPendingRequestCharityById = createAsyncThunk(
  "admin/getPendingRequestCharityById",
  async function (id) {
    try {
      return getData(`admin/requestCharity/${id}`);
    } catch (error) {
      fetchingErrorHandling(error, "getPendingRequestCharityById");
    }
  }
);

export const getAllRequestsPaymentMethodsForConfirmedCharity = createAsyncThunk(
  "admin/getAllRequestsPaymentMethodsForConfirmedCharity",
  async function () {
    try {
      return getData("admin/confirmedCharities/AllRequestsPaymentMethods");
    } catch (error) {
      fetchingErrorHandling(
        error,
        "getAllRequestsPaymentMethodsForConfirmedCharity"
      );
    }
  }
);

export const getPaymentsRequestsForConfirmedCharityById = createAsyncThunk(
  "admin/getPaymentsRequestsForConfirmedCharityById",
  async function (id) {
    try {
      return getData(`admin/confirmedCharity/requestsPaymentMethods/${id}`);
    } catch (error) {
      fetchingErrorHandling(
        error,
        "getPaymentsRequestsForConfirmedCharityById"
      );
    }
  }
);

export const confirmCharity = createAsyncThunk(
  "admin/confirmCharity",
  async function (id) {
    try {
      return putData(`admin/confirmrequestsCharities/${id}`);
    } catch (error) {
      fetchingErrorHandling(error, "confirmCharity");
    }
  }
);

export const rejectCharity = createAsyncThunk(
  "admin/rejectCharity",
  async function (id) {
    try {
      return putData(`admin/rejectrequestsCharities/${id}`);
    } catch (error) {
      fetchingErrorHandling(error, "rejectCharity");
    }
  }
);

export const confirmPaymentAccountRequestForConfirmedCharities =
  createAsyncThunk(
    "admin/confirmPaymentAccountRequestForConfirmedCharities",
    async function (id) {
      try {
        return putData(
          `admin/confirmedCharity/confirmrequestPaymentMethod/${id}`
        );
      } catch (error) {
        fetchingErrorHandling(
          error,
          "confirmPaymentAccountRequestForConfirmedCharities"
        );
      }
    }
  );

export const rejectPaymentAccountRequestForConfirmedCharities =
  createAsyncThunk(
    "admin/rejectPaymentAccountRequestForConfirmedCharities",
    async function (id) {
      try {
        return putData(
          `admin/confirmedCharity/rejectrequestPaymentMethod/${id}`
        );
      } catch (error) {
        fetchingErrorHandling(
          error,
          "rejectPaymentAccountRequestForConfirmedCharities"
        );
      }
    }
  );

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    charities: [],
    pendingRequestsCharities: [],
    pendingRequestCharity: {},
    requestsPaymentMethods: [],
    paymentsRequestForCharity: {},
    getAllCharitiesStatus: "idle",
    getAllPendingRequestsCharitiesStatus: "idle",
    getPendingRequestCharityByIdStatus: "idle",
    getAllRequestsPaymentMethodsForConfirmedCharityStatus: "idle",
    getPaymentsRequestsForConfirmedCharityByIdStatus: "idle",
    confirmCharityStatus: "idle",
    rejectCharityStatus: "idle",
    confirmPaymentAccountRequestForConfirmedCharitiesStatus: "idle",
    rejectPaymentAccountRequestForConfirmedCharitiesStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducers for getAllCharities action
      .addCase(getAllCharities.pending, (state) => {
        state.getAllCharitiesStatus = "loading";
      })
      .addCase(getAllCharities.fulfilled, (state, action) => {
        state.getAllCharitiesStatus = "finished";
        state.charities = action.payload.charities;
      })
      .addCase(getAllCharities.rejected, (state, action) => {
        state.getAllCharitiesStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for getAllPendingRequestsCharities action
      .addCase(getAllPendingRequestsCharities.pending, (state) => {
        state.getAllPendingRequestsCharitiesStatus = "loading";
      })
      .addCase(getAllPendingRequestsCharities.fulfilled, (state, action) => {
        state.getAllPendingRequestsCharitiesStatus = "finished";
        state.pendingRequestsCharities = action.payload;
      })
      .addCase(getAllPendingRequestsCharities.rejected, (state, action) => {
        state.getAllPendingRequestsCharitiesStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for getPendingRequestCharityById action
      .addCase(getPendingRequestCharityById.pending, (state) => {
        state.getPendingRequestCharityByIdStatus = "loading";
      })
      .addCase(getPendingRequestCharityById.fulfilled, (state, action) => {
        state.getPendingRequestCharityByIdStatus = "finished";
        state.pendingRequestCharity = action.payload.pendingCharity[0];
      })
      .addCase(getPendingRequestCharityById.rejected, (state, action) => {
        state.getPendingRequestCharityByIdStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for getAllRequestsPaymentMethodsForConfirmedCharity action
      .addCase(
        getAllRequestsPaymentMethodsForConfirmedCharity.pending,
        (state) => {
          state.getAllRequestsPaymentMethodsForConfirmedCharityStatus =
            "loading";
        }
      )
      .addCase(
        getAllRequestsPaymentMethodsForConfirmedCharity.fulfilled,
        (state, action) => {
          state.getAllRequestsPaymentMethodsForConfirmedCharityStatus =
            "finished";
          state.requestsPaymentMethods = action.payload;
        }
      )
      .addCase(
        getAllRequestsPaymentMethodsForConfirmedCharity.rejected,
        (state, action) => {
          state.getAllRequestsPaymentMethodsForConfirmedCharityStatus =
            "failed";
          state.error = action.error.message;
        }
      )

      // Reducers for getPaymentsRequestsForConfirmedCharityById action
      .addCase(getPaymentsRequestsForConfirmedCharityById.pending, (state) => {
        state.getPaymentsRequestsForConfirmedCharityByIdStatus = "loading";
      })
      .addCase(
        getPaymentsRequestsForConfirmedCharityById.fulfilled,
        (state, action) => {
          state.getPaymentsRequestsForConfirmedCharityByIdStatus = "finished";
          state.paymentsRequestForCharity = action.payload;
        }
      )
      .addCase(
        getPaymentsRequestsForConfirmedCharityById.rejected,
        (state, action) => {
          state.getPaymentsRequestsForConfirmedCharityByIdStatus = "failed";
          state.error = action.error.message;
        }
      )

      // Reducers for confirmCharity action
      .addCase(confirmCharity.pending, (state) => {
        state.confirmCharityStatus = "loading";
      })
      .addCase(confirmCharity.fulfilled, (state) => {
        state.confirmCharityStatus = "finished";
      })
      .addCase(confirmCharity.rejected, (state, action) => {
        state.confirmCharityStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for rejectCharity action
      .addCase(rejectCharity.pending, (state) => {
        state.rejectCharityStatus = "loading";
      })
      .addCase(rejectCharity.fulfilled, (state) => {
        state.rejectCharityStatus = "finished";
      })
      .addCase(rejectCharity.rejected, (state, action) => {
        state.rejectCharityStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for confirmPaymentAccountRequestForConfirmedCharities action
      .addCase(
        confirmPaymentAccountRequestForConfirmedCharities.pending,
        (state) => {
          state.confirmPaymentAccountRequestForConfirmedCharitiesStatus =
            "loading";
        }
      )
      .addCase(
        confirmPaymentAccountRequestForConfirmedCharities.fulfilled,
        (state) => {
          state.confirmPaymentAccountRequestForConfirmedCharitiesStatus =
            "finished";
        }
      )
      .addCase(
        confirmPaymentAccountRequestForConfirmedCharities.rejected,
        (state, action) => {
          state.confirmPaymentAccountRequestForConfirmedCharitiesStatus =
            "failed";
          state.error = action.error.message;
        }
      )

      // Reducers for rejectPaymentAccountRequestForConfirmedCharities action
      .addCase(
        rejectPaymentAccountRequestForConfirmedCharities.pending,
        (state) => {
          state.rejectPaymentAccountRequestForConfirmedCharitiesStatus =
            "loading";
        }
      )
      .addCase(
        rejectPaymentAccountRequestForConfirmedCharities.fulfilled,
        (state) => {
          state.rejectPaymentAccountRequestForConfirmedCharitiesStatus =
            "finished";
        }
      )
      .addCase(
        rejectPaymentAccountRequestForConfirmedCharities.rejected,
        (state, action) => {
          state.rejectPaymentAccountRequestForConfirmedCharitiesStatus =
            "failed";
          state.error = action.error.message;
        }
      );
  },
});

export default adminSlice.reducer;
