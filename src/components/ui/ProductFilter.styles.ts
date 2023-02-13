import { device, variables } from '@/styles/globalStyle';
import styled from '@emotion/styled';
interface IDropdownFilter {
  isDropDownFilter: boolean;
}

export const ProductFilterContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  z-index: 9;
  background-color: ${variables.white};

  @media screen and (min-width: ${device.laptop}) {
    width: 50%;
  }
`;

export const ProductFilterDropDown = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0.8rem;
  border: solid 0.1rem ${variables.darkGray};

  p {
    text-transform: capitalize;
  }
`;

export const ArrowDownContainer = styled.div`
  justify-self: flex-end;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${variables.darkGray};
  }
`;

export const FilteredDropDown = styled.div<IDropdownFilter>`
  position: absolute;
  border: solid 0.1rem ${variables.darkGray};
  overflow: auto;
  top: 3rem;
  left: 0;
  right: 0;
  display: ${(props) => (props.isDropDownFilter ? 'block' : 'none')};
  background-color: ${variables.darkGray};
`;

export const FilteredDropDownOptions = styled.p`
  padding: 0.6rem 0.8rem;
  color: ${variables.white};
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    background-color: ${variables.gray};
    color: ${variables.darkGray};
  }
`;
