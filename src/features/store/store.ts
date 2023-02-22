import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import cartReducer from './cartSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
