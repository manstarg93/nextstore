import {
  hideDropDown,
  hideSideBar,
  showDropDown,
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
  DropdownContainerMobile,
  NavItem,
  NavItemContainer,
  NavItemLink,
  NavItemLinkContainer,
  NavItemsContainer,
  NavOverlay,
} from './NavItems.styles';
import NavDropdown from './NavDropdown';

interface INavData {
  data: navDataType;
}

const NavItems = ({ data }: INavData) => {
  const dispatch = useAppDispatch();
  const { isShowSideBar, dropDownData } = useAppSelector((state) => state.ui);
  const showDropdownHandler = (
    navItems: IDropdownTypes,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const boundLocation = e.currentTarget?.getBoundingClientRect();

    const navandLocation = {
      navItems,
      navLocation: {
        left: boundLocation.left,
        right: boundLocation.right,
      },
    };
    dispatch(showDropDown(navandLocation));
  };

  return (
    <>
      <NavItemsContainer show={isShowSideBar}>
        <CloseIConContainer>
          <AiOutlineClose onClick={() => dispatch(hideSideBar())} />
        </CloseIConContainer>
        {data.map((item) => {
          return (
            <NavItemContainer
              key={item.title}
              onMouseOver={(e) => showDropdownHandler(item, e)}
            >
              <NavItemLinkContainer>
                <NavItem>
                  <NavItemLink
                    href={item.link}
                    onClick={() => dispatch(hideDropDown())}
                  >
                    {item.title}
                  </NavItemLink>
                </NavItem>

                {dropDownData?.title.toLowerCase() ===
                item.title.toLowerCase() ? (
                  <DropDownArrowUpMobileContainer>
                    <MdKeyboardArrowUp />
                  </DropDownArrowUpMobileContainer>
                ) : (
                  (
                    <DropDownArrowDownMobileContainer
                      onClick={() => dispatch(showOnlyDropdown(item))}
                    >
                      <MdKeyboardArrowDown />
                    </DropDownArrowDownMobileContainer>
                  ) ?? null
                )}
              </NavItemLinkContainer>

              <NavDropdown title={item.title} />
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
