import { IProduct, IProducts } from '@/components/types/productTypes';
import axios from 'axios';

export const getSingleProduct = async (id: string | string[] | undefined) => {
  const { data } = await axios
    .get<IProduct>(` https://dummyjson.com/products/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return data;
};

export const getAllProducts = async () => {
  const { data } = await axios
    .get<IProducts>(` https://dummyjson.com/products?limit=0`)
    .then((res) => {
      return res;
    })
    .catch((err) => err);

  return data.products;
};

export const getMensWatches = async () => {
  const { data } = await axios
    .get<IProducts>(' https://dummyjson.com/products/category/mens-watches')
    .then((res) => res)
    .catch((err) => err);

  return data.products;
};

export const getWomensWatches = async () => {
  const { data } = await axios
    .get<IProducts>(' https://dummyjson.com/products/category/womens-watches')
    .then((res) => res)
    .catch((err) => err);

  return data.products;
};

export const getMensShirt = async () => {
  const { data } = await axios
    .get<IProducts>(' https://dummyjson.com/products/category/mens-shirts')
    .then((res) => res)
    .catch((err) => err);

  return data.products;
};

export const getWomensDress = async () => {
  const { data } = await axios
    .get<IProducts>(' https://dummyjson.com/products/category/womens-dresses')
    .then((res) => res)
    .catch((err) => err);

  return data.products;
};

export const getMensShoes = async () => {
  const { data } = await axios
    .get<IProducts>(' https://dummyjson.com/products/category/mens-shoes')
    .then((res) => res)
    .catch((err) => err);

  return data.products;
};

export const getWomensShoes = async () => {
  const { data } = await axios
    .get<IProducts>(' https://dummyjson.com/products/category/womens-shoes')
    .then((res) => res)
    .catch((err) => err);

  return data.products;
};
export const getSkincare = async () => {
  const { data } = await axios
    .get<IProducts>(' https://dummyjson.com/products/category/skincare')
    .then((res) => res)
    .catch((err) => err);

  return data.products;
};
export const getFragrances = async () => {
  const { data } = await axios
    .get<IProducts>(' https://dummyjson.com/products/category/fragrances')
    .then((res) => res)
    .catch((err) => err);

  return data.products;
};
