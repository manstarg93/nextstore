import { hideDropDown } from '@/features/store/uiSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import {
  NavDropDownContainer,
  NavDropDownItemsContainer,
  NavDropDownLink,
  UpArrowContainer,
} from './NavDropdown.styles';

import { BiUpArrow } from 'react-icons/bi';

interface IDropdown {
  title: string;
}

const NavDropdown = ({ title }: IDropdown) => {
  const dispatch = useAppDispatch();
  const { isShowDropdown, dropDownData, navLocation } = useAppSelector(
    (state) => state.ui
  );

  if (dropDownData?.title === title) {
    return (
      <NavDropDownContainer navLocation={navLocation} show={isShowDropdown}>
        <UpArrowContainer navLocation={navLocation}>
          <BiUpArrow />
        </UpArrowContainer>
        <NavDropDownItemsContainer>
          {dropDownData?.dropdownData.map((item) => {
            return (
              <NavDropDownLink
                onClick={() => dispatch(hideDropDown())}
                key={item.title}
                href={item.link}
              >
                {item.title}
              </NavDropDownLink>
            );
          }) ?? null}
        </NavDropDownItemsContainer>
      </NavDropDownContainer>
    );
  } else {
    return null;
  }
};
export default NavDropdown;
