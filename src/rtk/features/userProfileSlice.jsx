// fetchUserProfile
// updateUserProfile
// changePassword

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// I think this action must be in global slice for (charity and user) also api must be changed (no cookie)
export const userResetPassword = createAsyncThunk(
  "userProfile/userResetPassword",
  async function (resetPasswordData) {
    const response = await fetch("https://subul.cyclic.app/api/users/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resetPasswordData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Password Reset Faild");
    }

    //
    for (let entry of response.headers.entries()) {
      console.log("header", entry);
    }
    const responseData = await response.json();
    return responseData;
  }
);

// get user profile data (need cookie)
export const getUserProfile = createAsyncThunk(
  "userAuth/getUserProfile",
  async function () {
    const cookieString = document.cookie;
    const jwtValue = cookieString.split("=")[1];

    console.log("jwt", jwtValue);
    const response = await fetch("https://subul.cyclic.app/api/users/profile", {
      method: "GET",
      // credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch user profile");
    }

    const responseData = await response.json();
    return responseData;
  }
);

// Async action to edit user profile (need cookie) (works only for lastName) takes {name[lastName]: new Name}
export const editUserProfile = createAsyncThunk(
  "userAuth/editUserProfile",
  async function ({ token, updatedProfileData }) {
    const response = await fetch(
      "https://subul.cyclic.app/api/users/profile/edit",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedProfileData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to edit user profile");
    }

    const responseData = await response.json();
    return responseData;
  }
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    userData: {},
    resetPasswordStatus: "idle",
    profileStatus: "idle",
    editProfileStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducers for reset password action
      .addCase(userResetPassword.pending, (state) => {
        state.resetPasswordStatus = "loading";
      })
      .addCase(userResetPassword.fulfilled, (state, action) => {
        state.loginStatus = "finished";
        state.userData = action.payload;
      })
      .addCase(userResetPassword.rejected, (state, action) => {
        state.loginStatus = "failed";
        state.error = action.error;
      })
      // for get user profile data
      .addCase(getUserProfile.pending, (state) => {
        state.profileStatus = "loading";
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.profileStatus = "finished";
        state.userData = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.profileStatus = "failed";
        state.error = action.error.message;
      })
      // for edit user profile
      .addCase(editUserProfile.pending, (state) => {
        state.editProfileStatus = "loading";
      })
      .addCase(editUserProfile.fulfilled, (state, action) => {
        state.editProfileStatus = "finished";
        state.userData = action.payload;
      })
      .addCase(editUserProfile.rejected, (state, action) => {
        state.editProfileStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default userProfileSlice.reducer;
