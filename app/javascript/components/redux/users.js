import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await fetch("/api/v1/users");
  const data = await response.json();
  return data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
