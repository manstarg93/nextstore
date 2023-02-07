import { IProducts } from '@/components/types/productTypes';

export const extractSingleImage = (product: IProducts, index: number) => {
  return product
    .slice(index, index + 1)
    .map((product) => product.thumbnail)
    .join(' ');
};
