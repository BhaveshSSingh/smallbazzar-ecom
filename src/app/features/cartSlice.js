import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    orders: [],
  },

  reducers: {
    addToCart(state, action) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    addToOrders(state) {
      state.orders = state.cart;
    },
    emptyCart(state) {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart, addToOrders } =
  cartSlice.actions;
export default cartSlice.reducer;
