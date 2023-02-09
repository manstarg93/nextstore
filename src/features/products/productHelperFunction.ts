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
      link: '/womens',
    },
    {
      id: 2,
      staticTitle: 'Shop Mens',
      thumbnail: extractSingleImage(mensShirt, 4),
      link: '/mens',
    },
    {
      id: 3,
      staticTitle: 'Shop Skin care',
      thumbnail: extractSingleImage(skinCare, 2),
      link: '/skincare',
    },
    {
      id: 4,
      staticTitle: 'Shop Fragrances',
      thumbnail: extractSingleImage(fragrances, 2),
      link: '/fragrances',
    },
  ];

  return productPreview;
};

export const largeItemHandler = (
  product1: IProducts,
  product2: IProducts,
  product3: IProducts,
  product4: IProducts
) => {
  const largeItems = [
    {
      id: 1,
      description: 'Comfortable on her legs',
      image: extractSingleImage(product1, 3),
      link: '/womens',
    },
    {
      id: 2,
      description: 'Stylish mens footwear',
      image: extractSingleImage(product2, 0),
      link: '/mens',
    },
    {
      id: 3,
      description: 'Keep skin feeling fresh',
      image: extractSingleImage(product3, 3),
      link: '/fragrances',
    },
    {
      id: 4,
      description: 'tell the time with style',
      image: extractSingleImage(product4, 3),
      link: '/mens',
    },
  ];

  return largeItems;
};
