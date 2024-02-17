import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action to log in a charity
export const loginCharity = createAsyncThunk(
  "charityAuth/loginCharity",
  async function (loginData) {
    const response = await fetch(
      "https://subul.cyclic.app/api/charities/auth",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Charity login failed");
    }

    const responseData = await response.json();
    return responseData;
  }
);

// Async action to register a charity with file upload
export const registerCharity = createAsyncThunk(
  "charityAuth/registerCharity",
  async function (registerData) {
    // Create a new FormData object
    const formData = new FormData();

    Object.keys(registerData).forEach((key) => {
      const value =
        typeof registerData[key] === "object" && key != "image"
          ? JSON.stringify(registerData[key])
          : registerData[key];
      formData.append(key, value);
    });
    // Log all data in the FormData
    for (let entry of formData.entries()) {
      console.log("FormData Entry:", entry);
    }
    const response = await fetch("https://subul.cyclic.app/api/charities", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Charity registration failed");
    }

    const responseData = await response.json();
    return responseData;
  }
);

// activateAccount
export const activateCharityAccount = createAsyncThunk(
  "charityAuth/activateCharityAccount",
  async function (token) {
    const response = await fetch(
      "https://subul.cyclic.app/api/users/activate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // this will be handled after httpOnly is reset @Abdo
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

const charityAuthSlice = createSlice({
  name: "charityAuth",
  initialState: {
    charity: {},
    charityRegisterStatus: "idle",
    charityLoginStatus: "idle",
    charityActivateStatus: "idle",
    charityError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducers for loginCharity action
      .addCase(loginCharity.pending, (state) => {
        state.charityLoginStatus = "loading";
      })
      .addCase(loginCharity.fulfilled, (state, action) => {
        state.charityLoginStatus = "finished";
        state.charity = action.payload;
      })
      .addCase(loginCharity.rejected, (state, action) => {
        state.charityLoginStatus = "failed";
        state.charityError = action.error.message;
      })

      // Reducers for registerCharity action
      .addCase(registerCharity.pending, (state) => {
        state.charityRegisterStatus = "loading";
      })
      .addCase(registerCharity.fulfilled, (state, action) => {
        state.charityRegisterStatus = "finished";
        state.charity = action.payload;
      })
      .addCase(registerCharity.rejected, (state, action) => {
        state.charityRegisterStatus = "failed";
        state.charityError = action.error.message;
      })
      // Reducers for activateCharityAccount action
      .addCase(activateCharityAccount.pending, (state) => {
        state.charityActivateStatus = "loading";
      })
      .addCase(activateCharityAccount.fulfilled, (state, action) => {
        state.charityActivateStatus = "finished";
        state.charity = action.payload;
      })
      .addCase(activateCharityAccount.rejected, (state, action) => {
        state.charityActivateStatus = "failed";
        state.charityError = action.error.message;
      });
  },
});

export default charityAuthSlice.reducer;
