import {
  FooterContainer,
  LayoutMain,
  PageSectionContainer,
} from './Layout.styles';
import Navigation from '../nav/Navigation';
import { Suspense } from 'react';
import Loading from '../ui/loading';
import Cart from '@/features/cart/Cart';
import { useAppSelector } from '@/hooks/reduxHooks';

interface ILayoutType extends React.ComponentPropsWithoutRef<'main'> {
  mediumWidth?: boolean;
}

const Layout = ({ children, mediumWidth }: ILayoutType) => {
  const { showCart, cart } = useAppSelector((state) => state.cart);
  return (
    <LayoutMain>
      <Navigation />
      <Cart show={showCart} cart={cart} />
      <Suspense fallback={<Loading />}>
        <PageSectionContainer mediumWidth={mediumWidth}>
          {children}
        </PageSectionContainer>
      </Suspense>

      {/* <FooterContainer>Footer</FooterContainer> */}
    </LayoutMain>
  );
};
export default Layout;
