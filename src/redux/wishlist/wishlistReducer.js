import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishlistReducer = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!existingItem) {
        state.items.push({ ...action.payload });
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload.id);
    },
    loadWishlist: (state, action) => {
      return action.payload;
    },
  },
});

export const { addToWishlist, removeFromWishlist, loadWishlist } =
  wishlistReducer.actions;
export default wishlistReducer.reducer;
