import { ButtonContainer } from '@/components/button/Button.styled';
import { device, slideAnimationleft, variables } from '@/styles/globalStyle';
import styled from '@emotion/styled';
import Image from 'next/image';

interface ICartStyleType {
  show: boolean;
}

export const CartContainer = styled.div<ICartStyleType>`
  position: fixed;
  padding: 1.5rem;
  width: 80%;
  top: 0;
  right: 0;
  bottom: 0;
  grid-gap: 1rem;
  z-index: 99;
  grid-template-rows: max-content;
  background-color: ${variables.white};
  display: ${(props) => (props.show ? 'grid' : 'none')};
  overflow: scroll;
  align-items: flex-start;

  animation: ${slideAnimationleft} 0.4s linear;

  @media screen and (min-width: ${device.laptop}) {
    width: 50%;
  }
`;

export const CartHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5rem;
  }

  svg {
    width: 1.8rem;
    height: 1.5rem;
    cursor: pointer;
  }
`;

export const CartItemContainer = styled.div``;

export const CartImageAndDescriptionContainer = styled.div`
  display: grid;

  grid-gap: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  margin: 5rem auto;
  overflow: hidden;
  padding: 2rem 0;
  border-bottom: solid 0.1rem ${variables.black};
  @media screen and (min-width: ${device.laptop}) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, max-content));
  }
`;

export const CartImageContainer = styled.div`
  overflow: hidden;
`;

export const CartImage = styled(Image)`
  object-fit: cover;
`;

export const CartDescription = styled.div`
  display: grid;

  grid-gap: 1.8rem;

  overflow: hidden;
  margin: 0 auto;
`;

export const CartTitle = styled.h2`
  color: ${variables.orangered};
`;
export const CartOverlay = styled.div<ICartStyleType>`
  z-index: 98;
  position: fixed;
  top: 0;
  display: ${(props) => (props.show ? 'block' : 'none')};
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.6;
  background-color: ${variables.black};
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CheckoutButton = styled(ButtonContainer)`
  border: solid 0.1rem ${variables.black};
  width: 100%;
  color: ${variables.black};
  margin: 2rem auto;
`;
