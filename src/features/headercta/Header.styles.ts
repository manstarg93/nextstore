import Button from '@/components/button/Button';
import { ButtonContainer } from '@/components/button/Button.styled';
import { device, variables } from '@/styles/globalStyle';
import Image, { StaticImageData } from 'next/image';
import styled from '@emotion/styled';
interface IHeaderStyles {
  backGroundImage: StaticImageData;
}

export const HeaderContainer = styled.div<IHeaderStyles>`
  width: 100%;
  display: grid;
  position: relative;
  overflow: hidden;
  height: 500px;
  padding: 1rem;
  background-image: ${(props) => `url(${props.backGroundImage.src})`};
  grid-row: 1/2;
  align-items: center;
  background-color: ${variables.darkGray};
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeaderOverlay = styled.div`
  position: absolute;
  filter: brightness(50%);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${variables.darkGray};
  opacity: 0.5;
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

export const HeaderButton = styled(Button)`
  background-color: ${variables.white};
`;
