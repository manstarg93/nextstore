import { IProducts } from '@/components/types/productTypes';

type directionType = 'next' | 'prev';

export const slideDirection = (
  payload: IProducts,
  productIndex: number,
  direction: directionType
) => {
  if (direction === 'next') {
    productIndex < payload.length - 2 ? productIndex++ : (productIndex = 0);
  } else {
    productIndex > 0 ? productIndex-- : (productIndex = payload.length - 2);
  }

  return productIndex;
};
