import { createAsyncThunk, createSlice, serialize } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  createFaculty: [],
  listFaculty: [],
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
      });
  },
});

export default announceSlice.reducer;
