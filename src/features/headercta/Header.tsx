import {
  HeaderButton,
  HeaderContainer,
  HeaderDescription,
  HeaderOverlay,
} from './Header.styles';

import header from '../../assets/img/headerImg.jpg';
import headerMin from '../../assets/img/headerImgp.jpg';
import Button from '@/components/button/Button';
import { useWindowSize } from '@/hooks/windowSizeHook';

const Header = () => {
  const { windowSize } = useWindowSize();
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
        fill
        priority={true}
        src={windowSize >= 1024 ? header : headerMin}
        placeholder="blur"
        alt="headerimage"
      />
    </HeaderContainer>
  );
};
export default Header;
