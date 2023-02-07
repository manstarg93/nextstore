import { device } from '@/styles/globalStyle';

import styled from 'styled-components';

interface ILargeItem {
  productImg: string;
}

export const LargeItemDisplayContainer = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(20rem, max-content));
  justify-content: center;
  grid-gap: 1.3rem;
  transition: all 0.4s linear;
  overflow: hidden;

  @media screen and (min-width: ${device.tablet}) {
    grid-gap: 0;
    grid-template-columns: repeat(auto-fit, minmax(15rem, max-content));
  }
`;
