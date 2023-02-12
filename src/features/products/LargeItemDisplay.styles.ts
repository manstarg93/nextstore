import { device } from '@/styles/globalStyle';

import styled from 'styled-components';

interface ILargeItem {
  gridRow?: string;
  gridColumn?: string;
}

export const LargeItemDisplayContainer = styled.div<ILargeItem>`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fit, minmax(400px, max-content));

  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : 'auto')};
  grid-row: ${(props) => (props.gridRow ? props.gridRow : 'auto')};

  justify-content: center;
  transition: all 0.4s linear;

  @media screen and (min-width: ${device.laptop}) {
  }
`;