import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      console.log(!state.some((value) => value.id == action.payload.id));

      if (!state.some((value) => value.id == action.payload.id)) {
        action.payload["quantity"] = 1;
        state.push(action.payload);
      } else {
        state.splice(
          state.findIndex(
            (value, index, array) => value.id == action.payload.id
          ),
          1
        );
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      state.map((value, index, array) => {
        if (index == action.payload) {
          value.quantity += 1;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      state.map((value, index, array) => {
        if (index == action.payload) {
          if (value.quantity > 1) {
            value.quantity -= 1;
          }
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
