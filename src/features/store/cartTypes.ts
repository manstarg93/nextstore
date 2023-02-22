import { type } from 'os';

export type cartType = {
  id: number;
  image: string;
  price: number;
  stock: number;
  itemAmount: number;
  title: string;
  rating: number;
};

export type cartStateType = {
  cart: cartType[];
  totalPrice: number;
  showCart: boolean;
};
