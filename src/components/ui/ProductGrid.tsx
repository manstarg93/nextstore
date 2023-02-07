import {
  NextPrevContainer,
  ProductGridTitle,
  ProjectGridContainer,
  ProjectGridItemContainer,
} from './ProductGrid.styles';

import { GrNext, GrPrevious } from 'react-icons/gr';
import { IProducts } from '../types/productTypes';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { nextPhoneIndex, prevPhoneIndex } from '@/features/store/uiSlice';

interface IprojectGrid {
  children: React.ReactNode;
  title?: string;
  products: IProducts;
}

const ProductGrid = ({ children, products, title }: IprojectGrid) => {
  const dispatch = useAppDispatch();

  return (
    <ProjectGridContainer>
      {title && <ProductGridTitle>{title}</ProductGridTitle>}

      <ProjectGridItemContainer>{children}</ProjectGridItemContainer>
    </ProjectGridContainer>
  );
};
export default ProductGrid;
