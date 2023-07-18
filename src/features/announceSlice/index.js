import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  createFaculty: [],
  createDepartment: [],
  createCategory: [],
  listFaculty: [],
  listNameFaculty: [],
  listDepartment: [],
  listNameDepartment: [],
  listCategory: [],
  listCategoryPagination: [],
  updateFaculty: [],
  updateDepartment: [],
  updateCategory: [],
  deleteFaculty: [],
  deleteDepartment: [],
  deleteCategory: [],
  isLoading: false,
  isFailed: false,
};

// =============================FACULTY===================================
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
//CallApiUpdateFaculty
export const CallApiUpdateFaculty = createAsyncThunk(
  "announce/CallApiUpdateFaculty",
  async function ({ headers, id, facultyName, facultyCode, facultyDesc }) {
    try {
      const apiUpdateFaculty = await axios.put(
        `http://localhost:8080/api/faculty/update/${id}`,
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
      return apiUpdateFaculty.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const CallApiGetListFaculty = createAsyncThunk(
  "announce/CallApiGetListFaculty",
  async function ({ headers }) {
    try {
      const apiListFaculty = await axios.get(
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
      return apiListFaculty.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// ============================DEPARTMENT====================================
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

//CallApiUpdateDepartment
export const CallApiUpdateDepartment = createAsyncThunk(
  "announce/CallApiUpdateDepartment",
  async function ({
    headers,
    id,
    departCenterName,
    departCenterCode,
    departCenterDesc,
  }) {
    try {
      const apiUpdateDepartment = await axios.put(
        `http://localhost:8080/api/depart-center/update/${id}`,
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
      return apiUpdateDepartment.data;
    } catch (error) {
      console.log(error);
    }
  }
);
// ================================================================
//CallApiDeleteDepartment
export const CallApiDeleteDepartment = createAsyncThunk(
  "announce/CallApiDeleteDepartment",
  async function ({ headers, id }) {
    try {
      const apiDeleteDepartment = await axios.delete(
        `http://localhost:8080/api/depart-center/delete/${id}`,
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
      return apiDeleteDepartment.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//CallApiGetListDepartment
export const CallApiGetListDepartment = createAsyncThunk(
  "announce/CallApiGetListDepartment",
  async function ({ headers }) {
    try {
      const apiListDepartment = await axios.get(
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
      return apiListDepartment.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//=====================================================================
// =============================CATEGORY===================================
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
//CallApiUpdateCategory
export const CallApiUpdateCategory = createAsyncThunk(
  "announce/CallApiUpdateCategory",
  async function ({ headers, id, categoryName, categoryCode, categoryDesc }) {
    try {
      const apiUpdateCategory = await axios.put(
        `http://localhost:8080/api/category/update/${id}`,
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
      return apiUpdateCategory.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//CallApiDeleteCategory
export const CallApiDeleteCategory = createAsyncThunk(
  "announce/CallApiDeleteCategory",
  async function ({ headers, id }) {
    try {
      const apiDeleteCategory = await axios.delete(
        `http://localhost:8080/api/category/delete/${id}`,
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
      return apiDeleteCategory.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//================================GET ALL==============================
//CallApiGetAllFaculty
export const CallApiGetAllFaculty = createAsyncThunk(
  "announce/CallApiGetAllFaculty",
  async function ({ headers, pageNumber }) {
    try {
      const apiGetAllFaculty = await axios.get(
        `http://localhost:8080/api/faculty/all?pageNumber=${pageNumber}&pageSize=10`,

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
  async function ({ headers, pageNumber }) {
    try {
      const apiGetAllDepartment = await axios.get(
        `http://localhost:8080/api/depart-center/all?pageNumber=${pageNumber}&pageSize=10`,

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
      })
      .addCase(CallApiUpdateFaculty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CallApiUpdateFaculty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.updateFaculty = action.payload;
      })
      .addCase(CallApiUpdateFaculty.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(CallApiUpdateDepartment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CallApiUpdateDepartment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.updateDepartment = action.payload;
      })
      .addCase(CallApiUpdateDepartment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(CallApiDeleteDepartment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CallApiDeleteDepartment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleteDepartment = action.payload;
      })
      .addCase(CallApiDeleteDepartment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(CallApiUpdateCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CallApiUpdateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.updateCategory = action.payload;
      })
      .addCase(CallApiUpdateCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(CallApiDeleteCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CallApiDeleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleteCategory = action.payload;
      })
      .addCase(CallApiDeleteCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(CallApiGetListFaculty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CallApiGetListFaculty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listNameFaculty = action.payload;
      })
      .addCase(CallApiGetListFaculty.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(CallApiGetListDepartment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CallApiGetListDepartment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listNameDepartment = action.payload;
      })
      .addCase(CallApiGetListDepartment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default announceSlice.reducer;
