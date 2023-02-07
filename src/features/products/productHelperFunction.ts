import { IProducts } from '@/components/types/productTypes';

export const extractSingleImage = (product: IProducts, index: number) => {
  return product
    .slice(index, index + 1)
    .map((product) => product.thumbnail)
    .join(' ');
};

export const productPreviewHandler = (
  womensDress: IProducts,
  mensShirt: IProducts,
  skinCare: IProducts,
  fragrances: IProducts
) => {
  const productPreview = [
    {
      id: 1,
      staticTitle: 'Shop Womens',
      thumbnail: extractSingleImage(womensDress, 2),
    },
    {
      id: 2,
      staticTitle: 'Shop Mens',
      thumbnail: extractSingleImage(mensShirt, 4),
    },
    {
      id: 3,
      staticTitle: 'Shop Skin care',
      thumbnail: extractSingleImage(skinCare, 2),
    },
    {
      id: 4,
      staticTitle: 'Shop Fragrances',
      thumbnail: extractSingleImage(fragrances, 2),
    },
  ];

  return productPreview;
};

export const largeItemHandler = (
  product1: IProducts,
  product2: IProducts,
  product3: IProducts
) => {
  const largeItems = [
    {
      id: 1,
      description: 'Comfortable on her legs',
      image: extractSingleImage(product1, 3),
    },
    {
      id: 2,
      description: 'Stylish mens footwear',
      image: extractSingleImage(product2, 0),
    },
    {
      id: 3,
      description: 'Keep skin feeling fresh',
      image: extractSingleImage(product3, 3),
    },
  ];

  return largeItems;
};
