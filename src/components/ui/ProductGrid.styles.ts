import { device, variables } from '@/styles/globalStyle';
import styled, { keyframes } from 'styled-components';

export const ProjectGridContainer = styled.div`
  display: grid;
  grid-row-gap: 5rem;
  position: relative;
  overflow: hidden;
`;

export const ProductGridTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: lighter;
`;

export const ProjectGridItemContainer = styled.div`
  text-align: center;
  display: grid;
  grid-gap: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  transition: all 0.4s linear;
  overflow: hidden;

  @media screen and (min-width: ${device.tablet}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, max-content));
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