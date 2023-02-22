import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cartStateType, cartType } from './cartTypes';

const initialState: cartStateType = {
  cart: [],
  totalPrice: 0,
  showCart: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showCart: (state) => {
      state.showCart = true;
    },
    hideCart: (state) => {
      state.showCart = false;
    },
    addToCart: (state, action: PayloadAction<cartType>) => {
      const { id } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (!item) {
        state.cart = [...state.cart, action.payload];
      }
      if (item) {
        state.cart = state.cart.map((item) => {
          return item.id === id
            ? {
                ...item,
                itemAmount:
                  item.itemAmount < item.stock
                    ? item.itemAmount + 1
                    : item.itemAmount,
              }
            : item;
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<cartType>) => {
      const { id } = action.payload;
      const itemId = state.cart.find((item) => item.id === id);

      if (itemId?.itemAmount === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      }

      state.cart = state.cart.map((item) => {
        return item.id === id
          ? {
              ...item,
              itemAmount: item.itemAmount - 1,
            }
          : item;
      });
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, showCart, hideCart } =
  cartSlice.actions;
