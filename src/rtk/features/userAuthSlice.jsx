// loginUser
// logoutUser
// verifyEmail
// register
//       "https://thankful-umbrella-yak.cyclic.app/api/users/auth",

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action to log in a user
export const loginUser = createAsyncThunk(
  "userAuth/loginUser",
  async function (loginData) {
    const response = await fetch("https://subul.cyclic.app/api/users/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed");
    }

    //
    for (let entry of response.headers.entries()) {
      console.log("header", entry);
    }
    const responseData = await response.json();
    return responseData;
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

// activateAccount
export const activateAccount = createAsyncThunk(
  "userAuth/activateAccount",
  async function (token) {
    const response = await fetch(
      "https://subul.cyclic.app/api/users/activate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ token }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      throw new Error(errorData.message || "Email verification failed");
    }

    const responseData = await response.json();
    return responseData;
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
