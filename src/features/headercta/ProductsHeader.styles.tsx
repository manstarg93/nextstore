import { device } from '@/styles/globalStyle';
import styled from 'styled-components';

export const ProductsHeaderContainer = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: grid;
  grid-gap: 1.5rem;
  text-align: center;
  @media screen and (min-width: ${device.laptop}) {
    width: 50%;
  }

  h1 {
    text-transform: capitalize;
  }
  p {
  }
`;
