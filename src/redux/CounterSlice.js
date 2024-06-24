import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return {
        ...state,
        value: state.value + 1,
      };
    },
    incrementbyAmount: (state, action) => {
      return {
        ...state,
        value: state.value + action.payload,
      };
    },
  },
});
export default CounterSlice.reducer;
export const { increment, incrementbyAmount } = CounterSlice.actions;
