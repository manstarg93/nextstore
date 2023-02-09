import {
  LargeItemButton,
  LargeItemContainer,
  LargeItemDescription,
  LargeItemDescriptionAndButton,
  LargeItemImage,
} from './LargeItem.styles';
import { useRouter } from 'next/router';
import Link from 'next/link';
interface ILargeItems {
  description: string;
  image: string;
  id: number;
  link: string;
}

const LargeItem = ({ description, id, image, link }: ILargeItems) => {
  const route = useRouter();
  return (
    <LargeItemContainer>
      <LargeItemImage
        src={image}
        width={350}
        height={450}
        alt={description ? description : 'alt placeholder'}
      />
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
