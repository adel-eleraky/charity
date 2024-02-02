// casesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action to fetch all cases
export const fetchAllCases = createAsyncThunk(
  "cases/fetchAllCases",
  async () => {
    try {
      const response = await fetch(
        "https://subul.cyclic.app/api/charities/allCases"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("error in fetching all cases");
    }
  }
);

// Async action to fetch a case by ID
export const fetchCaseById = createAsyncThunk(
  "cases/fetchCaseById",
  async (id) => {
    try {
      const response = await fetch(
        `https://subul.cyclic.app/api/charities/cases/${id}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("error in fetching one data");
    }
  }
);

const casesSlice = createSlice({
  name: "cases",
  initialState: {
    test: "",
    allCases: [],
    selectedCase: {},
  },
  reducers: {
    addTest(state, action) {
      state.test = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCases.fulfilled, (state, action) => {
        state.allCases = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchCaseById.fulfilled, (state, action) => {
        state.selectedCase = action.payload;
      });
  },
});

export default casesSlice.reducer;
export const { addTest } = casesSlice.actions;
