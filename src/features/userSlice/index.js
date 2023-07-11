import { createAsyncThunk, createSlice, serialize } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userInfor: [],
};

//CallApiUser
export const CallApiUser = createAsyncThunk(
  "user/callApiUser",
  async function ({ headers }) {
    try {
      const apiUserResponse = await axios.get(
        `http://localhost:5001/api/accounts/current`,
        {
          headers: {
            Authorization: headers.authorization,
          },
        }
      );
      return apiUserResponse.data;
    } catch (err) {
      console.log(err);
    }
  }
  // return apiUserResponse;
);

const userSlice = createSlice({
  name: "userinfor",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(CallApiUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CallApiUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfor = action.payload;
      })
      .addCase(CallApiUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export default userSlice.reducer;
