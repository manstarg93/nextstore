import { boxShadow, device, variables } from '@/styles/globalStyle';
import styled, { keyframes } from 'styled-components';

const fade = keyframes`
0%{
 opacity: 50%;
}
50%{
 opacity: 80%;
}
100%{
   opacity: 100%;
}
`;

export const ProductDisplayContainer = styled.div`
  transition: all 0.5s linear;
  display: grid;
  position: relative;
  cursor: pointer;
  grid-template-rows: 30rem;
  box-shadow: ${boxShadow(variables.gray)};
`;

export const TitleCTA = styled.h3`
  font-weight: lighter;
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${variables.white};
  text-transform: uppercase;
  z-index: 9;
`;

export const ProductImageContainer = styled.div`
  overflow: hidden;
`;

export const ProductImage = styled.img`
  object-fit: cover;
  transition: all 0.6s linear;
  width: 100%;
  height: 100%;
  filter: brightness(60%);

  &:hover {
    transform: scale(1.03);
  }
`;

export const CaptionContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleAndPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductDescriptionAndPrice = styled.p`
  text-transform: upperCase;
  color: ${variables.black};
  font-weight: lighter;
  @media screen and (min-width: ${device.tablet}) {
  }
`;
