import Button from '@/components/button/Button';
import { ButtonContainer } from '@/components/button/Button.styled';
import { device, variables } from '@/styles/globalStyle';
import Image from 'next/image';
import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: grid;
  position: relative;
  height: 500px;
  margin: 0 auto;
  padding: 1rem;
  overflow: hidden;
  grid-row: 1/2;
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
  width: 100%;
  object-fit: cover;
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

export const HeaderButton = styled(Button)`
  background-color: ${variables.white};
`;
