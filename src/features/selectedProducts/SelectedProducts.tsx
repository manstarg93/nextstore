import Button from '@/components/button/Button';
import { IProduct } from '@/components/types/productTypes';
import { useState } from 'react';

import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { RatingComponent } from '../ratingComponent/RatingComponent';
import { addToCart } from '../store/cartSlice';
import {
  AddToCartButton,
  AvailableIcon,
  BrandTitle,
  FeaturesContainer,
  ImageContainer,
  ItemInStockContainer,
  PriceContainer,
  SelectedProductContainer,
  SelectedProductFeatures,
  SelectedProductImage,
  SelectedProductImagesContainer,
  SelectedProductThumbNail,
  SelectedProductThumbNailsContainer,
  TitleAndPrice,
} from './SelectedProducts.styles';

interface ISelectProducts {
  selectedProduct: IProduct;
}
const SelectedProducts = ({ selectedProduct }: ISelectProducts) => {
  const {
    thumbnail,
    title,
    id,
    images,
    brand,
    price,
    description,
    stock,
    rating,
  } = selectedProduct;

  const [selectedImage, setSelectedImage] = useState<string>(
    images.slice(0, 1).join('')
  );

  const dispatch = useDispatch();

  const selectImageHandler = (image: string) => {
    setSelectedImage(image);
  };
  return (
    <SelectedProductContainer>
      <SelectedProductImagesContainer>
        <SelectedProductThumbNailsContainer>
          {images.slice(0, 4).map((image, index) => {
            return (
              <SelectedProductThumbNail
                width={50}
                height={70}
                onClick={() => selectImageHandler(image)}
                src={image}
                alt="product thumbnails"
                key={index}
              />
            );
          })}
        </SelectedProductThumbNailsContainer>
        <ImageContainer>
          <SelectedProductImage
            width={300}
            height={350}
            priority={true}
            alt={title}
            src={selectedImage}
          />
        </ImageContainer>
      </SelectedProductImagesContainer>

      <SelectedProductFeatures>
        <TitleAndPrice>
          <h1>{title}</h1>

          <PriceContainer>Price: ${price}</PriceContainer>
        </TitleAndPrice>
        <FeaturesContainer>
          <BrandTitle>{brand}</BrandTitle>
          <p>{description}</p>
        </FeaturesContainer>

        <FeaturesContainer>
          {rating && <RatingComponent rating={rating} />}
        </FeaturesContainer>
        <FeaturesContainer>
          <p>
            <span>{stock}*</span> Products available
          </p>
        </FeaturesContainer>
        <ItemInStockContainer>
          <AvailableIcon />
          <p>In stock ready to ship</p>
        </ItemInStockContainer>
        <FeaturesContainer>
          <AddToCartButton
            onClick={() =>
              dispatch(
                addToCart({
                  id,
                  image: thumbnail,
                  price,
                  stock,
                  itemAmount: 1,
                  title,
                  rating,
                })
              )
            }
          >
            ADD TO CART
          </AddToCartButton>
        </FeaturesContainer>
      </SelectedProductFeatures>
    </SelectedProductContainer>
  );
};
export default SelectedProducts;
