import { device } from '@/styles/globalStyle';
import styled from '@emotion/styled';
interface ILayoutStyles {
  mediumWidth?: boolean;
}

export const LayoutMain = styled.section<ILayoutStyles>`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 3rem;
`;

export const PageSectionContainer = styled.section<ILayoutStyles>`
  display: grid;
  grid-row: 2/3;
  min-width: 95%;
  margin: 0 auto;
  grid-gap: 3rem;

  @media screen and (min-width: ${device.tablet}) {
    max-width: 100%;
  }
`;

export const FooterContainer = styled.footer`
  grid-row: 3/4;
`;
