import { createSlice } from "@reduxjs/toolkit";
import { current } from "immer";

const initialState = {
  products: {},
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    updateProductStock: (state, action) => {
      const { name, stock } = action.payload;
      state.products.forEach((product) => {
        if (product.name === name) {
          product.stock -= stock;
        }
      });
    },
  },
});

export const { setProducts, updateProductStock } = productsSlice.actions;

export default productsSlice.reducer;
