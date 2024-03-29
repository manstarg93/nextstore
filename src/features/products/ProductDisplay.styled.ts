import { boxShadow, device, variables } from '@/styles/globalStyle';
import Image from 'next/image';
import styled from '@emotion/styled';
export const ProductDisplayContainer = styled.div`
  transition: all 0.5s linear;
  display: grid;
  margin: 0 auto;
  cursor: pointer;
`;

export const ProductImageContainer = styled.div`
  position: relative;
  display: grid;

  overflow: hidden;
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

export const ProductImage = styled(Image)`
  object-fit: cover;
  transition: all 0.3s linear;

  filter: brightness(60%);
  will-change: transform;

  &:hover {
    transform: scale(1.03);
  }
`;

export const CaptionContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem 0;

  width: 100%;
`;

export const TitleAndPriceContainer = styled.div`
  display: grid;

  justify-content: space-between;
  width: 100%;
  grid-gap: 1rem;

  align-items: center;
  margin: 0 auto;
`;

export const ProductDescriptionAndPrice = styled.p`
  justify-self: flex-start;
  text-transform: upperCase;
  color: ${variables.black};
  font-weight: lighter;
  @media screen and (min-width: ${device.tablet}) {
  }
`;
