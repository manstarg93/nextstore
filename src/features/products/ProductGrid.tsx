import {
  NextPrevContainer,
  ProductGridTitle,
  ProjectGridContainer,
  ProjectGridItemContainer,
} from './ProductGrid.styles';

import { GrNext, GrPrevious } from 'react-icons/gr';
import { IProducts } from '../../components/types/productTypes';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { nextPhoneIndex, prevPhoneIndex } from '@/features/store/uiSlice';
import { dropDownFilterType } from '@/components/ui/productFilterTypes';
import ProductFilter from '@/components/ui/ProductFilter';

interface IprojectGrid {
  children: React.ReactNode;
  title?: string;
  products: IProducts;
  id?: string | undefined;
  gridColumn?: string;
  gridRow?: string;
}

const ProductGrid = ({
  children,
  products,
  title,
  id,
  gridColumn,
  gridRow,
}: IprojectGrid) => {
  const dispatch = useAppDispatch();

  return (
    <ProjectGridContainer gridColumn={gridColumn} gridRow={gridRow} id={id}>
      {title && <ProductGridTitle>{title}</ProductGridTitle>}

      <ProjectGridItemContainer>{children}</ProjectGridItemContainer>
    </ProjectGridContainer>
  );
};
export default ProductGrid;
