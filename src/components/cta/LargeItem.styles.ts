import Button from '@/components/button/Button';
import { ButtonContainer } from '@/components/button/Button.styled';
import { device, variables } from '@/styles/globalStyle';
import Image from 'next/image';
import styled from '@emotion/styled';
export const LargeItemContainer = styled.div`
  overflow: hidden;
  cursor: pointer;
  position: relative;
  width: 100%;
  display: grid;

  height: 400px;
  background-color: ${variables.darkGray};
  @media screen and (min-width: ${device.laptop}) {
  }
`;

export const LargeItemImage = styled(Image)`
  object-fit: cover;
  transition: all 0.3s linear;

  position: absolute;
  height: 100%;
  width: 100%;
  filter: brightness(60%);
  will-change: transform;
  &:hover {
    transform: scale(1.03);
  }
`;

export const LargeItemDescriptionAndButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  width: 80%;

  display: grid;
  grid-gap: 1rem;

  padding: 1rem;
  justify-items: center;
`;

export const LargeItemDescription = styled.h4`
  color: ${variables.white};
  text-transform: uppercase;
  font-weight: lighter;
  width: 100%;
  text-align: center;
`;

export const LargeItemButton = styled(Button)`
  color: ${variables.white};
  padding: 1rem;
  background-color: transparent;
  text-transform: uppercase;

  &:hover {
    background-color: ${variables.white};
    color: ${variables.black};
  }
`;
