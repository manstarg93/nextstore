import { boxShadow, device, variables } from '@/styles/globalStyle';
import Link from 'next/link';
import styled from 'styled-components';

interface InavLocation {
  navLocation: {
    left: number;
    right: number;
  };
}
interface IdropdowStyles extends InavLocation {
  show: boolean;
}

export const NavDropDownContainer = styled.div<IdropdowStyles>`
  width: max-content;

  background-color: ${variables.white};
  text-align: start;
  display: ${(props) => (props.show ? 'grid' : 'none')};
  transition: all 0.3s linear;

  left: ${(props) => props.navLocation.left}px;
  right: ${(props) => props.navLocation.right}px;

  @media screen and (min-width: ${device.laptop}) {
    position: fixed;
    top: 4.3rem;
    width: max-content;
    box-shadow: ${boxShadow(variables.gray)};
  }
`;

export const NavDropDownItemsContainer = styled.ul`
  justify-content: center;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const NavDropDownLink = styled(Link)`
  text-transform: capitalize;
  color: ${variables.darkGray};
  padding: 1rem 2rem;
  text-align: start;
`;

export const UpArrowContainer = styled.div<InavLocation>`
  justify-self: center;

  display: none;
  svg {
    fill: ${variables.darkGray};
    text-align: center;
  }

  @media screen and (min-width: ${device.laptop}) {
    display: block;
  }
`;
