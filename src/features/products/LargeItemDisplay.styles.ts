import { device } from '@/styles/globalStyle';

import styled from 'styled-components';

interface ILargeItem {
  productImg: string;
}

export const LargeItemDisplayContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(20rem, max-content));
  grid-gap: 0;
  grid-template-rows: 1fr;
  justify-content: center;

  transition: all 0.4s linear;
  overflow: hidden;

  @media screen and (min-width: ${device.laptop}) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, max-content));
  }
`;
