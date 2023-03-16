import { device, variables } from '@/styles/globalStyle';
import styled from '@emotion/styled';
interface IProductGrid {
  gridColumn?: string;
  gridRow?: string;
}

export const ProjectGridContainer = styled.div<IProductGrid>`
  grid-row-gap: 3rem;
  position: relative;

  display: grid;
  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : 'auto')};
  grid-row: ${(props) => (props.gridRow ? props.gridRow : 'auto')};
`;

export const ProductGridTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: lighter;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export const ProjectGridItemContainer = styled.div`
  text-align: center;
  display: grid;

  grid-gap: 2rem;

  overflow: hidden;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(15rem, max-content));
  width: 100%;

  transition: all 0.4s linear;

  @media screen and (min-width: ${device.laptop}) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, max-content));
    grid-gap: 1rem;
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
