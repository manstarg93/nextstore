import {
  FooterContainer,
  LayoutMain,
  PageSectionContainer,
} from './Layout.styles';
import Navigation from '../nav/Navigation';
import { Suspense } from 'react';
import Loading from '../ui/loading';

interface ILayoutType extends React.ComponentPropsWithoutRef<'main'> {
  mediumWidth?: boolean;
}

const Layout = ({ children, mediumWidth }: ILayoutType) => {
  return (
    <LayoutMain>
      <Navigation />

      <Suspense fallback={<Loading />}>
        <PageSectionContainer mediumWidth={mediumWidth}>
          {children}
        </PageSectionContainer>
      </Suspense>

      <FooterContainer>Footer</FooterContainer>
    </LayoutMain>
  );
};
export default Layout;
