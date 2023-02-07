import { device, variables } from '@/styles/globalStyle';
import styled from 'styled-components';

export const PageSummaryContainer = styled.article`
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: 0 auto;
  color: ${variables.darkGray};

  @media screen and (min-width: ${device.tablet}) {
    width: 70%;
  }

  p {
    font-weight: lighter;
  }
`;
export const PageSummaryTitle = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
`;
