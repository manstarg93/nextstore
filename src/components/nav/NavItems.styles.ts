import { device, slideAnimation, variables } from '@/styles/globalStyle';
import Link from 'next/link';
import styled from 'styled-components';

interface INavItems {
  show: boolean;
}

export const NavItemsContainer = styled.div<INavItems>`
  position: fixed;
  z-index: 999;
  background-color: ${variables.white};
  top: 0;
  bottom: 0;
  left: 0;
  width: 70%;
  z-index: 99;
  padding: 1rem;
  overflow: hidden;

  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  animation: ${slideAnimation} 0.4s linear;

  @media screen and (min-width: ${device.laptop}) {
    display: flex;
    align-items: center;
    position: initial;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    grid-column: 2/3;
    padding: 0;
    animation: none;
  }
`;

export const NavOverlay = styled.div<INavItems>`
  z-index: 98;
  position: fixed;
  top: 0;
  display: ${(props) => (props.show ? 'block' : 'none')};
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.6;
  background-color: ${variables.black};
  @media screen and (min-width: ${device.laptop}) {
    display: none;
  }
`;

export const CloseIConContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  text-align: end;
  @media screen and (min-width: ${device.laptop}) {
    display: none;
  }
  svg {
    width: 1.8rem;
    height: 1.5rem;
  }
`;

export const NavItemContainer = styled.div`
  z-index: 99;
  background-color: ${variables.white};
`;

export const NavItem = styled.li`
  padding: 1rem 0;

  @media screen and (min-width: ${device.laptop}) {
    padding: 0 1.5rem;
  }
`;

export const NavItemLink = styled(Link)`
  position: relative;
  font-size: 1.3rem;

  text-transform: capitalize;
  color: ${variables.black};

  &:hover {
  }
`;

export const DropdownContainerMobile = styled.div`
  display: block;
  @media screen and (min-width: ${device.laptop}) {
    display: none;
  }
`;

export const NavItemLinkContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: ${device.laptop}) {
    display: block;
  }
`;

export const DropDownArrowDownMobileContainer = styled.div`
  @media screen and (min-width: ${device.laptop}) {
    display: none;
  }
`;

export const DropDownArrowUpMobileContainer = styled.div`
  @media screen and (min-width: ${device.laptop}) {
    display: none;
  }
`;
