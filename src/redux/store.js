import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { loadCart } from "./cart/cartReducer";
import ProductViewReducer from "./productview/ProductViewReducer";
import wishlistReducer, { loadWishlist } from "./wishlist/wishlistReducer";
import authReducer from "./auth/authReducer";
import CompareReducer, { loadCompare } from "./compare/CompareReducer";

const cart = JSON.parse(localStorage.getItem("cart")) || {
  items: [],
  total: 0,
};

const wishlist = JSON.parse(localStorage.getItem("wishlist")) || {
  items: [],
};

const compare = JSON.parse(localStorage.getItem("compare")) || {
  items: [],
};
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: ProductViewReducer,
    wishlist: wishlistReducer,
    user: authReducer,
    compare: CompareReducer,
  },
});

store.dispatch(loadCart(cart));
store.dispatch(loadWishlist(wishlist));
store.dispatch(loadCompare(compare));

store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
  localStorage.setItem("wishlist", JSON.stringify(store.getState().wishlist));
  localStorage.setItem("compare", JSON.stringify(store.getState().compare));
});
