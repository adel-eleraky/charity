import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, deleteData, putData } from "../../../utils/api";
import { createFormData, fetchingErrorHandling } from "../../../utils/helpers";

// Fetch case by ID
export const getCaseById = createAsyncThunk(
  "charityCase/getCaseById",
  async function (id) {
    try {
      return getData(`charities/cases/${id}`);
    } catch (error) {
      fetchingErrorHandling(error, "fetchCaseById");
    }
  }
);

// Fetch all cases (ok)
export const getAllCases = createAsyncThunk(
  "charityCase/getAllCases",
  async function () {
    try {
      return getData("charities/allCases");
    } catch (error) {
      fetchingErrorHandling(error, "fetchAllCases");
    }
  }
);

// Add a new case (ok)
export const addCase = createAsyncThunk(
  "charityCase/addCase",
  async function (caseData) {
    try {
      const formData = createFormData(caseData);
      return postData("charities/addCase", formData, true);
    } catch (error) {
      fetchingErrorHandling(error, "addCase");
    }
  }
);

// Add a new blood case (not tested waht is the benefit)
export const addBloodCase = createAsyncThunk(
  "charityCase/addBloodCase",
  async function (caseData) {
    try {
      return postData("charities/addBloodCase", caseData);
    } catch (error) {
      fetchingErrorHandling(error, "addBloodCase");
    }
  }
);

// Edit a case
export const editCase = createAsyncThunk(
  "charityCase/editCase",
  async function ({ id, caseData }) {
    try {
      return putData(`charities/cases/${id}`, caseData);
    } catch (error) {
      fetchingErrorHandling(error, "editCase");
    }
  }
);

// Update case cover image
export const updateCaseCoverImg = createAsyncThunk(
  "charityCase/updateCaseCoverImg",
  async function ({ id, image }) {
    try {
      const imageData = createFormData({ image });
      return putData(`charities/caseCoverImg/${id}`, imageData, true);
    } catch (error) {
      fetchingErrorHandling(error, "updateCaseCoverImg");
    }
  }
);

// Delete a case
export const deleteCase = createAsyncThunk(
  "charityCase/deleteCase",
  async function (id) {
    try {
      return deleteData(`charities/cases/${id}`);
    } catch (error) {
      fetchingErrorHandling(error, "deleteCase");
    }
  }
);

const charityCaseSlice = createSlice({
  name: "charityCase",
  initialState: {
    cases: [],
    currentCase: null,
    getCaseByIdStatus: "idle",
    getAllCasesStatus: "idle",
    addCaseStatus: "idle",
    addBloodCaseStatus: "idle",
    editCaseStatus: "idle",
    updateCaseCoverImgStatus: "idle",
    deleteCaseStatus: "idle",
    deleteCaseId: null,
    error: null,
  },
  reducers: {
    resetGetCaseByIdStatus(state) {
      state.getCaseByIdStatus = "idle";
    },
    finishGetCaseByIdStatus(state) {
      state.getCaseByIdStatus = "finished";
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch case by ID
      .addCase(getCaseById.pending, (state) => {
        state.getCaseByIdStatus = "loading";
      })
      .addCase(getCaseById.fulfilled, (state, action) => {
        state.getCaseByIdStatus = "finished";
        state.currentCase = action.payload.case;
      })
      .addCase(getCaseById.rejected, (state, action) => {
        state.getCaseByIdStatus = "failed";
        state.error = action.error.message;
      })

      // Fetch all cases
      .addCase(getAllCases.pending, (state) => {
        state.getAllCasesStatus = "loading";
      })
      .addCase(getAllCases.fulfilled, (state, action) => {
        state.getAllCasesStatus = "finished";
        state.cases = action.payload.cases;
      })
      .addCase(getAllCases.rejected, (state, action) => {
        state.getAllCasesStatus = "failed";
        state.error = action.error.message;
      })

      // Add a new case
      .addCase(addCase.pending, (state) => {
        state.addCaseStatus = "loading";
      })
      .addCase(addCase.fulfilled, (state, action) => {
        state.addCaseStatus = "finished";
        state.cases.push(action.payload.case); // it is really the response wow  (so you don't need to refetch the cases to show them in the table)
      })
      .addCase(addCase.rejected, (state, action) => {
        state.addCaseStatus = "failed";
        state.error = action.error.message;
      })

      // Add a new blood case
      .addCase(addBloodCase.pending, (state) => {
        state.addBloodCaseStatus = "loading";
      })
      .addCase(addBloodCase.fulfilled, (state, action) => {
        state.addBloodCaseStatus = "finished";
        state.cases.push(action.payload);
      })
      .addCase(addBloodCase.rejected, (state, action) => {
        state.addBloodCaseStatus = "failed";
        state.error = action.error.message;
      })

      // Edit a case
      .addCase(editCase.pending, (state) => {
        state.editCaseStatus = "loading";
      })
      .addCase(editCase.fulfilled, (state, action) => {
        state.editCaseStatus = "finished";
        const index = state.cases.findIndex(
          (c) => c._id === action.payload.case._id
        );
        if (index !== -1) {
          state.cases[index] = action.payload.case;
        }
      })
      .addCase(editCase.rejected, (state, action) => {
        state.editCaseStatus = "failed";
        state.error = action.error.message;
      })

      // Update case cover image
      .addCase(updateCaseCoverImg.pending, (state) => {
        state.updateCaseCoverImgStatus = "loading";
      })
      .addCase(updateCaseCoverImg.fulfilled, (state, action) => {
        state.updateCaseCoverImgStatus = "finished";
        const index = state.cases.findIndex(
          (c) => c._id === action.payload.case._id
        );
        console.log(index);
        if (index !== -1) {
          state.cases[index].coverImage = action.payload.case.coverImage;
        }
      })
      .addCase(updateCaseCoverImg.rejected, (state, action) => {
        state.updateCaseCoverImgStatus = "failed";
        state.error = action.error.message;
      })

      // Delete a case
      .addCase(deleteCase.pending, (state, action) => {
        state.deleteCaseId = action.meta.arg;
        state.deleteCaseStatus = "loading";
      })
      .addCase(deleteCase.fulfilled, (state, action) => {
        state.deleteCaseStatus = "finished";
        state.cases = state.cases.filter(
          (c) => c._id !== action.payload.case._id
        );
      })
      .addCase(deleteCase.rejected, (state, action) => {
        state.deleteCaseStatus = "failed";
        state.error = action.error.message;
      });
  },
});
export const { resetGetCaseByIdStatus, finishGetCaseByIdStatus } =
  charityCaseSlice.actions;
export default charityCaseSlice.reducer;
