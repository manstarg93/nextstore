import {
  HeaderButton,
  HeaderContainer,
  HeaderDescription,
  HeaderOverlay,
} from './Header.styles';

import header from '../../assets/img/headerImg.jpg';

const Header = () => {
  return (
    <HeaderContainer backGroundImage={header}>
      <HeaderDescription>
        <h1>The Home of Nxt Products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          sint itaque, cumque consequuntur mollitia doloribus vel fugit
          praesentium? In fuga facilis assumenda repellendus veniam officia quo
          dolore doloremque deleniti cumque.
        </p>
        <HeaderButton>Shop Now</HeaderButton>
      </HeaderDescription>

      <HeaderOverlay />
    </HeaderContainer>
  );
};
export default Header;
