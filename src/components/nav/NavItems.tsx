import {
  hideDropDown,
  hideSideBar,
  showDropDownWithLocation,
  showOnlyDropdown,
} from '@/features/store/uiSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { IDropdownTypes, navDataType } from './navData';

import { AiOutlineClose } from 'react-icons/ai';
import {
  CloseIConContainer,
  DropDownArrowDownMobileContainer,
  DropDownArrowUpMobileContainer,
  NavItem,
  NavItemContainer,
  NavItemLink,
  NavItemLinkContainer,
  NavItemsContainer,
  NavOverlay,
} from './NavItems.styles';
import NavDropdown from './NavDropdown';
import { useEffect, useState } from 'react';
import { useWindowSize } from '@/hooks/windowSizeHook';
import { useResetProductDropdown } from '@/hooks/resetProductDropDown';

interface INavData {
  data: navDataType;
}

const NavItems = ({ data }: INavData) => {
  const dispatch = useAppDispatch();
  const { isShowSideBar, dropdownTitle } = useAppSelector((state) => state.ui);

  const { windowSize } = useWindowSize();
  const { resetProductDropDown } = useResetProductDropdown();
  const showDropdownHandler = (
    dropdownTitle: string,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const boundLocation = e.currentTarget?.getBoundingClientRect();

    const dropDownTitleAndLocation = {
      dropdownTitle,
      location: {
        left: boundLocation.left,
        right: boundLocation.right,
      },
    };

    dispatch(showDropDownWithLocation(dropDownTitleAndLocation));
  };

  return (
    <>
      <NavItemsContainer show={isShowSideBar}>
        <CloseIConContainer>
          <AiOutlineClose onClick={() => dispatch(hideSideBar())} />
        </CloseIConContainer>
        {data?.map((item) => {
          const DropDownArrows =
            item.dropdownData?.title !== dropdownTitle ? (
              <DropDownArrowDownMobileContainer>
                <MdKeyboardArrowDown
                  onClick={() => dispatch(showOnlyDropdown(item.title))}
                />
              </DropDownArrowDownMobileContainer>
            ) : (
              <DropDownArrowUpMobileContainer>
                <MdKeyboardArrowUp onClick={() => dispatch(hideDropDown())} />
              </DropDownArrowUpMobileContainer>
            );
          return (
            <NavItemContainer
              key={item.title}
              onMouseOver={(e) =>
                windowSize >= 1024 && showDropdownHandler(item.title, e)
              }
            >
              <NavItemLinkContainer>
                <NavItem>
                  <NavItemLink
                    href={item.link}
                    onClick={() => resetProductDropDown()}
                  >
                    {item.title}
                  </NavItemLink>
                </NavItem>

                {DropDownArrows}
              </NavItemLinkContainer>

              {dropdownTitle === item.dropdownData?.title && (
                <NavDropdown
                  title={item.title}
                  dropDownData={item.dropdownData}
                />
              )}
            </NavItemContainer>
          );
        })}
      </NavItemsContainer>
      <NavOverlay
        show={isShowSideBar}
        onClick={() => dispatch(hideSideBar())}
      />
    </>
  );
};
export default NavItems;
