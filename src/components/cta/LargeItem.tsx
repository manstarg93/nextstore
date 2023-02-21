import {
  LargeItemButton,
  LargeItemContainer,
  LargeItemDescription,
  LargeItemDescriptionAndButton,
  LargeItemImage,
} from './LargeItem.styles';
import Link from 'next/link';

import fragrance from '../../assets/img/fragrance3.jpg';
interface ILargeItem {
  link: string;
  description: string;
}

const LargeItem = ({ link, description }: ILargeItem) => {
  return (
    <LargeItemContainer>
      <LargeItemImage src={fragrance} alt={'cta'} />
      <LargeItemDescriptionAndButton>
        <LargeItemDescription>{description}</LargeItemDescription>
        <Link href={`${link}`} scroll={true}>
          <LargeItemButton>Shop Now</LargeItemButton>
        </Link>
      </LargeItemDescriptionAndButton>
    </LargeItemContainer>
  );
};
export default LargeItem;
