import Button from '@/components/button/Button';
import { ButtonContainer } from '@/components/button/Button.styled';
import { boxShadow, device, variables } from '@/styles/globalStyle';
import styled from '@emotion/styled';
import Image from 'next/image';

export const SelectedProductContainer = styled.div`
  display: grid;
  padding: 0 1rem;
  grid-gap: 1rem;
  justify-content: center;

  @media screen and (min-width: ${device.tablet}) {
    width: 95%;
    justify-content: space-around;
    grid-template-columns: repeat(auto-fit, minmax(20rem, max-content));
  }
`;

export const SelectedProductImagesContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto 1fr;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;
export const SelectedProductImage = styled(Image)`
  object-fit: cover;
`;

export const SelectedProductThumbNailsContainer = styled.div`
  display: grid;
  padding: 1rem 0;
  grid-gap: 1rem;
  justify-content: center;

  width: 100%;
`;

export const SelectedProductThumbNail = styled(Image)`
  object-fit: cover;
  cursor: pointer;
`;

export const TitleAndPrice = styled.div`
  border-bottom: 0.05rem solid ${variables.black};
  padding-bottom: 1rem;
  display: grid;
  grid-gap: 1rem;
  text-align: center;

  @media screen and (min-width: ${device.laptop}) {
    text-align: start;
  }
`;

export const SelectedProductFeatures = styled.div`
  h1 {
    font-weight: bold;
  }
`;

export const PriceContainer = styled.p``;

export const BrandTitle = styled.h1`
  color: ${variables.orangered};
`;

export const FeaturesContainer = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-gap: 1rem;

  p {
  }

  span {
    color: ${variables.green};
  }
`;

export const Selectionbox = styled.div`
  border: 0.1rem solid ${variables.black};
  width: max-content;
  padding: 0.7rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: auto 1fr auto;
  justify-content: center;
  align-items: center;

  svg {
    width: 1.3rem;
    height: 1.3rem;
    cursor: pointer;
  }
`;

export const ItemInStockContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 1rem 0;
  grid-gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  p {
  }
`;

export const AvailableIcon = styled.span`
  width: 1rem;
  height: 1rem;
  background-color: ${variables.green};
  border-radius: 100%;
`;

export const AddToCartButton = styled(ButtonContainer)`
  border: solid 0.1rem ${variables.black};
  width: 100%;
`;
