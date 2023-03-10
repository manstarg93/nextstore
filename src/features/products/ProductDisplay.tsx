import {
  CaptionContainer,
  ProductDescriptionAndPrice,
  ProductDisplayContainer,
  ProductImage,
  ProductImageContainer,
  TitleAndPriceContainer,
  TitleCTA,
} from './ProductDisplay.styled';
import { IProductDisplay } from './productDisplayTypes';

import { AiFillStar } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { RatingComponent } from '../ratingComponent/RatingComponent';
const ProductDisplay = ({
  staticTitle,
  id,
  thumbnail,
  title,
  price,
  rating,
  link,
}: IProductDisplay) => {
  const router = useRouter();

  return (
    <ProductDisplayContainer onClick={() => router.push(`${link}`)}>
      <ProductImageContainer>
        {staticTitle && <TitleCTA>{staticTitle}</TitleCTA>}
        <ProductImage
          src={thumbnail}
          width={300}
          height={400}
          priority={router.pathname !== '/' && true}
          alt={title ? title : 'alt placeholder'}
        />
      </ProductImageContainer>
      {title && (
        <CaptionContainer>
          <TitleAndPriceContainer>
            <ProductDescriptionAndPrice>{title}</ProductDescriptionAndPrice>
            <ProductDescriptionAndPrice>${price}</ProductDescriptionAndPrice>

            {rating && <RatingComponent rating={rating} />}
          </TitleAndPriceContainer>
        </CaptionContainer>
      )}
    </ProductDisplayContainer>
  );
};
export default ProductDisplay;
