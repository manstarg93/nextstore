export type IProducts = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  description: string;
  rating: number;
  brand: string;
  stock: number;
  thumbnail: string;
  category: string;
  images: string[];
}[];

export type IProduct = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  description: string;
  rating: number;
  brand: string;
  stock: number;
  thumbnail: string;
  category: string;
  images: string[];
};
