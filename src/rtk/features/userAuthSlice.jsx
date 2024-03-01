// loginUser
// logoutUser
// verifyEmail
// register
// reset passwrod by email
//       "https://thankful-umbrella-yak.cyclic.app/api/users/auth",
// "https://subul.cyclic.app/api/users/auth"
// "https://subul.cyclic.app/api/users"
// "https://subul.cyclic.app/api/users/activate"
// localhost:5000
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData } from "../../utils/api";
import { fetchingErrorHandling } from "../../utils/helpers";

export const loginUser = createAsyncThunk(
  "userAuth/loginUser",
  async function (loginData) {
    try {
      return postData("users/auth", loginData);
    } catch (error) {
      fetchingErrorHandling(error, "login");
    }
  }
);

// Async action to register a user using Axios
export const registerUser = createAsyncThunk(
  "userAuth/registerUser",
  async function (registerData) {
    try {
      // Returned data for the fulfilled state
      return postData("users", registerData);
    } catch (error) {
      fetchingErrorHandling(error, "registration");
    }
  }
);

export const activateAccount = createAsyncThunk(
  "userAuth/activateAccount",
  async function (token) {
    try {
      return postData("users/activate", { token });
    } catch (error) {
      fetchingErrorHandling(error, "activate");
    }
  }
);

// Async action to log out a user
export const logoutUser = createAsyncThunk(
  "userAuth/logoutUser",
  async function () {
    try {
      await postData("users/logout");
      return {}; // Empty object as a placeholder
    } catch (error) {
      fetchingErrorHandling(error, "logout");
    }
  }
);
// Async action to request a password reset email
export const forgotPassword = createAsyncThunk(
  "userAuth/forgotPassword",
  async function (email) {
    try {
      return postData("users/reset", { email });
    } catch (error) {
      fetchingErrorHandling(error, "forgotPassword");
    }
  }
);

export const confirmResetPass = createAsyncThunk(
  "userAuth/confirmResetPass",
  async function (data) {
    try {
      return postData("users/reset/confirm", data);
    } catch (error) {
      fetchingErrorHandling(error, "confirming reset");
    }
  }
);

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    user: {},
    registerStatus: "idle",
    loginStatus: "idle",
    activateStatus: "idle",
    logoutStatus: "idle",
    forgotPasswordStatus: "idle",
    confirmResetPassStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducers for loginUser action
      .addCase(loginUser.pending, (state) => {
        state.loginStatus = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginStatus = "finished";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for registerUser action
      .addCase(registerUser.pending, (state) => {
        state.registerStatus = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerStatus = "finished";
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(activateAccount.pending, (state) => {
        state.activateStatus = "loading";
      })
      .addCase(activateAccount.fulfilled, (state) => {
        state.activateStatus = "finished";
      })
      .addCase(activateAccount.rejected, (state, action) => {
        state.activateStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, (state) => {
        state.logoutStatus = "loading";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.logoutStatus = "finished";
        state.loginStatus = "idle";
        state.user = {};
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.logoutStatus = "failed";
        state.error = action.error.message;
      }) // forgotPassword reducers
      .addCase(forgotPassword.pending, (state) => {
        state.forgotPasswordStatus = "loading";
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.forgotPasswordStatus = "finished";
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.forgotPasswordStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(confirmResetPass.pending, (state) => {
        state.confirmResetPassStatus = "loading";
      })
      .addCase(confirmResetPass.fulfilled, (state) => {
        state.confirmResetPassStatus = "finished";
      })
      .addCase(confirmResetPass.rejected, (state, action) => {
        state.confirmResetPassStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default userAuthSlice.reducer;
