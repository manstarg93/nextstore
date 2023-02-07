import Button from '@/components/button/Button';
import { ButtonContainer } from '@/components/button/Button.styled';
import { device, variables } from '@/styles/globalStyle';
import Image from 'next/image';
import styled from 'styled-components';

interface IHeaderStyles {}

export const HeaderContainer = styled.div<IHeaderStyles>`
  width: 100%;
  display: grid;
  position: relative;
  overflow: hidden;
  height: 70vh;
  padding: 1rem;

  align-items: center;
  background-color: ${variables.darkGray};
`;

export const HeaderOverlay = styled(Image)`
  position: absolute;
  filter: brightness(50%);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const HeaderDescription = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 1rem;
  align-content: center;
  padding: 1rem;
  color: ${variables.white};
  z-index: 90;
  p {
    line-height: 1.5;
  }
  h1 {
  }
  @media screen and (min-width: ${device.laptop}) {
    max-width: 50%;
  }
`;

export const HeaderImageContainer = styled.div`
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const HeaderButton = styled(ButtonContainer)`
  background-color: ${variables.white};
`;
