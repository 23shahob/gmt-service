import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const compareReducer = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!existingItem) {
        state.items.push({ ...action.payload });
      }
    },
    removeFromCompare: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload.id);
    },
    loadCompare: (state, action) => {
      return action.payload;
    },
  },
});

export const { addToCompare, removeFromCompare, loadCompare } =
  compareReducer.actions;
export default compareReducer.reducer;
