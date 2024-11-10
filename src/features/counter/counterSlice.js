import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    multiply: (state, action) => {
      state.count = state.count * action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, multiply } =
  counterSlice.actions;

export default counterSlice.reducer;
