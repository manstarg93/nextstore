import { device, variables } from '@/styles/globalStyle';
import styled from 'styled-components';

interface ILayoutStyles {
  mediumWidth?: boolean;
}

export const LayoutMain = styled.section<ILayoutStyles>`
  box-sizing: border-box;
  display: grid;
  grid-gap: 2rem;
  padding: 0;
  margin: 0 auto;
  width: 100%;
`;

export const FooterContainer = styled.footer``;

export const PageSectionContainer = styled.section<ILayoutStyles>`
  margin: 0 auto;
  display: grid;

  grid-row-gap: 4rem;
  width: 95%;
  @media screen and (min-width: ${device.laptop}) {
    width: ${(props) => (props.mediumWidth ? '80%' : '95%')};
  }
`;
