import {
  HeaderButton,
  HeaderContainer,
  HeaderDescription,
  HeaderOverlay,
} from './Header.styles';

import headerMin from '../../assets/img/headerImgp.jpg';
import Button from '@/components/button/Button';

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
        <HeaderButton>Shop Now</HeaderButton>
      </HeaderDescription>

      <HeaderOverlay
        width={500}
        height={500}
        priority={true}
        src={headerMin}
        placeholder="blur"
        alt="header image"
      />
    </HeaderContainer>
  );
};
export default Header;
