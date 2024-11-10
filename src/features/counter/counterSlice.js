import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "count",
  initialSlice,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
