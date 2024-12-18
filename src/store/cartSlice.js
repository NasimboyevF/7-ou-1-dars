import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    changeQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.find((product) => product.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
