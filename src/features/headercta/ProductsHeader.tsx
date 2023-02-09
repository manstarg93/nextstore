import { ProductsHeaderContainer } from './ProductsHeader.styles';

interface IProductsHeader {
  title: string;
  description: string;
}
const ProductsHeader = ({ title, description }: IProductsHeader) => {
  return (
    <ProductsHeaderContainer>
      <h1>{title}</h1>
      <p>{description}</p>
    </ProductsHeaderContainer>
  );
};
export default ProductsHeader;
