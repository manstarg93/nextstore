import { hideDropDown } from '@/features/store/uiSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import {
  NavDropDownContainer,
  NavDropDownItemsContainer,
  NavDropDownLink,
  UpArrowContainer,
} from './NavDropdown.styles';

import { BiUpArrow } from 'react-icons/bi';
import { IDropdownTypes } from './navData';

interface IDropdown {
  title: string;
  dropDownData: IDropdownTypes;
}

const NavDropdown = ({ title, dropDownData }: IDropdown) => {
  const dispatch = useAppDispatch();
  const { isShowDropdown, navLocation } = useAppSelector((state) => state.ui);

  if (dropDownData?.title === title) {
    return (
      <NavDropDownContainer navLocation={navLocation} show={isShowDropdown}>
        <UpArrowContainer navLocation={navLocation}>
          <BiUpArrow />
        </UpArrowContainer>
        <NavDropDownItemsContainer>
          {dropDownData.dropDown.map((item) => {
            return (
              <NavDropDownLink
                onClick={() => dispatch(hideDropDown())}
                key={item.title}
                href={item.link}
              >
                {item.title}
              </NavDropDownLink>
            );
          })}
        </NavDropDownItemsContainer>
      </NavDropDownContainer>
    );
  } else {
    return null;
  }
};
export default NavDropdown;
