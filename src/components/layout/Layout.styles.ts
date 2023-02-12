import { device, variables } from '@/styles/globalStyle';
import styled from 'styled-components';

interface ILayoutStyles {
  mediumWidth?: boolean;
}

export const LayoutMain = styled.section<ILayoutStyles>`
  box-sizing: border-box;
`;

export const FooterContainer = styled.footer``;

export const PageSectionContainer = styled.section<ILayoutStyles>`
  margin: 0 auto;

  width: 95%;
  @media screen and (min-width: ${device.laptop}) {
  }
`;
