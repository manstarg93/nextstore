import {
  HeaderButton,
  HeaderContainer,
  HeaderDescription,
  HeaderOverlay,
} from './Header.styles';

import header from '../../assets/img/headerImg.jpg';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderDescription>
        <h1>The Home of Nxt Products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          sint itaque, cumque consequuntur mollitia doloribus vel fugit
          praesentium? In fuga facilis assumenda repellendus veniam officia quo
          dolore doloremque deleniti cumque.
        </p>
      </HeaderDescription>

      <HeaderOverlay
        priority={true}
        src={header}
        alt="header Image"
        width={1500}
        height={500}
      />
    </HeaderContainer>
  );
};
export default Header;
