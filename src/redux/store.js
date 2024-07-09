import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { loadCart } from "./cart/cartReducer";
// import productReducer from "./productSlice";
import ProductViewReducer from "./productview/ProductViewReducer";
import wishlistReducer, { loadWishlist } from "./wishlist/wishlistReducer";
import authReducer from "./auth/authReducer";

const cart = JSON.parse(localStorage.getItem("cart")) || {
  items: [],
  total: 0,
};

const wishlist = JSON.parse(localStorage.getItem("wishlist")) || {
  items: [],
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: ProductViewReducer,
    wishlist: wishlistReducer,
    user: authReducer,
  },
});

store.dispatch(loadCart(cart));
store.dispatch(loadWishlist(wishlist));

store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
  localStorage.setItem("wishlist", JSON.stringify(store.getState().wishlist));
});
