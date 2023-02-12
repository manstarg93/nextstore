import { device, variables } from '@/styles/globalStyle';
import styled from 'styled-components';

interface ILayoutStyles {
  mediumWidth?: boolean;
}

export const LayoutMain = styled.section<ILayoutStyles>`
  box-sizing: border-box;
  display: grid;
  grid-gap: 2rem;

  margin: 0 auto;
`;

export const FooterContainer = styled.footer``;

export const PageSectionContainer = styled.section<ILayoutStyles>`
  margin: 0 auto;
  display: grid;
  grid-row-gap: 5rem;
  grid-template-rows: 1fr auto;
  width: 95%;
  @media screen and (min-width: ${device.laptop}) {
    width: ${(props) => (props.mediumWidth ? '80%' : '95%')};
  }
`;
