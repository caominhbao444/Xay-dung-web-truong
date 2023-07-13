import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  createFaculty: [],
  createDepartment: [],
  createCategory: [],
  listFaculty: [],
  listDepartment: [],
  listCategory: [],
  updateFaculty: [],
  deleteFaculty: [],
  isLoading: false,
  isFailed: false,
};

// ================================================================
//CallApiCreateFaculty
export const CallApiCreateFaculty = createAsyncThunk(
  "announce/CallApiCreateFaculty",
  async function ({ headers, facultyName, facultyCode, facultyDesc }) {
    try {
      const apiCreateFaculty = await axios.post(
        `http://localhost:8080/api/faculty/create`,
        { facultyName, facultyCode, facultyDesc },
        {
          headers: {
            Authorization: headers.authorization,
            "Content-Type": "application/json",
            "Accept-Language": "vi;",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Expose-Headers": "csrf-token,csrf-session",
          },
        }
      );
      return apiCreateFaculty.data;
    } catch (error) {
      console.log(error);
    }
  }
);
// ================================================================
//CallApiDeleteFaculty
export const CallApiDeleteFaculty = createAsyncThunk(
  "announce/CallApiDeleteFaculty",
  async function ({ headers, id }) {
    try {
      const apiDeleteFaculty = await axios.delete(
        `http://localhost:8080/api/faculty/delete/${id}`,
        {
          headers: {
            Authorization: headers.authorization,
            "Content-Type": "application/json",
            "Accept-Language": "vi;",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Expose-Headers": "csrf-token,csrf-session",
          },
        }
      );
      return apiDeleteFaculty.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// ================================================================
//CallApiCreateDepartment
export const CallApiCreateDepartment = createAsyncThunk(
  "announce/CallApiCreateDepartment",
  async function ({
    headers,
    departCenterName,
    departCenterCode,
    departCenterDesc,
  }) {
    try {
      const apiCreateDepartment = await axios.post(
        `http://localhost:8080/api/depart-center/create`,
        { departCenterName, departCenterCode, departCenterDesc },
        {
          headers: {
            Authorization: headers.authorization,
            "Content-Type": "application/json",
            "Accept-Language": "vi;",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Expose-Headers": "csrf-token,csrf-session",
          },
        }
      );
      return apiCreateDepartment.data;
    } catch (error) {
      console.log(error);
    }
  }
);
// ================================================================
//CallApiCreateCategory
export const CallApiCreateCategory = createAsyncThunk(
  "announce/CallApiCreateCategory",
  async function ({ headers, categoryName, categoryCode, categoryDesc }) {
    try {
      const apiCreateCategory = await axios.post(
        `http://localhost:8080/api/category/create`,
        { categoryName, categoryCode, categoryDesc },
        {
          headers: {
            Authorization: headers.authorization,
            "Content-Type": "application/json",
            "Accept-Language": "vi;",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Expose-Headers": "csrf-token,csrf-session",
          },
        }
      );
      return apiCreateCategory.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//==============================================================
//CallApiGetAllFaculty
export const CallApiGetAllFaculty = createAsyncThunk(
  "announce/CallApiGetAllFaculty",
  async function ({ headers }) {
    try {
      const apiGetAllFaculty = await axios.get(
        `http://localhost:8080/api/faculty/all`,

        {
          headers: {
            Authorization: headers.authorization,
            "Content-Type": "application/json",
            "Accept-Language": "vi;",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Expose-Headers": "csrf-token,csrf-session",
          },
        }
      );
      return apiGetAllFaculty.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//==============================================================
//CallApiGetAllDepartment
export const CallApiGetAllDepartment = createAsyncThunk(
  "announce/CallApiGetAllDepartment",
  async function ({ headers }) {
    try {
      const apiGetAllDepartment = await axios.get(
        `http://localhost:8080/api/depart-center/all`,

        {
          headers: {
            Authorization: headers.authorization,
            "Content-Type": "application/json",
            "Accept-Language": "vi;",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Expose-Headers": "csrf-token,csrf-session",
          },
        }
      );
      return apiGetAllDepartment.data;
    } catch (error) {
      console.log(error);
    }
  }
); //==============================================================
//CallApiGetAllCategory
export const CallApiGetAllCategory = createAsyncThunk(
  "announce/CallApiGetAllCategory",
  async function ({ headers }) {
    try {
      const apiGetAllCategory = await axios.get(
        `http://localhost:8080/api/category/all`,

        {
          headers: {
            Authorization: headers.authorization,
            "Content-Type": "application/json",
            "Accept-Language": "vi;",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Expose-Headers": "csrf-token,csrf-session",
          },
        }
      );
      return apiGetAllCategory.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//CreateSlice
const announceSlice = createSlice({
  name: "announce",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(CallApiCreateFaculty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CallApiCreateFaculty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createFaculty = action.payload;
      })
      .addCase(CallApiCreateFaculty.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(CallApiDeleteFaculty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CallApiDeleteFaculty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleteFaculty = action.payload;
      })
      .addCase(CallApiDeleteFaculty.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(CallApiGetAllFaculty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CallApiGetAllFaculty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listFaculty = action.payload;
      })
      .addCase(CallApiGetAllFaculty.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(CallApiCreateDepartment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CallApiCreateDepartment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createDepartment = action.payload;
      })
      .addCase(CallApiCreateDepartment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(CallApiGetAllDepartment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CallApiGetAllDepartment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listDepartment = action.payload;
      })
      .addCase(CallApiGetAllDepartment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(CallApiCreateCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CallApiCreateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createCategory = action.payload;
      })
      .addCase(CallApiCreateCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(CallApiGetAllCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CallApiGetAllCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listCategory = action.payload;
      })
      .addCase(CallApiGetAllCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default announceSlice.reducer;
