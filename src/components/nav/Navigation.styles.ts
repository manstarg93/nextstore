import { boxShadow, device, variables } from '@/styles/globalStyle';
import Link from 'next/link';
import styled from '@emotion/styled';
interface InavLocation {
  navLocation: {
    left: number;
    right: number;
  };
}

export const NavAndDropDownContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: sticky;
  top: 0;
  padding: 2rem;
  left: 0;
  right: 0;
  height: 5rem;
  grid-row: 1/2;
  z-index: 97;
  background-color: ${variables.white};
  border-bottom: solid 0.05rem ${variables.darkGray};
  align-items: center;
`;

export const MenuContainer = styled.menu`
  display: block;
  grid-column: 1/2;

  @media screen and (min-width: ${device.laptop}) {
    display: none;
  }

  svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

export const DropDownContainerLaptop = styled.div`
  display: none;
  @media screen and (min-width: ${device.laptop}) {
    display: block;
  }
`;

export const NavContainer = styled.nav`
  margin: 0 auto;

  background-color: ${variables.white};
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: ${device.laptop}) {
  }
`;

export const NavLogo = styled.h1`
  grid-column: 2/3;
  justify-self: center;

  @media screen and (min-width: ${device.laptop}) {
    grid-column: 1/2;
  }
`;

export const CartIconContainer = styled.div`
  position: relative;
  grid-column: 3/4;
  justify-self: flex-end;
  align-self: center;
  svg {
    width: 1.8rem;
    height: 1.5rem;
  }
`;

export const CartCounter = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.3rem;
  background-color: ${variables.white};
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  color: ${variables.black};
  text-align: center;
  z-index: 9;
  box-shadow: ${boxShadow(variables.black)};
`;
