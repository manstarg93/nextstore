import {
  CaptionContainer,
  ProductDescriptionAndPrice,
  ProductDisplayContainer,
  ProductImage,
  ProductImageContainer,
  RatingContainer,
  TitleAndPriceContainer,
  TitleCTA,
} from './ProductDisplay.styled';
import { IProductDisplay } from './productDisplayTypes';

import { AiFillStar } from 'react-icons/ai';
const ProductDisplay = ({
  staticTitle,
  id,
  thumbnail,
  title,
  price,
  rating,
}: IProductDisplay) => {
  return (
    <ProductDisplayContainer>
      {staticTitle && <TitleCTA>{staticTitle}</TitleCTA>}

      <ProductImageContainer>
        <ProductImage src={thumbnail} alt={staticTitle || title} />
      </ProductImageContainer>
      {title && (
        <CaptionContainer>
          <TitleAndPriceContainer>
            <ProductDescriptionAndPrice>{title}</ProductDescriptionAndPrice>
            <ProductDescriptionAndPrice>${price}</ProductDescriptionAndPrice>
          </TitleAndPriceContainer>
          <RatingContainer>
            {rating &&
              Array<number>(Math.round(rating))
                .fill(0)
                .map((rat, i) => {
                  return <AiFillStar key={i} />;
                })}
          </RatingContainer>
        </CaptionContainer>
      )}
    </ProductDisplayContainer>
  );
};
export default ProductDisplay;
