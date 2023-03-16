import {
  NextPrevContainer,
  ProductContainer,
  ProductGridTitle,
  ProjectGridContainer,
  ProjectGridItemContainer,
} from './ProductGrid.styles';
const CaptionFadeCard = dynamic(
  () => import('../../components/card/CaptionFadeCard')
);
import { GrNext, GrPrevious } from 'react-icons/gr';
import { IProducts } from '../../components/types/productTypes';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { nextPhoneIndex, prevPhoneIndex } from '@/features/store/uiSlice';
import { dropDownFilterType } from '@/components/ui/productFilterTypes';
import ProductFilter from '@/components/ui/ProductFilter';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { productLink } from './productHelperFunction';
import { RatingComponent } from '../ratingComponent/RatingComponent';

interface IprojectGrid {
  title?: string;
  products: IProducts;
  id?: string | undefined;
  gridColumn?: string;
  gridRow?: string;
}

const ProductGrid = ({
  products,
  title,
  id,
  gridColumn,
  gridRow,
}: IprojectGrid) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <ProjectGridContainer gridColumn={gridColumn} gridRow={gridRow} id={id}>
      {title && <ProductGridTitle>{title}</ProductGridTitle>}

      <ProjectGridItemContainer>
        {products.map((product) => {
          return (
            <ProductContainer key={product.id}>
              <CaptionFadeCard
                onClick={() =>
                  router.push(
                    product.link ? product.link : productLink(product.id)
                  )
                }
                {...product}
              />
              {product.rating && <RatingComponent rating={product.rating} />}
            </ProductContainer>
          );
        })}
      </ProjectGridItemContainer>
    </ProjectGridContainer>
  );
};
export default ProductGrid;
