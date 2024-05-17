import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData } from "../../../utils/api";
import { createFormData, fetchingErrorHandling } from "../../../utils/helpers";

// Async action to register a charity
export const registerCharity = createAsyncThunk(
  "charityAuth/registerCharity",
  async function (charityData) {
    const formData = createFormData(charityData);
    try {
      return postData("charities/register", formData, true);
    } catch (error) {
      fetchingErrorHandling(error, "charity registration");
      throw error;
    }
  }
);

// Async action to authenticate a charity
export const loginCharity = createAsyncThunk(
  "charityAuth/loginCharity",
  async function (loginData) {
    try {
      return postData("charities/auth", loginData);
    } catch (error) {
      fetchingErrorHandling(error, "charity authentication");
      throw error;
    }
  }
);

// Async action to activate a charity account
export const activateCharityAccount = createAsyncThunk(
  "charityAuth/activateCharityAccount",
  async function (token) {
    try {
      return postData("charities/activate", { token });
    } catch (error) {
      fetchingErrorHandling(error, "charity activation");
      throw error;
    }
  }
);

// Async action to reset a charity's password
export const resetCharityPassword = createAsyncThunk(
  "charityAuth/resetCharityPassword",
  async function (email) {
    try {
      return postData("charities/reset", { email });
    } catch (error) {
      fetchingErrorHandling(error, "charity password reset");
      throw error;
    }
  }
);

// Async action to confirm a charity's password reset
export const confirmResetCharityPassword = createAsyncThunk(
  "charityAuth/confirmResetCharityPassword",
  async function (data) {
    try {
      return postData("charities/reset/confirm", data);
    } catch (error) {
      fetchingErrorHandling(error, "confirming charity password reset");
      throw error;
    }
  }
);

// Async action to log out a charity
export const logoutCharity = createAsyncThunk(
  "charityAuth/logoutCharity",
  async function () {
    try {
      await postData("charities/logout");
      return {}; // Empty object as a placeholder
    } catch (error) {
      fetchingErrorHandling(error, "charity logout");
      throw error;
    }
  }
);

const charityAuthSlice = createSlice({
  name: "charityAuth",
  initialState: {
    charity: {},
    registerStatus: "idle",
    loginStatus: "idle",
    activateStatus: "idle",
    resetPasswordStatus: "idle",
    confirmResetPasswordStatus: "idle",
    logoutStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducers for registerCharity action
      .addCase(registerCharity.pending, (state) => {
        state.registerStatus = "loading";
      })
      .addCase(registerCharity.fulfilled, (state, action) => {
        state.registerStatus = "finished";
        state.charity = action.payload;
      })
      .addCase(registerCharity.rejected, (state, action) => {
        state.registerStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for authenticateCharity action
      .addCase(loginCharity.pending, (state) => {
        state.loginStatus = "loading";
      })
      .addCase(loginCharity.fulfilled, (state, action) => {
        state.loginStatus = "finished";
        state.charity = action.payload;
      })
      .addCase(loginCharity.rejected, (state, action) => {
        state.loginStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for activateCharity action
      .addCase(activateCharityAccount.pending, (state) => {
        state.activateStatus = "loading";
      })
      .addCase(activateCharityAccount.fulfilled, (state) => {
        state.activateStatus = "finished";
      })
      .addCase(activateCharityAccount.rejected, (state, action) => {
        state.activateStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for resetCharityPassword action
      .addCase(resetCharityPassword.pending, (state) => {
        state.resetPasswordStatus = "loading";
      })
      .addCase(resetCharityPassword.fulfilled, (state) => {
        state.resetPasswordStatus = "finished";
      })
      .addCase(resetCharityPassword.rejected, (state, action) => {
        state.resetPasswordStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for confirmCharityPasswordReset action
      .addCase(confirmResetCharityPassword.pending, (state) => {
        state.confirmResetPasswordStatus = "loading";
      })
      .addCase(confirmResetCharityPassword.fulfilled, (state) => {
        state.confirmResetPasswordStatus = "finished";
      })
      .addCase(confirmResetCharityPassword.rejected, (state, action) => {
        state.confirmResetPasswordStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for logoutCharity action
      .addCase(logoutCharity.pending, (state) => {
        state.logoutStatus = "loading";
      })
      .addCase(logoutCharity.fulfilled, (state) => {
        state.logoutStatus = "finished";
        state.authenticateStatus = "idle";
        state.charity = {};
      })
      .addCase(logoutCharity.rejected, (state, action) => {
        state.logoutStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default charityAuthSlice.reducer;
