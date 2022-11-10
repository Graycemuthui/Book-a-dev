import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
};

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async () => {
    const response = await fetch("/api/v1/bookings");
    const data = await response.json();
    return data;
  }
);

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    addABooking: (state, action) => {
      state.bookings.push(action.payload);
    },
   

  },
  extraReducers: {
    [fetchBookings.fulfilled]: (state, action) => {
      state.bookings = action.payload;
    },
  },
});

export default bookingsSlice.reducer;
export const { addABooking } = bookingsSlice.actions;
