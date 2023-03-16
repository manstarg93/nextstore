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
      title: 'Shop Womens',
      thumbnail: extractSingleImage(womensDress, 2),
      description: `Elegant womens products`,
      link: '/womens',
    },
    {
      id: 2,
      title: 'Shop Mens',
      thumbnail: extractSingleImage(mensShirt, 4),
      description: `Top mens products`,
      link: '/mens',
    },
    {
      id: 3,
      title: 'Shop Skin care',
      thumbnail: extractSingleImage(skinCare, 2),
      description: `Reefreshing and smooth skin`,
      link: '/skincare',
    },
    {
      id: 4,
      title: 'Shop Fragrances',
      thumbnail: extractSingleImage(fragrances, 2),
      description: `Delightful aroma `,
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
      title: 'womens shoes',
    },
    {
      id: 2,
      description: 'Stylish mens footwear',
      image: extractSingleImage(product2, 0),
      link: '/mens',
      title: 'mens shoes',
    },
    {
      id: 3,
      description: 'Keep skin feeling fresh',
      image: extractSingleImage(product3, 3),
      link: '/fragrances',
      title: 'fragrances',
    },
    {
      id: 4,
      description: 'tell the time with style',
      image: extractSingleImage(product4, 3),
      link: '/mens',
      title: 'mens watches',
    },
  ];

  return largeItems;
};

export const productItems = (product: IProducts[]) => {};

export const productLink = (productId: number) => {
  return `/products/${productId.toString()}`;
};
