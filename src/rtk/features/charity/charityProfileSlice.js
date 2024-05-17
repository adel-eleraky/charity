import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, putData } from "../../../utils/api";
import { createFormData, fetchingErrorHandling } from "../../../utils/helpers";

// Async action to change password
export const changeCharityPassword = createAsyncThunk(
  "charityProfile/changeCharityPassword",
  async function (password) {
    try {
      return postData("charities/change-password", { password });
    } catch (error) {
      fetchingErrorHandling(error, "change password");
    }
  }
);

// Async action to fetch charity profile
export const getCharityProfile = createAsyncThunk(
  "charityProfile/getCharityProfile",
  async function () {
    try {
      return getData("charities/profile");
    } catch (error) {
      fetchingErrorHandling(error, "fetch profile");
    }
  }
);

// Async action to edit charity profile (@Test after upload docs)
export const editCharityProfile = createAsyncThunk(
  "charityProfile/editCharityProfile",
  async function (profileData) {
    try {
      return putData("charities/edit-profile", profileData);
    } catch (error) {
      fetchingErrorHandling(error, "edit profile");
    }
  }
);

// Async action to edit charity profile imag  (not tested but will work)
export const editCharityProfileImg = createAsyncThunk(
  "charityProfile/editCharityProfileImg",
  async function (image) {
    const formData = createFormData({ image });
    try {
      return putData("charities/edit-profileImg", formData, true);
    } catch (error) {
      fetchingErrorHandling(error, "edit profile image");
    }
  }
);

const charityProfileSlice = createSlice({
  name: "charityProfile",
  initialState: {
    changeCharityPwdStatus: "idle",
    getCharityProfileStatus: "idle",
    editCharityProfileStatus: "idle",
    editCharityImgStatus: "idle",
    profile: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducers for changePassword action
      .addCase(changeCharityPassword.pending, (state) => {
        state.changeCharityPwdStatus = "loading";
      })
      .addCase(changeCharityPassword.fulfilled, (state) => {
        state.changeCharityPwdStatus = "finished";
      })
      .addCase(changeCharityPassword.rejected, (state, action) => {
        state.changeCharityPwdStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for fetchProfile action
      .addCase(getCharityProfile.pending, (state) => {
        state.getCharityProfileStatus = "loading";
      })
      .addCase(getCharityProfile.fulfilled, (state, action) => {
        state.getCharityProfileStatus = "finished";
        state.profile = action.payload;
      })
      .addCase(getCharityProfile.rejected, (state, action) => {
        state.getCharityProfileStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for editProfile action
      .addCase(editCharityProfile.pending, (state) => {
        state.editCharityProfileStatus = "loading";
      })
      .addCase(editCharityProfile.fulfilled, (state) => {
        state.editCharityProfileStatus = "finished";
      })
      .addCase(editCharityProfile.rejected, (state, action) => {
        state.editCharityProfileStatus = "failed";
        state.error = action.error.message;
      })

      // Reducers for editProfileImg action
      .addCase(editCharityProfileImg.pending, (state) => {
        state.editCharityImgStatus = "loading";
      })
      .addCase(editCharityProfileImg.fulfilled, (state) => {
        state.editCharityImgStatus = "finished";
      })
      .addCase(editCharityProfileImg.rejected, (state, action) => {
        state.editCharityImgStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default charityProfileSlice.reducer;
