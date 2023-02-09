import uiSlice, { hideDropDown, showSideBar } from '@/features/store/uiSlice';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { BsCart } from 'react-icons/bs';
import { navData } from './navData';

import {
  CartCounter,
  CartIconContainer,
  DropDownContainerLaptop,
  MenuContainer,
  NavAndDropDownContainer,
  NavContainer,
  NavLogo,
} from './Navigation.styles';
import NavItems from './NavItems';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const dispatch = useAppDispatch();
  const [winndowTop, setWindowTop] = useState();

  return (
    <NavAndDropDownContainer onMouseLeave={() => dispatch(hideDropDown())}>
      <NavContainer>
        <MenuContainer>
          <HiOutlineMenuAlt1 onClick={() => dispatch(showSideBar())} />
        </MenuContainer>
        <NavLogo>
          <Link href="/">N$XT STORE</Link>
        </NavLogo>
        <NavItems data={navData} />

        <CartIconContainer>
          <CartCounter>1</CartCounter>
          <BsCart />
        </CartIconContainer>
      </NavContainer>
    </NavAndDropDownContainer>
  );
};
export default Navigation;
