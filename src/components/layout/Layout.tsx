import {
  FooterContainer,
  LayoutMain,
  PageSectionContainer,
} from './Layout.styles';
import Navigation from '../nav/Navigation';

interface ILayoutType extends React.ComponentPropsWithoutRef<'main'> {}

const Layout = ({ children }: ILayoutType) => {
  return (
    <LayoutMain>
      <Navigation />

      <PageSectionContainer>{children}</PageSectionContainer>
      <FooterContainer>Footer</FooterContainer>
    </LayoutMain>
  );
};
export default Layout;
