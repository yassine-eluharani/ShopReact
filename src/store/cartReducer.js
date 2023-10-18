import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ product, quantity });
      }
    },
    removeItemFromCart: (state, action) => {
      const productId = action.payload.id;
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== productId,
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    updateCartItemQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;

      const cartItem = state.cartItems.find(
        (item) => item.product.id === productId,
      );
      if (cartItem) {
        cartItem.quantity = newQuantity;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  updateCartItemQuantity,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartItemsCount = (state) => state.cart.cartItems.length;

export default cartSlice.reducer;
