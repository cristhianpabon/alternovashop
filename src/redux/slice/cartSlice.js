import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addCartItem } = cartSlice.actions;

export default cartSlice.reducer;
