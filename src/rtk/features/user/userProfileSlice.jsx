// fetchUserProfile
// updateUserProfile
// changePassword

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, putData } from "../../../utils/api";
import { fetchingErrorHandling } from "../../../utils/helpers";

// Async action to change the user's password
export const changePasswordByUser = createAsyncThunk(
  "userProfile/changePasswordByUser",
  //* takes value password="123"
  async function (password) {
    try {
      return putData("users/changepassword", { password });
    } catch (error) {
      fetchingErrorHandling(error, "changePasswordByUser");
    }
  }
);

// Async action to edit the user profile
export const editUserProfile = createAsyncThunk(
  "userProfile/editUserProfile",
  async function (profileData) {
    try {
      return putData("users/profile/edit", profileData);
    } catch (error) {
      fetchingErrorHandling(error, "editUserProfile");
    }
  }
);

// Async action to get the user profile
export const getUserProfile = createAsyncThunk(
  "userProfile/getUserProfile",
  async function () {
    try {
      return getData("users/profile");
    } catch (error) {
      fetchingErrorHandling(error, "getUserProfile");
    }
  }
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    userProfile: {},
    isEmailVerified: true,
    changePasswordStatus: "idle",
    editProfileStatus: "idle",
    getUserProfileStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducers for changePasswordByUser action
      .addCase(changePasswordByUser.pending, (state) => {
        state.changePasswordStatus = "loading";
      })
      .addCase(changePasswordByUser.fulfilled, (state) => {
        state.changePasswordStatus = "finished";
      })
      .addCase(changePasswordByUser.rejected, (state, action) => {
        state.changePasswordStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for editUserProfile action
      .addCase(editUserProfile.pending, (state) => {
        state.editProfileStatus = "loading";
      })
      .addCase(editUserProfile.fulfilled, (state, action) => {
        state.editProfileStatus = "finished";
        // as the returned object has less data than userProfile
        //todo: make the isEmailVerified like the way in getProfile -> it depends if the isVerified is returned in the small object
        if (action.payload.user.email !== state.userProfile.email)
          state.isEmailVerified = false;
        state.userProfile = {
          ...state.userProfile,
          ...action.payload.user,
        };
      })
      .addCase(editUserProfile.rejected, (state, action) => {
        state.editProfileStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for getUserProfile action
      .addCase(getUserProfile.pending, (state) => {
        state.getUserProfileStatus = "loading";
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        const user = action.payload.user;
        state.getUserProfileStatus = "finished";
        state.userProfile = user;
        state.isEmailVerified = user.emailVerification.isVerified;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.getUserProfileStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default userProfileSlice.reducer;
