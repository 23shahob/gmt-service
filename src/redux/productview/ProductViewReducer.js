import { createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../../assets/data/data";

const initialState = {
  product: null,
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      const productId = Number(action.payload);
      const product = ProductsData.find((item) => item.id === productId);
      if (product) {
        state.product = product;
        state.status = "succeeded";
      } else {
        state.status = "failed";
        state.error = "Product not found";
      }
    },
  },
});

export const { getProduct } = productSlice.actions;
export default productSlice.reducer;
