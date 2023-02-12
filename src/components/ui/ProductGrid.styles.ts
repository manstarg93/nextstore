import { device, variables } from '@/styles/globalStyle';
import styled, { keyframes } from 'styled-components';

interface IProductGrid {
  gridColumn?: string;
  gridRow?: string;
}

export const ProjectGridContainer = styled.div<IProductGrid>`
  grid-row-gap: 5rem;
  position: relative;
  margin: 0 auto;
  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : 'auto')};
  grid-row: ${(props) => (props.gridRow ? props.gridRow : 'auto')};
  width: 100%;
  display: grid;
`;

export const ProductGridTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: lighter;
`;

export const ProjectGridItemContainer = styled.div`
  text-align: center;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  overflow: hidden;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  transition: all 0.4s linear;

  @media screen and (min-width: ${device.laptop}) {
    grid-gap: 1rem;
    justify-content: space-between;
  }
`;

export const NextPrevContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;

  display: flex;
  align-self: center;
  justify-content: space-between;
  padding: 1rem;

  svg {
    width: 3rem;
    height: 3rem;
    background-color: ${variables.white};
    border-radius: 50%;
    padding: 0.5rem;
    cursor: pointer;
    transition: all 0.3s linear;
    &:hover {
      background-color: ${variables.gray};
    }
  }
`;
