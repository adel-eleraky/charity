// loginUser
// logoutUser
// verifyEmail
// register
//       "https://thankful-umbrella-yak.cyclic.app/api/users/auth",

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "userAuth/loginUser",
  async function (loginData) {
    try {
      const response = await axios.post(
        "https://subul.cyclic.app/api/users/auth",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      console.error(error.response?.data || "Registration failed");
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  }
);

// Async action to register a user
export const registerUser = createAsyncThunk(
  "userAuth/registerUser",
  async function (registerData) {
    const response = await fetch("https://subul.cyclic.app/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed");
    }

    const responseData = await response.json();
    // returned data for fulfilled state
    return responseData;
  }
);

export const activateAccount = createAsyncThunk(
  "userAuth/activateAccount",
  async function (token) {
    try {
      const response = await axios.post(
        "https://subul.cyclic.app/api/users/activate",
        { token },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // This is important to include cookies with the request
        }
      );

      return response.data;
    } catch (error) {
      console.error(error.response?.data || "Email verification failed");
      throw new Error(
        error.response?.data?.message || "Email verification failed"
      );
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
        state.error = action.error;
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
      });
  },
});

export default userAuthSlice.reducer;
